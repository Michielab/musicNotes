import { useState, useEffect, useRef } from 'react';

function UseResize() {
    const containerRef = useRef(null)
    const [height, setHeight] = useState(0)
    const [width, setWidth] = useState(0)

    function updateHeightWidth() {
        let container:any = containerRef.current;
        setHeight(container.clientHeight);
        setWidth(container.clientWidth)
    }

    useEffect(()=>{
        updateHeightWidth()
        window.addEventListener('resize',updateHeightWidth, true);
        return () => {
            window.removeEventListener('resize', updateHeightWidth, true)
        }
    })
    return {
        width,
        height,
        containerRef
    }
}

export default UseResize;