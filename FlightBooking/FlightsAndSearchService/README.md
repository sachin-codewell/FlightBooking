Steps for cloning the project - 

1. clone it from github and then run npm install for all dependency
2. cretae a .env file and add these things in that file
 PORT = <port on which you want to run process>

3. create config.json file src/config/config.json 
{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}