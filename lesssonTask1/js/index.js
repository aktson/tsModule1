//question 1
//Create variables typed with the following types: any, boolean, string, number.
const anyVariable = "any kind of variable";
const myNumber = 35;
const myString = "only string can be passed";
const myBoolean = true;
console.log(typeof myBoolean);
// Question 2
// Create an array that can hold only boolean values.
const myFirstTypescriptArray = [1, 2, 3, 4];
let newArray = new Array(5, 6, 7);
// Question 3
// Create an array that can hold either string or number values.
const arrOfStringOrNumber = ["ankit", 2, "false"];
// Question 4
// Create an a tuple with the following types: string, string, number.
const tuple = ["ankit", "soni", 2];
function numberAndString(stringOrBool, stringOrNumber) {
    console.log(`takes string or boolean: ${stringOrBool},`, `takes string or number: ${stringOrNumber}`);
}
numberAndString(false, "ankit");
// Javascipt classes
class Product {
    constructor(idNumber, firstName, lastName) {
        this.id = idNumber;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
const newProduct = new Product(12345, "Ankit", "Soni");
const anotherProduct = new Product(161215, "Noah", "Soni");
console.log(newProduct);
console.log(anotherProduct);
// practicing interface and enum
function generateMessage(message) {
    switch (message.severity) {
        case "ERROR":
            return `This is serious ${message.content}`;
        case "WARNING":
            return `This is kind of serious ${message.content}`;
        case "SUCCESS":
            return `Message is successful ${message.content}`;
    }
}
var MessageType;
(function (MessageType) {
    MessageType["Error"] = "ERROR";
    MessageType["Warning"] = "WARNING";
    MessageType["Success"] = "SUCCESS";
})(MessageType || (MessageType = {}));
console.log(generateMessage({ severity: MessageType.Warning, content: "Bad things happened" }));
console.log("ankit Soni");
