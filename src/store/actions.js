export const setSearchString = searchString => {
    return { type: 'SET_SEARCH_STRING', searchString }
}
export const switchEditMode = () => {
    return { type: 'SWITCH_EDIT_MODE' }
}
export const fetchNotes = data => {
    return { type: 'FETCH_NOTES', data }
}
export const setCurrentNote = noteId => {
    return { type: 'SET_CURRENT_NOTE', noteId }
}
export const unsetCurrentNote = () => {
    return { type: 'UNSET_CURRENT_NOTE' }
}
export const addNote = newNote => {
    return { type: 'ADD_NOTE', newNote }
}
export const deleteNote = idNote => {
    return { type: 'DELETE_NOTE', idNote }
}
export const editNote = editedNote => {
    return { type: 'EDIT_NOTE', editedNote }
}
export const pinNote = idNote => {
    return { type: 'PIN_NOTE', idNote }
}