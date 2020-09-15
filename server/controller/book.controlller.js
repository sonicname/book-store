const book = require("../db/models/book.model");

module.exports.index = async (req, res) => {
  try {
    const allBooks = await book.find({});
    res.send(allBooks);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.findBookById = async (req, res) => {
  try {
    const bookChosen = await book.findById(req.params.id).exec();
    res.status(200).send(bookChosen);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.findBookAndUpdate = async (req, res) => {
  try {
    await book.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (err, updated) => {
        if (err) {
          res.send("Failed!");
        } else {
          res.send("Updated!");
        }
      }
    );
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.createBook = async (req, res) => {
  try {
    const bookCreated = new book({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      author: req.body.author,
    });

    await bookCreated.save((err) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send("Book Saved!!");
      }
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.deleteBook = async (req, res) => {
  try {
    await book.findByIdAndDelete(req.params.id, (err) => {
      if (err) {
        res.send("Fail!");
      } else {
        res.send("Deleted!");
      }
    });
  } catch (error) {}
};
