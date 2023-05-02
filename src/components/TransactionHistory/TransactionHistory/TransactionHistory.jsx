import { Table } from './TransactionHistory.styled'
import { TransactionHistoryHead } from '../TransactionHistoryHead'
import { TransactionHistoryBody } from '../TransactionHistoryBody'
import data from 'data/transactions'

export const TransactionHistory = () => {
  return (<Table>
    <TransactionHistoryHead />
    <TransactionHistoryBody data={data} />
  </Table>)
}