# facial-detection-back

facial-detection-back is the back - end part of the facial-detection app. It is built using Node.js and Express.js for the server and PostgresSQL for the database.

Built with: 

* Node.js
* Express.js
* PostgresSQL
  - Some API's i have used: 
    - Bcrypt - for encrypting he user passwords. For more information [visit](https://www.npmjs.com/package/bcrypt).
    - Clarifai - uses machine learning mechanism to detect faces in images. For more information [visit](https://www.clarifai.com/models/face-detection-image-recognition-model-a403429f2ddf4b49b307e318f00e528b-detection).
    - Body - parser - it parses incoming request bodies in a middleware before the handlers, available under the req.body property. For more information [visit](https://www.npmjs.com/package/body-parser).
    - Knex.js - SQL query builder. For more information [visit](https://knexjs.org/).
    - Cors - ensures that an application running at one origin/domain has access to selected resources of a server at a different origin. For more information [visit](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS).
