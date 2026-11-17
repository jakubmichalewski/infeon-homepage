export type FetchRequest = <T = void>(
  path: string,
  init: {
    method: HTTPMethod;
    headers?: Record<string, string>;
  },
  args?: HTTPBody
) => Promise<T>;

export const fetcher: FetchRequest = (path, init, args) => {
  const getUrl = (data: any): URL => {
    const url = new URL(`${process.env.NEXT_PUBLIC_API}/v1/${path}`);

    if ((data && init.method === 'GET') || init.method === 'DELETE') {
      Object.keys(data).map((key) =>
        url.searchParams.append(key, data[key].toString())
      );
    }

    return url;
  };

  return fetch(getUrl(args), {
    method: init.method,
    headers: {
      'content-type': 'application/json',
      ...init.headers
    },
    body:
      init.method == 'POST' || init.method == 'PUT'
        ? JSON.stringify(args)
        : undefined
  }).then(async (response) => {
    if (!response.ok) {
      throw new Error(`[${response.status}] ${response.statusText}`);
    } else if (response.status == 200) {
      return response.json();
    }
  });
};

export type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export type HTTPBody = any | FormData | URLSearchParams;
