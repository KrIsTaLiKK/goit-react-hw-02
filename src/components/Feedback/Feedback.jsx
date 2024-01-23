import { Notification } from '../Notification/Notification';
import css from './Feedback.module.css';

export const Feedback = ({
  feedback: { good, neutral, bad },
  totalFeedback,
  review,
}) => {
  const positiveFeedbackFormula = Math.round(
    ((good + neutral) / totalFeedback) * 100
  );
  const positiveFeedback = positiveFeedbackFormula
    ? positiveFeedbackFormula
    : 0;

  function borderColorActiveCell(key) {
    if (review === key) {
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
              <td key={'good'} className={borderColorActiveCell('good')}>
                Good
              </td>
              <td>{good}</td>
            </tr>

            <tr>
              <td key={'neutral'} className={borderColorActiveCell('neutral')}>
                Neutral
              </td>
              <td>{neutral}</td>
            </tr>

            <tr>
              <td key={'bad'} className={borderColorActiveCell('bad')}>
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
