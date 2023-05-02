import PropTypes from 'prop-types'
import css from './FriendListItem.module.css'

export const FriendListItem = ({ data }) => {
  return (data.map(({avatar, name, isOnline, id}) => {return <li className={css.item} key={id}>
  <span className={`${css.status} ${isOnline ? css.online : css.offline}`}></span>
  <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
</li>}))
}

FriendListItem.propTypes = {
  data: PropTypes.arrayOf(PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
  }))
}
