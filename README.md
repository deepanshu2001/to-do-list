# To-Do List Application
![image](https://github.com/deepanshu2001/to-do-list/assets/44342782/e30f15e4-a6f4-4ee3-b3c8-f5882a6d482f)

This is a simple To-Do List application built with React. It allows users to add items to a list and display them.

## Features

- Add items to the to-do list
- Display the list of items

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/todo-list.git
    ```
2. Navigate to the project directory:
    ```bash
    cd todo-list
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

1. Start the development server:
    ```bash
    npm run dev
    ```
2. Open your browser and navigate to `http://localhost:5173`

## Code Overview

### App Component

```jsx
import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  function helper() {
    setItems((prevItems) => {
      return [...prevItems, text];
    });
    setText("");
  }

  function setter(event) {
    const val = event.target.value;
    setText(val);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={setter} type="text" value={text} />
        <button onClick={helper}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
