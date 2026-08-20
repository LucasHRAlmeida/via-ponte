# Cloudflare — apontamento do Worker

O domínio `iniciativa-via.com` já aponta para GitHub Pages.

1. Instale o Wrangler e autentique (`wrangler login`).
2. Na pasta `workers/`: `wrangler deploy`.
3. No dashboard, associe a rota `iniciativa-via.com/v/*` ao Worker `via-ponte`.
4. Teste: `https://iniciativa-via.com/v/mbrp-8/s1` deve 302 para o módulo com UTM e `#s1`.

Não coloque o hub inteiro no Worker. Pages continua servindo o estático; o Worker só resolve o contrato.
