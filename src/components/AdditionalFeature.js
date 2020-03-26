import React from 'react';
import { addFeature } from '../actions/actions';
import { connect } from 'react-redux';

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => props.addFeature(props.item)} className="button">Add</button>
      {props.item.name} (+{props.item.price})
    </li>
  );
};

export default connect(null, { addFeature })(AdditionalFeature);