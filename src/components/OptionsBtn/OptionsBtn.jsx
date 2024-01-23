import css from './OptionsBtn.module.css';
import clsx from 'clsx';
import { IconContext } from 'react-icons';

export const OptionsBtn = ({ children, onUpdate, type, icon }) => {
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
      <IconContext.Provider value={{ size: 25 }}>{icon}</IconContext.Provider>
      {children}
    </button>
  );
};
