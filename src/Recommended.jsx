import React from "react";

export default function Recommended() {
  return (
    <div>
      <div className="form-group">
        <p>Would you recommend freeCodeCamp to a friend?</p>
        <label>
          <input
            name="user-recommend"
            defaultValue="definitely"
            type="radio"
            className="input-radio"
            defaultChecked
          />
          Definitely
        </label>
        <label>
          <input
            name="user-recommend"
            defaultValue="maybe"
            type="radio"
            className="input-radio"
          />
          Maybe
        </label>

        <label>
          <input
            name="user-recommend"
            defaultValue="not-sure"
            type="radio"
            className="input-radio"
          />
          Not sure
        </label>
      </div>

      <div className="form-group">
        <p>What is your favorite feature of freeCodeCamp?</p>
        <select
          id="most-like"
          name="mostLike"
          className="form-control"
          required
        >
          <option disabled  defaultValue>
            Select an option
          </option>
          <option defaultValue="challenges">Challenges</option>
          <option defaultValue="projects">Projects</option>
          <option defaultValue="community">Community</option>
          <option defaultValue="openSource">Open Source</option>
        </select>
      </div>
    </div>
  );
}
