import { useState, useEffect } from 'react';

import { Description } from '../Description/Description';
import { Feedback } from '../Feedback/Feedback';
import { Options } from '../Options/Options';
import Notiflix from 'notiflix';

export const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem('feedback');

    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }

    return { good: 0, neutral: 0, bad: 0 };
  });

  // Змінна, яка показує, яка кнопка наразі натиснута
  const [review, setReview] = useState('');

  const handleFeedback = value => {
    setFeedback({
      ...feedback,
      [value]: feedback[value] + 1,
    });

    setReview(value);

    notiflix(value);

    function notiflix(value) {
      const totalReviews = feedback[value] + 1;
      const wordReview = totalReviews > 1 ? 'reviews' : 'review';

      Notiflix.Notify.info(
        `${totalReviews} ${value} ${wordReview}. Thank you for feedback! 👍`,
        {
          fontSize: '20px',
        }
      );
    }
  };

  const handleResetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  useEffect(() => {
    window.localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const { good, neutral, bad } = feedback;

  const totalFeedback = good + neutral + bad;

  return (
    <div className="container">
      <Description />
      <Options
        onUpdate={handleFeedback}
        onReset={handleResetFeedback}
        totalFeedback={totalFeedback}
        feedback={feedback}
      />
      <Feedback
        totalFeedback={totalFeedback}
        feedback={feedback}
        review={review}
      />
    </div>
  );
};
