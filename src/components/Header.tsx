import styled from "styled-components";

const StyledHeader = styled.header`
    color: black;
    padding: 1%;
`

export default function Header(){
    return(
        <StyledHeader>
            <h1>Elizabeth's Resume</h1>
            <p>An online application showcasing Elizabeth's academic and professional experiences</p>
        </StyledHeader>
    )
}