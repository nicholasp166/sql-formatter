import { format } from "sql-formatter";

// Test cases to reproduce the issue with brackets and periods
const testQueries = [
  "select table.[id]",
  "SELECT table.[id]",
  "select table.id",
  "SELECT table.id",
  "select table.column_name",
  "SELECT table.column_name",
  "select table.[column_name]",
  "SELECT table.[column_name]",
  "select table.[id] from users where table.[name] = 'John'",
  "SELECT table.[id] FROM users WHERE table.[name] = 'John'",
];

console.log("Testing SQL formatting with brackets and periods:\n");

testQueries.forEach((query, index) => {
  console.log(`Test ${index + 1}: "${query}"`);
  try {
    const formatted = format(query, {
      language: "sql",
      tabWidth: 2,
    });
    console.log("Formatted:");
    console.log(formatted);
    console.log("---");
  } catch (error) {
    console.error("Error formatting:", error.message);
    console.log("---");
  }
});
