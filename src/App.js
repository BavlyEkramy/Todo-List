import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [x, setx] = useState([]);
  const [done, setDone] = useState(0);
  const [closed, setClosed] = useState(0);

  const titleRef = useRef();
  const descriptionRef = useRef();

  const add = () => {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const newData = { completed: false, title, description };

    if (title && description) {
      setx([...x, newData]);
    } else if (!title) alert("Please fill out the Title");
    else if (!description) alert("Please fill out the description");

    titleRef.current.value = "";
    descriptionRef.current.value = "";
  };

  const itemDone = (index) => {
    const newx = [...x];

    newx[index].completed = !newx[index].completed;

    setx(newx);
  };

  const toDelete = (index) => {
    const newx = [...x];

    newx.splice(index, 1);

    setx(newx);
  };

  return (
    <>
      <h2 className="title">To do List</h2>{" "}
      <div className="App">
        <input ref={titleRef} placeholder="What does your title entail? " />
        <input ref={descriptionRef} placeholder="What is your description" />
        <button onClick={add}>Add</button>
        <div className="todo-item">
          {x.map(({ title, description, completed }, index) => {
            return (
              <div
                className={completed ? "item item-t" : "item item-f"}
                key={index}
              >
                <div className="contact">
                  <h2>{title}</h2> <p>{description}</p>
                </div>
                <span className="check">
                  <i
                    className={
                      completed ? "far fa-times-circle done" : "far fa-check-circle notDone"
                    }
                    onClick={() => itemDone(index)}
                  ></i>
                  <i
                    className="fas fa-trash del"
                    onClick={() => toDelete(index)}
                  ></i>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
