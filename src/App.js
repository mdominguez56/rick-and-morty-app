import styled from "styled-components";
import EpisodesTable from "./components/EpisodesTable";

function App() {
  return (
    <AppContainer>
      <HeaderContainer>
        <Title>
          Hi ! Do you want to see all the episodes of{" "}
          <TitleSpan>rick and morty</TitleSpan> and its characters?
        </Title>
        <Title>Go for it !</Title>
      </HeaderContainer>
      <ContentContainer>
        <Title>In this list you can view each of the episodes</Title>
        <EpisodesTable />
      </ContentContainer>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #8aa29e;
  display: flex;
  flex-direction: column;
  position: static;
`;

const HeaderContainer = styled.div`
  height: 150px;
  background-color: #3d5467;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  color: #f1edee;
  font-size: 30px;
  margin: 15px;
`;

const TitleSpan = styled.span`
  color: #db5461;
`;

const ContentContainer = styled.div`
  height: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
