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
      //Leave it as it is
    }
  };

  return (
    <div className="smurf">
      {props.new ? (
        <div className="new">
          <Link to="/add">
            <span>+</span>
            <br />
            Add New
          </Link>
        </div>
      ) : (
        <>
          <h3>{smurf.name}</h3>
          <p>
            Age: {smurf.age}
            <br />
            Height: {smurf.height}
          </p>
          <div className="action-buttons">
            <Link to={`/edit/${smurf.id}`}>Edit</Link>
            <Link to="#" onClick={showAlert}>
              Delete
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default connect(null, { deleteSmurf })(Smurf);
