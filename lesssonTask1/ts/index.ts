//question 1
//Create variables typed with the following types: any, boolean, string, number.

const anyVariable: any = "any kind of variable";

const myNumber: number = 35;

const myString: string = "only string can be passed";

const myBoolean: boolean = true;

console.log(typeof myBoolean);

// Question 2
// Create an array that can hold only boolean values.

const myFirstTypescriptArray: number[] = [1, 2, 3, 4];

let newArray: Array<number> = new Array(5, 6, 7);

// Question 3
// Create an array that can hold either string or number values.

const arrOfStringOrNumber: (string | number)[] = ["ankit", 2, "false"];

// Question 4
// Create an a tuple with the following types: string, string, number.

const tuple: [string, string, number] = ["ankit", "soni", 2];

// Question 5
// Create a function with two parameters. The first accepts either a string or boolean value, the second accepts either a number or string value.

// Practicing type interface
type StrOrNum = string | number;
type BolOrStr = boolean | string;

function numberAndString(stringOrBool: BolOrStr, stringOrNumber: StrOrNum): void {
	console.log(`takes string or boolean: ${stringOrBool},`, `takes string or number: ${stringOrNumber}`);
}

numberAndString(false, "ankit");

// Javascipt classes
class Product {
	id: number;
	firstName: string;
	lastName?: string;

	constructor(idNumber: number, firstName: string, lastName: string) {
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
function generateMessage(message: Message) {
	switch (message.severity) {
		case "ERROR":
			return `This is serious ${message.content}`;
		case "WARNING":
			return `This is kind of serious ${message.content}`;
		case "SUCCESS":
			return `Message is successful ${message.content}`;
	}
}

enum MessageType {
	Error = "ERROR",
	Warning = "WARNING",
	Success = "SUCCESS",
}
interface Message {
	severity: MessageType;
	content: string;
}

console.log(generateMessage({ severity: MessageType.Warning, content: "Bad things happened" }));
console.log("ankit Soni");
