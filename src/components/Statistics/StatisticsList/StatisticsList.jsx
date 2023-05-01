import css from './StatisticsList.module.css'
import PropTypes from 'prop-types'
import { getRandomHexColor } from 'utils/getRandomHexColor'


export const StatisticsList = ({data}) => {
  return (<ul className={css.statList}>
    {data.map(({ id, label, percentage }) => {
      return <li className={css.item} key={id} style={{ backgroundColor: getRandomHexColor() }}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>})}
  </ul>)
}

StatisticsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.exact({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired
  }))
}