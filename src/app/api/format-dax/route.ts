import { localeHeader } from '@/i18n/config';

export async function POST(request: Request) {
  const code = process.env.AZURE_FUNCTION_KEY;

  const body = await request.json();
  const polish = request.headers.get(localeHeader) === 'pl';

  const url = `https://endpointtechapi.azurewebsites.net/api/DaxFormat?code=${code}`;

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    if (res.status != 200) {
      return new Response(
        JSON.stringify({
          error: polish ? 'Nie udało się sformatować kodu DAX' : res.statusText
        }),
        {
          status: res.status,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    const data = await res.json();

    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Fetch error:', error);
    return new Response(
      JSON.stringify({
        error: polish ? 'Nie udało się pobrać danych' : 'Failed to fetch data'
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}
