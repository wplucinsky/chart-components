// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./app";

import "@cloudscape-design/global-styles/index.css";

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root") as HTMLElement,
);
