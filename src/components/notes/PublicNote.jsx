import React, { useState, useEffect } from 'react'
import { db } from '../../db'
export default function PublicNote({ editMode, note, setNote }) {
    const [id, setId] = useState(new URLSearchParams(window.location.search).get('id'))
    
    const [linesCount, setLinesCount] = useState(0);
    const [charsCount, setCharsCount] = useState(0);

    const handleCounts = e => {
        setCharsCount(e.replace('\n\n', '').length)
        setLinesCount(e.split('\n\n').length)
    }
    
    useEffect(() => {
        const getNote = async () => {
            try {
                const note = await db.notes.where('id').equals(Number(id)).first();
                setNote(note)
                handleCounts(note.content)
            } catch {}
        }
        getNote()
    }, [id])
    return (
        note != null && <div className='note-content' >
            <h3 className='title' contentEditable={editMode}>
                { note.title }
            </h3>
            <p className='content' onInput={e => {
                handleCounts(e.target)
                console.log(e.target)
            }} contentEditable={editMode}>
                { note.content }
            </p>
            <p className='info'>
                { linesCount } lines, { charsCount } characters
            </p>
        </div>
    )
}