const ErrorFactory = require('../errors/error.factory.js');

const isTrue = (predicate, error, message) => {
  if (predicate) {
    throw ErrorFactory[error](message).toJSON();
  }
  return (value) => value;
};

const isNull = (value, error, message) => {
  if (value === null || typeof value === 'undefined') {
    throw ErrorFactory[error](message).toJSON();
  }
  return value;
};

const isString = (string) => {
  if (typeof string !== 'string') {
    throw ErrorFactory.castError('The value isn\'t a string.');
  }
  return string;
};

const isArray = (arr) => {
  if (!Array.isArray(arr)) {
    throw ErrorFactory.castError('The value isn\'t an array.');
  }
  return arr;
};

const isInteger = (number) => {
  if (!Number.isInteger(number)) {
    throw ErrorFactory.castError('The value isn\'t an integer number.');
  }
};

const isObject = (obj) => {
  if (obj instanceof Object) {
    return obj;
  }

  throw ErrorFactory.castError('The value isn\'t an object.');
};
const isEmpty = (obj) => {
  for (const key in obj) {
    if (Object.hasOwn(obj, key)) {
      return true;
    }
  }
  return false;
};

module.exports = {
  isTrue,
  isNull,
  isString,
  isArray,
  isInteger,
  isObject,
  isEmpty,
};
