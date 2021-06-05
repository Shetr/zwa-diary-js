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

    doesPasswordMatch(password) {
        return this.passwordHash == password;
    }

    static isEmailIncorrect(email) {
        if(!(email.indexOf("@") > -1 && email.indexOf(".") > -1))
        {
            return "Missing @ or . in the email.";
        }
        if(!(email.indexOf("@") > 0 && email.indexOf(".") > email.indexOf("@") + 1 && email.indexOf(".") < email.length - 1))
        {
            return "Incorrect email.";
        }
        return "";
    }

    static isPasswordIncorrect(password) {
        if(password.length <= 3)
        {
            return 'Password must be longer than 3 characters.';
        }
        return "";
    }

}

export { User };