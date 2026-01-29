type SqlDialect =
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

interface SidebarProps {
  formatConfig: string;
  setFormatConfig: (value: string) => void;
  queryParams: string;
  setQueryParams: (value: string) => void;
  sqlDialect: SqlDialect;
  setSqlDialect: (value: SqlDialect) => void;
}

export default function Sidebar({
  formatConfig,
  setFormatConfig,
  queryParams,
  setQueryParams,
  sqlDialect,
  setSqlDialect,
}: SidebarProps) {
  return (
    <div className="sidebar">
      <h2>Format Configuration</h2>
      <div className="form-group" hidden>
        <label htmlFor="formatConfig">Format Config (JSON)</label>
        <input
          type="text"
          className="form-control"
          id="formatConfig"
          value={formatConfig}
          onChange={(e) => setFormatConfig(e.target.value)}
          placeholder=""
        />
        <small className="form-text text-muted">
          Enter JSON configuration for formatting. Example:
          {`{"keywordCase": "upper", "commaPosition": "before"}`}
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="queryParams">Query Parameters</label>
        <input
          type="text"
          className="form-control"
          id="queryParams"
          value={queryParams}
          onChange={(e) => setQueryParams(e.target.value)}
          placeholder="Enter query parameters"
        />
      </div>
      <div className="form-group">
        <label htmlFor="sqlDialect">SQL Dialect</label>
        <select
          className="form-control"
          id="sqlDialect"
          value={sqlDialect}
          onChange={(e) => setSqlDialect(e.target.value as SqlDialect)}
        >
          <option value="sqlite">SQLite (supports brackets)</option>
          {/*<option value="sql">Generic SQL</option>
          <option value="tsql">SQL Server (T-SQL) (supports brackets)</option>
          <option value="mysql">MySQL</option>
          <option value="postgresql">PostgreSQL</option>
          <option value="plsql">Oracle (PL/SQL)</option>*/}
        </select>
      </div>
      <div className="form-group mt-4">
        <h2>Instructions:</h2>
        <ol>
          <li>
            Select a SQL dialect from the dropdown, paste query paramters into
            the textbot above.
          </li>
          <li>Enter the SQL query noting ? for parameterized variables.</li>
          <li>
            Copy the output by clicking on the "Formatted Query" section and
            using keyboard shortcut like "Ctrl+A" to highlight or use the
            clipboard button on the top right to copy all.
          </li>
        </ol>
      </div>
    </div>
  );
}
