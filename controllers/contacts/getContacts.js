const contactsRepo = require("../../models/contacts");

const getContacts = async (req, res, next) => {
  try {
    const contacts = await contactsRepo.listContacts();
    res.json({ contacts });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getContacts,
};
