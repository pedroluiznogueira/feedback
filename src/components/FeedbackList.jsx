import FeedbackItem from './FeedbackItem';

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

export default FeedbackList;