import { Component } from 'react';
//
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';
//

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbackOptionsArr = Object.keys(this.state);

  countTotalFeedback = (goodVotes, neutralVotes, badVotes) => {
    return goodVotes + neutralVotes + badVotes;
  };

  countPositiveFeedbackPercentage = (goodVotes, neutralVotes, badVotes) => {
    return Math.round(
      (goodVotes * 100) / (goodVotes + neutralVotes + badVotes)
    );
  };

  feedbackHandler = option => {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.feedbackOptionsArr}
            onLeaveFeedback={this.feedbackHandler}
          />
        </Section>

        {this.countTotalFeedback(
          this.state.good,
          this.state.neutral,
          this.state.bad
        ) ? (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback(
                this.state.good,
                this.state.neutral,
                this.state.bad
              )}
              positivePercentage={this.countPositiveFeedbackPercentage(
                this.state.good,
                this.state.neutral,
                this.state.bad
              )}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    );
  }
}
