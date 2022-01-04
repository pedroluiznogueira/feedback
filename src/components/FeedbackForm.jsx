import Card from './shared/Card';
import { useState } from 'react';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

function FeedbackForm( {handleAdd} ) {
    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');

    const handleTextChange = (e) => {
        setText(e.target.value);
        if (text.length >= 9) {
            setBtnDisabled(false)
            setMessage(null)
        } else {
            setMessage('Review must have at least 10 characters')
            setBtnDisabled(true)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newFeedback = {
            rating: rating,
            text: text
        }
        handleAdd(newFeedback)
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us ?</h2>
                <RatingSelect select={(rating) => {setRating(rating)}} />
                <div className="input-group">
                    <input 
                        onChange={handleTextChange} 
                        type="text" 
                        placeholder="Write a review"
                        value={text}
                    />
                    <Button type="submit" version="primary" isDisabled={btnDisabled}>
                        Send
                    </Button>
                </div>
                {message && <div className="message">{message}</div> }
            </form>
        </Card>
    )
}

export default FeedbackForm;