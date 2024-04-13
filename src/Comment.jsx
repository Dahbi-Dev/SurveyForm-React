import React from 'react'

export default function Comment () {
  return (
    <div>
         <div className="form-group">
          <p>Any comments or suggestions?</p> 
          <textarea
            id="comments"
            className="input-textarea"
            name="comment"
            placeholder="Enter your comment here..."
          ></textarea>
        </div>

        <div className="form-group">
          <button type="submit" id="submit" className="submit-button">
            Submit
          </button>
        </div>
    </div>
  )
}
