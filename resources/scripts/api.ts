export interface GetParam {
  url: string;
}

export async function Get<T>(params: GetParam): Promise<T> {
  const response = await fetch(params.url);
  const data = await response.json();
  return data as T;
}
