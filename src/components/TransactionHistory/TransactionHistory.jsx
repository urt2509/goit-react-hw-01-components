import PropTypes from 'prop-types';
import {
  TableContainer,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableData,
} from './TransactionHistory.styled';

const TransactionsElement = ({ id, type, amount, currency }) => (
  <TableRow key={id}>
    <TableData>{type}</TableData>
    <TableData>{amount}</TableData>
    <TableData>{currency}</TableData>
  </TableRow>
);

const TransactionHistory = ({ items }) => {
  return (
    <TableContainer>
      <TableHead>
        <TableRow>
          <TableHeader>Type</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Currency</TableHeader>
        </TableRow>
      </TableHead>

      <TableBody>{items.map(TransactionsElement)}</TableBody>
    </TableContainer>
  );
};

TransactionsElement.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

TransactionHistory.propTypes = {
  items: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};

export { TransactionHistory };
