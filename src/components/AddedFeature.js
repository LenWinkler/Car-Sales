import React from 'react';
import { removeFeature } from "../actions/actions";
import { connect } from 'react-redux';

const AddedFeature = props => {
  console.log('addedfeature props', props)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => props.removeFeature(props.item)} className="button">X</button>
      {props.item.name}
    </li>
  );
};




export default connect(null, { removeFeature })(AddedFeature);