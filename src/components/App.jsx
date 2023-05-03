import { ProfileCard } from "./Profile/ProfileCard";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import user from 'data/user'
import data from 'data/data'
import friends from 'data/friends'
import transactions from 'data/transactions'

export const App = () => {
  return (
    <>
      <h2>1 - Профіль соціальної мережі</h2>
      <ProfileCard user={user} />
      <h2>2- Секція статистики</h2>
      <Statistics title="Upload stats" data={data} />
      <h2>3 - Список друзів</h2>
      <FriendList friends={friends} />
      <h2>4 - Історія транзакцій</h2>
      <TransactionHistory transactions={transactions} />
    </>
  );
};
