import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import './App.css';
import Ceiling from './Components/Ceiling/Ceiling';
import Hallway from './Components/Hallway/Hallway';
import Floor from './Components/Floor/Floor';
import Form from './Components/Form/Form';
import SingleView from './Components/singleView/singleView';
import MiddleView from './Components/middleView/middleView';

// Import Redux Store
import { submitForm, resetForm } from "./Store/form";
const mapDispatchToProps = { submitForm, resetForm };

{/* 
<Form />
<SingleView />
<MiddleView /> 
*/}

function App() {
  return (
    <div className="App">
      <Ceiling />
      <Hallway />
      <Floor />
    </div>
  );
}

const mapStateToProps = state => ({
  form: state.form,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
