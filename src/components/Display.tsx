import { useState, useEffect } from "react";
import { format } from "sql-formatter";

interface DisplayProps {
  sqlQuery: string;
  formatConfig: string;
  queryParams: string;
  sqlDialect:
    | "sql"
    | "bigquery"
    | "clickhouse"
    | "db2"
    | "db2i"
    | "duckdb"
    | "hive"
    | "mariadb"
    | "mysql"
    | "tidb"
    | "n1ql"
    | "plsql"
    | "postgresql"
    | "redshift"
    | "spark"
    | "sqlite"
    | "trino"
    | "tsql";
}

export default function Display({
  sqlQuery,
  formatConfig,
  queryParams,
  sqlDialect,
}: DisplayProps) {
  const [formattedQuery, setFormattedQuery] = useState<string>("");
  const [parameterCount, setParameterCount] = useState<number>(0);

  const replaceQueryParams = (query: string, params: string) => {
    try {
      const paramsArray = params.split(",").map((p) => p.trim());
      let result = query;
      let paramIndex = 0;

      while (result.includes("?") && paramIndex < paramsArray.length) {
        result = result.replace("?", paramsArray[paramIndex]);
        paramIndex++;
      }

      return result;
    } catch (error) {
      console.error("Error replacing query parameters:", error);
      return query;
    }
  };

  useEffect(() => {
    // Calculate parameter count
    const count = (sqlQuery.match(/\?/g) || []).length;
    setParameterCount(count);

    try {
      // Parse format config with error handling
      let formatOptions: Record<string, any> = {};
      if (formatConfig) {
        try {
          formatOptions = JSON.parse(formatConfig);
        } catch (parseError: any) {
          console.warn(
            "Invalid format config JSON, using default options:",
            parseError?.message || "Unknown error",
          );
          // Try to provide helpful error message to user
          setFormattedQuery(
            `Error: Invalid format configuration. Please check your JSON syntax.\n\n${sqlQuery}`,
          );
          return;
        }
      }

      // Validate and format the query first
      const validDialects = [
        "sql",
        "bigquery",
        "clickhouse",
        "db2",
        "db2i",
        "duckdb",
        "hive",
        "mariadb",
        "mysql",
        "tidb",
        "n1ql",
        "plsql",
        "postgresql",
        "redshift",
        "spark",
        "sqlite",
        "trino",
        "tsql",
      ];

      const dialect = validDialects.includes(sqlDialect) ? sqlDialect : "sql";

      const formatted = format(sqlQuery, {
        language: dialect,
        tabWidth: 2,
        ...formatOptions,
      });

      // Replace query parameters
      const queryWithParams = queryParams
        ? replaceQueryParams(formatted, queryParams)
        : formatted;

      setFormattedQuery(queryWithParams);
    } catch (error) {
      console.error("Error formatting SQL:", error);
      // Try to use the raw query if formatting fails
      const queryWithParams = queryParams
        ? replaceQueryParams(sqlQuery, queryParams)
        : sqlQuery;
      setFormattedQuery(queryWithParams);
    }
  }, [sqlQuery, formatConfig, queryParams, sqlDialect]);

  return (
    <div className="display-section h-100">
      <h2>Formatted SQL Query</h2>
      <div className="form-group h-100">
        <label htmlFor="formattedQuery">
          Formatted Query
          {parameterCount > 0 && ` - Parameterized values = ${parameterCount}`}
        </label>
        <textarea
          className="form-control h-100"
          id="formattedQuery"
          value={formattedQuery}
          readOnly
        />
      </div>
      {queryParams && (
        <div className="query-params">
          {/*<h3>Query Parameters</h3>*/}
          <p>{/*queryParams*/}</p>
        </div>
      )}
    </div>
  );
}
