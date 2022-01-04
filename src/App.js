import Header from './components/Header';
import FeedbackItem from './components/FeedbackItem';
import { useState } from 'react';
import feedbackData from './data/FeedbackData';

function App() {
    const [feedbacks, setFeedback] = useState(feedbackData)

    return(
        <>
            <Header />
            <div className="container">
                {feedbacks.map((feedback) => (
                    <FeedbackItem item={feedback} />
                ))}
            </div>
        </>
    );
}

export default App;