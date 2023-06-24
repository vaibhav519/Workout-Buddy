import React, { useState, useEffect } from "react";

export const InputTitle = () => {
    const [title, setTitle] = useState("");
  
    useEffect(() => {
      // Load the title from local storage on component mount
      const storedTitle = localStorage.getItem("exerciseListTitle");
      if (storedTitle) {
        setTitle(storedTitle);
      }
    }, []);
  
    useEffect(() => {
      // Save the title to local storage whenever it changes
      localStorage.setItem("exerciseListTitle", title);
    }, [title]);
  
    return (
      <div>
        <input
          type="text"
          className="input-title"
          placeholder="Enter a title for the exercise list"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
    );
  };
  