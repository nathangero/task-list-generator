const {TaskList} = require("./Component");

describe("TaskList",()=>{
    it("should render the unordered list with tasks correctly",()=>{
        const newTL = new TaskList([], "List Item");

        const output = '<ul class="tasks">List Item</ul>';

        expect(newTL.render()).toBe(output)
    })
})