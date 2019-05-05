import React from 'react';

interface NoteLineProps {
    vertices: Array<Array<Number>>
  }

function NoteLine(props: NoteLineProps) {
  const pathData = [
    'M',
    props.vertices[0][0],
    props.vertices[0][1],
    'L',
    props.vertices[1][0],
    props.vertices[1][1]
  ].join(' ');
  return (
    <path
      d={pathData}
      strokeWidth="2"
      stroke="black"
    />
  );
}

export default NoteLine;