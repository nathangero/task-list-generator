const {TaskListItem} = require("./Component");

describe("TaskListItem",()=>{
    it("should render all list items correctly", ()=>{
        const newTLI = new TaskListItem([], true, "Item");

        const output = '<li class="tasks-item tasks-item-priority">Item</li>';

        expect(newTLI.render()).toBe(output);
    })
    it("should render all list items correctly", ()=>{
        const newTLI = new TaskListItem([], false, "Item");

        const output = '<li class="tasks-item">Item</li>';

        expect(newTLI.render()).toBe(output);
    })
})

