import React from 'react'
import { useSelector } from 'react-redux'

export default function Details() {
    const note = useSelector(state => state.currentNote);
    const formatDate = (datetime) => {
        return `${datetime.getFullYear()}/${datetime.getMonth() + 1}/${datetime.getDate()} ${datetime.getHours()}:${datetime.getMinutes()}:${datetime.getSeconds()}`
    }
    const { id, created_at, updated_at } = note
    return (
        <div className='uk-position-meduim uk-position-center-right uk-animation-slide-right' style={{ display: 'block', paddingLeft: '300px' }}>
            <div class="uk-card uk-card-default uk-card-large uk-card-body ">
                <h3 class="uk-card-title">Note#{id}</h3>
                <p>Creation date: { formatDate(created_at) } </p>
                <p>Last update date: { formatDate(updated_at) } </p>
            </div>
        </div>
    )
}
