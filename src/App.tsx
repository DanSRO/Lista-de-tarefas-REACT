import React from 'react';
import { Header } from './components/Header/Header';
import './styles/global.css';
import { Task } from './components/Tasks/Tasks';

function App() {
  return (
  <>
    <Header/>
    <Task/>
  </>);
}

export default App;
