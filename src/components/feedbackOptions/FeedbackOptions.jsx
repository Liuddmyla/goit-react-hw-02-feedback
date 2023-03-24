import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({handleOnClick}) => {
    return (        
        <div className={css['btn-box']}>
          <button type="button" name="good" onClick={handleOnClick} className={css['btn-item']}>Good</button>
          <button type="button" name="neutral" onClick={handleOnClick} className={css['btn-item']}>Neutral</button>
          <button type="button" name="bad" onClick={handleOnClick} className={css['btn-item']}>Bad</button>
        </div>    
    )
}

FeedbackOptions.propTypes = {
    handleOnClick: PropTypes.func.isRequired,    
}