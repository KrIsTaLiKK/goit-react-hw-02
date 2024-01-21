import css from './Description.module.css';
import clsx from 'clsx';

export const Description = () => {
  return (
    <div>
      <h1 className={css.mainTitle}>Sip Happens Café</h1>
      <p className={clsx(css.text, css.blink)}>
        Please leave your feedback about our service by selecting one of the
        options below
      </p>
    </div>
  );
};
