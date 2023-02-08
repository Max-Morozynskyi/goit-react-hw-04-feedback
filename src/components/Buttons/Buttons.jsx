import PropTypes from 'prop-types';
import { FdbckList } from './Buttons.styled';

export function Buttons({ options, onAddFdbck }) {
  return (
    <FdbckList>
      {options.map(stan => {
        return (
          <li key={stan}>
            <button type="button" onClick={onAddFdbck} name={stan}>
              {stan === options[0] ? '😊' : stan === options[1] ? '😑' : '😞'}
            </button>
          </li>
        );
      })}
    </FdbckList>
  );
}

Buttons.propTypes = {
  options: PropTypes.array.isRequired,
  onAddFdbck: PropTypes.func.isRequired,
};
