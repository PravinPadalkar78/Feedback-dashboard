import React, { useState } from 'react'
import FeedBackPage from './FeedBackPage'
import Dashboard from './Dashboard'
import Data from '../../Data';

export default function Home() {
    const [feedbacks,setFeedbacks] = useState(Data)
    const [feedback,setFeedback] = useState({
        id:"",
        feedback:""
    })
    // const [authenticated,setAuthenticated] = useState(false)
    const [editingID,setEditingID] = useState('');
    
  return (
    <div className='home'>
    <Dashboard feedbacks={feedbacks} setFeedbacks={setFeedbacks} setFeedback={setFeedback} setEditingID={setEditingID}/>
    {<FeedBackPage feedback={feedback} setFeedback={setFeedback} setFeedbacks={setFeedbacks} editingID={editingID} setEditingID={setEditingID} />}
    </div>
  )
}
