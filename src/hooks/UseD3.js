import React from 'react';
import * as d3 from 'd3';

export function UseD3(renderChartFn, dependencies) {
    const ref = React.useRef();

    React.useEffect(() => {
        renderChartFn(d3.select(ref.current));
        return () => { };
    
    },[renderChartFn]);
    return ref;
}