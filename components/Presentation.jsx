'use client';
import { useEffect, useRef, useState } from "react";
import Landing from "./Landing";



const Presentation = () => {


    const [loaded, setLoaded] = useState(false)

    const presRef = useRef("");
    useEffect(() => {
        const handleIntersection = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        };

        const loginIntersection = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setLoaded(true);
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);

                }
            });
        };

        const titleIntersection = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                    observer.unobserve(entry.target);

                }
            });
        };

        if (typeof window !== "undefined") {
            const options = {
                root: document.querySelector(".presentation"),
                rootMargin: "0px",
                threshold: 0.5,
            };

            const options2 = {
                root: document.querySelector(".use-cases"),
                rootMargin: "0px",
                threshold: 0.5,
            };


            const observer = new IntersectionObserver(handleIntersection, options);
            observer.observe(document.querySelector('.define'));
            observer.observe(document.querySelector('.solution'));
            observer.observe(document.querySelector('.question'));
            observer.observe(document.querySelector('.section-title'));

            const observer2 = new IntersectionObserver(loginIntersection, options);
            observer2.observe(document.querySelector('.login'));

            const observer3 = new IntersectionObserver(titleIntersection, options2);
            observer3.observe(document.querySelector('.section-title'));

            return () => {
                observer.disconnect();
                observer2.disconnect();
                observer3.disconnect();
            }
        }
    }, []);


    return (
        <div
            className="presentation"
            ref={presRef}>
            <section className="buffer"></section>

            <section className="question">
                <h1 className="section-title question">?</h1>
            </section>
            <section className="define">
                <h1 className="section-title">Defining the <span className="bolded">Problem</span></h1>
            </section>
            <section className="solution">
                <h1 className="section-title">Exploring <span className="bolded">Solutions</span></h1>

            </section>

            <section className="buffer"></section>
            <section className="login">
                <Landing
                    show={loaded}
                />
            </section>
        </div>
    )
}

export default Presentation;