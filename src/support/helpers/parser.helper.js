/**
 * Returns a cleaned version of the mongoose
 * documents and with the properly response format.
 * You can pass a custom field for the data key.
 * @param {Number} httpStatus The http status of response
 * @param {Object} responseData Response payload
 * @returns {Object} Response
 */

/**
 * Returns a cleaned version of the mongoose
 * documents and with the properly response format.
 * You can pass a custom field for the data key.
 * @param {Number} httpStatus The http status of response
 * @param {Object} responseData Response payload
 * @return {Object} Response
 */
function responseOf(httpStatus, responseData) {
  return { status: httpStatus, data: { data: responseData } };
}

module.exports = { responseOf };

