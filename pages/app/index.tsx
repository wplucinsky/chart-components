// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { HashRouter, Route, Routes, useHref, useLocation, useNavigate, useSearchParams } from "react-router-dom";

import Box from "@cloudscape-design/components/box";
import Link, { LinkProps } from "@cloudscape-design/components/link";
import TopNavigation from "@cloudscape-design/components/top-navigation";
import { applyDensity, applyMode, Density, Mode } from "@cloudscape-design/global-styles";

import { pages } from "../pages";
import Page, { PageComponent } from "./page";

export default function App() {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/*" element={<PageWithFallback />} />
      </Routes>
    </HashRouter>
  );
}

function Navigation() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const darkMode = searchParams.get("darkMode") === "true";
  const compactMode = searchParams.get("compactMode") === "true";
  const rtl = searchParams.get("direction") === "rtl";

  const setDarkMode = (darkMode: boolean) => {
    setSearchParams({ darkMode: String(darkMode) });
    applyMode(darkMode ? Mode.Dark : Mode.Light, document.documentElement);
  };

  const setCompactMode = (compactMode: boolean) => {
    setSearchParams({ compactMode: String(compactMode) });
    applyDensity(compactMode ? Density.Compact : Density.Comfortable, document.documentElement);
  };

  const setRtl = (rtl: boolean) => {
    setSearchParams({ direction: rtl ? "rtl" : "ltr" });
    document.documentElement.setAttribute("dir", rtl ? "rtl" : "ltr");
  };

  return (
    <header
      id="h"
      style={{ position: "sticky", insetBlockStart: 0, insetInlineStart: 0, insetInlineEnd: 0, zIndex: 1002 }}
    >
      <TopNavigation
        identity={{
          title: "Chart components - dev pages",
          href: "#",
          onFollow: () => navigate(`/?${searchParams.toString()}`),
          logo: { src: "../favicon.ico" },
        }}
        utilities={[
          {
            type: "menu-dropdown",
            text: "Settings",
            iconName: "settings",
            items: [
              { id: "dark-mode", text: darkMode ? "Set light mode" : "Set dark mode" },
              { id: "compact-mode", text: compactMode ? "Set comfortable mode" : "Set compact mode" },
              { id: "rtl", text: rtl ? "Set left to right text" : "Set right to left text" },
            ],
            onItemClick({ detail }) {
              switch (detail.id) {
                case "dark-mode":
                  return setDarkMode(!darkMode);
                case "compact-mode":
                  return setCompactMode(!compactMode);
                case "rtl":
                  return setRtl(!rtl);
              }
            },
          },
        ]}
      />
    </header>
  );
}

interface TreeItem {
  name: string;
  href?: string;
  items: TreeItem[];
  level: number;
}

function IndexPage() {
  const tree = createPagesTree(pages);
  return (
    <PageComponent>
      <h1>Welcome!</h1>
      <p>Select a page:</p>
      <ul>
        {tree.items.map((item) => (
          <TreeItemView key={item.name} item={item} />
        ))}
      </ul>
    </PageComponent>
  );
}

function createPagesTree(pages: string[]) {
  const tree: TreeItem = { name: ".", items: [], level: 0 };
  function putInTree(segments: string[], node: TreeItem, item: string, level = 1) {
    if (segments.length === 0) {
      node.href = item;
    } else {
      let match = node.items.filter((item) => item.name === segments[0])[0];
      if (!match) {
        match = { name: segments[0], items: [], level };
        node.items.push(match);
      }
      putInTree(segments.slice(1), match, item, level + 1);
      // make directories to be displayed above files
      node.items.sort((a, b) => Math.min(b.items.length, 1) - Math.min(a.items.length, 1));
    }
  }
  for (const page of pages) {
    const segments = page.slice(1).split("/");
    putInTree(segments, tree, page);
  }
  return tree;
}

function TreeItemView({ item }: { item: TreeItem }) {
  return (
    <li>
      {item.href ? (
        <RouterLink to={item.href}>{item.name}</RouterLink>
      ) : (
        <Box variant={item.level === 1 ? "h2" : "h3"}>{item.name}</Box>
      )}
      <ul style={{ marginBlock: 0, marginInline: 0 }}>
        {item.items.map((item) => (
          <TreeItemView key={item.name} item={item} />
        ))}
      </ul>
    </li>
  );
}

function RouterLink({ to, children, ...rest }: LinkProps & { to: string }) {
  const [searchParams] = useSearchParams();
  const href = useHref(to);
  return (
    <Link href={`${href}?${searchParams.toString()}`} {...rest}>
      {children}
    </Link>
  );
}

const PageWithFallback = () => {
  const { pathname: page } = useLocation();

  if (!page || !page.includes(page)) {
    return <span>Not Found</span>;
  }

  return <Page pageId={page} />;
};
