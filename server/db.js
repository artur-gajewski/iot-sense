var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://postgres:postgres@192.168.99.102:48301/iot_sense'
var db = pgp(connectionString);

function getAllSensors(req, res, next) {
  db.any('select * from sensors order by id')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all sensors'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getSingleSensor(req, res, next) {
  var sensorId = parseInt(req.params.id);
  db.one('select * from sensors where id = $1 order by id', sensorId)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved one sensor'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function createSensor(req, res, next) {
  var description = req.body.description;
  db.none('insert into sensors (description) values ($1)', description)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Created new sensor'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function updateSensor(req, res, next) {
  var sensorId =  parseInt(req.params.id);
  db.none('update sensors set last_activity = NOW() where id = $1', sensorId)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated sensor'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function removeSensor(req, res, next) {
  var sensorId = parseInt(req.params.id);
  db.result('delete from sensors where id = $1', sensorId)
    .then(function (result) {
      /* jshint ignore:start */
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} sensor(s)`
        });
      /* jshint ignore:end */
    })
    .catch(function (err) {
      return next(err);
    });
}

module.exports = {
  getAllSensors: getAllSensors,
  getSingleSensor: getSingleSensor,
  createSensor: createSensor,
  updateSensor: updateSensor,
  removeSensor: removeSensor
};
