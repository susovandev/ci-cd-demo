import noteModel from '../../models/note.model.js';
import { CreateNoteDTO, UpdateNoteDTO } from './notes-dto.js';

export interface INotesRepository {
	getAll(): Promise<any>;
	getById(id: string): Promise<any>;
	create(data: CreateNoteDTO): Promise<any>;
	update(noteId: string, data: UpdateNoteDTO): Promise<any>;
	delete(noteId: string): Promise<any>;
}

class NotesRepository implements INotesRepository {
	noteModel: typeof noteModel;

	constructor() {
		this.noteModel = noteModel;
	}

	async getAll() {
		return await this.noteModel.find().sort({ createdAt: -1 }).lean();
	}

	async getById(id: string) {
		return await this.noteModel.findById(id).lean();
	}

	async create(data: CreateNoteDTO) {
		return await this.noteModel.create(data);
	}

	async update(noteId: string, data: UpdateNoteDTO) {
		return await this.noteModel.findByIdAndUpdate(noteId, data, { new: true });
	}

	async delete(noteId: string) {
		return await this.noteModel.findByIdAndDelete(noteId);
	}
}

export default new NotesRepository();
