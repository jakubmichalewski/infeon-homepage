const baseUrl = process.env.NEXT_PUBLIC_HOST;

export const buildSitemapIndex = (
  data: string[]
) => `<?xml version="1.0" encoding="UTF-8"?>
	<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
		${data
      .map((url) => {
        return `
					<sitemap>
					  <loc>${baseUrl}${url}</loc>
					  <lastmod>${new Date().toISOString()}</lastmod>
					</sitemap>
				  `;
      })
      .join('')}
	</sitemapindex>
`;
