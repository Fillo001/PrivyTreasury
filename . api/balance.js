export default function handler(req, res) {
  const base = [
    { token: 'ETH', amount: 4 },
    { token: 'USDC', amount: 1000 }
  ];

  if (req.query.simulate) {
    // Simple rebalance logic for MVP
    return res.status(200).json({
      balances: [
        { token: 'ETH', amount: 2 },
        { token: 'USDC', amount: 2000 }
      ]
    });
  }

  return res.status(200).json({ balances: base });
}
```[43dcd9a7-70db-4a1f-b0ae-981daa162054](https://github.com/senspond20/react-next-typescript-redux-saga/tree/99bb21536b6c275ee373c8ba685f91358981481f/README.md?citationMarker=43dcd9a7-70db-4a1f-b0ae-981daa162054 "1")
