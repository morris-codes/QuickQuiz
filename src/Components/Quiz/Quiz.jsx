import React from 'react'
import './Quiz.css'
import { data } from '../../assets/data';

const Quiz = () => {
    

  return (
    <>
    <div class="background">
       <div class="parent">
            <div className='logo'>
                <img src="/public/quick-logo.png" alt="" />
            </div>
            <div class="welcome">
                <div class="welc">
                    <h6>Welcome to Quick-Quiz – Where Every Second Counts! <br />Think you're a genius under pressure? Prove it! Quick-Quiz is your ultimate destination for fast-paced, brain-busting challenges. <br />💡 Test your wits. Beat the clock. Show the world what you’ve got! <br />Tap ‘Start’ now and claim your spot on the leaderboard!</h6>
                </div>
                <div class="course">
                    <ul>
                        <li>
                            <img src="/public/html.jpg" alt="" />
                            <p>HTML</p>
                        </li>
                        <li>
                            <img src="/public/css.jpg" alt="" />
                            <p>CSS</p>
                        </li>
                        <li>
                            <img src="/public/JS.jpg" alt="" />
                            <p>Javascript</p>
                        </li>
                        <li>
                            <img src="/public/react.jpg" alt="" />
                            <p>React</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="l-nav">
                <button>Start</button>
            </div>
        </div>
    </div>
    <div class="background-1">
       <div class="parent-1">
            <div className='logo'>
                <img src="/public/quick-logo.png" alt="" />
            </div>
            <div class="question-1">
                <div class="que-1">
                    <h6>What does HTML stand for?</h6>
                </div>
                <div class="option-1">
                    <ul>
                        <li>
                            <img src="/public/A.jpg" alt="" />
                            <p>HyperText Markup Language</p>
                        </li>
                        <li>
                            <img src="/public/B.jpg" alt="" />
                            <p>HyperText Markdown Language</p>
                        </li>
                        <li>
                            <img src="/public/C.jpg" alt="" />
                            <p>HighText Markup Language</p>
                        </li>
                        <li>
                            <img src="/public/D.jpg" alt="" />
                            <p>HyperTool Markup Language</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="nav">
                <button>Next</button>
            </div>
            <div className='index'><i>Question 1 of 20</i></div>
        </div>
    </div>
    <div class="Results">
        <div class="p-result">
            <div className='logo'>
                <img src="/public/quick-logo.png" alt="" />
            </div>
            <div class="result-msg">
                <p><i>Quiz completed</i></p>
                <h6>You scored....</h6>
            </div>
            <div class="score">
                <h4>17</h4>
                <p>out of 20</p>
            </div>
            <div class="r-nav">
                <button>Restart</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Quiz
