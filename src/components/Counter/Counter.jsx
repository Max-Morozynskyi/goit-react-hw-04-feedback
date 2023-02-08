import PropTypes from 'prop-types';
import { ResultList } from './Counter.styled';

export function Counter({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ResultList>
      <li>Довольны: {good}</li>
      <li>Безучастны: {neutral}</li>
      <li>Разочарованы: {bad}</li>
      <li>Общее кол-во голосов: {total}</li>
      <li>Процент успеха компании: {positivePercentage}%</li>
    </ResultList>
  );
}

Counter.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
