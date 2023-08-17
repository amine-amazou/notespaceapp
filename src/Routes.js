import React from 'react'
import { Navigate, Route, Routes, createBrowserRouter } from 'react-router-dom';
import Notes from './components/notes/Notes';
import Note from './components/notes/Note';
import RedRedux from './RedRedux';

export default function RoutesC() {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<Notes />} />
      </Route>
      <Route path='note/:id' element={<Note />} />
      <Route path='*' element={<Navigate to='/' />} />
      <Route path='redux/:id' element={<RedRedux />} />
    </Routes>
  )
}