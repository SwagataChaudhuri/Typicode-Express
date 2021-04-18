# **JSONPlaceholder REST API using Express JS**

## Introduction

This project is primarily built to create a wrapper on the REST API's provided by [JSONPlaceholder](https://jsonplaceholder.typicode.com/). This project mainly aims to provide a handson experience of calling REST API's in Express JS Framework using Axios dependency.

The project also implements caching on the API's to demonstrate quick in-memory caching in Node JS.

---

```
Resources
JSONPlaceholder comes with a set of 6 common resources:
The same links will be available in this project under http://localhost:8080

/posts		100 posts
/comments	500 comments
/albums		100 albums
/photos		5000 photos
/todos		200 todos
/users		10 users
```



## Steps to run the project locally

```
1. Clone the project in a folder
2. Open a command prompt in source file path cloned and run npm install
3. Run npm run start command
4. Navigate to http://localhost:8080 and start calling the REST API's 
```

## Installation & Execution Commands

```bash
npm install

npm run start
```

## REST Endpoints Exposed in the project

### Posts Controller

| **Method Type** | **URL**                                  |
| --------------- | ---------------------------------------- |
| GET             | https://localhost:8080/posts             |
| GET             | https://localhost:8080/posts/id          |
| GET             | https://localhost:8080/posts/id/comments |
| POST            | https://localhost:8080/posts             |
| PUT             | https://localhost:8080/posts/id          |
| PATCH           | https://localhost:8080/posts/id          |
| DELETE          | https://localhost:8080/posts/id          |

### Comments Controller

| **Method Type** | **URL**                                     |
| --------------- | ------------------------------------------- |
| GET             | https://localhost:8080/comments             |
| GET             | https://localhost:8080/comments/id          |

### Albums Controller


| **Method Type** | **URL**                                   |
| --------------- | ----------------------------------------- |
| GET             | https://localhost:8080/albums             |
| GET             | https://localhost:8080/albums/id          |

### Photos Controller


| **Method Type** | **URL**                                   |
| --------------- | ----------------------------------------- |
| GET             | https://localhost:8080/photos             |
| GET             | https://localhost:8080/photos/id          |

### Todos Controller


| **Method Type** | **URL**                                     |
| --------------- | ------------------------------------------- |
| GET             | https://localhost:8080/todos                |
| GET             | https://localhost:8080/todos/id	            |

### Users Controller


| **Method Type** | **URL**                                     |
| --------------- | ------------------------------------------- |
| GET             | https://localhost:8080/users                |
| GET             | https://localhost:8080/users/id             |



## Debugging the code locally

To debug the code locally we can use VS code javascript auto attach mode as on and run the below command in a new Javascript Debug Terminal

```bash
node server.js --inspect
```



