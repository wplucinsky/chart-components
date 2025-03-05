// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { useState } from "react";

import Box from "@cloudscape-design/components/box";

import { Sample } from "../../lib/components";
import { ScreenshotArea } from "../screenshot-area";

export default function SamplePage() {
  const [clicked, setClicked] = useState(0);
  return (
    <Box>
      <ScreenshotArea>
        <h1>Sample page</h1>

        <Sample text={`clicked ${clicked}`} onClick={() => setClicked((prev) => prev + 1)} />
      </ScreenshotArea>
    </Box>
  );
}
