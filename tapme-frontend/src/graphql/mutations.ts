import { gql } from '@apollo/client';

export const INCREMENT_COINS = gql`
  mutation IncrementCoins($userId: String!) {
    incrementCoins(userId: $userId)
  }
`;
