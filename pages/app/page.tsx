// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { Suspense } from "react";

import Alert from "@cloudscape-design/components/alert";
import AppLayout from "@cloudscape-design/components/app-layout";
import Box from "@cloudscape-design/components/box";
import { I18nProvider } from "@cloudscape-design/components/i18n";
import enMessages from "@cloudscape-design/components/i18n/messages/all.en";
import Spinner from "@cloudscape-design/components/spinner";

import { pagesMap } from "../pages";

export interface PageProps {
  pageId: string;
}

export default function Page({ pageId }: { pageId: string }) {
  const Component = pagesMap[pageId];
  return (
    <PageComponent>
      <Suspense fallback={<Spinner />}>
        {Component ? <Component /> : <Alert type="error">Page not found</Alert>}
      </Suspense>
    </PageComponent>
  );
}

export function PageComponent({ children }: { children: React.ReactNode }) {
  return (
    <I18nProvider locale="en" messages={[enMessages]}>
      <AppLayout headerSelector="#h" content={<Box>{children}</Box>} navigationHide={true} toolsHide={true} />
    </I18nProvider>
  );
}
