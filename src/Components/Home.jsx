import React from 'react';
import '../Styles/Home.css';
import { Link } from 'react-router-dom';
import Header from './Header';

const Home = () => {
  return (
        <div className="parent">

          {/* HEADER SECTION - IMPORTED FROM HEADER COMPONENT */}
          <Header/>

          <div className="welcome">
            <div className="welcome-message"> 

              {/* WELCOME MESSAGE SECTION */}

              {/* THIS MESSAGE WILL DISPLAY ON LARGE SCREENS */}
              <h6 className='welc-large' >Welcome to Quick-Quiz – Where Every Second Counts! <br />Think you're a genius under pressure? Prove it! Quick-Quiz is your ultimate destination for fast-paced, brain-busting challenges. <br />💡 Test your wits. Beat the clock. Show the world what you’ve got! <br />Tap ‘Start’ now and claim your spot on the leaderboard!</h6>
              
              {/* THIS MESSAGE WILL DISPLAY ON SMALLER SCREENS */}
              <h6 className='welc-small'>Welcome to Quick-Quiz. <br/>Test your wits! Beat the clock. Top the leaderboard. <br/> Tap "Start" now!</h6>
            </div>

            {/* TEST CATEGORIES SECTION */}
            <div className="test-categories">
              <div className="test-course">
                <img src="/html.jpg" alt="html" />
                <p>HTML</p>
              </div>

              <div className="test-course">
                <img src="/JS.jpg" alt="html" />
                <p>Javascript</p>
              </div>

              <div className="test-course">
                <img src="/css.jpg" alt="html" />
                <p>CSS</p>
              </div>

              <div className="test-course">
                <img src="/react.jpg" alt="html" />
                <p>React</p>
              </div>
            </div>

            {/* START BUTTON */}
            <div className="l-nav">
                <Link to="/problems" ><button className='btn'> Start</button></Link>
            </div>
          </div>
        </div>
    
  )
}

export default Home;