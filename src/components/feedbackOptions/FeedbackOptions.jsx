import React from 'react';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({handleGood, handleNeutral, handleNBad}) => {
    return (        
        <div className="btn-box">
          <button type="button" onClick={handleGood} className="btn-item">Good</button>
          <button type="button" onClick={handleNeutral} className="btn-item">Neutral</button>
          <button type="button" onClick={handleNBad} className="btn-item">Bad</button>
        </div>    
    )
}

FeedbackOptions.propTypes = {
    handleGood: PropTypes.func.isRequired,
    handleNeutral: PropTypes.func.isRequired,
    handleNBad: PropTypes.func.isRequired,
}