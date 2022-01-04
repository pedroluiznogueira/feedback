import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types'

function FeedbackList( {feedbacks} ) {
    
    return(
        <>
            {feedbacks.map((feedback) => (
                <FeedbackItem
                    key={feedback.id} 
                    item={feedback}
                    handleDelete={(id) => {console.log(id)}}
                />
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