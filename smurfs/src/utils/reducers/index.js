import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILURE,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE,
  EDIT_SMURF_START,
  EDIT_SMURF_SUCCESS,
  EDIT_SMURF_FAILURE,
  DELETE_SMURF_START,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAILURE
} from "../actions";

const INITIAL_STATE = {
  smurfs: [],
  isLoading: false,
  isAdding: false,
  isEditing: false,
  isDeleting: false,
  error: ""
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SMURFS_START:
      return { ...state, isLoading: true };
    case FETCH_SMURFS_SUCCESS:
      return { ...state, smurfs: action.payload, isLoading: false };
    case FETCH_SMURFS_FAILURE:
      return { ...state, error: action.payload, isLoading: false };
    case ADD_SMURF_START:
      return { ...state, isAdding: true };
    case ADD_SMURF_SUCCESS:
      return { ...state, smurfs: action.payload, isAdding: false };
    case ADD_SMURF_FAILURE:
      return { ...state, error: action.payload, isAdding: false };
    case EDIT_SMURF_START:
      return { ...state, isEditing: true };
    case EDIT_SMURF_SUCCESS:
      return { ...state, smurfs: action.payload, isEditing: false };
    case EDIT_SMURF_FAILURE:
      return { ...state, error: action.payload, isEditing: false };
    case DELETE_SMURF_START:
      return { ...state, isDeleting: true };
    case DELETE_SMURF_SUCCESS:
      return { ...state, smurfs: action.payload, isDeleting: false };
    case DELETE_SMURF_FAILURE:
      return { ...state, error: action.payload, isDeleting: false };
    default:
      return state;
  }
};
