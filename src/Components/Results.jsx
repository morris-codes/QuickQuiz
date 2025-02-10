import React from 'react';
import '../Styles/Results.css';
import { Link } from 'react-router-dom';
import Header from './Header';

const Results = () => {
  return (
    <div className="parent">
        <Header/> 
        <div className="p-result">
            <div className="result-msg">
                <p><i>Quiz completed</i></p>
                <h6>You scored....</h6>
            </div>
            <div className="score">
                <h4>16</h4>
                <p>out of 20</p>
            </div>
            <div className="r-nav">
                <button>Restart</button>
            </div>
        </div>
    </div>
  )
}

export default Results