const Clarifai = require("clarifai");

const app = new Clarifai.App({
  apiKey: "79b34108db374e97b8f16adc81c221c3"
});

const handleApiCall = (req, res) => {
  app.models
    .predict(Clarifai.FACE_DETECT_MODEL, req.body.imageUrl)
    .then(data => res.json(data))
    .catch(err => res.json(400).json("Unable to work with API"));
};

const handleImage = (req, res, knex) => {
  const { id } = req.body;

  knex("users")
    .where({ id })
    .increment("entries", 1)
    .returning("entries")
    .then(entries => res.json(entries[0]))
    .catch(err => res.status(400).json("Unable to get entries"));
};

module.exports = {
  handleImage,
  handleApiCall
};
