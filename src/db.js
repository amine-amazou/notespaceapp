import Dexie from "dexie";

export const db = new Dexie('notespacedb');
db.version(1).stores({
    users: 'id, username, created_at',
    notes: 'id, title, content, pin, created_at, updated_at'
})