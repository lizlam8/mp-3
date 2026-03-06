import styled from "styled-components";

const StyledMain = styled.main`
    width: 70%;
    padding: 1% 2%;
    background-color: blanchedalmond;
    text-align: center;
    
    height:120vh;
    
    @media screen and (max-width: 1000px) {
        width: 100%;
        height:200vh;

`

const StyledLeadership = styled.h1`
    padding-top: 2%;
    padding-bottom: 2%;
    font-size: calc(3px + 3vw);
`


const StyledDiv = styled.div`
    padding: 1% 2%;
    /*at least 100vh*/
    height: 100vh;
    background-color: blanchedalmond;
    text-align: center;
    width: 100%;
    font-size: calc(2px + 1.3vw);
`

const StyledBox = styled.div`
    width: 80%;
    height:80%;
    margin: 0 auto;
    text-align: center;
    img{
        max-width: 40%;
        height: auto;
        margin: 0 1%;
    }
    
    @media screen and (max-width:1000px){
        display:flex;
        flex-direction: column;
        img{
            max-width: 100%;
            height: auto;
            margin: 2% 1%;
        }
    }
`

export default function Leadership(){
    return (
        <StyledMain>
            <title>Leadership | Elizabeth's Resume</title>
            <StyledLeadership><strong><u>Leadership</u></strong></StyledLeadership>
            <StyledDiv>
                <h2>American Cancer Society on Campus</h2>
                <h4><em>President</em></h4>
                <ul>
                    <li>Increased student participation by 40% through targeted outreach and improved event planning</li>

                    <li>Coordinated volunteer engagement with local cancer organizations and community events</li>
                    <li>
                        Organized fundraising events with local businesses, resulting in a 15% increase in donations
                        year-over-year
                    </li>
                </ul>
                <br/>
                <StyledBox>
                    <img
                        src="/bakesale.JPEG"
                        alt="American Cancer Society on Campus Bake Sale"
                    />

                    <img
                        src="/msabc.jpg"
                        alt="American Cancer Society on Campus at Making Strides Against Breast Cancer Event"
                    />
                </StyledBox>
            </StyledDiv>
        </StyledMain>
    )
}
