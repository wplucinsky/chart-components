// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { NonCancelableEventHandler } from "../internal/events";

export interface SampleProps {
  text: string;
  onClick: NonCancelableEventHandler<undefined>;
}

export namespace SampleProps {}
