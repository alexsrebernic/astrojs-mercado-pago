import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  server: {
    headers: {
      "Content-Security-Policy": `
        default-src 'self' ;
        script-src 'self' 'unsafe-inline' https://sdk.mercadopago.com https://http2.mlstatic.com https://www.mercadopago.com https://storage.googleapis.com http://localhost:4321;
        style-src 'self' 'unsafe-inline' ;
        img-src 'self' data: https: ;
        connect-src 'self' https://http2.mlstatic.com/ui/webfonts/v3.0.0/proxima-nova/proximanova-semibold.woff2 https://http2.mlstatic.com/frontend-assets/op-cho-bricks/img/issuers/mercadopago.svg https://http2.mlstatic.com/frontend-assets/op-cho-bricks/build/2.0.3/config/MLA.json https://http2.mlstatic.com/frontend-assets/op-cho-bricks/build/2.0.3/i18n/es/wallet/index.json https://www.mercadolibre.com/jms/lgz/background/etid https://api.mercadolibre.com/tracks https://api.mercadopago.com https://pagos.mercadopago.com  https://events.mercadopago.com/v2/traffic-light https://events.mercadopago.com/v2/metric;
        frame-src 'self' https://www.mercadopago.com https://www.mercadolibre.com/ https://mercadopago.com.ar/ ;
        font-src 'self' data:  https://http2.mlstatic.com/ui/webfonts/v3.0.0/proxima-nova/proximanova-semibold.woff2;
      `.replace(/\s{2,}/g, ' ').trim()
    }
  },

  output: "hybrid",
  adapter: cloudflare(),
  integrations: [react()],
});