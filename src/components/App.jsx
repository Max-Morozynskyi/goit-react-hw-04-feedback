import React from 'react';

import { Buttons } from './Buttons/Buttons';
import { Counter } from './Counter/Counter';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { Wrapper } from './Wrapper.styled';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = task => {
    this.setState(prevState => ({
      [task.target.name]: prevState[task.target.name] + 1,
    }));
  };

  totalCount = data => {
    const terms = Object.values(data);
    return terms.reduce((sum, term) => sum + term, 0);
  };

  percentCount = (good, sum) => {
    const value = Math.round((good / sum) * 100);
    return value ? value : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const totalFdbck = this.totalCount(this.state);
    const percentage = this.percentCount(this.state.good, totalFdbck);
    return (
      <Wrapper>
        <h1>Кафе Expresso собирает отзывы от своих клиентов</h1>
        <Section title={'Поделитесь своим впечатлением'}>
          <Buttons options={options} onAddFdbck={this.handleIncrement} />
        </Section>
        <Section title={'Результат опроса'}>
          {totalFdbck === 0 ? (
            <Notification message="Пожалуйста, оставьте отзыв" />
          ) : (
            <Counter
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFdbck}
              positivePercentage={percentage}
            />
          )}
        </Section>
      </Wrapper>
    );
  }
}
