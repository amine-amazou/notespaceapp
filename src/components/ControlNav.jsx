import React from 'react'
import { store } from '../store';
import { setCurrentNote, switchEditMode } from '../store/actions';

export default function ControlNav({ notes, showDetails, setShowDetails }) {
  const new_note = () => {
    store.dispatch(switchEditMode());
    store.dispatch(setCurrentNote(false));
  }
  return (
    notes 
    ? <ul class="uk-iconnav control-nav">
        <li>
          <span uk-icon="icon: pencil" onClick={() => new_note()}></span>
        </li>
        <li>
          <span uk-icon="icon: trash" ></span>
        </li>
        <li>
          <span uk-icon="icon: user" ></span>
        </li>
    </ul> 
    : <ul class="uk-iconnav control-nav" >
        <li>
          <span uk-icon="icon: star"></span>
        </li>
        <li>
          <span uk-icon="icon: unlock" ></span>
        </li>
        <li>
          <span uk-icon="icon: info" onClick={() => setShowDetails(!showDetails)} ></span>
        </li>
    </ul> 
  )
}
