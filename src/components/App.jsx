import React from 'react';

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
    return Object.values(this.state).reduce((acc, elem) => {
      return (acc + elem);
    }, 0);    
  }

  countPositiveFeedbackPercentage = () => {
    return Math.round((100 * this.state.good) / this.countTotalFeedback()) || 0;
  }

  render() {

    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    
    return (
      <div>
        <h2>Please leave feedback</h2>
        <div>
          <button type="button" onClick={this.handleGood}>Good</button>
          <button type="button" onClick={this.handleNeutral}>Neutral</button>
          <button type="button" onClick={this.handleNBad}>Bad</button>
        </div>
        <div>
          <h2>Statistics</h2>
          <div>
            <span>Good:</span>
            <span>{this.state.good}</span>
          </div>
          <div>
            <span>Neutral:</span>
            <span>{this.state.neutral}</span>
          </div>
          <div>
            <span>Bad:</span>
            <span>{this.state.bad}</span>
          </div>
          <div>
            <span>Total:</span>
            <span>{total}</span>
          </div>
          <div>
            <span>Positive feedback:</span>
            <span>{positivePercentage}%</span>            
          </div>
        </div>
      </div>
    );
  }
}
export default App;


