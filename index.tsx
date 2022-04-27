import React from "react";
import ReactDOM from "react-dom";
import BigCard from "./lib/BigCard";

ReactDOM.render(<BigCard title={() => <strong>Title</strong>}>tsx</BigCard>, document.getElementById("root"));
