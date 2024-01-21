import { useState, useEffect } from 'react';
import css from './App.module.css';

import { Description } from '../Description/Description';
import { Feedback } from '../Feedback/Feedback';
import { Options } from '../Options/Options';

export const App = () => {
  const [reviews, setReviews] = useState(() => {
    const savedFeedback = window.localStorage.getItem('feedback');

    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }

    return { good: 0, neutral: 0, bad: 0 };
  });

  const handleFeedback = value => {
    setReviews({
      ...reviews,
      [value]: reviews[value] + 1,
    });
  };

  const handleResetFeedback = () => {
    setReviews({ good: 0, neutral: 0, bad: 0 });
  };

  useEffect(() => {
    window.localStorage.setItem('feedback', JSON.stringify(reviews));
  }, [reviews]);

  const { good, neutral, bad } = reviews;

  const totalFeedback = good + neutral + bad;

  return (
    <div className="container blink">
      <Description />
      <Options
        onUpdate={handleFeedback}
        onReset={handleResetFeedback}
        totalFeedback={totalFeedback}
        reviews={reviews}
      />
      <Feedback totalFeedback={totalFeedback} reviews={reviews} />
    </div>
  );
};
