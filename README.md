## Description

[Nest] framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Variables de entorno (local)

Modificar las variables de entorno en el archivo **_development.env_** con las credenciales del usuario IAM

```bash

PORT = 3030
DYNAMODB_ACCESS_KEY_ID = USER_IAM_ACCESS_KEY_ID
DYNAMODB_SECRET_ACCESS_KEY = USER_IAM_SECRET_ACCESS_KEY

```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test:unit

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Desplegar en aws

Para ello es importante contar un un **_usuario IAM_** en la región **us-east-1** con los los permisos necesarios.
Obtener la clave de acceso del usuario IAM para posteriormente configurar en el cliente de aws

```bash
#Instalar serverless
$ npm i serverless@3.39.0 -g

#Instalar el cliente de aws y configurar los claves de acceso
$ aws configure

AWS Access Key ID [******************4P02]:
AWS Secret Access Key [******************oTD0]:
Default region name [us-east-1]: us-east-1
Default output format [json]: json

#Empaquetar y desplegar en aws
$ serverless deploy

```

## Verificar en AWS CloudFormation

Verificar que se haya creado la pila sw-api-sls-production

## Agregar variables de entorno para el apigateway

```bash
PORT = 3030
DYNAMODB_ACCESS_KEY_ID = USER_IAM_ACCESS_KEY_ID
DYNAMODB_SECRET_ACCESS_KEY = USER_IAM_SECRET_ACCESS_KEY

```
