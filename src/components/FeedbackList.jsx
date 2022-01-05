import FeedbackItem from './FeedbackItem';
import { motion, AnimatePresence } from 'framer-motion';
import FeedbackContext from '../context/FeedbackContext';
import { useContext } from 'react';
import Spinner from './shared/Spinner';

function FeedbackList() {
    const {feedbacks, isLoading} = useContext(FeedbackContext);
    
    return isLoading ? (
        <Spinner />
        ) : (
        <div className="feedback-list">
            <AnimatePresence>
                {feedbacks.map((feedback) => (
                    <motion.div 
                        key={feedback.id}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                    >

                        <FeedbackItem
                            key={feedback.id} 
                            item={feedback}
                        />

                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}

export default FeedbackList;