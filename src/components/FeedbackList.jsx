import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types'

function FeedbackList( {feedbacks} ) {
    
    if (!feedbacks || feedbacks.length == 0) 
        return <p>No feedback yet</p>
    return(
        <>
            {feedbacks.map((feedback) => (
                <FeedbackItem item={feedback} />
            ))}
        </>
    );
}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
      })
    ),
}

export default FeedbackList;