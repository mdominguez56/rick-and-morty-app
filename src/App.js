import styled from "styled-components";
import List from "./components/List";

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
        <List />
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
`;

const HeaderContainer = styled.div`
  height: 15vh;
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
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
