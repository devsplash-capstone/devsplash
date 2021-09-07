import createView from "../createView.js";

export default function Test(testing){
    console.log("testing page to see if it works");
    return `<h1>you should see this on a new page</h1>`
}
export function testingEvent(){
    console.log("this is test");
}