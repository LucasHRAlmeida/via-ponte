/**
 * VIA Ponte — Cloudflare Worker
 * Resolve /v/{slug}/{episode} a partir de via-bridge.json.
 * O hub permanece no GitHub Pages. O Worker só resolve atalhos e o contrato.
 *
 * Deploy previsto:
 *   wrangler deploy
 * Rota no domínio:
 *   iniciativa-via.com/v/*
 *   iniciativa-via.com/via-bridge.json  (opcional, se o Pages não servir)
 */

const BRIDGE_URL = "https://iniciativa-via.com/via-hub/ponte/via-bridge.json";
const FALLBACK = "https://iniciativa-via.com/via-hub/ponte/";

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/via-bridge.json") {
      return fetch(BRIDGE_URL, { cf: { cacheTtl: 120 } });
    }

    const match = url.pathname.match(/^\/v\/([^/]+)\/([^/]+)\/?$/);
    if (!match) {
      return fetch(request);
    }

    const slug = match[1];
    const episodeId = match[2];

    try {
      const res = await fetch(BRIDGE_URL, { cf: { cacheTtl: 120 } });
      const bridge = await res.json();
      const series = (bridge.series || []).find((s) => s.slug === slug);
      const episode = series?.episodes?.find((e) => e.id === episodeId);
      const target = episode?.moduleUrl || FALLBACK;
      return Response.redirect(target, 302);
    } catch {
      return Response.redirect(FALLBACK, 302);
    }
  },
};
