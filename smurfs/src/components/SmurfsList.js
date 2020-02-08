import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSmurfs } from "../utils/actions";
import Smurf from "./Smurf";
import { Link } from "react-router-dom";

const SmurfsList = props => {
  const { fetchSmurfs } = props;
  useEffect(() => {
    fetchSmurfs();
  }, [fetchSmurfs]);

  return (
    <div>
      <Link to="/add">
        <h4>Add New Smurf</h4>
      </Link>
      {props.smurfs.map(smurf => (
        <Smurf key={smurf.id} smurf={smurf} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    error: state.error
  };
};

export default connect(mapStateToProps, { fetchSmurfs })(SmurfsList);
