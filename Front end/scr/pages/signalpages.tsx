import React, { useEffect, useState } from 'react';

const SignalsPage = () => {
  const [signals, setSignals] = useState<any[]>([]);
  useEffect(() => {
    fetch('/api/signals').then(res => res.json()).then(setSignals);
  }, []);
  return (
    <div>
      <h2>Trading Signals</h2>
      <ul>
        {signals.map((s, i) =>
          <li key={i}>{s.symbol} - {s.action} (Confidence: {s.confidence})</li>
        )}
      </ul>
    </div>
  );
};
export default SignalsPage;
