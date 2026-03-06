import {Link} from "react-router"
import styled from "styled-components"

const StyledNav=styled.nav`
    width: 30%;
    background-color: darkseagreen;
    @media screen and (max-width: 1000px){
        width: 100%;
    }
`;

const StyledList=styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 0;
    list-style: none;
    justify-content: space-evenly;
    
    
    @media screen and (max-width: 1000px){
        flex-direction: row;
    }
`;


const StyledLi =styled.li`
    margin: 8%;

    @media screen and (max-width: 1000px){
        flex-direction: row;
        margin: 1%;
    }
    
`

const StyledLink=styled(Link)`
    color: black;
    text-decoration: none;
    text-align: center;
    font-size: calc(2px + 1.9vw);

    
    @media screen and (max-width: 1000px){
        font-size: calc(2px + 1vw);
        
    }
`;

export default function Nav(){
    return (
        <StyledNav>
            <StyledList>
                <StyledLi><StyledLink to={`/`}>Home</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/education`}>Education</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/experiences`}>Experiences</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/leadership`}>Leadership</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/awards`}>Awards</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/projects`}>Projects</StyledLink></StyledLi>

            </StyledList>
        </StyledNav>
    )
}

