import { type Request, type Response } from 'express';

import Logger from '@config/logger.config.js';
import { CreateNoteDTO } from './notes-dto.js';
import notesService from './notes.service.js';
import { ApiResponse } from '@utils/api-response.js';

class NoteController {
	async getAllNotesHandler(req: Request, res: Response) {
		Logger.info(`Getting all notes...`);
		const notes = await notesService.getAllNotes();
		return res
			.status(200)
			.json(new ApiResponse(200, 'Notes fetched successfully', notes));
	}

	async getNoteByIdHandler(req: Request, res: Response) {
		Logger.info(`Getting note by id...`);
		const note = await notesService.getNoteById(req.params.id as string);
		return res
			.status(200)
			.json(new ApiResponse(200, 'Note fetched successfully', note));
	}

	async createNoteHandler(req: Request, res: Response) {
		Logger.info(`Creating note...`);
		const newNote = await notesService.createNote(req.body as CreateNoteDTO);
		return res.status(201).json(new ApiResponse(201, 'Note created', newNote));
	}

	async updateNoteHandler(req: Request, res: Response) {
		Logger.info(`Updating note...`);
		const updatedNote = await notesService.updateNote(
			req.params.id as string,
			req.body as CreateNoteDTO,
		);
		return res
			.status(200)
			.json(new ApiResponse(200, 'Note updated', updatedNote));
	}

	async deleteNoteHandler(req: Request, res: Response) {
		Logger.info(`Deleting note...`);
		const deletedNote = await notesService.deleteNote(req.params.id as string);
		return res
			.status(200)
			.json(new ApiResponse(200, 'Note deleted', deletedNote));
	}
}

export default new NoteController();
