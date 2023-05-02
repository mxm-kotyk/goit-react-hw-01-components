// import css from './StatisticsList.module.css'
import { StatList, Item, Label, Percentage } from './StatisticsList.styled'
import PropTypes from 'prop-types'

export const StatisticsList = ({data}) => {
  return (<StatList>
    {data.map(({ id, label, percentage }) => {
      return <Item key={id}>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </Item>})}
  </StatList>)
}

StatisticsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.exact({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired
  }))
}