import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setCurrentNote } from '../../store/actions'
import Highlight from './Highlight'

export default function NoteItem({ note }) {
  const { id, title, content } = note
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const search = useSelector(state => state.search)
  return (
    <div className="note" key={id} onClick={() => navigate(`note/${id}`)}>
        { search
            ? content.split(' ').map((word) => {
                return word.toLowerCase() === search.toLowerCase() ? <Highlight text={word} /> : `${word} `})
            : <>
                <b>{ title }</b> <br/>
                {content.length > 150 ? content.slice(0, 150) + "..." : content }
            </>
        }
    </div>
  )
}
