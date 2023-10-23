// TODO: Import your Header, TaskList, and TaskListItem
const { Header, TaskList, TaskListItem } = require("./Component");
const {formatDate} = require("./date")

function createDocument(title, tasks = []) {
  // TODO: Create a new Header
  let newHead = new Header(formatDate(new Date));
  // TODO: Create new TaskListItems from the provided tasks
  let item1 = new TaskListItem([], true, tasks[0].text)
  // TODO: Add TaskListItems to a new TaskList
  let newTaskList = new TaskList([], item1.render());
  // TODO: Modify the template below to include your title, Header, and TaskList
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${title}</title>
      <link rel="stylesheet" href="../dist/style.css" />
    </head>
    <body>
      <div class="card">
        ${newHead.render()}
        ${newTaskList.render()}
      </div>
    </body>
  </html>
  `;
}

module.exports = { createDocument };
