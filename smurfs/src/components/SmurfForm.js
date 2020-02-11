import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addSmurf, editSmurf } from "../utils/actions";

const SmurfForm = props => {
  const INITIAL_STATE = { name: "", age: "", height: "" };
  const [form, setForm] = useState(INITIAL_STATE);

  const handleChange = event =>
    setForm({ ...form, [event.target.name]: event.target.value });

  const handleSubmit = event => {
    event.preventDefault();
    !id ? props.addSmurf(form) : props.editSmurf(form);
    setForm(INITIAL_STATE);
    props.history.push("/");
  };

  const { id } = props.match.params;

  useEffect(() => {
    if (id) {
      const smurfToEdit = props.smurfs.filter(
        smurf => Number(smurf.id) === Number(id)
      )[0];
      setForm(smurfToEdit);
    }
    return () => setForm(INITIAL_STATE);
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name:{" "}
        <input name="name" onChange={handleChange} value={form.name}></input>
      </label>
      <label htmlFor="age">
        Age: <input name="age" onChange={handleChange} value={form.age}></input>
      </label>
      <label htmlFor="height">
        Height:{" "}
        <input
          name="height"
          onChange={handleChange}
          value={form.height}
        ></input>
      </label>
      <button type="submit">{id ? "Save Changes" : "Add New Smurf"}</button>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(mapStateToProps, { addSmurf, editSmurf })(SmurfForm);
