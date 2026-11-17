export function GET(request: Request) {
  const host = process.env.NEXT_PUBLIC_HOST || new URL(request.url).origin;
  const sitemap = new URL('/sitemap.xml', host);
  const robots = [
    'User-agent: *',
    'Disallow: /api/',
    'Disallow: /secret-share/receive/',
    'Disallow: /en/secret-share/receive/',
    'Disallow: /pl/secret-share/receive/',
    `Sitemap: ${sitemap.href}`
  ];

  return new Response(robots.join('\n') + '\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  });
}
