export const buildSitemap = (
  data: string[],
  baseUrl: string
) => `<?xml version="1.0" encoding="UTF-8"?>
	<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
		${data
      .map((url) => {
        return `
					<url>
					  <loc>${new URL(url, baseUrl).href}</loc>
					  <lastmod>${new Date().toISOString()}</lastmod>
					  <changefreq>monthly</changefreq>
					  <priority>1.0</priority>
					</url>
				  `;
      })
      .join('')}
	</urlset>
`;
