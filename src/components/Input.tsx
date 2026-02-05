interface InputProps {
  sqlQuery: string;
  setSqlQuery: (value: string) => void;
}

export default function Input({ sqlQuery, setSqlQuery }: InputProps) {
  return (
    <div className="input-section h-100">
      <h2>SQL Query Input</h2>
      <div className="form-group h-100">
        <label htmlFor="sqlQuery" className="pb-1">
          SQL Query
        </label>
        <div className="position-relative h-100">
          <textarea
            className="form-control h-100"
            id="sqlQuery"
            value={sqlQuery}
            onChange={(e) => setSqlQuery(e.target.value)}
            placeholder="Enter your SQL query here..."
          />
          <div
            className="position-absolute top-0 end-0 m-2"
            style={{ zIndex: 10 }}
          >
            <button
              className="btn btn-outline-secondary btn-sm"
              type="button"
              onClick={() => setSqlQuery("")}
              title="Clear input"
              style={{ padding: "6px" }}
            >
              <i className="fas fa-times">Clear</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
