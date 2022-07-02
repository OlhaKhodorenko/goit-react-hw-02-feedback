import React from 'react';
import css from './feedback.module.css';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleAddGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  handleAddNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  handleAddBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, item) => total + item);
  };
  countPositiveFeedbackPercentage = () => {
    return Math.floor((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    return (
      <>
        <div className="title">
          <h1>Please leave feedback</h1>
        </div>
        <div className="feedbackOptions">
          <button type="button" onClick={this.handleAddGood}>
            Good
          </button>
          <button type="button" onClick={this.handleAddNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.handleAddBad}>
            Bad
          </button>
        </div>
        <div className="statistic">
          <h2>Statistic</h2>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>Total: {totalFeedback}</p>
          <p>Positive feedback: {!positiveFeedback ? 0 : positiveFeedback}%</p>
        </div>
      </>
    );
  }
}
export default Feedback;
