import css from './ProfileCard.module.css'
import { ProfileDescription } from '../ProfileDescription'
import { ProfileStats } from '../ProfileStats'
import user from '../../../data/user.json'

export const User = () => {
  return (<div className={css.profile}>
    <ProfileDescription
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
    />
    <ProfileStats
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />
  </div>)
}