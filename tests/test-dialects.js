import { format } from "sql-formatter";

const testQuery = "select table.[id]";
const dialects = ["sql", "sqlite", "postgresql", "mysql", "tsql", "plsql"];

console.log("Testing different SQL dialects for bracket syntax:\n");

dialects.forEach((dialect) => {
  console.log(`Testing dialect: "${dialect}"`);
  try {
    const formatted = format(testQuery, {
      language: dialect,
      tabWidth: 2,
    });
    console.log("✅ SUCCESS - Formatted:");
    console.log(formatted);
  } catch (error) {
    console.log("❌ FAILED - Error:", error.message);
  }
  console.log("---");
});
