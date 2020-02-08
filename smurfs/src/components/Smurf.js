import React from "react";
import { connect } from "react-redux";
import { deleteSmurf } from "../utils/actions";
import { Link } from "react-router-dom";

const Smurf = props => {
  const { smurf } = props;

  const showAlert = () => {
    if (window.confirm(`Are you sure you want to delete ${smurf.name}?`)) {
      props.deleteSmurf(smurf.id);
    } else {
      //Cancel
    }
  };
  return (
    <div>
      <h3>{smurf.name}</h3>
      <p>Age: {smurf.age}</p>
      <p>Height: {smurf.height}</p>
      <Link to={`/edit/${smurf.id}`}>Edit</Link> -{" "}
      <Link to="#" onClick={showAlert}>
        Delete
      </Link>
    </div>
  );
};

export default connect(null, { deleteSmurf })(Smurf);
