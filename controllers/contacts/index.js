const { getContact } = require("./getContact");
const { getContacts } = require("./getContacts");
const { createContact } = require("./createContact");
const { updateOneContact } = require("./updateContact");
const { deleteContact } = require("./deleteContact");

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateOneContact,
  deleteContact,
};
