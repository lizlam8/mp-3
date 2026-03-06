import styled from "styled-components";

const StyledMain = styled.main`
    height:100vh;
    width: 70%;
    padding: 1% 2%;
    background-color: blanchedalmond;
    text-align: center;
    font-size: calc(2px + 1vw);
    
    h2{
        font-size: calc(2px + 2vw);
    }
    
}
    
    @media screen and (max-width: 1000px) {
        width: 100%;
`

const StyledExperiences = styled.h1`
    padding-top: 2%;
    padding-bottom: 2%;
    font-size: calc(3px + 3vw);
`

const StyledLeft = styled.div`
    text-align: left;
`

export default function Experiences(){
    return (
        <StyledMain>
            <title>Experiences | Elizabeth's Resume</title>
            <StyledExperiences><strong><u>Experiences</u></strong></StyledExperiences>
                <StyledLeft>
                <h2>Ho/Beffert Lab</h2>
                <h4><em>Bioinformatics Researcher</em></h4>
                <ul>
                    <li>
                        Conducted systematic literature review and mechanistic analysis of ApoE/ApoER2 signaling
                        pathways to evaluate
                        structure–function relationships relevant to Alzheimer’s disease mechanisms
                    </li>
                    <li>
                        Utilized computational modeling (AlphaFold-Multimer) to investigate protein–protein interactions
                        and assess potential
                        downstream functional implications of isoform-specific binding
                    </li>
                    <li>
                        Integrated 200+ AI structural predictions with published biochemical data to interpret potential
                        interactions and their
                        functional implications
                    </li>
                </ul>

                <br/>

                <h2>Boston University Residence Life</h2>
                <h4><em>Resident Assistant</em></h4>
                <ul>
                    <li>
                        Served as the primary point of contact for students, addressing and managing conflict situations
                        and promptly responding
                        to emergency calls
                    </li>
                    <li>
                        Designed, promoted, and oversaw dormitory programs centered on diversity, personality
                        development, and general health
                        for a cohort of 50 students
                    </li>
                    <li>
                        Collaborated seamlessly with building personnel to coordinate the move-in process for a total of
                        960 residents over a span
                        of five days
                    </li>
                </ul>

                <br/>

                <h2>Brookhaven National Laboratory</h2>
                <h4><em>Guest User</em></h4>
                <ul>
                    <li>
                        Delivered research findings on oyster shell composition, utilizing tender energy and submicron
                        resolution X-ray
                        spectroscopy, at the National Synchrotron Light Source II and Center for Functional
                        Nanomaterials Users’ Meeting,
                        earned a poster award
                    </li>
                    <li>
                        Presented original research as a guest speaker at an information session, highlighting
                        applications of beamlines to educate
                        and engage new scientists
                    </li>
                </ul>
                </StyledLeft>

        </StyledMain>
    )
}