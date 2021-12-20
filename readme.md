<div align="center">
	<a href="mailto:rawipas.chisamut@gmail.com"><img src="https://www.svgrepo.com/show/275536/cat.svg" style="width: 180px; height: 180px;"/></a>
	<h1> Test project for interview </h1>
  <a href="#"><img src="https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white
" /></a>
  <a href="#"><img src="https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white
" /></a>
    <a href="#"><img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white
" /></a>  <br/>
    <a href="#"><img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
" /></a>  
    <a href="#"><img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white
" /></a>  
    <a href="#"><img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white
" /></a>  
    <a href="#"><img src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white
" /></a>  
      <br /><br />
      <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
      <a href="mailto:rawipas.chisamut@gmail.com">Contact</a>
      <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  </br>
  <hr>
</div>

## Documentation.

| Name      | Link                                                     |
| --------- | -------------------------------------------------------- |
| `NestJS`  | [view](https://docs.nestjs.com/)                         |
| `GraphQL` | [view](https://graphql.org/learn/)                       |
| `Prisma`  | [view](https://www.prisma.io/docs/)                      |

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file
| Name             | Description                                                      |
| ---------------- | ---------------------------------------------------------------- |
| `NODE_ENV`       | `development`                                   |
| `PORT`           | For run application e.g. 3000                       |
| `DATABASE_URL`   | For [Prisma](https://www.prisma.io/docs/)                        |


## Run Locally

Clone this repository or download it.

```bash
  git clone https://github.com/l2D/test-project-fictionlog.git
```
or
```bash
  gh repo clone l2D/test-project-fictionlog
```

Go to the project directory

```bash
  cd test-project-fictionlog
```

Install dependencies

```bash
  npm install
```

Build & Deploy containers

```bash
docker-compose up -d --build service-books-db service-books-dev
```
or deploy only database
```bash
docker-compose up -d --build service-books-db
```

Generate prisma client (**require** `DATABASE_URL` in `.env`)

```bash
  npx prisma generate
```

Start the server (local)

```bash
  npm run start:dev
```

Endpoint: `http://localhost:PORT/graphql`

