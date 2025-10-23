export class CustomError extends Error {
  constructor(
    public statusCode: number,
    message: string
  ) {
    super(message);
    this.name = 'CustomError';
  }

  static badRequest(message: string): CustomError {
    return new CustomError(400, message);
  }

  static unauthorized(message: string): CustomError {
    return new CustomError(401, message);
  }

  static forbidden(message: string): CustomError {
    return new CustomError(403, message);
  }

  static notFound(message: string): CustomError {
    return new CustomError(404, message);
  }

  static internalServer(message: string = 'Internal server error'): CustomError {
    return new CustomError(500, message);
  }
}

export const handleApiError = (error: any): string => {
  if (error.response) {
    // Error from API
    return error.response.data?.message || error.response.data?.error || 'Error en el servidor';
  } else if (error.request) {
    // Request made but no response
    return 'No se pudo conectar con el servidor';
  } else {
    // Other errors
    return error.message || 'Error desconocido';
  }
};
