import { Controller } from "./controller.js";
import { CustomDate } from "../model/date.js";
import { DiaryNote } from "../model/diaryNote.js";
import { DiaryNoteView } from "../view/diaryNotebook.js";

class DiaryNotebook extends Controller
{
    constructor(app, calendar) {
        super(app);
        this._view = new DiaryNoteView();
        this._calendar = calendar;
    }

    init() {
        this._view.init();
        return true;
    }

    update() {
        let selectedDay = this._calendar.getSelectedDay();
        let date = this._calendar.getDate();
        if(selectedDay == -1) {
            this._view.clearNote();
            return;
        }
        let note = this._findNote();
        if(note == null) {
            this._view.noneNote();
        } else {
            this._view.existingNote(note.name, note.description);
        }
    }

    submitForm(submitter) {
        let selectedDay = this._calendar.getSelectedDay();
        if(selectedDay == -1) {
            this._view.clearNote();
            return;
        }
        if(submitter.name == "selectDay" || submitter.name == "cancel") {
            this.update();
        }
        else if(submitter.name == "createNote") {
            this._view.createNote();
        }
        else if(submitter.name == "create" || submitter.name == "safeChanges") {
            let date = this._calendar.getDate();
            let name = this._view.getNameInput();
            let description = this._view.getDescriptionInput();
            this._view.clearErrors();
            let isIncorrect = DiaryNote.isNameIncorrect(name);
            if(isIncorrect) {
                this._view.setNameError(isIncorrect);
                return;
            }
            isIncorrect = DiaryNote.isDescriptionIncorrect(description);
            if(isIncorrect) {
                this._view.setDescriptionError(isIncorrect);
                return;
            }
            let note = DiaryNote.createDiaryNote(date, name, description);
            let diaryNotes = this._app.user.diaryNotes;
            let index = diaryNotes.findIndex((diaryNote) => date.compare(diaryNote.date));
            if(index < 0) {
                diaryNotes.push(note);
            } else {
                diaryNotes[index] = note;
            }
            this._app._users.save();
        }
        else if(submitter.name == "change") {
            let note = this._findNote();
            if(note != null) {
                this._view.changeNote(note.name, note.description);
            }
        }
        else if(submitter.name == "delete") {
            let date = this._calendar.getDate();
            let diaryNotes = this._app.user.diaryNotes;
            this._app.user.diaryNotes = diaryNotes.filter((diaryNote) => diaryNote.date != date);
            this._app._users.save();
        }
    }

    _findNote() {
        return this._app.user.diaryNotes.find((diaryNote) => this._calendar.getDate().compare(diaryNote.date));
    }
}

export { DiaryNotebook };