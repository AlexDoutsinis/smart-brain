const handleSignin = (knex, bcrypt) => (req, res) => {
  if (!req.body.email || !req.body.password)
    return res.status(400).json("Incorrect from submission");

  knex
    .select("email", "hash")
    .from("login")
    .where({ email: req.body.email })
    .then(data => {
      const isValid = bcrypt.compareSync(req.body.password, data[0].hash);

      if (isValid) {
        return knex
          .select("*")
          .from("users")
          .where({ email: req.body.email })
          .then(user => {
            res.json(user[0]);
          })
          .catch(err => res.status(400).json("Unable to get user"));
      }

      res.status(400).json("Wrong password");
    })
    .catch(err => res.status(400).json("Wrong email"));
};

module.exports = {
  handleSignin
};
