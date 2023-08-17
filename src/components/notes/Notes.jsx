import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Note from './Note';
import NoteItem from './NoteItem';
import ControlNav from '../ControlNav';

export default function Notes() {
    const [pinnedNotes, setPinnedNotes] = useState([]);
    const [otherNotes, setOtherNotes] = useState([]);
    const currentNote = useSelector(state => state.currentNote);
    const search = useSelector(state => state.search);
    const notes = useSelector(state => state.notes);
    useEffect(() => {
        const getNotes = () => {
            try {
                setPinnedNotes(notes.filter((note) => {
                    return note.content.toLowerCase().includes(search.toLowerCase()) && note.pin
                }))
                setOtherNotes(notes.filter((note) => {
                    return note.content.toLowerCase().includes(search.toLowerCase()) && !note.pin
                }))
            } catch {}
        }
        !currentNote && getNotes()
    }, [notes, search, currentNote])
    return ( 
        !currentNote ?
            <>
                { pinnedNotes.length !== 0 && <> <span className='span'> Pinned Notes </span>
                    <div className='notes'>
                        { pinnedNotes.map((note, key) => <NoteItem note={note} key={note.id} /> ) }
                    </div> </> 
                }
                { otherNotes.length !== 0 && <> <span className='span'> Other Notes </span> 
                    <div className='notes'>
                        { otherNotes.map((note, key) => <NoteItem note={note} key={note.id} /> ) }
                    </div> </> 
                }
                <ControlNav notes />
            </>
            
        : <Note />
    )
}
