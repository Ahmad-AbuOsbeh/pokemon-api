# Pokemon API

## Overview
This is an API that supports CRUD operations for `Pokemon` data, these data imported from Microsoft Excel file into a separate database.

## How to start

- clone repository
- run `docker-compose up`
- You should be able to get it running on `http://localhost:8080`

## Run Migrations

- run `npm i` on your machine locally.
- run `npm run migration:run` (since migration file already generated)
- If not, run `npm run migration:generate` or `npm run migration:create`
- then run `npm run migration:run`
- You should be able to see the data into your Docker database.

## Technologies

- Node.js
- Nest.js
- TypeORM
- PostgreSQL

## APIs

#### 1- Get all Pokemons
    - Endpoint: `http://localhost:8080/pokemons`,
    - Method: `GET`,
    - QueryStrings:
      - `search`: Search by name, type, and weather,
      - `filter`: Filter by type, weather, familyId, and generation,
      - `limit`: Records limit for pagination,
      - `page`: Page number for pagination,
  
  - Example:

  ```javascript
  //Request URL:
  "http://localhost:8080/pokemons?search=be&type=normal&page=1&limit=20"

  //Response:
  [
    {
        "id": 4058,
        "name": "Trumbeak",
        "pokdexNumber": 732,
        "generation": 7,
        "evolutionStage": null,
        "evolved": 0,
        "familyID": 0,
        "type": "normal",
        "weather": "Partly cloudy",
        "statTotal": 369
    },
    {
        "id": 4086,
        "name": "Bewear",
        "pokdexNumber": 760,
        "generation": 7,
        "evolutionStage": "Lower",
        "evolved": 0,
        "familyID": 0,
        "type": "normal",
        "weather": "Partly cloudy",
        "statTotal": 616
    }
  ]

  ```

#### 2- Get By ID
    - Endpoint: `http://localhost:8080/pokemons/:id`,
    - Method: `GET`
    - Params: `id`
  
  - Example:

  ```javascript
  //Request URL:
  "http://localhost:8080/pokemons/4000"

  //Response:
  {
      "id": 4000,
      "name": "Pancham",
      "pokdexNumber": 674,
      "generation": 6,
      "evolutionStage": null,
      "evolved": 0,
      "familyID": 0,
      "type": "fighting",
      "weather": "Cloudy",
      "statTotal": 392
  }

  ```

#### 3- Create Pokemon

    - Endpoint: `http://localhost:8080/pokemons`,
    - Method: `POST`
    - Body:
      - "name": "New Pancham", [string] //required
      - "pokdexNumber": 674, [number] //required
      - "generation": 6, [number] //required
      - "evolutionStage": null, [string]
      - "evolved": 0, [number]
      - "familyID": 0, [number]
      - "type": "fighting", [string] //required
      - "weather": "Cloudy", [string] //required
      - "statTotal": 392 [number]
  
  - Example:

  ```javascript
  //Request URL:
  "http://localhost:8080/pokemons"
  //Body
    {
      "name": "New Pancham",
      "pokdexNumber": 674,
      "generation": 6,
      "evolutionStage": null,
      "evolved": 0,
      "familyID": 0,
      "type": "fighting",
      "weather": "Cloudy",
      "statTotal": 392
  }

  //Response:
  {
      "name": "New Pancham",
      "pokdexNumber": 674,
      "generation": 6,
      "evolutionStage": null,
      "evolved": 0,
      "familyID": 0,
      "type": "fighting",
      "weather": "Cloudy",
      "statTotal": 392,
      "id": 4129
  }

  ```

#### 4- Update Pokemon

    - Endpoint: `http://localhost:8080/pokemons/:id`,
    - Method: `PATCH`
    - Params: `id`
    - Body:
      - "name": "New Pancham - Updated", [string] //required
      - "pokdexNumber": 674, [number] //required
      - "generation": 6, [number] //required
      - "evolutionStage": null, [string]
      - "evolved": 0, [number]
      - "familyID": 0, [number]
      - "type": "fighting", [string] //required
      - "weather": "Cloudy", [string] //required
      - "statTotal": 392 [number]
  
  - Example:

  ```javascript
  //Request URL:
  "http://localhost:8080/pokemons/4129"
  //Body
    {
      "name": "New Pancham - Updated",
      "pokdexNumber": 674,
      "generation": 6,
      "evolutionStage": null,
      "evolved": 0,
      "familyID": 0,
      "type": "fighting",
      "weather": "Cloudy",
      "statTotal": 392
  }

  //Response:
  {
      "name": "New Pancham",
      "pokdexNumber": 674,
      "generation": 6,
      "evolutionStage": null,
      "evolved": 0,
      "familyID": 0,
      "type": "fighting",
      "weather": "Cloudy",
      "statTotal": 392,
      "id": 4129
  }

  ```

#### 5- Delete Pokemon

    - Endpoint: `http://localhost:8080/pokemons/:id`,
    - Method: `DELETE`
    - Params: `id`
  
  - Example:

  ```javascript
  //Request URL:
  "http://localhost:8080/pokemons/4129"

  //Response:
  1 //status: 200 OK

  ```