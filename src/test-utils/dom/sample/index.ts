// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { ComponentWrapper } from "@cloudscape-design/test-utils-core/dom";

import sampleStyles from "../../../sample/styles.selectors.js";

export default class SampleWrapper extends ComponentWrapper {
  static rootSelector: string = sampleStyles.root;
}
