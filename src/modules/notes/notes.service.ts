import Logger from '@config/logger.config.js';
import { CreateNoteDTO, UpdateNoteDTO } from './notes-dto.js';
import notesRepo, { type INotesRepository } from './notes.repositories.js';

export interface INoteServices {
	getAllNotes(): Promise<any>;
	getNoteById(id: string): Promise<any>;
	createNote(data: CreateNoteDTO): Promise<any>;
	updateNote(noteId: string, data: UpdateNoteDTO): Promise<any>;
	deleteNote(noteId: string): Promise<any>;
}

class NoteServices {
	noteRepo: INotesRepository;
	constructor() {
		this.noteRepo = notesRepo;
	}

	async getAllNotes() {
		const notes = await this.noteRepo.getAll();
		if (!notes) {
			throw new Error('Failed to get notes');
		}
		return notes;
	}

	async getNoteById(id: string) {
		const note = await this.noteRepo.getById(id);
		if (!note) {
			throw new Error('Failed to get note');
		}
		return note;
	}
	async createNote(data: CreateNoteDTO) {
		Logger.info(`Creating note...`);
		if (!data) {
			throw new Error('Data is required');
		}
		const newNote = await this.noteRepo.create(data);
		if (!newNote) {
			throw new Error('Failed to create note');
		}
		return newNote;
	}

	async updateNote(noteId: string, data: UpdateNoteDTO) {
		const updatedNote = await this.noteRepo.update(noteId, data);
		if (!updatedNote) {
			throw new Error('Failed to update note');
		}
		return updatedNote;
	}

	async deleteNote(noteId: string) {
		const deletedNote = await this.noteRepo.delete(noteId);
		if (!deletedNote) {
			throw new Error('Failed to delete note');
		}
		return deletedNote;
	}
}

export default new NoteServices();
