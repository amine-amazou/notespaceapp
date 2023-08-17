import UIkit from 'uikit'

const initialCollections = [
    {
        id: new Date().getTime(),
        name: "My collection",
        description: "This is my collection",
        notes: [],
        created_at: new Date(),
        updated_at: new Date()
    }
]

export const reducer = (state = {
    collections: initialCollections,
    notes: [],
    currentNote: false,
    search: "",
    editMode: Boolean(false)
    }, action) => {
        switch(action.type) {
            case 'SET_SEARCH_STRING':
                console.log(action.searchString)
                return {
                    ...state,
                    search: action.searchString
                }
            case 'SWITCH_EDIT_MODE':
                return { 
                    ...state, 
                    editMode: Boolean(!state.editMode) 
                }
            case 'FETCH_NOTES':
                return {
                    ...state,
                    notes: action.data
                }
            case 'SET_CURRENT_NOTE':
                return { 
                    ...state, 
                    currentNote: action.noteId 
                        ? Array.from(state.notes.filter(note => note.id === action.noteId))[0] 
                        : { id: new Date().getTime(), content: "", title: "", pin: false, created_at: new Date(), updated_at: new Date()}
                }
            case 'UNSET_CURRENT_NOTE':
                return { 
                    ...state, 
                    currentNote: false
                }
            case 'ADD_NOTE':
                return { ...state, 
                    notes: [ ...state.notes, action.newNote ]
                }
            case 'DELETE_NOTE':
                return { ...state,
                    notes: state.notes.filter(note => note.id !== action.idNote)
                }
            case 'EDIT_NOTE':
                const { title, content, updated_at } = action.editedNote;
                UIkit.notification(
                    {
                        message: 'Changes successfuly saved',
                        pos: 'bottom-center',
                        timeout: 1000
                    }
                )
                return { 
                    ...state, notes: state.notes.map( note => note.id === action.idNote ? { ...note, title, content, updated_at} : note )
                }
            case 'PIN_NOTE':
                UIkit.notification(
                    {
                        message: state.currentNote.pin 
                            ? 'Note unpinned with successfully' 
                            : 'Note pinned with successfully', 
                        pos: 'bottom-center',
                        timeout: 1000
                    }
                )
                return { ...state, 
                    notes: state.notes.map( note => note.id === action.idNote ? { ...note, pin: !note.pin } : note ),
                    currentNote: { ...state.currentNote, pin: !state.currentNote.pin }
                }
            default:
                return state
        }
    }