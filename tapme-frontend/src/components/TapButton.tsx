import React from 'react';
import { useMutation } from '@apollo/client';
import { INCREMENT_COINS } from '../graphql/mutations';

interface TapButtonProps {
  userId: string;
  onCoinsIncremented: () => void;
}

const TapButton: React.FC<TapButtonProps> = ({ userId, onCoinsIncremented }) => {
  const [incrementCoins] = useMutation(INCREMENT_COINS);

  const handleTap = async () => {
    await incrementCoins({ variables: { userId } });
    onCoinsIncremented();  // Callback to update the balance in the parent component
  };

  return (
    <button className="tap-button" onClick={handleTap}>
      Tap to Earn Coins
    </button>
  );
};

export default TapButton;
