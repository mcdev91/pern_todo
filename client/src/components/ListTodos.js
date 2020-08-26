import React, { Fragment, useState, useEffect } from "react";
import EditTodo from "./EditTodo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const trashIcon = <FontAwesomeIcon icon={faTrashAlt} />

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
                <div
                  className='fa-3x'
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  {trashIcon}
                </div>
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
