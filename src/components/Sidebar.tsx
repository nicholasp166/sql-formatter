interface SidebarProps {
  formatConfig: string;
  setFormatConfig: (value: string) => void;
  queryParams: string;
  setQueryParams: (value: string) => void;
  sqlDialect: string;
  setSqlDialect: (value: string) => void;
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
      <div className="form-group">
        <label htmlFor="formatConfig">Format Config</label>
        <input
          type="text"
          className="form-control"
          id="formatConfig"
          value={formatConfig}
          onChange={(e) => setFormatConfig(e.target.value)}
          placeholder="Enter format configuration"
        />
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
          onChange={(e) => setSqlDialect(e.target.value)}
        >
          <option value="sql">Generic SQL</option>
          {/*  <option value="mysql">MySQL</option>
          <option value="postgresql">PostgreSQL</option>
          <option value="tsql">SQL Server (T-SQL)</option>
          <option value="plsql">Oracle (PL/SQL)</option>*/}
        </select>
      </div>
    </div>
  );
}
