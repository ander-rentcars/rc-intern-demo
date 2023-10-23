const db = require('../models')
const Vehicle = db.vehicle

exports.create = (req, res) => {
  Vehicle.create(req.body)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Vehicle."
      })
    })
}

exports.findAll = (req, res) => {
  Vehicle.findAll()
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving vehicles."
      })
    })
}

exports.findOne = (req, res) => {
  const id = req.params.id;
  Vehicle.findAll({
    where: {
      id: id
    }
  })
  .then(data => {
    if (data.length > 0) {
      res.json(data[0])
    } else {
      res.status(404).send({
        message: `Cannot find Vehicle with id=${id}.`
      })
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Error retrieving Vehicle with id=" + id
    });
  })
}

exports.update = (req, res) => {
  const id = req.params.id;
  Vehicle.update({
    where: { id: id }
  })
  .then(num => {
    if (num == 1) {
      res.send({
        message: "Vehicle was updated successfully."
      });
    } else {
      res.send({
        message: `Cannot update Vehicle with id=${id}. Maybe Vehicle was not found or req.body is empty!`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Error updating Vehicle with id=" + id
    });
  })
}

exports.delete = (req, res) => {
  const id = req.params.id;

  Vehicle.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Vehicle was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Vehicle with id=${id}. Maybe Vehicle was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Vehicle with id=" + id
      });
    });
}