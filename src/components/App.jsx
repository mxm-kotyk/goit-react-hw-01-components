import { ProfileCard } from "./Profile/ProfileCard";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";

export const App = () => {
  return (
    <>
      <h2>1 - Профіль соціальної мережі</h2>
      <ProfileCard/>
      <h2>2- Секція статистики</h2>
      <Statistics title="Upload stats" />
      <h2>3 - Список друзів</h2>
      <FriendList/>
    </>
  );
};
