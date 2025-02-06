import { useEffect } from "react";

const useScrollAnimation = () => {
    useEffect(() => {
        const fadeInElements = document.querySelectorAll(".fade-in");
        
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target); // ✅ Stop observing once visible
                    }
                });
            },
            { threshold: 0.3 } // ✅ Fires animation when 30% of element is in view
        );

        fadeInElements.forEach((el) => observer.observe(el));

        return () => fadeInElements.forEach((el) => observer.unobserve(el));
    }, []);
};

export default useScrollAnimation;
