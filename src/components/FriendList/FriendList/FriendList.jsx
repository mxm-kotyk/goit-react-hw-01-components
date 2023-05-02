import css from './FriendList.module.css'
import friends from 'data/friends'
import { FriendListItem } from '../FriendListItem'

export const FriendList = () => {
  return (<ul className={css.friendList}>
    <FriendListItem data={friends}/>
  </ul>)
}