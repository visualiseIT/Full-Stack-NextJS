import React, {useEffect, useState} from 'react';

function QuickNote(props: any) {

    const { note, selectedNodes, onQNoteClick } = props;

    const [scale, setScale] = useState(1);
    // const [left, setLeft] = useState(0);

    useEffect(() => {
        setScale(0.1);
        // setLeft(100);
        setTimeout(
            () => {
                setScale(1.1);
                // setLeft(100);
                setTimeout(
                    () => {
                        setScale(1);
                    },
                    300 /* 100ms == 0.1s */
                );
            },
            150 /* 100ms == 0.1s */
        );
    }, []);

    const style = {
        transform: `scale(${scale})`,
        left: `-${left}px`
    };
    return (
        <div style={style} className={`card ${selectedNodes?.includes(note._id) ? "selected" : ""}`} key={note._id}
             onClick={() => onQNoteClick(note._id)}>{note.text}</div>
    );
}

export default QuickNote;
