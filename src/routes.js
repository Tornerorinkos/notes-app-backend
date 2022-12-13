/* eslint-disable no-console */
/* eslint linebreak-style: ["error", "windows"] */
const {
  addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByIHandler, deleteNoteByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
    options: {
      cors: true,
    },
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler,
  },
];

module.exports = routes;
