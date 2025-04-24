const fs = require("fs");

const filePath = "views.json";

// Read 
let data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
data.count += 1;

// Save
fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
console.log("Contagem atualizada:", data.count);