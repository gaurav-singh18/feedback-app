import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'


function App() {
  const [feedback,setFeedback]=useState(FeedbackData)
  const addFeedback=(newFeedback)=>{
    newFeedback.id=uuidv4()
    //using the spread operator to add the new feedback on top of the previous feedback
    setFeedback([newFeedback, ...feedback]) 
  }
  const deleteFeedback=(id) =>{
    if(window.confirm('Are you sure you want to delete?')){
      setFeedback(feedback.filter((item)=> item.id!==id))
    }//using a higher order function:filter , it returns an array minus the one we are deleting
  }
  return (
    <>
        <Header />
        <div className='container'>
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback}/>
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
        </div>
    </>
        
  )
}

export default App