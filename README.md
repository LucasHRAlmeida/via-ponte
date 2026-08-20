# via-ponte

Ponte bidirecional YouTube ↔ módulos da Iniciativa VIA.

- Contrato: `via-bridge.json`
- Canonical publicado: <https://iniciativa-via.com/via-hub/ponte/>
- Worker: `workers/via-bridge.js` (Cloudflare, rota `iniciativa-via.com/v/*`)
- Séries-piloto: MBRP-8 e Economia & Saúde

O hub permanece estático no GitHub Pages. O Worker só resolve atalhos. O ID do YouTube é campo, não chave.

Ver `CLOUDFLARE.md` para o apontamento do Worker no domínio.
