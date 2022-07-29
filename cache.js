
const mongoose = require('mongoose');
const redis = require('redis');
const redisUrl = 'redis://127.0.0.1:6379';
const client = redis.createClient(redisUrl);
client.on('error', (err) => console.log('Redis Client Error', err));
client.connect();
const exec = mongoose.Query.prototype.exec;
const execAggregate = mongoose.Aggregate.prototype.exec;

mongoose.Query.prototype.cache = function(options = {}) {
  this.useCache = true;
  this.hashKey = JSON.stringify(options.key || '');
  return this;
}

mongoose.Aggregate.prototype.cache = function(options = {}) {
  this.useCache = true;
  this.hashKey = JSON.stringify(options.key || '');
  return this;
}

mongoose.Query.prototype.exec = async function () {
  
  if (!this.useCache) {
    return exec.apply(this, arguments);
  }
  
  const key = JSON.stringify(Object.assign({}, this.getQuery(), {
    collection: this.mongooseCollection.name,
  }));
  const cacheValue = await client.HGET(this.hashKey, key);
  if(cacheValue) {
    const doc = JSON.parse(cacheValue);
    return Array.isArray(doc)
      ? doc.map(d => new this.model(d))
      :new this.model(doc);
  }
  const result = await exec.apply(this, arguments);
  client.set(key, JSON.stringify(result));
  return result;
}

mongoose.Aggregate.prototype.exec = async function () {
  
  if (!this.useCache) {
    return execAggregate.apply(this, arguments);
  }
  
  const key = JSON.stringify(Object.assign({}, this.pipeline(), {
    collection: this.model(),
  }));
  console.log('MI HAS', this.hashKey, key);
  const cacheValue = await client.HGET(this.hashKey.toString(), key);
  if(cacheValue) {
    console.log('mi valor ca', cacheValue);
    const doc = JSON.parse(cacheValue);
    const resultDoc = Array.isArray(doc)
    ? doc.map(d => {
      const data = new this.model(d);
      return data['_model'];
    })
    :new this.model(doc);
    return resultDoc;
  }
  const result = await execAggregate.apply(this, arguments);
  client.HSET(this.hashKey.toString(), key, JSON.stringify(result), 'EX', 100000);
  return result;
}

module.exports = {
  clearHash(hashKey) {
    client.DEL(JSON.stringify(hashKey));
  }
}