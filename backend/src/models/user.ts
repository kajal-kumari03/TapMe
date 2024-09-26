import { supabase } from '../config/supabase';

export class User {
  static async getUserById(userId: string) {
    const { data, error } = await supabase
      .from('users')
      .select('balance')
      .eq('id', userId);
    if (error) throw new Error(error.message);
    return data[0]?.balance || 0;
  }

  static async incrementUserCoins(userId: string) {
    const { data, error } = await supabase
      .from('users')
      .update({ balance: 'balance + 1' })
      .eq('id', userId)
      .select('balance');
    if (error) throw new Error(error.message);
    return data[0]?.balance || 0;
  }
}
