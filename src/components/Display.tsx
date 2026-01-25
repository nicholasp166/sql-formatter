import { useState, useEffect } from "react";
import { format } from "sql-formatter";

interface DisplayProps {
  sqlQuery: string;
  formatConfig: string;
  queryParams: string;
  sqlDialect: string;
}

export default function Display({
  sqlQuery,
  formatConfig,
  queryParams,
  sqlDialect,
}: DisplayProps) {
  const [formattedQuery, setFormattedQuery] = useState<string>("");

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
    try {
      // Format the query first
      const formatted = format(sqlQuery, {
        language: sqlDialect,
        indent: "  ",
        ...(formatConfig ? JSON.parse(formatConfig) : {}),
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
        <label htmlFor="formattedQuery">Formatted Query</label>
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
