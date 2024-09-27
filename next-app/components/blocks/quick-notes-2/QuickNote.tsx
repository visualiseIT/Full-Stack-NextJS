import React, {useEffect, useState, useRef} from 'react';
import {Button} from "@/components/ui/button";

function QuickNote(props: any) {

    const {note, selectedNodes, onQNoteClick} = props;

    const [animate, setAnimate] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Delay the animation start slightly to ensure the initial state is rendered
        const animationTimer = setTimeout(() => setAnimate(true), 50);

        // Set up the transition change after the animation
        const transitionTimer = setTimeout(() => {
            if (cardRef.current) {
                cardRef.current.style.transition = 'transform 0.3s ease-out, opacity 0.5s ease-in, scale 0.5s ease-in';
                // cardRef.current.style.transitionDuration = '300ms, 500ms, 500ms, 350ms';
            }
        }, 1050); // 1000ms for animation + 50ms initial delay

        return () => {
            clearTimeout(animationTimer);
            clearTimeout(transitionTimer);
        };
    }, []);

    const style = {
        transform: animate ? 'translate(0, 0) rotateY(0deg) rotateX(0deg) scale(1)' : `translate(${Math.random() * 100 - 50}vw, ${Math.random() * 100 - 50}vh) rotateY(${Math.random() * 720 - 360}deg) rotateX(${Math.random() * 720 - 360}deg) scale(0.1)`,
        opacity: animate ? 1 : 0,
        transition: 'transform 1s ease-in, opacity 0.5s ease-in, scale 0.5s ease-in',
    };

    return (
        <div
            ref={cardRef}
            style={style}
            className={`card ${selectedNodes?.includes(note._id) ? "selected" : ""}`}
            key={note._id}
            onClick={() => onQNoteClick(note._id)}
        >
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">No title</h3>
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="hover:bg-yellow-200">
                        <FilePenIcon className="w-4 h-4"/>
                        <span className="sr-only">Edit</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="hover:bg-yellow-200">
                        <TrashIcon className="w-4 h-4"/>
                        <span className="sr-only">Delete</span>
                    </Button>
                </div>
            </div>
            {note.text}
        </div>
    );
}

export default QuickNote;


function FilePenIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10"/>
            <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
            <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z"/>
        </svg>
    )
}

function TrashIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 6h18"/>
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
        </svg>
    )
}
