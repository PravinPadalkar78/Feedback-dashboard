import React from "react";

export default function Dashboard(props) {
  const {setFeedback, feedbacks,setFeedbacks,setEditingID} = props;
  const handleDelete=(e,id)=>{
    setFeedbacks((prevState)=>
      prevState.filter((data)=>{
        if(data.id == id)
        {
          return false;
        }
        return true;
      })
    )
  }

  const handleUpdate=(e,id,feedback)=>{
    setEditingID(id)
    console.log(id)
    setFeedback({
      id:id,
      feedback:feedback
    })
  }
  return (
    <div className=" dashboard">
      <h1>Feedback Dashboard</h1>
      <table className="content-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Feedback</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.map(({id,feedback,date}) =>
            <tr key={id}>
              <td>{id}</td>
              <td>{feedback}</td>
              <td>{date.getFullYear()+"/"+parseInt(date.getMonth())+1+"/"+ date.getDate()}</td>
              <td>
                {/* <i className="fa fa-eye icon" onClick={(e)=>handlePreview(e,id,date)} aria-hidden="true"></i> */}
                <i className="fas fa-edit  icon" onClick={(e)=>handleUpdate(e,id,feedback)}></i>
                <i className="fa fa-trash icon" onClick={(e)=>handleDelete(e,id)} aria-hidden="true"></i>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
