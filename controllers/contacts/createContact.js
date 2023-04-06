const contactsRepo = require("../../models/contacts");
const { addContactSchema } = require("../../schemas");

const createContact = async (req, res, next) => {
  try {
    const { name, email, phone } = req.body;

    const { error } = addContactSchema.validate({ name, email, phone });
    if (error) {
      const invalidField = error.details[0].path[0];
      const err = new Error(`missing required ${invalidField} field`);
      err.code = 400;
      throw err;
    }
    const newContacts = await contactsRepo.addContact(name, email, phone);
    res.status(201).json(newContacts);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createContact,
};
