import { Item, Name, Status } from './FriendListItem.styled'
import PropTypes from 'prop-types'

export const FriendListItem = ({ friend }) => {
  const {avatar, name, isOnline} = friend
  return (<Item>
    <Status available={isOnline}></Status>
    <img src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
  </Item>)
}

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  })
}
