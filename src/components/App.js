import React, { useRef, useEffect } from 'react';
import { select } from 'd3';

const data = [25, 33, 29, 50, 48];

const App = (props) => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = select(svgRef.current);
    console.log(svg.selectAll('circle').data(data));
  }, []);

  return (
    <React.Fragment>
      <svg ref={svgRef} ></svg>
    </React.Fragment>
  )
}

export default App;