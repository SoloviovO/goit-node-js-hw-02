const fsp = require("fs/promises");
const { nanoid } = require("nanoid");
const path = require("path");

const contactsPath = path.join(__dirname, "contacts.json");

async function getContacts() {
  const contacts = await fsp.readFile(contactsPath);
  const parsedContacts = JSON.parse(contacts);
  return parsedContacts;
}
async function updateContacts(contacts) {
  await fsp.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
}

const listContacts = async () => {
  return await getContacts();
};

const getContactById = async (contactId) => {
  const contacts = await getContacts();
  const contact = contacts.find((contact) => contact.id === contactId);
  if (!contact) {
    return null;
  }
  return contact;
};

const removeContact = async (contactId) => {
  const contacts = await getContacts();
  const contactIndex = contacts.findIndex(
    (contact) => contact.id === contactId
  );
  if (contactIndex === -1) {
    return null;
  }
  contacts.splice(contactIndex, 1);
  await updateContacts(contacts);
};

const addContact = async (name, email, phone) => {
  const newContact = { id: nanoid(), name, email, phone };
  const contacts = await getContacts();
  contacts.push(newContact);
  await updateContacts(contacts);
  return newContact;
};

const updateContact = async (contactId, body) => {
  const contacts = await getContacts();

  const contactIndex = contacts.findIndex(
    (contact) => contact.id === contactId
  );
  if (contactIndex === -1) {
    return null;
  }
  contacts[contactIndex] = {
    contactId,
    ...body,
  };
  await updateContacts(contacts);
  return contacts[contactIndex];
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
