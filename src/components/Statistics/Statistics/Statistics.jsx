import css from './Statistics.module.css'
import { StatisticsTitle } from '../StatisticsTitle'
import { StatisticsList } from '../StatisticsList'
import data from 'data/data'

export const Statistics = ({title}) => {
  return (<section className={css.statistics}>
    {title && (
      <StatisticsTitle title={title} />
    )}
    <StatisticsList data={data} />
  </section>)
}