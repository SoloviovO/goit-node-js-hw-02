const contactsRepo = require("../../models/contacts");

const deleteContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await contactsRepo.removeContact(id);
    if (result === null) {
      const err = new Error("Not found");
      err.code = 404;
      throw err;
    }
    res.status(200).send({ message: "contact deleted" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  deleteContact,
};
