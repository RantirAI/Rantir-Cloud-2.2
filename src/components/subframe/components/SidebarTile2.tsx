"use client";
/*
 * Documentation:
 * Sidebar Tile2 — https://app.subframe.com/f7606ea2a7a5/library?component=Sidebar+Tile2_f5a4174b-7c0c-4b76-9f22-f0ede6a095b5
 */

import React from "react";
import * as SubframeCore from "@subframe/core";

interface SidebarTile2RootProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: SubframeCore.IconName;
  text?: string;
  variant?: "default" | "variation";
  disable?: React.ReactNode;
  className?: string;
}

const SidebarTile2Root = React.forwardRef<HTMLElement, SidebarTile2RootProps>(
  function SidebarTile2Root(
    {
      icon = "FeatherPlus",
      text,
      variant = "default",
      disable,
      className,
      ...otherProps
    }: SidebarTile2RootProps,
    ref
  ) {
    return disable ? (
      <div
        className={SubframeCore.twClassNames(
          "group/f5a4174b flex w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-sm border border-solid border-brand-50 bg-default-background px-4 py-4 hover:bg-neutral-50 active:bg-neutral-100",
          {
            "rounded-md border-none bg-neutral-50 shadow-none":
              variant === "variation",
          },
          className
        )}
        ref={ref as any}
        {...otherProps}
      >
        {disable}
      </div>
    ) : null;
  }
);

export const SidebarTile2 = SidebarTile2Root;
