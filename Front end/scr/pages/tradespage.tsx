import React, { useEffect, useState } from 'react';

const TradesPage = () => {
  const [trades, setTrades] = useState<any[]>([]);
  useEffect(() => {
    fetch('/api/trades/history').then(res => res.json()).then(setTrades);
  }, []);
  return (
    <div>
      <h2>Trade History</h2>
      <ul>
        {trades.map((t, i) =>
          <li key={i}>{t.symbol} - {t.side} - {t.amount} @ ${t.price} ({new Date(t.date).toLocaleString()})</li>
        )}
      </ul>
    </div>
  );
};
export default TradesPage;
