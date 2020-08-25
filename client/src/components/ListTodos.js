import React, { Fragment, useState, useEffect } from "react";
import EditTodo from "./EditTodo";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  //delete todo function
  async function deleteTodo(id) {
    try {
      await fetch(`/todos/${id}`, {
        method: "DELETE",
      });

      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  }

  async function getTodos() {
    const res = await fetch("/todos");
    const todoArray = await res.json();
    setTodos(todoArray);
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Fragment>
      {" "}
      <table className="table mt-5">
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>
                {todo.description}
              </td>
              <td>
                {/* <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  X
                </button> */}

                <img
                  src={require=('./icons/delete.png')}
                  style={{
                    height: '25px', width: '25px'
                  }}
                  onClick={() => deleteTodo(todo.todo_id)}
                />

                <EditTodo todo={todo} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodos;
