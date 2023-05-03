import { Table } from './TransactionHistory.styled'
import { TransactionHistoryHead } from '../TransactionHistoryHead'
import { TransactionHistoryBody } from '../TransactionHistoryBody'
// import data from 'data/transactions'

export const TransactionHistory = ({transactions}) => {
  return (<Table>
    <TransactionHistoryHead />
    <TransactionHistoryBody transactions={transactions} />
  </Table>)
}