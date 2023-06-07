import PropTypes from 'prop-types';
import {
  StatContainer,
  Title,
  StatList,
  Item,
  StatLabel,
  StatPercentage,
} from 'components/Statistics/Statistics.styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const StatElement = ({ id, label, percentage }) => (
  <Item key={id} label={label} style={{ backgroundColor: getRandomHexColor() }}>
    <StatLabel>{label}</StatLabel>
    <StatPercentage>{percentage}</StatPercentage>
  </Item>
);

const Statistics = ({ title = ' ', stats }) => {
  return (
    <StatContainer>
      {title && <Title>{title}</Title>}
      <StatList>{stats.map(StatElement)}</StatList>
    </StatContainer>
  );
};

StatElement.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.string.isRequired,
};

Statistics.propTypes = {
  id: PropTypes.string.isRequired,

  title: PropTypes.string,
  stats: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.string.isRequired,
  }),
};

export { Statistics };
