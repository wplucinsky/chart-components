// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import Button from "@cloudscape-design/components/button";

import { getDataAttributes } from "../internal/base-component/get-data-attributes";
import useBaseComponent from "../internal/base-component/use-base-component";
import { fireNonCancelableEvent } from "../internal/events";
import { applyDisplayName } from "../internal/utils/apply-display-name";
import { SampleProps } from "./interfaces";

import styles from "./styles.css.js";

export type { SampleProps };

export default function Sample({ text, onClick, ...props }: SampleProps) {
  useBaseComponent("Sample", { props: {} });
  return (
    <Button {...getDataAttributes(props)} className={styles.root} onClick={() => fireNonCancelableEvent(onClick)}>
      {text}
    </Button>
  );
}
applyDisplayName(Sample, "Sample");
