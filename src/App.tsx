import { Title, Container } from "@mantine/core";
import { SearchBar } from "./SearchBar";


function App() {
  return (
    <>
      <Container>
        <div>
          <Title order={1}>Mars Rover</Title>
          <SearchBar />
        </div>
      </Container>
    </>
  );
}

export default App;
