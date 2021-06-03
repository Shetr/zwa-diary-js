import { StorageObject } from "../control/storageObject.js";

import { Notes } from "./notes.js";
import { DiaryNotes } from "./diaryNotes.js";
import { Style } from "./style.js";

class User extends StorageObject
{
    constructor(email, passwordHash) {
        super();
        this.email = email;
        this.passwordHash = passwordHash;
        //this.notes = notes;
        //this.diaryNotes = diaryNotes;
        //this.style = style;
    }

    static createWithPassword(email, password) {
        return new User(email, password);
    }

    isPasswordCorrect(password) {
        return true;
    }

}

export { User };