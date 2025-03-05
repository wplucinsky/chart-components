// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { render } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";

import Sample from "../../../lib/components/sample";
import createWrapper from "../../../lib/components/test-utils/dom";

describe("Sample", () => {
  test("renders given text", () => {
    render(<Sample text="test content" onClick={() => {}} />);
    expect(createWrapper().findSample()!.getElement()).toHaveTextContent("test content");
  });

  test("calls onClick", () => {
    const onClick = vi.fn();
    render(<Sample text="test content" onClick={onClick} />);
    expect(createWrapper().findSample()!.getElement()).toHaveTextContent("test content");
  });
});
