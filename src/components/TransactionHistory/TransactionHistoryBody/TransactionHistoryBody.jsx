import './TransactionHistoryBody.module.css'
import PropTypes from 'prop-types'

export const TransactionHistoryBody = ({data}) => {
  return (<tbody>
    {data.map(({ id, type, amount, currency }) => {
      return <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>})}
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