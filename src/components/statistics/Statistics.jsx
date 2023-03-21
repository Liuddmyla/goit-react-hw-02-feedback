import React from 'react';
import PropTypes from 'prop-types';
import { Notification } from '../notification/Notification';
import css from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
   return (
    <div className={css['stat-box']}>
        <h2 className={css.title}>Statistics</h2> 

           {total >= 1 ? (<><div>
            <span className={css['stat-text']}>Good:</span>
            <span className={css['stat-value']}>{good}</span>
          </div>
          <div>
            <span className={css['stat-text']}>Neutral:</span>
            <span className={css['stat-value']}>{neutral}</span>
          </div>
          <div>
            <span className={css['stat-text']}>Bad:</span>
            <span className={css['stat-value']}>{bad}</span>
          </div>
          <div>
            <span className={css['stat-text']}>Total:</span>
            <span className={css['stat-value']}>{total}</span>
          </div>
          <div>
            <span className={css['stat-text']}>Positive feedback:</span>
            <span className={css['stat-value']}>{positivePercentage}%</span>            
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