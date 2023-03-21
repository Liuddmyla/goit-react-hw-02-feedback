import React from 'react';
import PropTypes from 'prop-types';
import { Notification } from '../notification/Notification';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
   return (
    <div className="stat-box">
        <h2 className="title">Statistics</h2> 

           {total >= 1 ? (<><div>
            <span className="stat-text">Good:</span>
            <span className="stat-value">{good}</span>
          </div>
          <div>
            <span className="stat-text">Neutral:</span>
            <span className="stat-value">{neutral}</span>
          </div>
          <div>
            <span className="stat-text">Bad:</span>
            <span className="stat-value">{bad}</span>
          </div>
          <div>
            <span className="stat-text">Total:</span>
            <span className="stat-value">{total}</span>
          </div>
          <div>
            <span className="stat-text">Positive feedback:</span>
            <span className="stat-value">{positivePercentage}%</span>            
          </div></>) : <Notification message="There is no feedback"></Notification>}           
    </div>         
    ); 
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}