import {
  addNoteHandler,
  getAllNotesHandler,
  getNotesByIdHandler,
  updateNotesByIdHandler,
  deleteNoteByIdHandler
} from "./handler.js";

const routes = [
  {
    method: "POST",
    path: "/notes",
    handler: addNoteHandler,
  },
  {
    method: "GET",
    path: "/notes",
    handler: getAllNotesHandler,
  },
  {
    method: "GET",
    path: "/notes/{id}", // untuk mengambil data spesifik tertentu
    handler: getNotesByIdHandler,
  },
  {
    method: "PUT",
    path: "/notes/{id}",
    handler: updateNotesByIdHandler,
  },
  {
    method: "DELETE",
    path: "/notes/{id}",
    handler: deleteNoteByIdHandler,
  },
];

export default routes;
