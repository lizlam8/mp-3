import Header from "./components/Header.tsx";
import Nav from "./components/Nav.tsx";
import Footer from "./components/Footer.tsx";
import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router";
import Home from "./components/mains/Home.tsx";
import Awards from "./components/mains/Awards.tsx";
import Leadership from "./components/mains/Leadership.tsx";
import Projects from "./components/mains/Projects.tsx";
import Education from "./components/mains/Education.tsx";
import Experiences from "./components/mains/Experiences.tsx";
import styled from "styled-components";



const Wrapper=styled.div`
    width: 80vw;
    margin: 0 auto;
    background-color: pink;
`;

const Container=styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    background-color: blanchedalmond;
    
    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`;

export const MainColumn = styled.main`
  width: 70%;
  padding: 1% 2%;
  background-color: blanchedalmond;
  text-align: center;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;


function Root(){
    return(
        <Wrapper>
            <Header/>
            <Container>
                <Nav/>

                <Routes>
                    <Route path ={`/`} element={<Home />}/>
                    <Route path={`/awards`} element = {<Awards/>}/>
                    <Route path={`/leadership`} element = {<Leadership/>}/>
                    <Route path={`/projects`} element = {<Projects/>}/>
                    <Route path={`/education`} element = {<Education/>}/>
                    <Route path={`/experiences`} element = {<Experiences/>}/>
                </Routes>

                </Container>
                <Footer/>
        </Wrapper>

    );
}
 const router =createBrowserRouter(
    [{path:"*" ,Component:Root}]
 )

export default function App() {

  return (
      <>
        <RouterProvider router = {router}/>
      </>
  )
}


