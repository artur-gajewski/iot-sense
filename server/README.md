# IOT-Sense RESTful API

#### Installation

1. Install dependencies - `npm install`
2. Run - `psql -U postgres -h <DOCKER_HOST_IP> -p 48301 < scripts/create_database.sql`
3. Run the development server - `npm start`
4. Open up your browser at http://127.0.0.1:3000/api/sensors

#### Entry points

To get a list of sensors

	$ curl -X GET http://127.0.0.1:3000/api/sensors

To get activity of a single sensor

	$ curl -X GET http://127.0.0.1:3000/api/sensors/:sensorId

To create new sensor

	$ curl -X POST --data "description=Name of the Sensor" http://127.0.0.1:3000/api/sensors

To update sensor activity

	$ curl -X PUT http://127.0.0.1:3000/api/sensors/:sensorId

To delete sensor

	$ curl -X DELETE http://127.0.0.1:3000/api/sensors/:sensorId
