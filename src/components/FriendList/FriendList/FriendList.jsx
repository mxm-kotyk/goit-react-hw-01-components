import { List } from './FriendList.styled'
import { FriendListItem } from '../FriendListItem'
import PropTypes from 'prop-types'


export const FriendList = ({friends}) => {
  return (<List>
    {friends.map(friend => { return (<FriendListItem friend={friend} key={friend.id}/>) })}
    
  </List>)
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired
  }))
}