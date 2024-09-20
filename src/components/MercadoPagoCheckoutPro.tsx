import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import { useEffect, useState } from 'react';

interface Props {
  mercado_pago_credentials: {
    public_key: string,
  },
  product_data: {
    price: number,
    name: string,
    quantity: number | null,
    discount: number | null,
  }
}

function MercadoPagoCheckoutPro(props: Props) {
  const {
    mercado_pago_credentials,
    product_data
  } = props
  
  const [preferenceId, setPreferenceId] = useState(null);

  useEffect(() => {
    if (mercado_pago_credentials.public_key) {
      initMercadoPago(mercado_pago_credentials.public_key);
      createPreference().finally(() => console.log('Preference created'))
    }
  }, [mercado_pago_credentials.public_key]);

  const createPreference = async () => {
    try {
      const response = await fetch('/api/create-preference', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product_data),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setPreferenceId(data.id);
    } catch (error) {
      console.error('Error creating preference:', error);
    }
  };

  return (
    <>
      {preferenceId && (
        <Wallet initialization={{ preferenceId: preferenceId, redirectMode: "modal" }} customization={{ texts: { action: "pay" } }} />
      )}
    </>
  )
}

export default MercadoPagoCheckoutPro