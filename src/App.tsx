import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Input from "./components/Input";
import Display from "./components/Display";

export default function App() {
  const [formatConfig, setFormatConfig] = useState<string>("");
  const [queryParams, setQueryParams] = useState<string>("");
  const [sqlQuery, setSqlQuery] = useState<string>("");
  const [sqlDialect, setSqlDialect] = useState<string>("sql");

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        <div className="col-md-3 h-100">
          <Sidebar
            formatConfig={formatConfig}
            setFormatConfig={setFormatConfig}
            queryParams={queryParams}
            setQueryParams={setQueryParams}
            sqlDialect={sqlDialect}
            setSqlDialect={setSqlDialect}
          />
        </div>
        <div className="col-md-9 h-100">
          <div className="row h-100">
            <div className="col-md-6 h-100">
              <Input sqlQuery={sqlQuery} setSqlQuery={setSqlQuery} />
            </div>
            <div className="col-md-6 h-100">
              <Display
                sqlQuery={sqlQuery}
                formatConfig={formatConfig}
                queryParams={queryParams}
                sqlDialect={sqlDialect}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
