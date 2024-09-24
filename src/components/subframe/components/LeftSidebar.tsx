"use client";
/*
 * Documentation:
 * Left Sidebar — https://app.subframe.com/f7606ea2a7a5/library?component=Left+Sidebar_5fcd0acf-dac2-4023-98a6-911b361efcb5
 * Badge — https://app.subframe.com/f7606ea2a7a5/library?component=Badge_97bdb082-1124-4dd7-a335-b14b822d0157
 * Accordion — https://app.subframe.com/f7606ea2a7a5/library?component=Accordion_d2e81e20-863a-4027-826a-991d8910efd9
 * Text Field — https://app.subframe.com/f7606ea2a7a5/library?component=Text+Field_be48ca43-f8e7-4c0e-8870-d219ea11abfe
 * Button — https://app.subframe.com/f7606ea2a7a5/library?component=Button_3b777358-b86b-40af-9327-891efc6826fe
 * Dropdown Menu — https://app.subframe.com/f7606ea2a7a5/library?component=Dropdown+Menu_99951515-459b-4286-919e-a89e7549b43b
 * Sidebar Tile2 — https://app.subframe.com/f7606ea2a7a5/library?component=Sidebar+Tile2_f5a4174b-7c0c-4b76-9f22-f0ede6a095b5
 * Select — https://app.subframe.com/f7606ea2a7a5/library?component=Select_bb88f90b-8c43-4b73-9c2f-3558ce7838f3
 * Switch — https://app.subframe.com/f7606ea2a7a5/library?component=Switch_7a464794-9ea9-4040-b1de-5bfb2ce599d9
 * Icon Button — https://app.subframe.com/f7606ea2a7a5/library?component=Icon+Button_af9405b1-8c54-4e01-9786-5aad308224f6
 * Sidebar Button2 — https://app.subframe.com/f7606ea2a7a5/library?component=Sidebar+Button2_6758fec4-65e1-4a43-8503-a2c0d11feb1f
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import { Badge } from "./Badge";
import { Accordion } from "./Accordion";
import { TextField } from "./TextField";
import { Button } from "./Button";
import { DropdownMenu } from "./DropdownMenu";
import { SidebarTile2 } from "./SidebarTile2";
import { Select } from "./Select";
import { Switch } from "./Switch";
import { IconButton } from "./IconButton";
import { SidebarButton2 } from "./SidebarButton2";

interface LeftSidebarRootProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: SubframeCore.IconName;
  text?: string;
  image?: string;
  text2?: string;
  text3?: string;
  text4?: string;
  icon2?: SubframeCore.IconName;
  text5?: string;
  text6?: string;
  text7?: string;
  icon3?: SubframeCore.IconName;
  text8?: string;
  text9?: string;
  text10?: string;
  image2?: string;
  text11?: string;
  text12?: string;
  text13?: string;
  image3?: string;
  text14?: string;
  image4?: string;
  text15?: string;
  text16?: string;
  icon4?: SubframeCore.IconName;
  text17?: string;
  text18?: string;
  text19?: string;
  text20?: string;
  text21?: string;
  text22?: string;
  text23?: string;
  text24?: string;
  pageActivity?: string;
  switchPage?: string;
  switchPage2?: string;
  className?: string;
}

const LeftSidebarRoot = React.forwardRef<HTMLElement, LeftSidebarRootProps>(
  function LeftSidebarRoot(
    {
      icon = "FeatherActivity",
      text,
      image,
      text2,
      text3,
      text4,
      icon2 = "FeatherBarChart3",
      text5,
      text6,
      text7,
      icon3 = "FeatherDatabase",
      text8,
      text9,
      text10,
      image2,
      text11,
      text12,
      text13,
      image3,
      text14,
      image4,
      text15,
      text16,
      icon4 = "FeatherSettings2",
      text17,
      text18,
      text19,
      text20,
      text21,
      text22,
      text23,
      text24,
      pageActivity,
      switchPage,
      switchPage2,
      className,
      ...otherProps
    }: LeftSidebarRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeCore.twClassNames(
          "flex h-full w-80 flex-col items-start justify-between border-r border-solid border-brand-50",
          className
        )}
        ref={ref as any}
        {...otherProps}
      >
        <div className="flex w-full flex-col items-start justify-end">
          <div className="flex w-full flex-col items-start gap-4">
            <Accordion
              trigger={
                <div className="flex w-full items-center gap-1 border-b border-solid border-brand-50 px-4 py-4">
                  <SubframeCore.Icon
                    className="text-body font-body text-default-font"
                    name={icon}
                  />
                  <div className="flex grow shrink-0 basis-0 items-center gap-2">
                    {text ? (
                      <span className="grow shrink-0 basis-0 text-heading-3 font-heading-3 text-default-font">
                        {text}
                      </span>
                    ) : null}
                    <Badge variant="warning" icon={null} iconRight={null}>
                      {pageActivity}
                    </Badge>
                  </div>
                  <Accordion.Chevron />
                </div>
              }
            >
              <div className="flex w-full flex-col items-start gap-4 px-2 py-2">
                <div className="flex w-full flex-col items-start gap-2">
                  <div className="flex w-full flex-col items-start gap-6">
                    <TextField
                      className="h-auto w-full flex-none"
                      variant="filled"
                      label="Page Title"
                      helpText=""
                    >
                      <TextField.Input placeholder="AI Chat" />
                    </TextField>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="flex grow shrink-0 basis-0 items-start gap-2">
                      <Button
                        variant="neutral-secondary"
                        size="small"
                        icon="FeatherUpload"
                      >
                        Upload Menu Icon
                      </Button>
                      <SubframeCore.DropdownMenu.Root>
                        <SubframeCore.DropdownMenu.Trigger asChild={true}>
                          <Button
                            className="h-6 grow shrink-0 basis-0"
                            variant="neutral-secondary"
                            size="small"
                            icon="FeatherActivity"
                            iconRight="FeatherChevronDown"
                          >
                            Choose Icon
                          </Button>
                        </SubframeCore.DropdownMenu.Trigger>
                        <SubframeCore.DropdownMenu.Portal>
                          <SubframeCore.DropdownMenu.Content
                            side="bottom"
                            align="start"
                            sideOffset={4}
                            asChild={true}
                          >
                            <DropdownMenu>
                              <DropdownMenu.DropdownItem icon="FeatherStar">
                                Favorite
                              </DropdownMenu.DropdownItem>
                              <DropdownMenu.DropdownItem icon="FeatherPlus">
                                Add
                              </DropdownMenu.DropdownItem>
                              <DropdownMenu.DropdownItem icon="FeatherEdit2">
                                Edit
                              </DropdownMenu.DropdownItem>
                              <DropdownMenu.DropdownItem icon="FeatherTrash">
                                Delete
                              </DropdownMenu.DropdownItem>
                            </DropdownMenu>
                          </SubframeCore.DropdownMenu.Content>
                        </SubframeCore.DropdownMenu.Portal>
                      </SubframeCore.DropdownMenu.Root>
                    </div>
                  </div>
                </div>
                <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-200" />
                <TextField
                  className="h-auto w-full flex-none"
                  variant="filled"
                  label="Name your AI avatar"
                  helpText="Name your AI-powered chat"
                >
                  <TextField.Input placeholder="e.g., Name your AI Experience" />
                </TextField>
                <div className="flex items-start gap-4">
                  {image ? (
                    <img
                      className="h-8 w-8 flex-none object-cover [clip-path:circle()]"
                      src={image}
                    />
                  ) : null}
                  <div className="flex flex-col items-start gap-2">
                    <Button
                      variant="neutral-secondary"
                      size="small"
                      icon="FeatherUpload"
                    >
                      Upload an AI avatar
                    </Button>
                    {text2 ? (
                      <span className="text-caption font-caption text-subtext-color">
                        {text2}
                      </span>
                    ) : null}
                  </div>
                </div>
                <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-200" />
                <div className="flex flex-col items-start gap-1">
                  {text3 ? (
                    <span className="text-body font-body text-default-font">
                      {text3}
                    </span>
                  ) : null}
                  <div className="flex w-full items-start gap-1">
                    <SidebarTile2
                      className="h-auto w-auto min-w-[96px] flex-none"
                      icon="FeatherType"
                      text="Header"
                    />
                    <SidebarTile2
                      className="h-auto w-auto min-w-[96px] flex-none"
                      icon="FeatherText"
                      text="Description"
                    />
                    <SidebarTile2
                      className="h-auto min-w-[96px] grow shrink-0 basis-0"
                      icon="FeatherImage"
                      text="Grid"
                    />
                  </div>
                  <SidebarTile2
                    className="h-auto w-full max-w-[96px] flex-none"
                    icon="FeatherBot"
                    text="Prompts"
                  />
                </div>
                <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-200" />
                <div className="flex w-full flex-col items-start gap-1">
                  {text4 ? (
                    <span className="text-caption-bold font-caption-bold text-default-font">
                      {text4}
                    </span>
                  ) : null}
                  <Select
                    className="h-auto w-full flex-none"
                    label=""
                    placeholder="All Data Uploaded"
                    helpText=""
                  >
                    <Select.Item value="All Data Uploaded">
                      All Data Uploaded
                    </Select.Item>
                    <div className="flex w-full flex-col items-start py-1">
                      <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-200" />
                    </div>
                    <Select.Item value="Social Media">Social Media</Select.Item>
                    <Select.Item value="Pay-Per-Click">
                      Pay-Per-Click
                    </Select.Item>
                    <Select.Item value="Content Marketing">
                      Content Marketing
                    </Select.Item>
                  </Select>
                </div>
                <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-200" />
                <div className="flex w-full items-center justify-end gap-2">
                  <Button
                    className="h-8 grow shrink-0 basis-0"
                    variant="brand-secondary"
                    icon="FeatherPen"
                  >
                    Edit the Page
                  </Button>
                  <Button
                    className="h-8 grow shrink-0 basis-0"
                    variant="destructive-secondary"
                    icon="FeatherTrash"
                  >
                    Delete the Page
                  </Button>
                </div>
                <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-200" />
              </div>
            </Accordion>
          </div>
          <div className="flex w-full flex-col items-start gap-4">
            <Accordion
              trigger={
                <div className="flex w-full items-center gap-2 border-b border-solid border-brand-50 px-4 py-4">
                  <SubframeCore.Icon
                    className="text-body font-body text-default-font"
                    name={icon2}
                  />
                  <div className="flex grow shrink-0 basis-0 items-center gap-2">
                    {text5 ? (
                      <span className="grow shrink-0 basis-0 text-heading-3 font-heading-3 text-default-font">
                        {text5}
                      </span>
                    ) : null}
                    <Badge variant="neutral" icon={null} iconRight={null}>
                      {switchPage}
                    </Badge>
                  </div>
                  <Accordion.Chevron />
                </div>
              }
            >
              <div className="flex w-full flex-col items-start gap-2 px-1 py-1">
                <div className="flex w-full flex-col items-start gap-2 px-2 py-2">
                  <div className="flex w-full flex-col items-start gap-6">
                    {text6 ? (
                      <span className="text-body font-body text-default-font">
                        {text6}
                      </span>
                    ) : null}
                    <div className="flex w-full flex-col items-start gap-2">
                      <div className="flex w-full flex-col items-start gap-6">
                        <TextField
                          className="h-auto w-full flex-none"
                          variant="filled"
                          label="Page Title"
                          helpText=""
                        >
                          <TextField.Input placeholder="Reports" />
                        </TextField>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="flex grow shrink-0 basis-0 items-start gap-2">
                          <Button
                            variant="neutral-secondary"
                            size="small"
                            icon="FeatherUpload"
                          >
                            Upload Menu Icon
                          </Button>
                          <SubframeCore.DropdownMenu.Root>
                            <SubframeCore.DropdownMenu.Trigger asChild={true}>
                              <Button
                                className="h-6 grow shrink-0 basis-0"
                                variant="neutral-secondary"
                                size="small"
                                icon="FeatherBarChart3"
                                iconRight="FeatherChevronDown"
                              >
                                Choose Icon
                              </Button>
                            </SubframeCore.DropdownMenu.Trigger>
                            <SubframeCore.DropdownMenu.Portal>
                              <SubframeCore.DropdownMenu.Content
                                side="bottom"
                                align="start"
                                sideOffset={4}
                                asChild={true}
                              >
                                <DropdownMenu>
                                  <DropdownMenu.DropdownItem icon="FeatherStar">
                                    Favorite
                                  </DropdownMenu.DropdownItem>
                                  <DropdownMenu.DropdownItem icon="FeatherPlus">
                                    Add
                                  </DropdownMenu.DropdownItem>
                                  <DropdownMenu.DropdownItem icon="FeatherEdit2">
                                    Edit
                                  </DropdownMenu.DropdownItem>
                                  <DropdownMenu.DropdownItem icon="FeatherTrash">
                                    Delete
                                  </DropdownMenu.DropdownItem>
                                </DropdownMenu>
                              </SubframeCore.DropdownMenu.Content>
                            </SubframeCore.DropdownMenu.Portal>
                          </SubframeCore.DropdownMenu.Root>
                        </div>
                      </div>
                    </div>
                    <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-200" />
                    <div className="flex flex-col items-start gap-1">
                      {text7 ? (
                        <span className="text-body font-body text-default-font">
                          {text7}
                        </span>
                      ) : null}
                      <div className="flex w-full items-start gap-1">
                        <SidebarTile2
                          className="h-auto w-auto min-w-[96px] flex-none"
                          icon="FeatherType"
                          text="Header"
                        />
                        <SidebarTile2
                          className="h-auto min-w-[96px] grow shrink-0 basis-0"
                          icon="FeatherImage"
                          text="Media"
                        />
                        <SidebarTile2
                          className="h-auto w-auto min-w-[96px] flex-none"
                          icon="FeatherLink"
                          text="Link"
                        />
                      </div>
                      <div className="flex w-full items-start gap-1">
                        <SidebarTile2
                          className="h-auto max-w-[96px] grow shrink-0 basis-0"
                          icon="FeatherPieChart"
                          text="Chart"
                        />
                        <SidebarTile2
                          className="h-auto w-auto min-w-[96px] flex-none"
                          icon="FeatherSparkles"
                          text="AI Chart"
                        />
                        <SidebarTile2
                          className="h-auto w-auto min-w-[96px] flex-none"
                          icon="FeatherText"
                          text="Description"
                        />
                      </div>
                      <SidebarTile2
                        className="h-auto w-full max-w-[96px] flex-none"
                        icon="FeatherCode"
                        text="Embed"
                      />
                    </div>
                    <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-200" />
                    <div className="flex w-full items-center justify-end gap-2">
                      <Button
                        className="h-8 grow shrink-0 basis-0"
                        variant="brand-secondary"
                        icon="FeatherPen"
                      >
                        Edit the Page
                      </Button>
                      <Button
                        className="h-8 grow shrink-0 basis-0"
                        variant="destructive-secondary"
                        icon="FeatherTrash"
                      >
                        Delete the Page
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Accordion>
          </div>
          <div className="flex w-full flex-col items-start gap-4">
            <Accordion
              trigger={
                <div className="flex w-full items-center gap-2 border-b border-solid border-brand-50 px-4 py-4">
                  <SubframeCore.Icon
                    className="text-body font-body text-default-font"
                    name={icon3}
                  />
                  <div className="flex grow shrink-0 basis-0 items-center gap-2">
                    {text8 ? (
                      <span className="grow shrink-0 basis-0 text-heading-3 font-heading-3 text-default-font">
                        {text8}
                      </span>
                    ) : null}
                    <Badge variant="neutral" icon={null} iconRight={null}>
                      {switchPage2}
                    </Badge>
                  </div>
                  <Accordion.Chevron />
                </div>
              }
            >
              <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-2 px-3 py-2">
                <div className="flex w-full flex-col items-start gap-4 px-1 py-1">
                  <div className="flex w-full flex-col items-start gap-4">
                    <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-6">
                      {text9 ? (
                        <span className="text-body font-body text-default-font">
                          {text9}
                        </span>
                      ) : null}
                      <div className="flex w-full flex-col items-start gap-2">
                        <div className="flex w-full flex-col items-start gap-6">
                          <TextField
                            className="h-auto w-full flex-none"
                            variant="filled"
                            label="Page Title"
                            helpText=""
                          >
                            <TextField.Input placeholder="Reports" />
                          </TextField>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="flex grow shrink-0 basis-0 items-start gap-2">
                            <Button
                              variant="neutral-secondary"
                              size="small"
                              icon="FeatherUpload"
                            >
                              Upload Menu Icon
                            </Button>
                            <SubframeCore.DropdownMenu.Root>
                              <SubframeCore.DropdownMenu.Trigger asChild={true}>
                                <Button
                                  className="h-6 grow shrink-0 basis-0"
                                  variant="neutral-secondary"
                                  size="small"
                                  icon="FeatherBarChart3"
                                  iconRight="FeatherChevronDown"
                                >
                                  Choose Icon
                                </Button>
                              </SubframeCore.DropdownMenu.Trigger>
                              <SubframeCore.DropdownMenu.Portal>
                                <SubframeCore.DropdownMenu.Content
                                  side="bottom"
                                  align="start"
                                  sideOffset={4}
                                  asChild={true}
                                >
                                  <DropdownMenu>
                                    <DropdownMenu.DropdownItem icon="FeatherStar">
                                      Favorite
                                    </DropdownMenu.DropdownItem>
                                    <DropdownMenu.DropdownItem icon="FeatherPlus">
                                      Add
                                    </DropdownMenu.DropdownItem>
                                    <DropdownMenu.DropdownItem icon="FeatherEdit2">
                                      Edit
                                    </DropdownMenu.DropdownItem>
                                    <DropdownMenu.DropdownItem icon="FeatherTrash">
                                      Delete
                                    </DropdownMenu.DropdownItem>
                                  </DropdownMenu>
                                </SubframeCore.DropdownMenu.Content>
                              </SubframeCore.DropdownMenu.Portal>
                            </SubframeCore.DropdownMenu.Root>
                          </div>
                        </div>
                      </div>
                      <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-200" />
                      <div className="flex flex-col items-start gap-1">
                        {text10 ? (
                          <span className="text-body font-body text-default-font">
                            {text10}
                          </span>
                        ) : null}
                        <div className="flex w-full items-start gap-1">
                          <SidebarTile2
                            className="h-auto w-auto min-w-[96px] flex-none"
                            icon="FeatherType"
                            text="Header"
                          />
                          <SidebarTile2
                            className="h-auto w-auto min-w-[96px] flex-none"
                            icon="FeatherText"
                            text="Description"
                          />
                          <SidebarTile2
                            className="h-auto min-w-[96px] grow shrink-0 basis-0"
                            icon="FeatherImage"
                            text="Media"
                          />
                        </div>
                        <div className="flex w-full items-start gap-1">
                          <SidebarTile2
                            className="h-auto max-w-[96px] grow shrink-0 basis-0"
                            icon="FeatherCode"
                            text="Embed"
                          />
                          <SidebarTile2
                            className="h-auto w-auto min-w-[96px] flex-none"
                            icon="FeatherTable2"
                            text="Table View"
                          />
                          <SidebarTile2
                            className="h-auto w-auto min-w-[96px] flex-none"
                            icon="FeatherLayoutTemplate"
                            text="Grid View"
                          />
                        </div>
                        <div className="flex w-full items-start gap-1">
                          <SidebarTile2
                            className="h-auto max-w-[96px] grow shrink-0 basis-0"
                            icon="FeatherKanbanSquare"
                            text="Kanban"
                            variant="variation"
                          />
                          <SidebarTile2
                            className="h-auto w-auto min-w-[96px] flex-none"
                            icon="FeatherFormInput"
                            text="Form"
                            variant="variation"
                          />
                          <SidebarTile2
                            className="h-auto max-w-[96px] grow shrink-0 basis-0"
                            icon="FeatherSquare"
                            text="Card"
                            variant="variation"
                          />
                        </div>
                        <SidebarTile2
                          className="h-auto w-auto min-w-[96px] flex-none"
                          icon="FeatherLink"
                          text="Button"
                          variant="variation"
                        />
                      </div>
                      <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-200" />
                      <div className="flex w-full flex-col items-start gap-4">
                        <div className="flex items-start gap-2">
                          {text16 ? (
                            <span className="text-body font-body text-default-font">
                              {text16}
                            </span>
                          ) : null}
                          <Switch />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-full items-center justify-end gap-2">
                  <Button
                    className="h-8 grow shrink-0 basis-0"
                    variant="brand-secondary"
                    icon="FeatherPen"
                  >
                    Edit the Page
                  </Button>
                  <Button
                    className="h-8 grow shrink-0 basis-0"
                    variant="destructive-secondary"
                    icon="FeatherTrash"
                  >
                    Delete the Page
                  </Button>
                </div>
              </div>
            </Accordion>
          </div>
          <div className="flex w-full flex-col items-start gap-4">
            <Accordion
              trigger={
                <div className="flex w-full items-center gap-2 border-b border-solid border-brand-50 px-4 py-4">
                  <SubframeCore.Icon
                    className="text-body font-body text-default-font"
                    name={icon4}
                  />
                  {text17 ? (
                    <span className="grow shrink-0 basis-0 text-heading-3 font-heading-3 text-default-font">
                      {text17}
                    </span>
                  ) : null}
                  <Accordion.Chevron />
                </div>
              }
            >
              <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-4 border-t border-solid border-brand-50 px-1 py-1">
                <div className="flex w-full flex-col items-start gap-4 px-2 py-2">
                  <div className="flex w-full flex-col items-start gap-4 px-1 py-1">
                    <div className="flex w-full flex-col items-start gap-6">
                      <TextField
                        className="h-auto w-full flex-none"
                        variant="filled"
                        label="Project Name"
                        helpText=""
                      >
                        <TextField.Input placeholder="Name your Rantir Project" />
                      </TextField>
                      <TextField
                        className="h-auto w-full flex-none"
                        variant="filled"
                        label="Company Name"
                        helpText=""
                      >
                        <TextField.Input placeholder="Name of your company" />
                      </TextField>
                      <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-200" />
                      <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-2">
                        {text18 ? (
                          <span className="text-body font-body text-default-font">
                            {text18}
                          </span>
                        ) : null}
                        <div className="flex w-full grow shrink-0 basis-0 items-center justify-between border border-solid border-brand-50 px-2 py-2">
                          <div className="flex items-center gap-1">
                            <IconButton
                              size="small"
                              icon="FeatherGripVertical"
                            />
                            <IconButton size="small" icon="FeatherActivity" />
                            {text19 ? (
                              <span className="text-body font-body text-default-font">
                                {text19}
                              </span>
                            ) : null}
                          </div>
                          <div className="flex items-center justify-between">
                            <IconButton size="small" icon="FeatherEdit2" />
                            <IconButton
                              size="small"
                              icon="FeatherMoreHorizontal"
                            />
                          </div>
                        </div>
                        <div className="flex w-full grow shrink-0 basis-0 items-center justify-between border border-solid border-brand-50 px-2 py-2">
                          <div className="flex items-center gap-1">
                            <IconButton
                              size="small"
                              icon="FeatherGripVertical"
                            />
                            <IconButton size="small" icon="FeatherBarChart3" />
                            {text20 ? (
                              <span className="text-body font-body text-default-font">
                                {text20}
                              </span>
                            ) : null}
                          </div>
                          <div className="flex items-center justify-between">
                            <IconButton size="small" icon="FeatherEdit2" />
                            <IconButton
                              size="small"
                              icon="FeatherMoreHorizontal"
                            />
                          </div>
                        </div>
                        <div className="flex w-full grow shrink-0 basis-0 items-center justify-between border border-solid border-brand-50 px-2 py-2">
                          <div className="flex items-center gap-1">
                            <IconButton
                              size="small"
                              icon="FeatherGripVertical"
                            />
                            <IconButton size="small" icon="FeatherDatabase" />
                            {text21 ? (
                              <span className="text-body font-body text-default-font">
                                {text21}
                              </span>
                            ) : null}
                          </div>
                          <div className="flex items-center justify-between">
                            <IconButton size="small" icon="FeatherEdit2" />
                            <IconButton
                              size="small"
                              icon="FeatherMoreHorizontal"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-200" />
                      <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-2">
                        {text22 ? (
                          <span className="text-body font-body text-default-font">
                            {text22}
                          </span>
                        ) : null}
                        <div className="flex w-full grow shrink-0 basis-0 items-start gap-2 rounded-md bg-neutral-50 px-2.5 py-1">
                          <TextField.Input placeholder="Upload 1200 x 650 Open Graphic" />
                          <div className="flex items-center gap-4">
                            <Button
                              variant="neutral-secondary"
                              icon="FeatherUpload"
                            >
                              Upload
                            </Button>
                          </div>
                        </div>
                        <div className="flex w-full grow shrink-0 basis-0 items-start gap-2 rounded-md bg-neutral-50 px-2.5 py-1">
                          <TextField.Input placeholder="Upload Favicon" />
                          <div className="flex items-center gap-4">
                            <Button
                              variant="neutral-secondary"
                              icon="FeatherUpload"
                            >
                              Upload
                            </Button>
                          </div>
                        </div>
                      </div>
                      <TextField
                        className="h-auto w-full flex-none"
                        variant="filled"
                        label="URL slug"
                        helpText="Custom Domains coming soon"
                      >
                        <TextField.Input placeholder="Give your Rantir Project a unique slug" />
                      </TextField>
                      <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-200" />
                      {text23 ? (
                        <span className="text-body font-body text-default-font">
                          {text23}
                        </span>
                      ) : null}
                      <div className="flex w-full flex-col items-start gap-4 rounded-md bg-neutral-50 px-2 py-2">
                        {text24 ? (
                          <span className="w-full whitespace-pre-wrap text-caption font-caption text-default-font">
                            {text24}
                          </span>
                        ) : null}
                        <SidebarButton2
                          className="h-5 w-auto flex-none"
                          icon="FeatherCopy"
                          text="Copy Embed"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Accordion>
          </div>
        </div>
        <div className="flex w-full flex-col items-start justify-end">
          <SidebarButton2 icon="FeatherPlusCircle" text="Add a new page" />
          <div className="flex w-full items-center gap-4 border-t border-solid border-brand-50 px-4 py-4">
            <SubframeCore.Icon
              className="text-heading-3 font-heading-3 text-subtext-color"
              name="FeatherPalette"
            />
            <span className="text-body font-body text-subtext-color">
              Styles &amp; themes
            </span>
            <Badge variant="neutral" icon={null} iconRight={null}>
              Coming soon
            </Badge>
          </div>
          <SidebarButton2
            icon="FeatherBuilding"
            text="Enterprise. Let us build it for you"
          />
          <SidebarButton2 icon="FeatherHelpCircle" text="Help" />
        </div>
      </div>
    );
  }
);

export const LeftSidebar = LeftSidebarRoot;
