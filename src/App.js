import Header from './components/Header';
import FeedbackItem from './components/FeedbackItem';
import { useState } from 'react';
import feedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import { v4 as uuidv4 } from 'uuid';

function App() {
    const [feedbacks, setFeedbacks] = useState(feedbackData)
    
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedbacks([newFeedback, ...feedbacks]);
    }

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete it ?')) {
            setFeedbacks(feedbacks.filter((item) => item.id !== id))
        }
    }


    return(
        <>
            <Header />
            <div className="container">
                <FeedbackForm 
                    handleAdd={addFeedback}
                />
                <FeedbackStats 
                    feedbacks={feedbacks} 
                />
                <FeedbackList 
                    feedbacks={feedbacks}  
                    handleDelete={deleteFeedback}
                />
            </div>
        </>
    );
}

export default App;