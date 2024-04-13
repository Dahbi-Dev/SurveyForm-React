import React from "react";

export default function FormGroup() {
  return (
    <div>
      <div className="form-group">
        <label id="name-label" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          placeholder="Enter your name"
          required
        />
      </div>
      <div className="form-group">
        <label id="email-label" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-control"
          placeholder="Enter your Email"
          required
        />
      </div>
      <div className="form-group">
        <label id="number-label" htmlFor="number">
          Age<span className="clue">(optional)</span>
        </label>
        <input
          type="number"
          name="age"
          id="number"
          min="10"
          max="99"
          className="form-control"
          placeholder="Age"
        />
      </div>
      <div className="form-group">
        <p>Which option best describes your current role?</p>
        <select id="dropdown" name="role" className="form-control" required>
          <option disabled  defaultValue>
            Select current role
          </option>
          <option defaultValue="student">Student</option>
          <option defaultValue="job">Full Time Job</option>
          <option defaultValue="learner">Full Time Learner</option>
          <option defaultValue="preferNo">Prefer not to say</option>
          <option defaultValue="other">Other</option>
        </select>
      </div>
    </div>
  );
}
