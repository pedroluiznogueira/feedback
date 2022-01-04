import Header from './components/Header';
import FeedbackItem from './components/FeedbackItem';
import { useState } from 'react';
import feedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';

function App() {
    const [feedbacks, setFeedbacks] = useState(feedbackData)

    const deleteFeedback = (id) => {
        console.log(id)
    }

    return(
        <>
            <Header />
            <div className="container">
                <FeedbackList 
                    feedbacks={feedbacks}  
                    handleDelete={deleteFeedback}
                />
            </div>
        </>
    );
}

export default App;