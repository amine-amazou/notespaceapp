import React, { useCallback, useEffect, useMemo } from 'react';
import { db } from './db'
import { Provider, useDispatch, useSelector } from 'react-redux';

import Nav from './components/Nav';
import RoutesC from './Routes';
import { fetchNotes } from './store/actions';
import SideNav from './components/SideNav';
import { useNavigate, useLocation } from 'react-router-dom';


function App() {

    const navigate = useNavigate();
    const pathname = useLocation();
    const stableDispatch = useCallback(useDispatch, []);
    const dispatch = stableDispatch()
    useEffect(() => {
        const addNote = async () => {
            await db.notes.add({
                id: new Date().getTime(),
                title: 'MADD said: ',
                content: "Every decision with a Price tag",
                pin: true,
                created_at: new Date(),
                updated_at: new Date()
            })
        }
        const fetchData = async () => { 
            const data = await db.notes.toArray();
            dispatch(fetchNotes(data))
        }
        fetchData()
    }, [pathname])
    useEffect(() => closeNav(), [])

    const switchEditMode = async edit => {
        let note;
        edit && await db.notes.where('id').equals(Number(note.id)).modify({
            title: document.getElementsByClassName('title')[0].innerText,
            content: document.getElementsByClassName('content')[0].innerText,
            updated_at: new Date()
        });
    }
    

    window.onclick = function(event) {
        if (!event.target.matches('.profileIcon')) {
          var dropdowns = document.getElementsByClassName("dropdown-text");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
    }
    const openNav = () => {
        document.getElementById("mySidenav").style.width = "250px";
    }
    const closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
    }
    return (
        <>
            <SideNav closeNav={closeNav} />
            <div id='main' onScroll={openNav}>
                <Nav openNav={openNav} />
                <RoutesC />
            </div>
        </>
    )
}
export default App;