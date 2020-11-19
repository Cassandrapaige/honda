import {useState, useEffect} from 'react'

const useCarousel = (slides, time, animating) => {
    const [activeLink, setActiveLink] = useState(0);

  useEffect(() => {
    if(animating) {
        const next = (activeLink + 1) % slides.length;
        const slider = setTimeout(() => setActiveLink(next), time);
        return () => clearTimeout(slider);
    }
  }, [activeLink, slides.length, time, animating]);

  return [activeLink, setActiveLink];
}

export default useCarousel;