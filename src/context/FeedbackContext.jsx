import { createContext,useState } from "react";
import { v4 as uuidv4 } from 'uuid';
const FeedbackContext=createContext()

//provider with state
export const FeedbackProvider=({children})=>{
    const [feedback,setFeedback]=useState([
        {
            id:1,
            text:'This is feedback item 1',
            rating:10,
        },
        {
            id:2,
            text:'This is feedback item 2',
            rating:1,
        },
        {
            id:3,
            text:'This is feedback item 3',
            rating:8,
        },

    ])

    const[feedbackEdit,setFeedbackEdit]=useState({
        item:{}, //whatever we are editing
        edit:false,// button press= set edit mode on and bool value becomes true
    })

    const deleteFeedback=(id) =>{
        if(window.confirm('Are you sure you want to delete?')){
          setFeedback(feedback.filter((item)=> item.id!==id))
        }//using a higher order function:filter , it returns an array minus the one we are deleting
      }
    const addFeedback=(newFeedback)=>{
        newFeedback.id=uuidv4()
        //using the spread operator to add the new feedback on top of the previous feedback
        setFeedback([newFeedback, ...feedback]) 
      }
      
//Update Feedback item
const updateFeedback=(id,updItem)=>{
    setFeedback(feedback.map((item)=> (item.id===id?{...item,...updItem}:item)))
}

    // Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }
    return <FeedbackContext.Provider 
    value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext