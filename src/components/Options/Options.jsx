import { OptionsBtn } from '../OptionsBtn/OptionsBtn';
import css from './Options.module.css';
import style from '../OptionsBtn/OptionsBtn.module.css';

export const Options = ({ onUpdate, onReset, totalFeedback, reviews }) => {
  const feedBackKeys = Object.keys(reviews);
  const resetBtnClass = totalFeedback > 0 && style.isActive;
  return (
    <ul className={css.optionsList}>
      {feedBackKeys.map(key => {
        return (
          <li key={key}>
            <OptionsBtn type={key} onUpdate={() => onUpdate(key)}>
              {key}
            </OptionsBtn>
          </li>
        );
      })}

      {totalFeedback > 0 && (
        <li className={`${style.resetBtnWrap} ${resetBtnClass}`}>
          <button className={style.resetBtn} onClick={onReset}>
            Reset
          </button>
        </li>
      )}
    </ul>
  );
};

//  <button onClick={() => onUpdate('good')}>Good</button>
//   </li>
//   <li>
//     <button onClick={() => onUpdate('neutral')}>Neutral</button>
//   </li>
//   <li>
//     <button onClick={() => onUpdate('bad')}>Bad</button>
