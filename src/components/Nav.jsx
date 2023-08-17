import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { switchEditMode, pinNote, unsetCurrentNote, setSearch, setSearchString } from '../store/actions';
export default function Nav({ openNav }) {
    
    const itsNotePage = () => window.location.href.split('/')[3] === 'note' || note;
    const note = useSelector(state => state.currentNote);
    const editMode = useSelector(state => state.editMode);
    const s = useSelector(state => state.search)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        itsNotePage()
        ? <nav>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" onClick={ () => navigate('/') } fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"/>
                <polyline points="12 19 5 12 12 5"/>
            </svg>
            <span className='logo'>Notespace</span>
            <span onClick={() => dispatch(pinNote(note.id))}> { note.pin ? 'Unpin' : 'Pin'} </span>
            <span onClick={() => dispatch(switchEditMode())}> { editMode ? 'Save' : 'Edit' } </span>
        </nav>
        : <nav>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" onClick={openNav} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="12" x2="20" y2="12"/>
                <line x1="4" y1="6" x2="20" y2="6"/>
                <line x1="4" y1="18" x2="20" y2="18"/>

            </svg>
            <span className='logo'>Notespace</span>
            <input type="search" id="search" placeholder='Search notes' onChange={e => { dispatch(setSearchString(e.target.value.trim())); console.log(s) }}/>
        </nav> 
    )   
}