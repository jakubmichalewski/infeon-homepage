import { localeHeader } from '@/i18n/config';

export async function POST(request: Request) {
  const body = await request.json();
  const polish = request.headers.get(localeHeader) === 'pl';
  const message = polish
    ? 'Nie udało się wysłać formularza'
    : 'Failed to submit the form';

  const url = `https://api.endpoint-tech.co.uk/validate`;

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Accept-Language': polish ? 'pl' : 'en'
      },
      body: JSON.stringify(body)
    });

    if (res.status >= 300) {
      return new Response(
        JSON.stringify({ error: polish ? message : res.statusText }),
        {
          status: res.status,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    return new Response('Ok', {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Form error:', error);
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
