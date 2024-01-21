import css from './OptionsBtn.module.css';
import clsx from 'clsx';
import { FaSmileBeam } from 'react-icons/fa';

export const OptionsBtn = ({ children, onUpdate, type }) => {
  function borderColorHover(type) {
    if (type === 'good') {
      return css.isGood;
    }
    if (type === 'neutral') {
      return css.isNeutral;
    }

    if (type === 'bad') {
      return css.isBad;
    }
  }

  return (
    <button
      className={clsx(css.optionsBtn, borderColorHover(type))}
      onClick={onUpdate}
    >
      {children}
      {/* <FaSmileBeam className={css.optionIcon} /> */}
    </button>
  );
};
