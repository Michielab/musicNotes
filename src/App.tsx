import React from 'react';

/* Import components */
import Container from './components/ui/container/Container';

import './App.css';

function App() {
  return (
    <Container type="root" paperProps={{square: true, elevation: 0}}>
          <Container type="columnFlex" paperProps={{square: true, elevation: 0}}>
        <Container type="stave">

        </Container>
      </Container>
    </Container>
  );
}

export default App;
