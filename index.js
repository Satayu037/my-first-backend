import "dotenv/config";

const port = process.env.PORT;
const name = process.env.NAME;

console.log(port);
console.log(name);
console.log(process.env.SECRET_KEY);
