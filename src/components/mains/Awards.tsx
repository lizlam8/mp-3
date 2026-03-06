import styled from "styled-components";

const StyledAwards = styled.h1`
    font-size: calc(3px + 3vw);
    padding-top: 2%;
    padding-bottom: 2%;
`;

const StyledMain = styled.main`
    height:110vh;
    width: 70%;
    padding: 1% 2%;
    background-color: blanchedalmond;
    text-align: center;
    
    h5{
        margin:2% auto;
        font-size: calc(2px + 2vw);
    }
    
    @media screen and (max-width: 1000px) {
        width: 100%;
`


export default function Awards(){
    return (
        <StyledMain>
            <title>Awards | Elizabeth's Resume</title>
            <StyledAwards><strong><u>Awards</u></strong></StyledAwards>
            <h5>New York State Seal of Biliteracy Recipient in Spanish</h5>

            <img
                className="award-logo"
                src="../../../public/nyssealofbiliteracy.jpg"
                alt="New York State Seal of Biliteracy Recipient logo"
            />
            <h5>
                Guest Speaker at Brookhaven National Laboratory's National Synchrotron Light Source II and
                Center for Functional
                Nanomaterials Users’ Meeting
            </h5>

            <img className="award-logo" src="../../../public/bnl-logo.png" alt="Brookhaven National Laboratory logo"/>
        </StyledMain>
    )
}