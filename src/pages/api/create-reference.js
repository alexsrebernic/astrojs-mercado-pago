export const prerender = false;
import { MercadoPagoConfig, Preference } from 'mercadopago';

export async function POST({ request }) {
  
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204 });
  }

  const { name, price, quantity } = await request.json();
  const client = new MercadoPagoConfig({ accessToken: import.meta.env.MP_ACCESS_TOKEN });

  try {
    const preference = await new Preference(client).create({
      body: {
        items: [
          {
            title: name,
            unit_price: Number(price),
            quantity: Number(quantity),
            currency_id: 'ARS',
          }
        ],
        back_urls: {
          success: `${import.meta.env.SITE}/success`,
          failure: `${import.meta.env.SITE}/failure`,
          pending: `${import.meta.env.SITE}/pending`
        },
        auto_return: 'approved',
      },
    });

    return new Response(JSON.stringify({ id: preference.id }), {
      status: 200,
    });
  } catch (error) {
    console.error('Error creating preference:', error);

    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}