import React, { useEffect, useState } from 'react';

const PortfolioPage = () => {
  const [portfolio, setPortfolio] = useState<any>(null);
  useEffect(() => {
    fetch('/api/portfolio').then(res => res.json()).then(setPortfolio);
  }, []);
  if (!portfolio) return <div>Loading...</div>;
  return (
    <div>
      <h2>Portfolio</h2>
      <div>Total Value: ${portfolio.totalValue}</div>
      <ul>
        {portfolio.assets.map((a: any, i: number) =>
          <li key={i}>{a.symbol}: {a.quantity} (${a.value})</li>
        )}
      </ul>
    </div>
  );
};
export default PortfolioPage;
