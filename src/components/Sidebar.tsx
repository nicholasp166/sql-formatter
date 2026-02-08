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
    <div className="sidebar d-flex flex-column min-vh-100">
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
      <footer className="footer text-secondary mt-auto py-2">
        <div className="">
          <a
            href="https://github.com/nicholasp166/sql-formatter"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-primary"
            title="GitHub Repository"
          >
            <svg
              className="mx-auto mb-3"
              width="64"
              height="64"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}
