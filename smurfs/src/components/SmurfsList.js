import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSmurfs } from "../utils/actions";
import Smurf from "./Smurf";

const SmurfsList = props => {
  useEffect(() => {
    props.fetchSmurfs();
  }, []);

  return (
    <div className="smurfs-list">
      {props.smurfs.map(smurf => (
        <Smurf key={smurf.id} smurf={smurf} />
      ))}
      <Smurf new />
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
