import { createContext, useState, useEffect } from 'react';

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
        }, 1000);
    }

    const addFeedback = async (newFeedback) => {
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
        });
        const data = await response.json();
        setFeedbacks([data, ...feedbacks])
    };

    const deleteFeedback = async (id) => {
        if (window.confirm('Are you sure you want to delete it ?')) {
            const response = await fetch('/feedback/' + id, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            });
            const data = await response.json()
            setFeedbacks(feedbacks.filter((item) => item.id !== id));
        }
    };

    const editFeedback = (item) => {
        setFeedbackEdit({
            item: item,
            edit: true
        });
    };

    const updateFeedback = async (id, updItem) => {

        const response = await fetch('/feedback/' + id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updItem)
        });
        const data = await response.json();

        setFeedbacks(
            feedbacks.map((item) => (item.id === id ? {...item, ...data} : item))
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