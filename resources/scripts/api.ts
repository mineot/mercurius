type HttpStatus = 200 | 201 | 401 | 409 | 422 | 500;

export interface GetParam {
  url: string;
}

export interface Response<T> {
  status: HttpStatus;
  origin: string;
  message: string;
  error?: string;
  data?: T;
}

export async function Get<T>(params: GetParam): Promise<Response<T>> {
  const response = await fetch(params.url);
  const data = await response.json();
  return {
    status: response.status as HttpStatus,
    origin: data.origin,
    message: data.message,
    error: data.error,
    data: data.data,
  };
}
