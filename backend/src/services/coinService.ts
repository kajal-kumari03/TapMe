import { User } from '../models/user';

export class CoinService {
  static async getUserBalance(userId: string) {
    return User.getUserById(userId);
  }

  static async incrementCoins(userId: string) {
    return User.incrementUserCoins(userId);
  }
}
