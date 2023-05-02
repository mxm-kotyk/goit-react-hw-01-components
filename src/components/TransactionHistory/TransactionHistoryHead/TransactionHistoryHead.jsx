import { TableHead, TableHeadCell } from "./TransactionHistoryHead.styled"

export const TransactionHistoryHead = () => {
  return (<TableHead>
    <tr>
      <TableHeadCell>Type</TableHeadCell>
      <TableHeadCell>Amount</TableHeadCell>
      <TableHeadCell>Currency</TableHeadCell>
    </tr>
  </TableHead>)
}