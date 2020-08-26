import React, { Fragment, useState } from "react";
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const addIcon = <FontAwesomeIcon icon={faPlus} />

const InputTodo = () => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      await fetch("/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Fragment>
      <h1 className="text-center my-5">Sąrašas</h1>
      <form className="d-flex" onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="Pridėti į sąrašą"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>{addIcon}</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
