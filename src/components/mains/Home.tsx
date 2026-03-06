import styled from "styled-components";

const StyledMain = styled.main`
    height:100vh;
    text-align: center;
    width: 70%;
    padding: 1% 2%;
    background-color: blanchedalmond;
   
    
    h5{
        padding-left: 5%;
        padding-right: 5%;
        padding-top: 2%;
        line-height: 1.4;
        font-size: calc(2px + 1vw);
        margin-top: 2%;
    }
    @media screen and (max-width: 1000px) {
        width: 100%;
        h5{
            font-size: calc(2px + 2vw);
        }
    }

`


const StyledHome = styled.h1`
    padding-top: 2%;
    padding-bottom: 2%;
    font-size: calc(3px + 3vw);
`;

export default function Home() {
    return (
        <StyledMain>
            <title>Home | Elizabeth's Resume</title>
            <StyledHome><strong><u>Home</u></strong></StyledHome>

            <img src="/profile.jpg" alt="Elizabeth Lam's Profile Picture" />

            <br />

            <br />

            <h5>
                Junior at Boston University studying Biology and Computer Science with a strong interest in data analysis and
                technology-driven problem-solving. Skilled with experience in analyzing complex biological data to generate actionable
                insights. Looking to apply analytical and technical skills in a collaborative, business-focused environment.
            </h5>
        </StyledMain>
    )
}
