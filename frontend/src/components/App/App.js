import React from 'react';
import './App.css';
import { Header, Container } from 'semantic-ui-react';
import ReceiptsTable from '../RecieptsTable/ReceiptsTable';

function App() {
  return (
    <div className="App">
      <Header as='h1'>Receipt Keeper <span role='img' aria-label='Receipt'>🧾</span> </Header>
      <Container>
        <ReceiptsTable></ReceiptsTable>
      </Container>
    </div>
  );
}

export default App;
