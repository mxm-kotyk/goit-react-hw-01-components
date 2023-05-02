import { ProfileWrapper } from './ProfileCard.styled'
import { ProfileDescription } from '../ProfileDescription'
import { ProfileStats } from '../ProfileStats'
import user from 'data/user.json'

export const ProfileCard = () => {
  return (<ProfileWrapper>
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
  </ProfileWrapper>)
}