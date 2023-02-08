import { useState } from 'react';

import { Buttons } from './Buttons/Buttons';
import { Counter } from './Counter/Counter';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { Wrapper } from './Wrapper.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = { good, neutral, bad };

  const handleIncrement = evt => {
    const { name } = evt.target;
    switch (name) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        return;
    }
  };

  const totalFdbck = () => {
    const terms = Object.values(options);
    return terms.reduce((sum, term) => sum + term, 0);
  };

  const percentCount = () => {
    const value = Math.round((good / totalFdbck()) * 100);
    return value ? value : 0;
  };

  return (
    <Wrapper>
      <h1>Кафе Expresso собирает отзывы от своих клиентов</h1>
      <Section title={'Поделитесь своим впечатлением'}>
        <Buttons options={Object.keys(options)} onAddFdbck={handleIncrement} />
      </Section>
      <Section title={'Результат опроса'}>
        {totalFdbck() === 0 ? (
          <Notification message="Пожалуйста, оставьте отзыв!" />
        ) : (
          <Counter
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFdbck()}
            positivePercentage={percentCount()}
          />
        )}
      </Section>
    </Wrapper>
  );
};
