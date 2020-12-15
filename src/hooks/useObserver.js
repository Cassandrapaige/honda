import { useEffect, useState, useRef } from 'react'

const useObserver = playAnimationIfVisible => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        let currentRef = domRef.current;

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {

                // Begin animation every time item's in view
                if(playAnimationIfVisible) {
                    setIsVisible(entry.isIntersecting);
                }

                // Only play animation once, when first scrolled into view
                else if(!isVisible) {
                    setIsVisible(entry.isIntersecting);
                }
            })
        });
        observer.observe(currentRef);
        return () => observer.unobserve(currentRef);
    }, [isVisible, playAnimationIfVisible])

    return [isVisible, domRef];
}

export default useObserver;