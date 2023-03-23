import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({handleGood, handleNeutral, handleNBad}) => {
    return (        
        <div className={css['btn-box']}>
          <button type="button" onClick={handleGood} className={css['btn-item']}>Good</button>
          <button type="button" onClick={handleNeutral} className={css['btn-item']}>Neutral</button>
          <button type="button" onClick={handleNBad} className={css['btn-item']}>Bad</button>
        </div>    
    )
}

FeedbackOptions.propTypes = {
    handleGood: PropTypes.func.isRequired,
    handleNeutral: PropTypes.func.isRequired,
    handleNBad: PropTypes.func.isRequired,
}