# ToDo APP

ToDo App bulilt in NodeJS

### OverView

This small project help me understanding the working structure of a full scalable porject, and understanding the folder structure of the big projects.

### What I learnt

- Creating server
- Handling server Requests
- Managing Routes
- Declaring Actions
- Database Queries
- Working of HTML engines

### NPM packages
- express
- mongoose
- ejs
- express-ejs-layouts

### Folder Structure
```
    |__ProjectDir
        |__assets
        |   |__css
        |   |    |__ style.css
        |   |__js
        |       |__ cript.js
        |__config
        |   |__ mongooese.js
        |__controllers
        |   |__ addToDoController.js
        |   |__ deleteToDOController.js
        |   |__ homeController.js
        |   |__ todoController.js
        |__models
        |   |__ todoModel.js
        |__routes
        |   |__ index.ejs
        |   |__ todos.js
        |__views
        |   |__ _footer.ejs
        |   |__ _header.ejs
        |   |__ home.ejs
        |   |__ layout.ejs
        |   |__ todos.ejs
        |__ .gitignore
        |__ index.js
        |__ package-lock.json
        |__ package.json
        |__ ReadMe.md

```
### Run Project
```
    npm start
```