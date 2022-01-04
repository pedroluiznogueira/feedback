import Header from './components/Header';
import FeedbackItem from './components/FeedbackItem';
import { useState } from 'react';
import feedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';

function App() {
    const [feedbacks, setFeedbacks] = useState(feedbackData)

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete it ?')) {
            setFeedbacks(feedbacks.filter((item) => item.id !== id))
        }
    }

    return(
        <>
            <Header />
            <div className="container">
                <FeedbackStats feedbacks={feedbacks} />
                <FeedbackList 
                    feedbacks={feedbacks}  
                    handleDelete={deleteFeedback}
                />
            </div>
        </>
    );
}

export default App;