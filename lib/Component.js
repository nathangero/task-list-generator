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
    constructor(children) {
        super(children);
    }

    render() {
        return `<header class="header"><h1>Todo Today</h1><p>{DATE_HERE}</p></header>`;
    }
}


class TaskListItem extends Component {
    constructor(children, priority) {
        super(children);
        this.priority = priority;
    }

    render() {
        if (this.priority) {
            return `<li class="tasks-item tasks-item-priority">{INNER_HTML}</li>`;
        } else {
            return `<li class="tasks-item">{INNER_HTML}</li>`;
        }
    }
}


class TaskList extends Component {
    constructor(children) {
        super(children);
    }

    render() {
        return `<ul class="tasks">{INNER_HTML}</ul>`;
    }
}