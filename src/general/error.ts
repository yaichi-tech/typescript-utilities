export class NotFoundError extends Error {
  /**
   *
   * @param keys idと値のペアのオブジェクト
   * @param options エラーのオプション
   */
  constructor(
    keys: Record<string, string | number | boolean>,
    options?: ErrorOptions,
  ) {
    const keyValueStr = Object.entries(keys)
      .map(([k, v]) => `${k}: ${v}`)
      .join(", ");
    const message = `Not found: ${keyValueStr}`;
    super(message, options);
    this.name = "NotFoundError";
  }
}

export class DBError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
    this.name = "DBError";
  }
}

export class ValidationError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
    this.name = "ValidationError";
  }
}

export class UnauthorizedError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
    this.name = "UnauthorizedError";
  }
}

export class ForbiddenError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
    this.name = "ForbiddenError";
  }
}

export class ConflictError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
    this.name = "ConflictError";
  }
}

export class PasswordIncorrectError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
    this.name = "PasswordIncorrectError";
  }
}

export class UnknownError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
    this.name = "UnknownError";
  }
}

export class BcryptError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
    this.name = "BcryptError";
  }
}

export class ApiClientError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
    this.name = "ApiClientError";
  }
}

export class InternalServerError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
    this.name = "InternalServerError";
  }
}
