import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ( {children} ) => {
    const [feedbacks, setFeedbacks] = useState([
        {
            id: 1,
            text: 'This item is from context',
            rating: 10
        },
        {
            id: 2,
            text: 'This item is from context',
            rating: 5
        },
        {
            id: 3,
            text: 'This item is from context',
            rating: 8
        },
    ]);
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false 
    })

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedbacks([newFeedback, ...feedbacks]);
    };

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete it ?')) {
            setFeedbacks(feedbacks.filter((item) => item.id !== id))
        }
    };

    const editFeedback = (item) => {
        setFeedbackEdit({
            item: item,
            edit: true
        });
    };

    const updateFeedback = (id, updItem) => {
        setFeedbacks(
            feedbacks.map((item) => (item.id === id ? {...item, ...updItem} : item))
        )
    }

    return(
        <FeedbackContext.Provider value={{
            feedbacks: feedbacks,
            feedbackEdit: feedbackEdit,
            deleteFeedback: deleteFeedback,
            addFeedback: addFeedback,
            editFeedback: editFeedback,
            updateFeedback: updateFeedback
        }}>
            {children}
        </FeedbackContext.Provider>
    );
}

export default FeedbackContext;