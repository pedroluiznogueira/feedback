import Card from './shared/Card';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';

function FeedbackItem({ item }) {

  return (
    <Card reverse={item.rating == 0 && true}>
      <div className='num-display'>{item.rating}</div>
      <button className="close">
        <FaTimes color='purple'/>        
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem