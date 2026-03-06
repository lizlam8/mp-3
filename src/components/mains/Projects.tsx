import {useState} from "react";
import styled from "styled-components";




const StyledOutput = styled.h3`
    color: ${(props)=>props.theme===true?"red":"black"};
    text-align: center;
    font-size: calc(2px + 2vw);
    border-radius: 10px;
    background-color: lightgray;
    opacity: 0.8;
    padding: 10px;
    margin-top: 12%;
`;

const StyledMain = styled.main`
    height:100vh;
    padding: 1% 2%;
    text-align: center;
    width: 70%;
    font-size: calc(2px + 1.4vw);
    background-image: url("/clovers.jpg");
    background-size: cover;
    background-position: center;
    background-color: blanchedalmond;
    @media screen and (max-width: 1000px) {
        width: 100%;
    }
    
    
    .first-label,
    .second-label {
        border-radius: 8px;
        opacity: 0.8;
        color: black;
        background-color: lightgray;
        font-size: calc(2px + 2vw);
        padding: 10px;
    }
    
    
    div{
        width: 80%;
        margin: 5% auto;
    }
`

const StyledProjects = styled.h1`
    font-size: calc(3px + 3vw);
    padding-top: 2%;
    padding-bottom: 2%;
`;

const StyledText = styled.text`
    
    color: white;
    font-size: calc(2px + 2vw);
`

export default function Projects(){

    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [output, setOutput] = useState(0);

    function addition() {
        const value = Number(input1) + Number(input2);
        setOutput(value);
    }


    function subtraction(){
        const value = Number(input1) - Number(input2);
        setOutput(value);
    }


    function multiplication(){
        const value = Number(input1) * Number(input2);
        setOutput(value);
    }

    function division(){
        const value = Number(input1) / Number(input2);
        setOutput(value);
    }

    function power(){
        const number = Number(input1);
        const power = Number(input2);

        let result = 1;

        for (let i = 0; i < power; i++) {
            result = result * number;
        }
        setOutput(result);
    }

    function clearCalc(){
        const value = "";
        setInput1(value);
        setInput2(value);
        setOutput(0);
    }

    return (
        <StyledMain>
            <title>Projects | Elizabeth's Resume</title>
            <StyledProjects><strong><u>Projects</u></strong></StyledProjects>

            <StyledText>Liz's Lucky Calculator</StyledText>

            <div className="calc">
                <div className="first-label">
                    <label htmlFor="first-number">First Number:</label>
                    <input
                        type="text"
                        id="first-number"
                        value={input1}
                        onChange={(event) => setInput1(event.target.value)}
                    />
                </div>
                <br/>

                <div className="second-label">
                    <label htmlFor="second-number">Second Number:</label>
                    <input
                        type="text"
                        id="second-number"
                        value={input2}
                        onChange={(e) => setInput2(e.target.value)}
                    />
                </div>
            </div>

            <div className="result">
                <StyledOutput theme={output<0?true:false}>{output}</StyledOutput>
            </div>


            <div>
                <button type="button" onClick={addition}>+</button>
                <button type="button" onClick={subtraction}>-</button>
                <button type="button" onClick={multiplication}>*</button>
                <button type="button" onClick={division}>/</button>
                <button type="button" onClick={power}>**</button>
                <button type="button" onClick={clearCalc}>clear</button>
            </div>
        </StyledMain>
    )
}
