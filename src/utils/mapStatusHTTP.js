const httpErrorMap = {
  SUCCESSFUL: 200,
  CREATED: 201,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNAUTHORIZED: 401,
  INVALID_VALUE: 422,
  DELETE: 204,
  BAD_REQUEST: 400,
  OK: 200,
};
  
const mapStatusHTTP = (status) => httpErrorMap[status] || 500;
  
module.exports = mapStatusHTTP;