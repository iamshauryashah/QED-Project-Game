import html from './index.html';

// Wrangler bundles the game HTML as a text module; no separate build is needed.
export default {
  async fetch(request) {
    if (!['GET', 'HEAD'].includes(request.method)) {
      return new Response('Method not allowed', {
        status: 405,
        headers: { Allow: 'GET, HEAD' },
      });
    }

    const { pathname } = new URL(request.url);
    if (pathname !== '/' && pathname !== '/index.html') {
      return new Response('Not found', { status: 404 });
    }

    return new Response(request.method === 'HEAD' ? null : html, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-cache',
        'X-Content-Type-Options': 'nosniff',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
      },
    });
  },
};
