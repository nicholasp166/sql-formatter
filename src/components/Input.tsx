interface InputProps {
  sqlQuery: string;
  setSqlQuery: (value: string) => void;
}

export default function Input({ sqlQuery, setSqlQuery }: InputProps) {
  return (
    <div className="input-section h-100">
      <h2>SQL Query Input</h2>
      <div className="form-group h-100">
        <label htmlFor="sqlQuery">SQL Query</label>
        <textarea
          className="form-control h-100"
          id="sqlQuery"
          value={sqlQuery}
          onChange={(e) => setSqlQuery(e.target.value)}
          placeholder="Enter your SQL query here..."
        />
      </div>
    </div>
  );
}
