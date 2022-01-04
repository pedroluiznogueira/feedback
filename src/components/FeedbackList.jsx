import FeedbackItem from './FeedbackItem';

function FeedbackList( {feedbacks} ) {
    return(
        <>
            {feedbacks.map((feedback) => (
                <FeedbackItem item={feedback} />
            ))}
        </>
    );
}

export default FeedbackList;