import { TableCell, TableRow } from './TransactionHistoryBody.styled'
import PropTypes from 'prop-types'

export const TransactionHistoryBody = ({data}) => {
  return (<tbody>
    {data.map(({ id, type, amount, currency }) => {
      return <TableRow key={id}>
      <TableCell>{type}</TableCell>
      <TableCell>{amount}</TableCell>
      <TableCell>{currency}</TableCell>
    </TableRow>})}
  </tbody>)
}

TransactionHistoryBody.propTypes = {
  data: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
  }))
}