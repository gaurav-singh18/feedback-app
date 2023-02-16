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
    return <FeedbackContext.Provider 
    value={{
        feedback,
        deleteFeedback,
        addFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext