import { Stats, Stat, Label, Quantity } from './ProfileStats.styled'
import PropTypes from 'prop-types'

export const ProfileStats = ({ followers, views, likes }) => {
  return (<Stats>
    <Stat>
      <Label>Followers</Label>
      <Quantity>{followers}</Quantity>
    </Stat>
    <Stat>
      <Label>Views</Label>
      <Quantity>{views}</Quantity>
    </Stat>
    <Stat>
      <Label>Likes</Label>
      <Quantity>{likes}</Quantity>
    </Stat>
  </Stats>)
}

ProfileStats.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
}