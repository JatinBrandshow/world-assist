"use client";

import { useEffect, useRef } from "react";

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        let mouseX = 0;
        let mouseY = 0;
        let posX = 0;
        let posY = 0;
        let rafId;

        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            cursor.style.opacity = "1";
            follower.style.opacity = "1";

            // center cursor
            cursor.style.transform = `translate(${mouseX - 6}px, ${mouseY - 6}px)`;
        };

        const animateFollower = () => {
            posX += (mouseX - posX) * 0.15;
            posY += (mouseY - posY) * 0.15;

            follower.style.transform = `translate(${posX - 16}px, ${posY - 16}px)`;

            rafId = requestAnimationFrame(animateFollower);
        };

        animateFollower();
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <>
            {/* Cursor */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-3 h-3 bg-brand-gold rounded-full pointer-events-none z-9999 opacity-0 transition-opacity duration-300 mix-blend-difference"
            />

            {/* Follower */}
            <div
                ref={followerRef}
                className="fixed top-0 left-0 w-8 h-8 border border-brand-gold rounded-full pointer-events-none z-9998 opacity-0 transition-opacity duration-300"
                style={{
                    transition: "transform 0.15s ease-out, width 0.3s ease, height 0.3s ease",
                }}
            />
        </>
    );
};

export default CustomCursor;
