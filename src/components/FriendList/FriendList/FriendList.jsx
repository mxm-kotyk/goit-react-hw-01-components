import { List } from './FriendList.styled'
import friends from 'data/friends'
import { FriendListItem } from '../FriendListItem'

export const FriendList = () => {
  return (<List>
    <FriendListItem data={friends}/>
  </List>)
}