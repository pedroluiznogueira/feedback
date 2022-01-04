import { BrowserRouter as Router, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import FeedbackItem from './components/FeedbackItem';
import { useState } from 'react';
import feedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import { v4 as uuidv4 } from 'uuid';
import AboutPage from './pages/AboutPage';

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
            <Router>
                    <Header />
                    <div className="container">
                        <Routes>
                            <Route exact path='/' element={
                                <>
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
                                </>
                            }>
                            </Route>
                            <Route path='/about' element={<AboutPage />}/>
                        </Routes>
                    </div>
            </Router>
        </>
    );
}

export default App;