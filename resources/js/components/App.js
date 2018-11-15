import React from 'react';
import { connect } from 'react-redux';
import { addFeature } from '../state/actions/actions';

function App(props) {

  const {features} = props;
  const handleClick = () => props.dispatch(addFeature("+Interaction"));

  return (
      <div className="flex-center position-ref full-height">
        <div className="content">
          <div className="title m-b-md">
            It's Laravel in Docker with {features}!
          </div>
          <div>
            <button onClick={handleClick}>
              Click me!
            </button>
          </div>
        </div>
      </div>
  );
}

const mapStateToProps = function(state) {
  return {
    features: state.features
  }
};

export default connect(mapStateToProps)(App);