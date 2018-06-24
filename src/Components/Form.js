import React from 'react';

const Form = props => (
  <form className="container-fluid" onSubmit={props.getWeather}>
    <div className="row">
      <div className="col-sm-12 col-md-6">
        <input type="text" name="city" placeholder="City..." />
      </div>
      <div className="col-sm-12 col-md-6">
        <input type="text" name="country" placeholder="Country..." />
      </div>
      <button>Get Weather</button>
    </div>
  </form>
);

export default Form;