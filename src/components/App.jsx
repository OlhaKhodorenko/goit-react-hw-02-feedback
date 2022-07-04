import React, { Component } from 'react';
import Section from './section/section';
import FeedbackOptions from './feedbackOptions/feedbackOptions';
import Statistics from './statistics/statistics';
import Notification from './notification/notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleUpdate = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };
  // handleAddGood = () => {
  //   this.setState(prevState => ({
  //     good: prevState.good + 1,
  //   }));
  // };
  // handleAddNeutral = () => {
  //   this.setState(prevState => ({
  //     neutral: prevState.neutral + 1,
  //   }));
  // };
  // handleAddBad = () => {
  //   this.setState(prevState => ({
  //     bad: prevState.bad + 1,
  //   }));
  // };
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, item) => total + item);
  };
  countPositiveFeedbackPercentage = () => {
    return Math.floor((this.state.good / this.countTotalFeedback()) * 100);
  };
  //showStatistics = () => {};
  option = Object.keys(this.state);

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <div className="btnsWrap">
            <FeedbackOptions
              options={this.option}
              onLeaveFeedback={this.handleUpdate}
            />
          </div>
        </Section>
        {this.countTotalFeedback() > 0 ? (
          <section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}
