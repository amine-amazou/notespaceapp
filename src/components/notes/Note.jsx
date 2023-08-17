import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ControlNav from '../ControlNav';
import Details from './Details';
export default function Note() {
    const [linesCount, setLinesCount] = useState(0);
    const [charsCount, setCharsCount] = useState(0);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("")
    const [showDetails, setShowDetails] = useState(false);
    const { id } = useParams();
    const notes = useSelector(state => state.notes)
    useEffect(() => {
        const note = notes.length ? Array.from(notes.filter(note => note.id === Number(id)))[0] : { title: "", content: ""};
        setTitle(note.title);
        setContent(note.content);
    }, [notes, id])
    const editMode = useSelector(state => state.editMode)
    
    
    const handleCounts = e => {
        setCharsCount(e.replace('\n\n', '').length)
        setLinesCount(e.split('\n\n').length)
    }

    useEffect(() => handleCounts(content), [content])
    return (
        <>
            <div className='note-content' >
                <h3 className='title' contentEditable={editMode} suppressContentEditableWarning>
                    { title }
                </h3>
                <p className='content' onInput={e => {
                    handleCounts(e.target.innerHTML)
                    console.log(e.target)
                }} contentEditable={editMode} suppressContentEditableWarning>
                    { content }
                </p>
                <p className='info'>
                    { linesCount } lines, { charsCount } characters <ControlNav showDetails={showDetails} setShowDetails={setShowDetails} />
                </p>
                { showDetails && <Details /> }
            </div>
            
        </>
    )
}