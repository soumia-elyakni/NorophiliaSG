import React from 'react';
import FormContainer from './components/auth/FormContainer';
import { Header } from './components/tools/Header';
import './App.css'; 
// import SignupForm from './components/auth/signup/SignupForm';

const App = () => {
  return (
    <div className="App">
      <Header />
      <FormContainer  />
      {/* <SignupForm />  */}
     
    </div>
  );
};

export default App;
