import React from 'react';
import { Statistics } from './statistics/Statistics';
import { FeedbackOptions } from './feedbackOptions/FeedbackOptions';
import { Section } from './section/Section';

class App extends React.Component{
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  handleGood = () => {    
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      }
    })
  }

  handleNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      }
    })
  }

  handleNBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      }
    })
  }

  countTotalFeedback = () => {
    let sum = 0;
    Object.values(this.state).map(e => {
      return sum += e;
    })
    return sum;
  }

  countPositiveFeedbackPercentage = () => {
    return Math.round((100 * this.state.good) / this.countTotalFeedback()) || 0;
  }

  render() {

    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    
    return (
      <div>
        <Section title="Please leave feedback">

            <FeedbackOptions 
              handleGood={this.handleGood}
              handleNeutral={this.handleNeutral}
              handleNBad={this.handleNBad}>
            </FeedbackOptions>
          
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={positivePercentage}>      
            </Statistics>

        </Section>        
      </div>
    );
  }
}
export default App;


