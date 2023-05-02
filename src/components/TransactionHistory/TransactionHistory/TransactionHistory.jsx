import css from './TransactionHistory.module.css'
import { TransactionHistoryHead } from '../TransactionHistoryHead'
import { TransactionHistoryBody } from '../TransactionHistoryBody'
import data from 'data/transactions'

export const TransactionHistory = () => {
  return (<table className={css.transactionHistory}>
    <TransactionHistoryHead />
    <TransactionHistoryBody data={data} />
  </table>)
}