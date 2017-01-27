# Express.js + Angular + TypeScript Example

This project is a pre-configured stack of:

- **Nodejs** 6.x
- **ExpressJS** with TypeScript
- **Ava + Supertest** for Express API Testing
- **Angular + Angular CLI**
- **Nodemon** for hot-reloading which is useful for development.
- **Docker** support
- **Heroku** support

## Installation

- Clone this repository

```bash
$ git clone https://github.com/ahmed-taj/express-angular-typescript-example.git
```

- Install dependencies

```bash
$ cd express-angular-typescript-example
$ npm install
```

- Run development server

```bash
$ npm start
```

- Alternatively, you can run production server

```bash
$ npm run build
$ node dist/bin/www.js
```

## Available scripts

#### Development server
```sh
$ npm web:run       # Angular app in development mode + watching
$ npm api:run       # Express server in development mode + watching
$ npm start         # Does all above
```

#### Production build

```sh
$ npm web:build     # Builds Angular app in production mode
$ npm api:build     # Compiles Express server
$ npm run build     # Does all above
```

The build artifacts will be stored in the `dist/` directory.

#### Running tests

```sh
$ npm web:test   # executes Angular tests
$ npm api:test   # executes Ava
$ npm test       # same as api:test
```


## Deployment

### Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/ahmed-taj/express-angular-typescript-example/tree/master)

### Docker

You'll need at least Docker 1.12.

If you don't already have it installed, follow the instructions for your OS:

- On Mac OS X, you'll need [Docker for Mac](https://docs.docker.com/engine/installation/mac/)
- On Windows, you'll need [Docker for Windows](https://docs.docker.com/engine/installation/windows/)
- On Linux, you'll need [docker-engine](https://docs.docker.com/engine/installation/)

#### Build your image

```bash
$ cd express-angular-typescript-example
$ docker build -t <your-name/your-image-name> .
```

The build process may take some time.

#### Test your image

```bash
$ docker run -d -p <port>:3000 <your-name/your-image-name>
```

Replace <port> with your custom port number, for example 3000.

If everything went OK, then open the browser and visit http://localhost:3000, where 3000 is the port number you have specified.


## Further help

Found a bug or have a question? Feel free to create new [issue](https://github.com/ahmed-taj/express-angular-typescript-starter/issues).

## Licence

MIT