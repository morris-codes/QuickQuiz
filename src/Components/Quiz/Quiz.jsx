import React, { useState } from 'react'
import './Quiz.css'
import { data } from '../../assets/data';

const Quiz = () => {
    let [index,setIndex] = useState(0);
    let [question,setQuestion] = useState(data[index]);
    

  return (
    <div>
    <div class="background">
       <div class="parent">
            <div className='logo'>
                <img src="/public/quick-logo.png" alt="" />
            </div>
            <div class="welcome">
                <div class="welc">
                    <h6>Welcome to Quick-Quiz – Where Every Second Counts! <br />Think you're a genius under pressure? Prove it! Quick-Quiz is <br />your ultimate destination for fast-paced, brain-busting challenges. <br />💡 Test your wits. Beat the clock. Show the world what you’ve got! <br />Tap ‘Start’ now and claim your spot on the leaderboard!</h6>
                </div>
                <div className='course-home'>
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
                    </ul>
                </div>
                <div className='course'>
                    <ul>
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
            </div>
            <div class="l-nav">
                <button className='start-btn'> <a href= "#quiz-section">Start</a></button>
            </div>
        </div>
    </div>
    <div id='quiz-section' class="background-1">
       <div class="parent-1">
            <div className='logo'>
                <img src="/public/quick-logo.png" alt="" />
            </div>
            <div class="question-1">
                <div class="que-1">
                    <h6>{index+1}. {question.question}</h6>
                </div>
                <div className='course-home'>
                <div class="option-1">
                    <ul>
                        <li>
                            <img src="/public/A.jpg" alt="" />
                            <p>{question.option1}</p>
                        </li>
                        <li>
                            <img src="/public/B.jpg" alt="" />
                            <p>{question.option2}</p>
                        </li>

                    </ul>
                </div>
                <div className='option-1'>
                    <ul>
                    <li>
                            <img src="/public/C.jpg" alt="" />
                            <p>{question.option3}</p>
                        </li>
                        <li>
                            <img src="/public/D.jpg" alt="" />
                            <p>{question.option4}</p>
                        </li>

                    </ul>
                </div>
                </div>


            </div>
            <div class="nav">
                <button>Previous</button>
                <button>Next</button>
            </div>
            <div className='index'><i>1 of 20</i></div>
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
                <h4>16</h4>
                <p>out of 20</p>
            </div>
            <div class="r-nav">
                <button>Restart</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Quiz
