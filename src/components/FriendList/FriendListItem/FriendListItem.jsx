import { Item, Name, Status } from './FriendListItem.styled'
import PropTypes from 'prop-types'

export const FriendListItem = ({ friends }) => {
  return (friends.map(({avatar, name, isOnline, id}) => {return <Item key={id}>
  <Status available={isOnline}></Status>
  <img src={avatar} alt="User avatar" width="48" />
    <Name>{name}</Name>
</Item>}))
}

FriendListItem.propTypes = {
  data: PropTypes.arrayOf(PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
  }))
}
