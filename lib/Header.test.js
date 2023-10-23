const {Header} = require("./Component");
const {formatDate} = require("./date")

describe("Header",()=>{
    it("should render the date correctly",()=>{
        const newHead = new Header(formatDate(new Date));
        console.log(newHead)
        const today = `<header class="header"><h1>Todo Today</h1><p>${formatDate(new Date)}</p></header>`;

        expect(newHead.render()).toBe(today)
    })
})