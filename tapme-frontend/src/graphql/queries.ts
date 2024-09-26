import { gql } from '@apollo/client';

export const GET_USER_BALANCE = gql`
  query GetUserBalance($userId: String!) {
    getUserBalance(userId: $userId)
  }
`;
