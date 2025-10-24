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
  console.error('API Error:', error);

  if (error.response) {
    // Error from API
    const data = error.response.data;
    console.error('Response data:', data);

    // Handle different response formats
    if (typeof data === 'string') {
      return data;
    }

    if (data?.message) {
      return typeof data.message === 'string' ? data.message : JSON.stringify(data.message);
    }

    if (data?.error) {
      return typeof data.error === 'string' ? data.error : JSON.stringify(data.error);
    }

    if (data?.errors && Array.isArray(data.errors)) {
      return data.errors.join(', ');
    }

    return 'Error en el servidor';
  } else if (error.request) {
    // Request made but no response
    return 'No se pudo conectar con el servidor';
  } else {
    // Other errors
    return error.message || 'Error desconocido';
  }
};
