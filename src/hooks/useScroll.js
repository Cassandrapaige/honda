import {useState, useEffect} from 'react'

const useScroll = () => {
    const [scrollY, setScrollY] = useState(0);
    
    const getScrollPosition = () => {
        if(typeof window !== undefined) {
            setScrollY(window.pageYOffset);
        };
      }
    
      useEffect(() => {
        window.addEventListener('scroll', getScrollPosition);
        return () => window.removeEventListener('scroll', getScrollPosition);
    }, [scrollY]);
      
    return scrollY;
}

export default useScroll;