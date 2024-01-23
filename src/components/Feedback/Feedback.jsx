import { Notification } from '../Notification/Notification';
import css from './Feedback.module.css';

export const Feedback = ({
  reviews: { good, neutral, bad },
  totalFeedback,
  color,
}) => {
  const positiveFeedbackFormula = Math.round(
    ((good + neutral) / totalFeedback) * 100
  );
  const positiveFeedback = positiveFeedbackFormula
    ? positiveFeedbackFormula
    : 0;

  function borderColorTable(key) {
    if (color.review === key) {
      return css.isActive;
    }

    return css.defaultBorder;
  }

  return (
    <>
      {totalFeedback ? (
        <table>
          <thead>
            <tr>
              <td>Review</td>
              <td>Quantity</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td key={'good'} className={borderColorTable('good')}>
                Good
              </td>
              <td>{good}</td>
            </tr>

            <tr>
              <td key={'neutral'} className={borderColorTable('neutral')}>
                Neutral
              </td>
              <td>{neutral}</td>
            </tr>

            <tr>
              <td key={'bad'} className={borderColorTable('bad')}>
                Bad
              </td>
              <td>{bad}</td>
            </tr>

            <tr className={css.totalRow}>
              <td>Total</td>
              <td>{totalFeedback}</td>
            </tr>

            <tr className={css.positiveRow}>
              <td>Positive</td>
              <td>{positiveFeedback}%</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <Notification />
      )}
    </>
  );
};
