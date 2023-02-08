import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'


function App() {
  const [feedback,setFeedback]=useState(FeedbackData)
  const deleteFeedback=(id) =>{
    if(window.confirm('Are you sure you want to delete?')){
      setFeedback(feedback.filter((item)=> item.id!==id))
    }//using a higher order function:filter , it returns an array minus the one we are deleting
  }
  return (
    <>
        <Header />
        <div className='container'>
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
        </div>
    </>
        
  )
}

export default App