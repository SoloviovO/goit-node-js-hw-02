const contactsRepo = require("../../models/contacts");
const { addContactSchema } = require("../../schemas");

const updateOneContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, email, phone } = req.body;

    const { error } = addContactSchema.validate({ name, email, phone });
    if (error) {
      const err = new Error("missing fields");
      err.code = 400;
      throw err;
    }

    const result = await contactsRepo.updateContact(id, {
      name,
      email,
      phone,
    });
    if (result === null) {
      const err = new Error("Not found");
      err.code = 404;
      throw err;
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  updateOneContact,
};
