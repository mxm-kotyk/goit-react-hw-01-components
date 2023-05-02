import { Title } from './StatisticsTitle.styled'
import PropTypes from 'prop-types'

export const StatisticsTitle = ({ title }) => {
  return (<Title>{title}</Title>)
}

StatisticsTitle.propTypes = {
  title: PropTypes.string
}