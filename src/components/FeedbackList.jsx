import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types'
import { getPreEmitDiagnostics } from 'typescript';

function FeedbackList( {feedbacks, handleDelete} ) {
    
    return(
        <>
            {feedbacks.map((feedback) => (
                <FeedbackItem
                    key={feedback.id} 
                    item={feedback}
                    handleDelete={handleDelete}
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