"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";
export const LayoutToggleMenu = () => {
  const [currentLayout, setCurrentLayout] = useState("grid");
  const searchParams = useSearchParams();
  const layout = searchParams.get("layout");
  const pathname = usePathname();
  const setUrl = (layoutType) => {
    let params = null;
    params = new URLSearchParams(searchParams);
    params.set("layout", layoutType);

    let currentURL = `${pathname}?${params}`;
    return currentURL;
  };
  useEffect(() => {
    if (layout) {
      return setCurrentLayout(layout);
    }
    return setCurrentLayout("grid");
  }, [layout]);
  return (
    <ul className="layout-toggle nav nav-tabs">
      <li className="nav-item">
        <Link
          className={`layout-grid nav-link ${currentLayout === "grid" ? "active" : ""}`}
          data-toggle="tab"
          href={setUrl("grid")}
          role="tab"
          scroll={false}>
          <span className="icon-column">
            <span className="layer first">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <span className="layer middle">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <span className="layer last">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </span>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className={`layout-list nav-link ${currentLayout === "list" ? "active" : ""}`}
          data-toggle="tab"
          href={setUrl("list")}
          role="tab"
          scroll={false}>
          <span className="icon-column">
            <span className="layer first">
              <span></span>
              <span></span>
            </span>
            <span className="layer middle">
              <span></span>
              <span></span>
            </span>
            <span className="layer last">
              <span></span>
              <span></span>
            </span>
          </span>
        </Link>
      </li>
    </ul>
  );
};
