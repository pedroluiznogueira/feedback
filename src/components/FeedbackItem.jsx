import { useState } from "react"


function FeedbackItem({ item }) {

  const [rating, setRating] = useState(7)
  const [text, setText] = useState('Example text')

  const handleClick = () => {
    setRating(10)
    setText('Text changed')
  }

  return (
    <div className='card'>
      <div className='num-display'>{rating}</div>
      <div className='text-display'>{text}</div>
      <button onClick={handleClick}>Change State</button>
    </div>
  )
}

export default FeedbackItem