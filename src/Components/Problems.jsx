import React, { useEffect, useState } from 'react';
import { data } from '../assets/data';
import Header from './Header';
import '../Styles/Problems.css';
import { Link } from 'react-router-dom';

const Problems = ({giveData}) => {
    let [index, setIndex] = useState(0);
    let [selectedOptions, setSelectedOption] = useState([]);
    let [question, setQuestion] = useState(data[index]);

    //Option clicks
    const optionClick = (option) => {
        const retainOption = [...selectedOptions];
            retainOption[index] = option;
            setSelectedOption(retainOption);
            selectedOptions = retainOption
        };
        
    
        //Next Button
        const nextButton = () => {
            if (index < data.length - 1) {
                setIndex(index + 1);
                setQuestion(data[index + 1]);
            }
        }
        
        //Previous Button
        const previousButton = () => {
            if (index > 0) {
                setIndex(index - 1);
                setQuestion(data[index - 1]);
            }
        }
        const [allAnswers, setAllAnswers] = useState([]);
    
        useEffect(() => {
            let temp = data.map(dat => dat.answer); 
            setAllAnswers(temp); 
        }, [data]); 
        
        useEffect(() => {
        }, [allAnswers]); 
    
        
        let score = 0
        //Submit Button
        const submitButton = () => {
            for (let t=0; t<allAnswers.length; t++){
                if(allAnswers[t] == selectedOptions[t]){
                    score = score + 1
                }
            }
            console.log(score);
            localStorage.setItem('scoreState', JSON.stringify(score))
            giveData(score)
        };
  return (
    <>
       <div className="parent">
            <Header/>

            {/* QUESTION SECTION */}
            <div className="question-1">
                <div className="que-1">
                    <h6>{question.question}</h6>
                </div>

            {/* OPTIONS CATEGORY */}
            <div className="solution">
                <div className="option-1">
                    <div onClick={() => optionClick(1)} 
                        className={selectedOptions[index] === 1 ? 'selected' : ''}>
                        <div className="option-items">
                            <img className='option-img' src="/A.jpg" alt="" />
                            <p>{question.option1}</p>
                        </div>
                    </div>
                </div>

                <div className="option-1">
                    <div onClick={() => optionClick(2)} 
                        className={selectedOptions[index] === 2 ? 'selected' : ''}>
                        
                        <div className="option-items">
                            <img className='option-img' src="/B.jpg" alt="" />
                            <p>{question.option2}</p>
                        </div>
                    </div>
                </div>

                <div className="option-1">
                    <div onClick={() => optionClick(3)} 
                        className={selectedOptions[index] === 3 ? 'selected' : ''}>
                        <div className="option-items">
                            <img className='option-img' src="/C.jpg" alt="" />
                            <p>{question.option3}</p>
                        </div>
                    </div>
                </div>

                <div className="option-1">
                    <div onClick={() => optionClick(4)} 
                        className={selectedOptions[index] === 4 ? 'selected' : ''}>
                        <div className="option-items">
                            <img className='option-img' src="/D.jpg" alt="" />
                            <p>{question.option4}</p>
                        </div>
                    </div>
                </div>

            </div>

            </div>
            <div className="nav">
                <button className='previous' onClick={previousButton} disabled={index===0}>Previous</button>
                {index === data.length - 1 ? (
                  <Link className='submit-link' to='/results'><button className='submit-button' onClick={submitButton}>Submit</button></Link>       
                ):(
                <button className='next' onClick={nextButton}>Next</button>
                )}
            </div>
                  <div className='index'><i><b>{index + 1} of {data.length}</b></i></div>
        </div>
    </>
  )
}

export default Problems