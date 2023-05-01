import { ProfileCard } from "./Profile/ProfileCard";
import { Statistics } from "./Statistics/Statistics";

export const App = () => {
  return (
    <>
      <h2>1 - Профіль соціальної мережі</h2>
      <ProfileCard/>
      <h2>2- Секція статистики</h2>
      <Statistics title="Upload stats"/>
    </>
  );
};
