const contactsRepo = require("../../models/contacts");

const getContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    const contact = await contactsRepo.getContactById(id);
    if (!contact) {
      const error = new Error("Not found");
      error.code = 404;
      throw error;
    }
    res.json({ contact });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getContact,
};
