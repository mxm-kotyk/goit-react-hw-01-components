import { Section } from './Statistics.styled'
import { StatisticsTitle } from '../StatisticsTitle'
import { StatisticsList } from '../StatisticsList'
import data from 'data/data'

export const Statistics = ({title}) => {
  return (<Section>
    {title && (
      <StatisticsTitle title={title} />
    )}
    <StatisticsList data={data} />
  </Section>)
}