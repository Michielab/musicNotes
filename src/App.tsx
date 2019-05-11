import React from 'react';

/* Import components */
import Container from './components/ui/container/Container';
import RootRef from '@material-ui/core/RootRef';
import Stave from 'components/stave/Stave';
import UseResize from 'hooks/UseResize';
import './App.css';

function App() {
  const resize = UseResize();
  const { width, height, containerRef } = resize;
  return (
    <Container type="root" paperProps={{ square: true, elevation: 0 }}>
      <Container type="columnFlex" paperProps={{ square: true, elevation: 0 }}>
        <RootRef rootRef={containerRef}>
          <Container type="stave">
            <Stave width={width} height={height} />
          </Container>
        </RootRef>
      </Container>
    </Container>
  );
}

export default App;
