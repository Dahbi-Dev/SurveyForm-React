import React from "react";

export default function Header() {
  return (
    <div>
      <header className="header">
        <h1 id="title" className="text-center">
          freeCodeCamp Survey Form
        </h1>
        <p id="description" className="description text-center">
          Thank you for taking the time to help us improve the platform
        </p>
      </header>
    </div>
  );
}
