// Edge entry point: canonical-host + HTTPS redirects, then serve the static site.
// Only the live domain is redirected — *.workers.dev previews and localhost are left alone.
const CANONICAL_HOST = 'www.thefastdesigns.co.uk';
const REDIRECT_HOSTS = new Set(['thefastdesigns.co.uk', 'www.thefastdesigns.co.uk']);

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (REDIRECT_HOSTS.has(url.hostname) && (url.hostname !== CANONICAL_HOST || url.protocol === 'http:')) {
      url.hostname = CANONICAL_HOST;
      url.protocol = 'https:';
      url.port = '';
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
