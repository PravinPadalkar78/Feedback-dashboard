import React from "react";

export default function FeedBackPage({ feedback, setFeedback, setFeedbacks,editingID,setEditingID }) {
  const handleChange = (e) => {
    setFeedback((prevState) => ({ ...prevState, feedback: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(editingID)
    {
      setFeedbacks((prevState)=>
        prevState.map((ele)=>{
          if(ele.id === editingID)
          {
            const newData = {
              feedback: feedback.feedback,
              id: editingID,
              date: new Date(),
            };
            return newData
          }
          else return ele;
        })
      )
      setEditingID('')
      return;
    }
    const newData = {
      ...feedback,
      id: crypto.randomUUID().slice(0, 4),
      date: new Date(),
    };
    setFeedbacks((prevState) => [...prevState, newData]);
    setFeedback({ id: "", feedback: "" });
  };
  return (
    <form className="addFeedback">
      <h2>Feedback</h2>
      <div className="input-group">
        <label htmlFor="feedback">Enter the feedback:</label>
        <textarea
          className="textarea"
          type="text"
          name="feedback"
          id="feedback"
          placeholder="Enter the Feedback"
          value={feedback.feedback}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="input-group">
        <button
          onClick={(e) => handleSubmit(e)}
          className="submit-btn"
          type="submit"
        >
          {editingID? 'Update':'Submit'}
        </button>
      </div>
    </form>
  );
}
