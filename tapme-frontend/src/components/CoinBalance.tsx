import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER_BALANCE } from '../graphql/queries';

interface CoinBalanceProps {
  userId: string;
}

const CoinBalance: React.FC<CoinBalanceProps> = ({ userId }) => {
  const { data, loading, error, refetch } = useQuery(GET_USER_BALANCE, {
    variables: { userId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="coin-balance">
      <h1>Your Coins: {data.getUserBalance}</h1>
      <button onClick={() => refetch()}>Refresh Balance</button>
    </div>
  );
};

export default CoinBalance;
