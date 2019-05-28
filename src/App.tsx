import React from 'react';

/* Import state */
import {
  StateProvider,
  mainReducer,
  initialState
} from 'contextProvider/contextProvider';

/* Import components */
import Container from './components/ui/container/Container';
import RootRef from '@material-ui/core/RootRef';
import Stave from 'components/stave/Stave';
import UseResize from 'components/hooks/UseResize';
import ButtonBar from 'components/ui/button/ButtonBar';
import Scrore from 'components/ui/score/Score';
import Sound from 'sounds/Sound';

import './App.css';

function App() {
  const resize = UseResize();
  const { width, height, containerRef } = resize;
  return (
    <>
    <StateProvider initialState={initialState} reducer={mainReducer}>
      <Container type="root" paperProps={{ square: true, elevation: 0 }}>
        <Container
          type="columnFlex"
          paperProps={{ square: true, elevation: 0 }}
        >
          <Scrore />
          <RootRef rootRef={containerRef}>
            <Container type="stave">
              <Stave width={width} height={height} />
            </Container>
          </RootRef>
          <ButtonBar />
        </Container>
      </Container>
    </StateProvider>
    <Sound/>
    </>
  );
}

export default App;
