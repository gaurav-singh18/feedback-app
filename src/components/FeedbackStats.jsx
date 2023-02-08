import React from 'react'
import PropTypes from 'prop-types' //use impt

function FeedbackStats({feedback}) {
    //calculate ratings avg
    let average=feedback.reduce((acc,cur)=>{
return acc + cur.rating
    },0)/ feedback.length

    //round the average to 1 decimal place with toFixed function and then remove any 0 after 
    //decimal if the avg is a whole number by using replace and passing the regex
    average=average.toFixed(1).replace(/[.,]0$/,'') 
    
  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(average)?0:average}</h4>
    </div>
  )
}

FeedbackStats.propTypes={
    feedback:PropTypes.array.isRequired,
}
export default FeedbackStats