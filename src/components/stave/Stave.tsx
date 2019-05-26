import React from 'react';

/* Import components */
import NoteLine from 'components/notes/NoteLine';
import StaveUI from 'components/ui/stave/StaveUI';
import Gclef from 'components/ui/gClef/Gclef';
import Learn from 'components/learn/Learn';

function Stave(props: any) {
  const { height, width } = props;

  /* Middle point of the stave */
  const middle = height / 2;

  /* Divider and end are used to determine x and y points */
  let divider, start, end;
  width < 400 ? end = width - 20 : width > 8000 ? (end = 800 - 50) : (end = width - 50);
  height < 125 ? (divider = 15) : (divider = 25);

  start = width < 600 ? 10 : 50;

  /* The x and y points used to draw the note lines */
  const vertices = [
    [[start, middle - divider * 2], [end, middle - divider * 2]],
    [[start, middle - divider], [end, middle - divider]],
    [[start, middle], [end, middle]],
    [[start, middle + divider], [end, middle + divider]],
    [[start, middle + divider * 2], [end, middle + divider * 2]]
  ];

  return (
    <>
      <StaveUI>
        <Gclef height={height} />
        {vertices.map((vertice, index) => (
          <NoteLine key={index} vertices={vertice} />
        ))}
        {width && <Learn divider={divider} width={width} middle={middle} />}
      </StaveUI>
    </>
  );
}

export default Stave;
