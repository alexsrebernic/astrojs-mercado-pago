# Mercado Pago Checkout Pro with Astro.js

This project demonstrates how to implement Mercado Pago Checkout Pro in an Astro.js application.

## Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Mercado Pago account and API credentials

## Setup

1. Clone this repository:
   ```
   git clone https://github.com/yourusername/astro-mercadopago-checkout-pro.git
   cd astro-mercadopago-checkout-pro
   ```

2. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn
   ```

3. Copy the `.env.example` file to `.env` and fill in your Mercado Pago credentials:
   ```
   cp .env.example .env
   ```
   Then edit the `.env` file with your actual credentials.

4. Start the development server:
   ```
   npm run dev
   ```
   or
   ```
   yarn dev
   ```

5. Open your browser and navigate to `http://localhost:4321` to see the example in action.

## Project Structure

- `src/pages/api/create-preference.js`: Server-side API endpoint for creating Mercado Pago preferences
- `src/components/MercadoPagoCheckoutPro.jsx`: React component for Mercado Pago Checkout
- `src/pages/index.astro`: Main page demonstrating the use of the MercadoPagoCheckoutPro component
- `src/pages/success.astro`, `failure.astro`, `pending.astro`: Pages for handling payment results

## Usage

To use the Mercado Pago Checkout Pro in your Astro.js project:

1. Copy the `MercadoPagoCheckoutPro.jsx` component to your project.
2. Set up the server-side API endpoint (`create-preference.js`) in your Astro.js project.
3. Use the `MercadoPagoCheckoutPro` component in your Astro pages, passing the necessary props.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).