import { Router } from 'express';
import notesController from './notes.controller.js';

const router: Router = Router();

router.get('/', notesController.getAllNotesHandler);
router.get('/:id', notesController.getNoteByIdHandler);

router.post('/', notesController.createNoteHandler);
router.put('/:id', notesController.updateNoteHandler);
router.delete('/:id', notesController.deleteNoteHandler);

export default router;
