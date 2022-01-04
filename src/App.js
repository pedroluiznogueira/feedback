import Header from './components/Header';
import FeedbackItem from './components/FeedbackItem';
import { useState } from 'react';
import feedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';

function App() {
    const [feedbacks, setFeedbacks] = useState(feedbackData)

    return(
        <>
            <Header />
            <div className="container">
                <FeedbackList feedbacks={feedbacks} />
            </div>
        </>
    );
}

export default App;