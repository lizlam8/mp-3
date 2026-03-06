import styled from "styled-components";

const StyledMain = styled.main`

    width: 70%;
    padding: 1% 2%;
    background-color: blanchedalmond;
    text-align: center;
    
    height:100vh;
    font-size: calc(2px + 1.4vw);

    @media screen and (max-width: 1000px) {
        width: 100%;
    }
`


const StyledEducation = styled.h1`
    font-size: calc(3px + 3vw);
    padding-top: 2%;
    padding-bottom: 2%;
`;

const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
`

const StyledLeft = styled.div`
    text-align: left;
    width: 50%;
    *{
        margin:1%;
    }

`

const StyledRight=styled.div`
    width: 50%;
    img{
        max-width: 80%;
        height: auto;
        flex-shrink: 0;
    }
`


export default function Education(){
    return (
        <StyledMain>
            <title>Education | Elizabeth's Resume</title>
            <StyledEducation><strong><u>Education</u></strong></StyledEducation>
            <StyledContainer>
                    <StyledLeft>
                            <h2>Boston University</h2>
                            {/*Googled how to do a line break*/}
                            <br/>
                            <h3>Bachelor of Arts</h3>
                            <h4>Major: Biology, Minor: Computer Science</h4>
                            <h4>GPA: 3.96</h4>

                            <br/>

                            <h3>Relevant Coursework:</h3>
                            <ul>
                                <li>Organic Chemistry</li>
                                <li>Cell Biology & Translational Medicine</li>
                                <li>Systems Physiology</li>
                                <li>Neurobiology of Disease</li>
                                <li>Physics I (Mechanics & Thermodynamics)</li>
                                <li>Computer Systems</li>
                                <li>Data Structures and Algorithms</li>
                                <li>Database Systems</li>
                                <li>Geometric Algorithms</li>
                            </ul>
                </StyledLeft>
                <StyledRight>
                    <img className="bu-logo" src="/bu-logo.png" alt="BU Logo"/>
                </StyledRight>
            </StyledContainer>
        </StyledMain>
    )
}
