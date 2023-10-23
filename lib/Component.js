class Component {
    constructor(children) {
        if (!children) {
            this.children = [];
        } else {
            this.children = children;
        }
    }

    render() {
        throw new Error("Child class must implement render() method.");
    }

    renderInnerHTML() {
        for (let i = 0; i < this.children.length; i++) {
            // TODO: loops over the children and converts any that aren't strings to strings by calling their render() method.
            this.children[i].render(); 
        }
    }
}


class Header extends Component {
    constructor(date) {
        super();
        this.date = date;
    }

    render() {
        return `<header class="header"><h1>Todo Today</h1><p>${this.date}</p></header>`;
    }
}


class TaskListItem extends Component {
    constructor(children, priority, item) {
        super(children);
        this.priority = priority;
        this.item = item;
    }

    render() {
        if (this.priority) {
            return `<li class="tasks-item tasks-item-priority">${this.item}</li>`;
        } else {
            return `<li class="tasks-item">${this.item}</li>`;
        }
    }
}


class TaskList extends Component {
    constructor(children, listItem) {
        super(children);
        this.listItem = listItem;
    }

    render() {
        return `<ul class="tasks">${this.listItem}</ul>`;
    }
}

module.exports = {Component, Header, TaskListItem, TaskList}