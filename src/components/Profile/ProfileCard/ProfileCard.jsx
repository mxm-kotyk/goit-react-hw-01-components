import { ProfileWrapper } from './ProfileCard.styled'
import { ProfileDescription } from '../ProfileDescription'
import { ProfileStats } from '../ProfileStats'

export const ProfileCard = ({user}) => {
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