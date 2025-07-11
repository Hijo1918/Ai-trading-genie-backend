import { useEffect, useState } from 'react';

export default function LivePrice() {
  const [price, setPrice] = useState('Loading...');

  useEffect(() => {
    const interval = setInterval(async () => {
      const res = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT');
      const data = await res.json();
      setPrice(parseFloat(data.price).toFixed(2));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <h1>Live BTC Price: ${price}</h1>;
}
