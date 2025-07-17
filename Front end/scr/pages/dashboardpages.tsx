import React, { useEffect, useState } from 'react';

const DashboardPage = () => {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    fetch('/api/dashboard').then(res => res.json()).then(setData);
  }, []);
  if (!data) return <div>Loading...</div>;
  return (
    <div>
      <h2>Dashboard</h2>
      <div>Balance: ${data.balance}</div>
      <div>PnL: ${data.pnl}</div>
      <div>Open Trades: {data.openTrades}</div>
      <h3>Recent Signals</h3>
      <ul>
        {data.recentSignals.map((s: any, i: number) =>
          <li key={i}>{s.symbol} {s.action} Confidence: {s.confidence}</li>
        )}
      </ul>
    </div>
  );
};
export default DashboardPage;
