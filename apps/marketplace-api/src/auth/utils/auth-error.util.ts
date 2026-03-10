const MONGO_DUPLICATE_KEY_ERROR_CODE = 11000;

interface MongoErrorLike {
  code?: unknown;
  keyPattern?: Record<string, unknown>;
  keyValue?: Record<string, unknown>;
}

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function isMongoErrorLike(error: unknown): error is MongoErrorLike {
  return isObject(error);
}

export function isMongoDuplicateKeyError(error: unknown): boolean {
  return isMongoErrorLike(error) && error.code === MONGO_DUPLICATE_KEY_ERROR_CODE;
}

export function isEmailDuplicateKeyError(error: unknown): boolean {
  if (!isMongoErrorLike(error) || error.code !== MONGO_DUPLICATE_KEY_ERROR_CODE) {
    return false;
  }

  const keyPatternHasEmail = isObject(error.keyPattern) && 'email' in error.keyPattern;
  const keyValueHasEmail = isObject(error.keyValue) && 'email' in error.keyValue;

  return keyPatternHasEmail || keyValueHasEmail;
}
