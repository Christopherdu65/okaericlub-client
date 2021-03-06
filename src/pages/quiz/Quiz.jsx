import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import FinalScreen from '../finalScreen/FinalScreen';
import { Context } from '../../context/Context';
import { axiosInstance } from '../../Config';
// import FinalScreen from "./pages/finalScreen/FinalScreen"

const QuizWindow = styled.div`
    text-align: center;
    font-size: clamp(20px, 2.5vw, 24px);
    margin-top: 10vh;
`;

const Options = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 2em auto;
    @media screen and (min-width: 1180px) {
        width: 50%;
    }
`;

const Option = styled.button`
    display: block;
    border: 1px solid #616A94;
    border-radius: 15px;
    padding: 15px 30px;
    text-decoration: none;
    color: #616A94;
    background-color: #161A31;
    color:#ff6262;
    transition: 0.3s;
    font-size: 1em;
    outline: none;
    user-select: none;
    margin-top: 1em;
    cursor: pointer;
    
    @media screen and (min-width: 1180px) {
        &:hover {
            color: white;
            background-color: #616A94;
        }
    }
`;

const Question = styled.div`
    width: 70%;
    margin: 0 auto;
`;

const Quiz = () => {

    const [quiz, setQuiz] = useState([]);
    const [number, setNumber] = useState(0);
    const [pts, setPts] = useState(0);
    const {user} = useContext(Context);

    const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

    const pickAnswer = (e) => {

        let userAnswer = e.target.outerText;

        if (quiz[number].answer === userAnswer) setPts(pts + 1);
        setNumber(number + 1);
    }
    console.log(user.totalScore);
    console.log(pts);
    const updatedUser = {
        "userId": `${user._id}`,
        "totalScore": user.totalScore + pts,
    };
    useEffect(()=>{
        const getInfo = async()=>{
            const response = await axiosInstance.get(`/users/${user._id}`);
        
            if(number === 10){
                const res = await axiosInstance.put(`/users/${user._id}`, { "userId": `${user._id}`,
                "totalScore": response.data.totalScore + pts,}).then(updatedUser.totalScore = user.totalScore);
                console.log(res.data);
            }
    }
    getInfo();
    },)

    useEffect(() => {

        axios.get('https://opentdb.com/api.php?amount=10&category=31&type=multiple')
            .then(res => {
                setQuiz(res.data.results.map(item => (

                    {
                        question: item.question,
                        options: shuffle([...item.incorrect_answers, item.correct_answer]),
                        answer: item.correct_answer
                    }

                )));
            })
            .catch(err => console.error(err))

    }, []);


    return (
        <QuizWindow>
            { quiz[number] &&

                <>
                    <Question dangerouslySetInnerHTML={{ __html: quiz[number].question }}></Question>

                    <Options>
                        {quiz[number].options.map((item, index) => (
                            <Option key={index} dangerouslySetInnerHTML={{ __html: item }} onClick={pickAnswer}></Option>
                        ))}
                    </Options>
                </>

            }
            {
                number === 10 && <FinalScreen pts={pts}/>
            } 
        </QuizWindow>
    )
}

export default Quiz