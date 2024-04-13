import React from "react";

export default function ImproveCheckbox () {
  return (
    <div className="form-group">
      <p>
        What would you like to see improved?
        <span className="clue">(Check all that apply)</span>
      </p>

      <label>
        <input
          name="prefer"
          defaultValue="front-end-projects"
          type="checkbox"
          className="input-checkbox"
        />
        Front-end Projects
      </label>
      <label>
        <input
          name="prefer"
          defaultValue="back-end-projects"
          type="checkbox"
          className="input-checkbox"
        />
        Back-end Projects
      </label>
      <label>
        <input
          name="prefer"
          defaultValue="data-visualization"
          type="checkbox"
          className="input-checkbox"
        />
        Data Visualization
      </label>
      <label>
        <input
          name="prefer"
          defaultValue="challenges"
          type="checkbox"
          className="input-checkbox"
        />
        Challenges
      </label>
      <label>
        <input
          name="prefer"
          defaultValue="open-source-community"
          type="checkbox"
          className="input-checkbox"
        />
        Open Source Community
      </label>
      <label>
        <input
          name="prefer"
          defaultValue="gitter-help-rooms"
          type="checkbox"
          className="input-checkbox"
        />
        Gitter help rooms
      </label>
      <label>
        <input
          name="prefer"
          defaultValue="videos"
          type="checkbox"
          className="input-checkbox"
        />
        Videos
      </label>
      <label>
        <input
          name="prefer"
          defaultValue="city-meetups"
          type="checkbox"
          className="input-checkbox"
        />
        City Meetups
      </label>
      <label>
        <input
          name="prefer"
          defaultValue="wiki"
          type="checkbox"
          className="input-checkbox"
        />
        Wiki
      </label>
      <label>
        <input
          name="prefer"
          defaultValue="forum"
          type="checkbox"
          className="input-checkbox"
        />
        Forum
      </label>
      <label>
        <input
          name="prefer"
          defaultValue="additional-courses"
          type="checkbox"
          className="input-checkbox"
        />
        Additional Courses
      </label>
    </div>
  );
}
