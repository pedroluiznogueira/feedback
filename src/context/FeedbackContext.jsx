import { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ( {children} ) => {
    const [isLoading, setIsLoading] = useState(true);
    const [feedbacks, setFeedbacks] = useState([]);
    const [feedbackEdit, setFeedbackEdit] = useState({item: {}, edit: false});

    useEffect(() => {
        fetchFeedback();
    }, []);

    const fetchFeedback = async () => {
        setIsLoading(true);
        const response = await fetch('/feedback?_sort=id&_order=desc');
        const data = await response.json();
        setTimeout(() => {
            setFeedbacks(data);
            setIsLoading(false);
        }, 5000);
    }

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
            isLoading: isLoading,
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