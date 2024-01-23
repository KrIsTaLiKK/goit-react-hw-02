import { Notification } from '../Notification/Notification';
import css from './Feedback.module.css';

export const Feedback = ({
  reviews: { good, neutral, bad },
  totalFeedback,
}) => {
  const positiveFeedbackFormula = Math.round(
    ((good + neutral) / totalFeedback) * 100
  );
  const positiveFeedback = positiveFeedbackFormula
    ? positiveFeedbackFormula
    : 0;

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
              <td>Good</td>
              <td>{good}</td>
            </tr>

            <tr>
              <td>Neutral</td>
              <td>{neutral}</td>
            </tr>

            <tr>
              <td>Bad</td>
              <td>{bad}</td>
            </tr>

            <tr>
              <td>Total</td>
              <td>{totalFeedback}</td>
            </tr>

            <tr>
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
