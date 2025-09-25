export default function handler(req, res) {
  const base = [
    { token: 'ETH', amount: 4 },
    { token: 'USDC', amount: 1000 }
  ];

  if (req.query.simulate) {
    return res.status(200).json({
      balances: [
        { token: 'ETH', amount: 2 },
        { token: 'USDC', amount: 2000 }
      ]
    });
  }

  return res.status(200).json({ balances: base });
}
