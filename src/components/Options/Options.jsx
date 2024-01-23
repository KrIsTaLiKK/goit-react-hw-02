import { OptionsBtn } from '../OptionsBtn/OptionsBtn';
import css from './Options.module.css';
import style from '../OptionsBtn/OptionsBtn.module.css';
import { FaSmileBeam } from 'react-icons/fa';
import { BsEmojiNeutral } from 'react-icons/bs';
import { FaRegFaceSadCry } from 'react-icons/fa6';

export const Options = ({ onUpdate, onReset, totalFeedback, reviews }) => {
  const feedBackKeys = Object.keys(reviews);
  const resetBtnClass = totalFeedback > 0 && style.isActive;
  const noMarginClass = !resetBtnClass && css.optionsListNoMargin;
  const iconList = [
    <FaSmileBeam className={style.iconGood} key={1} />,
    <BsEmojiNeutral className={style.iconNeutral} key={2} />,
    <FaRegFaceSadCry className={style.iconBad} key={3} />,
  ];

  return (
    <>
      <ul className={`${css.optionsList} ${noMarginClass}`}>
        {feedBackKeys.map((key, idx) => {
          return (
            <li key={key}>
              <OptionsBtn
                type={key}
                onUpdate={() => onUpdate(key)}
                icon={iconList[idx]}
              >
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
    </>
  );
};
