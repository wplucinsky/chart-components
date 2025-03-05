// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { expect, test } from "vitest";

import { BasePageObject } from "@cloudscape-design/browser-test-tools/page-objects";
import createWrapper from "@cloudscape-design/components/test-utils/selectors";

import "../../lib/components/test-utils/selectors";
import { setupTest } from "../utils";

const wrapper = createWrapper();

test(
  "sample",
  setupTest("#/sample/sample", BasePageObject, async (page) => {
    await expect(page.getText(wrapper.findSample().toSelector())).resolves.toBe("clicked 0");

    await page.click(wrapper.findSample().toSelector());

    await expect(page.getText(wrapper.findSample().toSelector())).resolves.toBe("clicked 1");
  }),
);
