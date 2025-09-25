import { useState } from 'react';

export default function Home() {
  const [balances, setBalances] = useState([]);
  const [sim, setSim] = useState(null);

  const loadBalances = async () => {
    const res = await fetch('/api/balance');
    const json = await res.json();
    setBalances(json.balances);
  };

  const runSim = async () => {
    const res = await fetch('/api/balance?simulate=true');
    const json = await res.json();
    setSim(json.balances);
  };

  return (
    <div style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h1>DAO Treasury MVP</h1>
      <button onClick={loadBalances}>Load Balances</button>
      <ul>
        {balances.map((b) => (
          <li key={b.token}>
            {b.token}: {b.amount}
          </li>
        ))}
      </ul>

      <button onClick={runSim} style={{ marginTop: 20 }}>
        Simulate Rebalance
      </button>
      {sim && (
        <ul>
          {sim.map((b) => (
            <li key={b.token}>
              {b.token}: {b.amount}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
