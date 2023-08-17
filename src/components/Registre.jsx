import React from 'react'
import { db } from './db';
export default function Registre() {
    const GenerateID = () => {
        return Date.now() + Math.floor(Math.random()*10);
    }
    const create_account = async () => {
        try {
            db.user.add({
                'ID': GenerateID(),
                'username': document.getElementById('username').value,
                'created_at': new Date()
            })
        } catch {}
    }
    return (
        <React.Fragment>
            <div>Registre</div>
            <form action="" onSubmit={create_account}>
                Username: <input type="text" name="" id="username" required />
                <input type="submit" value="Create Account" />
            </form>
        </React.Fragment>
    )
}
