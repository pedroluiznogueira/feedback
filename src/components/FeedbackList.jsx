import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types'
import { getPreEmitDiagnostics } from 'typescript';
import { motion, AnimatePresence } from 'framer-motion';

function FeedbackList( {feedbacks, handleDelete} ) {
    
    return(
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
                            handleDelete={handleDelete}
                        />

                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
      })
    ),
}

export default FeedbackList;