"use client";
/*
 * Documentation:
 * Sidebar Button2 — https://app.subframe.com/f7606ea2a7a5/library?component=Sidebar+Button2_6758fec4-65e1-4a43-8503-a2c0d11feb1f
 */

import React from "react";
import * as SubframeCore from "@subframe/core";

interface SidebarButton2RootProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: SubframeCore.IconName;
  text?: string;
  variant?: "default" | "variation";
  className?: string;
}

const SidebarButton2Root = React.forwardRef<
  HTMLElement,
  SidebarButton2RootProps
>(function SidebarButton2Root(
  {
    icon = "FeatherPlus",
    text,
    variant = "default",
    className,
    ...otherProps
  }: SidebarButton2RootProps,
  ref
) {
  return (
    <div
      className={SubframeCore.twClassNames(
        "group/6758fec4 flex w-full cursor-pointer items-center gap-4 border-t border-solid border-brand-50 px-4 py-4 hover:bg-neutral-50 active:bg-neutral-100",
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      <SubframeCore.Icon
        className="text-heading-3 font-heading-3 text-subtext-color group-hover/6758fec4:text-default-font group-active/6758fec4:text-default-font"
        name={icon}
      />
      {text ? (
        <span className="text-body font-body text-subtext-color group-hover/6758fec4:text-default-font group-active/6758fec4:text-default-font">
          {text}
        </span>
      ) : null}
    </div>
  );
});

export const SidebarButton2 = SidebarButton2Root;
