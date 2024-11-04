import React, {useEffect, useState, useRef} from 'react';
import {Button} from "@/components/ui/button";
import {Id} from "@/convex/_generated/dataModel";

interface QuickNoteProps {
    note: {
        _id: Id<"notes">;
        title?: string;
        text: string;
        color?: string;
    },
    index: number,
    columnCount: number,
    selectedNodes: Id<"notes">[],
    onQNoteClick: (noteId: Id<"notes">) => void,
    onEditNote: (note: any) => void,
    onArchiveNote: (noteId: Id<"notes">) => void,
    key?: any
}

const QuickNote: React.FC<QuickNoteProps> = ({
                                                 note,
                                                 index,
                                                 columnCount,
                                                 selectedNodes,
                                                 onQNoteClick,
                                                 onEditNote,
                                                 onArchiveNote,
                                                 key
                                             }) => {

    const [animate, setAnimate] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);
    const prevPositionRef = useRef({ row: -1, col: -1 });
    const isFirstRender = useRef(true);

    const getCurrentPosition = () => ({
        row: Math.floor(index / columnCount),
        col: index % columnCount
    });

    useEffect(() => {
        // if (isFirstRender.current) {
        //     isFirstRender.current = false;
        //     const currentPosition = getCurrentPosition();
        //     prevPositionRef.current = currentPosition;
        //     setAnimate(true);
        //     return;
        // }

        const currentPosition = getCurrentPosition();
        const positionChanged =
            currentPosition.row !== prevPositionRef.current.row ||
            currentPosition.col !== prevPositionRef.current.col;

        if (positionChanged) {
            // Only animate if position changed
            setAnimate(false);
            let delay: number;
            if (isFirstRender.current) {
                isFirstRender.current = false;
                delay = Math.random() * 500 + (currentPosition.row + currentPosition.col) * 50;
            } else {
                delay = (currentPosition.row + currentPosition.col) * 50; // Stagger effect
            }
            const animationTimer = setTimeout(() => setAnimate(true), 50 + delay);

            const transitionTimer = setTimeout(() => {
                if (cardRef.current) {
                    cardRef.current.style.transition = 'transform 0.3s ease-out, opacity 0.5s ease-in, scale 0.5s ease-in';
                }
            }, 1050 + delay);

            return () => {
                clearTimeout(animationTimer);
                clearTimeout(transitionTimer);
            };
        }

        // Update previous position
        prevPositionRef.current = currentPosition;
    }, [columnCount, index]);

    const getAlternatingRotation = () => {
        const rowIndex = Math.floor(index / columnCount);
        const colIndex = index % columnCount;

        // If even number of columns, alternate the starting direction for each row
        if (columnCount % 2 === 0) {
            // For even-numbered rows, start with right rotation
            // For odd-numbered rows, start with left rotation
            const startWithRight = rowIndex % 2 === 0;
            return (colIndex % 2 === 0) === startWithRight ? -2 : 2;
        } else {
            // For odd number of columns, simply alternate based on index
            return index % 2 === 0 ? -2 : 2;
        }
    };

    const style = {
        transform: animate ? 'translate(0, 0) rotateY(0deg) rotateX(0deg) scale(1)' :
            `translate(${Math.random() * 200 - 100}vw, ${Math.random() * 200 - 100}vh) rotateY(${Math.random() * 1080 - 540}deg) rotateX(${Math.random() * 1080 - 540}deg) scale(0.1)`,
        opacity: animate ? 1 : 0,
        transition: 'transform 1s ease-in-out, opacity 0.5s ease-in, scale 0.5s ease-in',
    };

    return (
        <div
            className="transform transition-transform hover:scale-105"
            style={{
                transform: `rotate(${getAlternatingRotation()}deg)`,
                transformOrigin: 'center center'
            }}
        >
            <div
                ref={cardRef}
                style={style}
                className={`card ${selectedNodes?.includes(note._id) ? "selected" : ""} ${note.color || 'bg-yellow-50'}`}
                key={note._id}
                onClick={() => onQNoteClick(note._id)}
            >
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">{note.title || "No title"}</h3>
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="hover:bg-yellow-200" onClick={(e) => {
                            e.stopPropagation();
                            onEditNote(note);
                        }}>
                            <FilePenIcon className="w-4 h-4"/>
                            <span className="sr-only">Edit</span>
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="hover:bg-yellow-200"
                            onClick={(e) => {
                                e.stopPropagation();
                                onArchiveNote(note._id);
                            }}
                        >
                            <TrashIcon className="w-4 h-4"/>
                            <span className="sr-only">Delete</span>
                        </Button>
                    </div>
                </div>
                {note.text}
            </div>
        </div>
    );
}

export default QuickNote;


function FilePenIcon(props: any) {
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

function TrashIcon(props: any) {
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
