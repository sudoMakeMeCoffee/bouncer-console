import React from "react";
import StartHeader from "./StartHeader";
import EndpointBox from "./EndpointBox";
import RequestBody from "./RequestBody";
import ExampleResponse from "./ExampleResponse";
import ApiCodeExample from "./ApiCodeExample";

const StartContent = ({ doc }) => (
  <div className="flex-1 max-w-4xl w-full md:px-0 md:ml-0">
    <StartHeader title={doc.title} />

    <p className="text-gray-300 mb-6">{doc.description}</p>

    <EndpointBox method={doc.method} path={doc.path} />

    {doc.requestBody && <RequestBody body={doc.requestBody} />}

    <div className="mb-6">
      <h2 className="text-xl font-semibold text-white mb-3">Example Usage</h2>
      <ApiCodeExample
        jsCode={doc.jsCode}
        tsCode={doc.tsCode}
        responseCode={doc.response}
      />
    </div>

    {doc.response && <ExampleResponse response={doc.response} />}
  </div>
);

export default StartContent;
