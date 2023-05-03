import { Section } from './Statistics.styled'
import { StatisticsTitle } from '../StatisticsTitle'
import { StatisticsList } from '../StatisticsList'

export const Statistics = ({title, data}) => {
  return (<Section>
    {title && (
      <StatisticsTitle title={title} />
    )}
    <StatisticsList data={data} />
  </Section>)
}