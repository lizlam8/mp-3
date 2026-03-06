import styled from "styled-components";
import {Link} from "react-router";



const StyledFooter = styled.footer`
    background-color: lightpink;
    color: black;
    text-align: center;
    
    
    
    p{
        background-color: lightpink;
        font-size: calc(2px + 1.5vw);
        
    }
`




export default function Footer() {

    return (
        <StyledFooter>
            <p>All Rights Reserved by Elizabeth Lam <Link to={``}> Credits</Link> &#169;</p>
        </StyledFooter>
    )
}


