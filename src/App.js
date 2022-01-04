import Header from './components/Header';
import FeedbackItem from './components/FeedbackItem';
import { useState } from 'react';

const feedbackData = [
    { rating: 5, text: 'First feedback' },
    { rating: 10, text: 'Second feedback' }
];

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