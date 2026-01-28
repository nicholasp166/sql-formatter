import { format } from "sql-formatter";

// Test cases to reproduce the issue
const testQuery = "SELECT * FROM users WHERE id = 1 AND name = 'John'";

// Test 1: No format config
console.log("Test 1 - No config:");
console.log(format(testQuery, { language: "sql", indent: "  " }));

// Test 2: Valid JSON config
console.log("\nTest 2 - Valid JSON config:");
const validConfig = JSON.stringify({
  keywordCase: "upper",
  commaPosition: "before",
});
console.log("Config string:", validConfig);
try {
  console.log(
    "Formatted:",
    format(testQuery, {
      language: "sql",
      indent: "  ",
      ...JSON.parse(validConfig),
    }),
  );
} catch (error) {
  console.error("Error:", error.message);
}

// Test 3: Invalid JSON config (simulating brackets/period issue)
console.log("\nTest 3 - Invalid JSON config:");
const invalidConfig = "{ keywordCase: upper, commaPosition: before }"; // Missing quotes
console.log("Config string:", invalidConfig);
try {
  console.log(
    "Formatted:",
    format(testQuery, {
      language: "sql",
      indent: "  ",
      ...JSON.parse(invalidConfig),
    }),
  );
} catch (error) {
  console.error("Error:", error.message);
}

// Test 4: Config with brackets and periods
console.log("\nTest 4 - Config with brackets and periods:");
const bracketConfig = JSON.stringify({
  keywordCase: "upper",
  commaPosition: "before",
  tabWidth: 2,
  logicalOperatorNewline: "before",
});
console.log("Config string:", bracketConfig);
try {
  console.log(
    "Formatted:",
    format(testQuery, {
      language: "sql",
      indent: "  ",
      ...JSON.parse(bracketConfig),
    }),
  );
} catch (error) {
  console.error("Error:", error.message);
}
