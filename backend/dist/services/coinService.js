import { User } from '../models/user';
export class CoinService {
    static async getUserBalance(userId) {
        return User.getUserById(userId);
    }
    static async incrementCoins(userId) {
        return User.incrementUserCoins(userId);
    }
}
