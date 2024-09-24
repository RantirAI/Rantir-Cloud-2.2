"use client";

import React from "react";
import { DropdownMenu } from "@/subframe/components/DropdownMenu";
import * as SubframeCore from "@subframe/core";
import { Button } from "@/subframe/components/Button";
import { ToggleGroup } from "@/subframe/components/ToggleGroup";
import { IconButton } from "@/subframe/components/IconButton";
import { EditorTopBar2 } from "@/subframe/components/EditorTopBar2";
import { LeftSidebar } from "@/subframe/components/LeftSidebar";
import { TopbarWithCenterNav } from "@/subframe/components/TopbarWithCenterNav";
import { Accordion } from "@/subframe/components/Accordion";
import { Table } from "@/subframe/components/Table";
import { Avatar } from "@/subframe/components/Avatar";
import { Badge } from "@/subframe/components/Badge";
import { Checkbox } from "@/subframe/components/Checkbox";
import { TextField } from "@/subframe/components/TextField";
import { Switch } from "@/subframe/components/Switch";
import { TextArea } from "@/subframe/components/TextArea";
import { Select } from "@/subframe/components/Select";
import { SidebarButton } from "@/subframe/components/SidebarButton";
import { ButtonPlaceholder } from "@/subframe/components/ButtonPlaceholder";
import { LinkButton } from "@/subframe/components/LinkButton";
import { RadioGroup } from "@/subframe/components/RadioGroup";

function BuilderData() {
  return (
    <div className="flex h-full w-full flex-col items-start bg-default-background">
      <EditorTopBar2 text="R.Cloud 2.2">
        <div className="flex grow shrink-0 basis-0 items-center gap-2">
          <div className="flex h-9 w-32 flex-none items-center gap-1 rounded-md bg-neutral-50 px-1 py-1">
            <img
              className="h-6 flex-none object-cover"
              src="https://res.cloudinary.com/subframe/image/upload/v1726349575/uploads/2266/hy9aakqhqn20igveftxn.svg"
            />
            <SubframeCore.DropdownMenu.Root>
              <SubframeCore.DropdownMenu.Trigger asChild={true}>
                <Button
                  variant="neutral-secondary"
                  size="small"
                  iconRight="FeatherChevronDown"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Rantir 2.2
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
                    <DropdownMenu.DropdownItem icon="FeatherHardDrive">
                      Project Title
                    </DropdownMenu.DropdownItem>
                    <DropdownMenu.DropdownItem icon="FeatherUser">
                      Project Details
                    </DropdownMenu.DropdownItem>
                    <DropdownMenu.DropdownItem icon="FeatherLock">
                      API &amp; Webhook Connections
                    </DropdownMenu.DropdownItem>
                    <DropdownMenu.DropdownItem icon="FeatherShapes">
                      Data &amp; Integrations
                    </DropdownMenu.DropdownItem>
                    <DropdownMenu.DropdownItem icon="FeatherUsers">
                      Team Members &amp; Share Link
                    </DropdownMenu.DropdownItem>
                    <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-200" />
                    <div className="flex items-center gap-2 px-4 py-4">
                      <span className="text-body font-body text-default-font">
                        By
                      </span>
                      <img
                        className="max-w-[128px] flex-none"
                        src="https://res.cloudinary.com/subframe/image/upload/v1727136720/uploads/2266/rnjvta31afqutcb5qyng.svg"
                      />
                    </div>
                    <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-200" />
                    <DropdownMenu.DropdownItem icon="FeatherLifeBuoy">
                      Get Help
                    </DropdownMenu.DropdownItem>
                    <DropdownMenu.DropdownItem icon="FeatherBookOpen">
                      Documentation
                    </DropdownMenu.DropdownItem>
                    <DropdownMenu.DropdownItem icon="FeatherChevronsLeft">
                      Back to Computir Drive
                    </DropdownMenu.DropdownItem>
                    <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-200" />
                    <div className="flex w-full flex-col items-center justify-center px-2 py-2">
                      <span className="text-[10px] font-[500] leading-[20px] text-default-font">
                        © All rights reserved by Computir, Inc.
                      </span>
                    </div>
                  </DropdownMenu>
                </SubframeCore.DropdownMenu.Content>
              </SubframeCore.DropdownMenu.Portal>
            </SubframeCore.DropdownMenu.Root>
          </div>
          <SubframeCore.DropdownMenu.Root>
            <SubframeCore.DropdownMenu.Trigger asChild={true}>
              <Button
                variant="neutral-secondary"
                icon="FeatherActivity"
                iconRight="FeatherChevronDown"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                AI Chat
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
                  <DropdownMenu.DropdownItem icon="FeatherActivity">
                    AI Chat
                  </DropdownMenu.DropdownItem>
                  <DropdownMenu.DropdownItem icon="FeatherBarChart3">
                    Reports
                  </DropdownMenu.DropdownItem>
                  <DropdownMenu.DropdownItem icon="FeatherDatabase">
                    Raw Data
                  </DropdownMenu.DropdownItem>
                  <DropdownMenu.DropdownItem icon="FeatherPlus">
                    Add a New Page
                  </DropdownMenu.DropdownItem>
                </DropdownMenu>
              </SubframeCore.DropdownMenu.Content>
            </SubframeCore.DropdownMenu.Portal>
          </SubframeCore.DropdownMenu.Root>
        </div>
        <div className="flex grow shrink-0 basis-0 flex-col items-center justify-center gap-2 self-stretch">
          <ToggleGroup value="" onValueChange={(value: string) => {}}>
            <ToggleGroup.Item icon={null} value="acf180bb">
              Builder
            </ToggleGroup.Item>
            <ToggleGroup.Item icon={null} value="589e0bb5">
              Code
            </ToggleGroup.Item>
            <ToggleGroup.Item icon={null} value="1e67ae7d">
              Logic
            </ToggleGroup.Item>
          </ToggleGroup>
        </div>
        <div className="flex grow shrink-0 basis-0 items-center justify-end gap-2 self-stretch">
          <IconButton
            disabled={false}
            variant="neutral-tertiary"
            size="medium"
            icon="FeatherEye"
            loading={false}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          />
          <Button
            icon="FeatherRocket"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Save &amp; Publish
          </Button>
        </div>
      </EditorTopBar2>
      <div className="flex w-full grow shrink-0 basis-0 flex-wrap items-start mobile:flex-col mobile:flex-wrap mobile:gap-0">
        <LeftSidebar
          icon="FeatherActivity"
          text="AI Chat"
          image="https://res.cloudinary.com/subframe/image/upload/v1726349575/uploads/2266/hy9aakqhqn20igveftxn.svg"
          text2="Upload a square image (up to 1mb)"
          text3="Add AI Components"
          text4="Include Data"
          icon2="FeatherBarChart3"
          text5="Reports"
          text6="Your Dashboards are created from your data automatically. "
          text7="Add Dashboard Components"
          icon3="FeatherDatabase"
          text8="Raw Data"
          text9="Your data informs the AI & dashboards. Consider these as gallery, table or content views."
          text10="Add Data & Content Components"
          image2="https://res.cloudinary.com/subframe/image/upload/v1726426096/uploads/2266/k0mw9tkqto16m4fe92mf.png"
          text11="CSV Files"
          text12="movements.csv"
          text13="movements.csv"
          image3="https://res.cloudinary.com/subframe/image/upload/v1726421728/uploads/2266/xxzddpc9givyxjrik0cu.png"
          text14="Stripe"
          image4="https://res.cloudinary.com/subframe/image/upload/v1726421710/uploads/2266/j7kt7b3x09o3ukncqkte.png"
          text15="Webflow"
          text16="Allow Users to Copy or Share CSV Data"
          icon4="FeatherSettings2"
          text17="Project Settings"
          text18="Menu Order"
          text19="AI Chat"
          text20="Reports"
          text21="Data"
          text22="Site Graphics"
          text23="Embed Code for the entire project"
          text24={
            ".var printText = $('.text').data('text');\r\n\r\nvar contentArray = printText.split('/n');\r\n$.each(contentArray, function(index, newLine) {\r\n  $('.text').append('<span style=\"display:block;\" id=\"'+index+'\"></span>');"
          }
          pageActivity="Active"
          switchPage="Switch"
          switchPage2="Switch"
        />
        <div className="flex grow shrink-0 basis-0 flex-col items-center gap-2 self-stretch bg-neutral-50 px-4 py-4 mobile:border mobile:border-solid mobile:border-brand-50 mobile:px-0 mobile:py-0">
          <div className="flex flex-col items-center gap-6 rounded-lg border border-solid border-brand-100 bg-default-background px-8 pt-1 pb-4 shadow-lg">
            <img
              className="flex-none"
              src="https://res.cloudinary.com/subframe/image/upload/v1726602268/uploads/2266/iogljg4geoxoqn0qx83x.svg"
            />
            <TopbarWithCenterNav
              centerSlot={
                <>
                  <TopbarWithCenterNav.NavItem
                    selected={true}
                    icon="FeatherActivity"
                  >
                    AI Chat
                  </TopbarWithCenterNav.NavItem>
                  <TopbarWithCenterNav.NavItem icon="FeatherBarChart3">
                    Reports
                  </TopbarWithCenterNav.NavItem>
                  <TopbarWithCenterNav.NavItem icon="FeatherDatabase">
                    Raw Data
                  </TopbarWithCenterNav.NavItem>
                </>
              }
            />
            <div className="flex w-full flex-col items-start gap-4">
              <div className="flex w-full items-center justify-between">
                <Button
                  variant="brand-secondary"
                  icon="FeatherDatabase"
                  iconRight="FeatherChevronDown"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Company&#39;s Models
                </Button>
                <div className="flex items-center gap-2">
                  <Button
                    variant="neutral-secondary"
                    icon="FeatherUserPlus"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Share
                  </Button>
                  <Button
                    variant="neutral-secondary"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Need help?
                  </Button>
                </div>
              </div>
              <div className="flex w-full flex-col items-start">
                <span className="text-heading-1 font-heading-1 text-default-font">
                  Explore Your Company
                </span>
                <span className="text-heading-1 font-heading-1 text-brand-500">
                  View our Data
                </span>
              </div>
              <div className="flex w-full flex-col items-start gap-2">
                <div className="flex w-full items-center gap-2 border-b border-solid border-brand-50 py-2">
                  <span className="grow shrink-0 basis-0 text-body-bold font-body-bold text-default-font">
                    6 Files
                  </span>
                  <SubframeCore.DropdownMenu.Root>
                    <SubframeCore.DropdownMenu.Trigger asChild={true}>
                      <Button
                        variant="neutral-secondary"
                        size="medium"
                        icon="FeatherListFilter"
                        iconRight="FeatherChevronDown"
                        onClick={(
                          event: React.MouseEvent<HTMLButtonElement>
                        ) => {}}
                      >
                        Filter
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
                          <DropdownMenu.DropdownItem icon="FeatherPlus">
                            Add filter
                          </DropdownMenu.DropdownItem>
                        </DropdownMenu>
                      </SubframeCore.DropdownMenu.Content>
                    </SubframeCore.DropdownMenu.Portal>
                  </SubframeCore.DropdownMenu.Root>
                  <SubframeCore.DropdownMenu.Root>
                    <SubframeCore.DropdownMenu.Trigger asChild={true}>
                      <Button
                        variant="neutral-secondary"
                        size="medium"
                        icon="FeatherArrowDownUp"
                        iconRight="FeatherChevronDown"
                        onClick={(
                          event: React.MouseEvent<HTMLButtonElement>
                        ) => {}}
                      >
                        Sort
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
                          <DropdownMenu.DropdownItem icon={null}>
                            By name
                          </DropdownMenu.DropdownItem>
                          <DropdownMenu.DropdownItem icon={null}>
                            By last edited
                          </DropdownMenu.DropdownItem>
                          <DropdownMenu.DropdownItem icon={null}>
                            By date created
                          </DropdownMenu.DropdownItem>
                        </DropdownMenu>
                      </SubframeCore.DropdownMenu.Content>
                    </SubframeCore.DropdownMenu.Portal>
                  </SubframeCore.DropdownMenu.Root>
                  <ToggleGroup value="" onValueChange={(value: string) => {}}>
                    <ToggleGroup.Item
                      className="h-7 w-auto flex-none"
                      icon="FeatherLayoutGrid"
                      value="410b9314"
                    />
                    <ToggleGroup.Item
                      className="h-7 w-auto flex-none"
                      icon="FeatherList"
                      value="ecba83f6"
                    />
                  </ToggleGroup>
                </div>
                <div className="flex w-full flex-col items-start gap-4 rounded-md border border-solid border-brand-50 bg-default-background shadow-sm">
                  <Accordion
                    trigger={
                      <div className="flex w-full items-center gap-2 px-2 py-2">
                        <SubframeCore.Icon
                          className="text-heading-2 font-heading-2 text-brand-700"
                          name="FeatherFile"
                        />
                        <div className="flex grow shrink-0 basis-0 flex-col items-start">
                          <span className="line-clamp-1 w-full text-body font-body text-default-font">
                            Core Company KPIs
                          </span>
                          <span className="w-full text-caption font-caption text-subtext-color">
                            CSV File • 2 reports
                          </span>
                        </div>
                        <Accordion.Chevron />
                      </div>
                    }
                    defaultOpen={true}
                  >
                    <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-1 border-t border-solid border-brand-50 px-1 py-1">
                      <div className="flex w-full flex-col items-start gap-2 overflow-hidden rounded-md border border-solid border-brand-50 bg-default-background shadow-sm overflow-x-auto">
                        <Table
                          header={
                            <Table.HeaderRow>
                              <Table.HeaderCell>Name</Table.HeaderCell>
                              <Table.HeaderCell>Team Member</Table.HeaderCell>
                              <Table.HeaderCell>Priority</Table.HeaderCell>
                              <Table.HeaderCell>Due date</Table.HeaderCell>
                              <Table.HeaderCell>Actions</Table.HeaderCell>
                            </Table.HeaderRow>
                          }
                        >
                          <Table.Row>
                            <Table.Cell>
                              <span className="text-body font-body text-default-font">
                                Operations set
                              </span>
                            </Table.Cell>
                            <Table.Cell>
                              <Avatar
                                size="small"
                                image="https://res.cloudinary.com/subframe/image/upload/v1711417507/shared/fychrij7dzl8wgq2zjq9.avif"
                              >
                                A
                              </Avatar>
                            </Table.Cell>
                            <Table.Cell>
                              <div className="flex items-center gap-2">
                                <SubframeCore.Icon
                                  className="text-body font-body text-brand-700"
                                  name="FeatherFlag"
                                />
                                <span className="whitespace-nowrap text-body-bold font-body-bold text-brand-700">
                                  Normal
                                </span>
                              </div>
                            </Table.Cell>
                            <Table.Cell>
                              <span className="whitespace-nowrap text-body font-body text-neutral-500">
                                Aug 13
                              </span>
                              <Badge variant="error">Badge</Badge>
                            </Table.Cell>
                            <Table.Cell>
                              <div className="flex grow shrink-0 basis-0 items-center justify-center gap-1 self-stretch">
                                <IconButton
                                  size="small"
                                  icon="FeatherTrash"
                                  onClick={(
                                    event: React.MouseEvent<HTMLButtonElement>
                                  ) => {}}
                                />
                                <IconButton
                                  size="small"
                                  icon="FeatherMoreHorizontal"
                                  onClick={(
                                    event: React.MouseEvent<HTMLButtonElement>
                                  ) => {}}
                                />
                              </div>
                            </Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>
                              <span className="text-body font-body text-default-font">
                                Operations set 2
                              </span>
                            </Table.Cell>
                            <Table.Cell>
                              <Avatar
                                size="small"
                                image="https://res.cloudinary.com/subframe/image/upload/v1711417514/shared/ubsk7cs5hnnaj798efej.jpg"
                              >
                                A
                              </Avatar>
                            </Table.Cell>
                            <Table.Cell>
                              <div className="flex items-center gap-2">
                                <SubframeCore.Icon
                                  className="text-body font-body text-brand-700"
                                  name="FeatherFlag"
                                />
                                <span className="whitespace-nowrap text-body-bold font-body-bold text-brand-700">
                                  Normal
                                </span>
                              </div>
                            </Table.Cell>
                            <Table.Cell>
                              <span className="whitespace-nowrap text-body font-body text-neutral-500">
                                Aug 13
                              </span>
                              <Badge variant="success">On Time</Badge>
                            </Table.Cell>
                            <Table.Cell>
                              <div className="flex grow shrink-0 basis-0 items-center justify-center gap-1 self-stretch">
                                <IconButton
                                  size="small"
                                  icon="FeatherTrash"
                                  onClick={(
                                    event: React.MouseEvent<HTMLButtonElement>
                                  ) => {}}
                                />
                                <IconButton
                                  size="small"
                                  icon="FeatherMoreHorizontal"
                                  onClick={(
                                    event: React.MouseEvent<HTMLButtonElement>
                                  ) => {}}
                                />
                              </div>
                            </Table.Cell>
                          </Table.Row>
                        </Table>
                        <div className="flex w-full items-center justify-center gap-1 px-1 py-1">
                          <div className="flex items-center justify-center gap-1">
                            <IconButton
                              size="medium"
                              icon="FeatherChevronFirst"
                              onClick={(
                                event: React.MouseEvent<HTMLButtonElement>
                              ) => {}}
                            />
                            <IconButton
                              size="medium"
                              icon="FeatherChevronLeft"
                              onClick={(
                                event: React.MouseEvent<HTMLButtonElement>
                              ) => {}}
                            />
                          </div>
                          <div className="flex items-center justify-center gap-1">
                            <Button
                              variant="brand-secondary"
                              size="medium"
                              onClick={(
                                event: React.MouseEvent<HTMLButtonElement>
                              ) => {}}
                            >
                              1
                            </Button>
                            <Button
                              variant="neutral-tertiary"
                              size="medium"
                              onClick={(
                                event: React.MouseEvent<HTMLButtonElement>
                              ) => {}}
                            >
                              2
                            </Button>
                            <Button
                              variant="neutral-tertiary"
                              size="medium"
                              onClick={(
                                event: React.MouseEvent<HTMLButtonElement>
                              ) => {}}
                            >
                              3
                            </Button>
                            <Button
                              variant="neutral-tertiary"
                              size="medium"
                              onClick={(
                                event: React.MouseEvent<HTMLButtonElement>
                              ) => {}}
                            >
                              4
                            </Button>
                            <Button
                              variant="neutral-tertiary"
                              size="medium"
                              onClick={(
                                event: React.MouseEvent<HTMLButtonElement>
                              ) => {}}
                            >
                              5
                            </Button>
                          </div>
                          <div className="flex items-center justify-center gap-1">
                            <IconButton
                              size="medium"
                              icon="FeatherChevronRight"
                              onClick={(
                                event: React.MouseEvent<HTMLButtonElement>
                              ) => {}}
                            />
                            <IconButton
                              size="medium"
                              icon="FeatherChevronLast"
                              onClick={(
                                event: React.MouseEvent<HTMLButtonElement>
                              ) => {}}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Accordion>
                </div>
                <div className="flex w-full items-center gap-4 rounded-md border border-solid border-brand-50 px-2 py-2 shadow-sm">
                  <div className="flex items-center gap-2 px-1 py-1">
                    <img
                      className="w-6 flex-none"
                      src="https://res.cloudinary.com/subframe/image/upload/v1726421710/uploads/2266/j7kt7b3x09o3ukncqkte.png"
                    />
                  </div>
                  <div className="flex grow shrink-0 basis-0 flex-col items-start">
                    <span className="line-clamp-1 w-full text-body font-body text-default-font">
                      Webflow Connection
                    </span>
                    <span className="w-full text-caption font-caption text-subtext-color">
                      CMS Collections • 2 reports
                    </span>
                  </div>
                  <span className="grow shrink-0 basis-0 text-body font-body text-subtext-color">
                    Last edited 3 months ago
                  </span>
                  <IconButton
                    size="medium"
                    icon="FeatherShieldClose"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  />
                </div>
                <div className="flex w-full items-center gap-4 rounded-md border border-solid border-brand-50 px-2 py-2 shadow-sm">
                  <div className="flex items-center gap-2 px-1 py-1">
                    <img
                      className="w-6 flex-none"
                      src="https://res.cloudinary.com/subframe/image/upload/v1726421728/uploads/2266/xxzddpc9givyxjrik0cu.png"
                    />
                  </div>
                  <div className="flex grow shrink-0 basis-0 flex-col items-start">
                    <span className="line-clamp-1 w-full text-body font-body text-default-font">
                      Stripe Connection
                    </span>
                    <span className="w-full text-caption font-caption text-subtext-color">
                      CMS Collections • 2 reports
                    </span>
                  </div>
                  <span className="grow shrink-0 basis-0 text-body font-body text-subtext-color">
                    Last edited 3 months ago
                  </span>
                  <IconButton
                    size="medium"
                    icon="FeatherShieldX"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  />
                </div>
                <div className="flex w-full items-center gap-4 rounded-md border border-solid border-brand-50 px-2 py-2 shadow-sm">
                  <div className="flex items-center gap-2 px-1 py-1">
                    <img
                      className="w-6 flex-none"
                      src="https://res.cloudinary.com/subframe/image/upload/v1726421734/uploads/2266/rdmnaw7eumqe5rmf83u1.png"
                    />
                  </div>
                  <div className="flex grow shrink-0 basis-0 flex-col items-start">
                    <span className="line-clamp-1 w-full text-body font-body text-default-font">
                      Snowflake Connection
                    </span>
                    <span className="w-full text-caption font-caption text-subtext-color">
                      CMS Collections • 2 reports
                    </span>
                  </div>
                  <span className="grow shrink-0 basis-0 text-body font-body text-subtext-color">
                    Last edited 3 months ago
                  </span>
                  <IconButton
                    size="medium"
                    icon="FeatherShieldX"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  />
                </div>
                <div className="flex w-full flex-col items-start gap-4 rounded-md border border-solid border-brand-50 bg-default-background shadow-sm">
                  <Accordion
                    trigger={
                      <div className="flex w-full items-center gap-2 px-2 py-2">
                        <SubframeCore.Icon
                          className="text-heading-2 font-heading-2 text-brand-700"
                          name="FeatherFile"
                        />
                        <div className="flex grow shrink-0 basis-0 flex-col items-start">
                          <span className="line-clamp-1 w-full text-body font-body text-default-font">
                            Users
                          </span>
                          <span className="w-full text-caption font-caption text-subtext-color">
                            CSV File • 21 items
                          </span>
                        </div>
                        <Accordion.Chevron />
                      </div>
                    }
                  >
                    <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-1 border-t border-solid border-brand-50 px-1 py-1">
                      <div className="flex w-full flex-col items-start gap-2 overflow-hidden rounded-md border border-solid border-brand-50 bg-default-background shadow-sm overflow-x-auto">
                        <Table
                          header={
                            <Table.HeaderRow>
                              <Table.HeaderCell>Name</Table.HeaderCell>
                              <Table.HeaderCell>Assignee</Table.HeaderCell>
                              <Table.HeaderCell>Priority</Table.HeaderCell>
                              <Table.HeaderCell>Due date</Table.HeaderCell>
                            </Table.HeaderRow>
                          }
                        >
                          <Table.Row>
                            <Table.Cell>
                              <Checkbox
                                label="User interview"
                                checked={false}
                                onCheckedChange={(checked: boolean) => {}}
                              />
                            </Table.Cell>
                            <Table.Cell>
                              <Avatar
                                size="small"
                                image="https://res.cloudinary.com/subframe/image/upload/v1711417507/shared/fychrij7dzl8wgq2zjq9.avif"
                              >
                                A
                              </Avatar>
                              <IconButton
                                size="small"
                                onClick={(
                                  event: React.MouseEvent<HTMLButtonElement>
                                ) => {}}
                              />
                            </Table.Cell>
                            <Table.Cell>
                              <div className="flex items-center gap-2">
                                <SubframeCore.Icon
                                  className="text-body font-body text-brand-700"
                                  name="FeatherFlag"
                                />
                                <span className="whitespace-nowrap text-body-bold font-body-bold text-brand-700">
                                  Normal
                                </span>
                              </div>
                            </Table.Cell>
                            <Table.Cell>
                              <span className="whitespace-nowrap text-body font-body text-neutral-500">
                                Aug 13
                              </span>
                            </Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>
                              <Checkbox
                                label="Design review"
                                checked={false}
                                onCheckedChange={(checked: boolean) => {}}
                              />
                            </Table.Cell>
                            <Table.Cell>
                              <Avatar
                                size="small"
                                image="https://res.cloudinary.com/subframe/image/upload/v1711417514/shared/ubsk7cs5hnnaj798efej.jpg"
                              >
                                A
                              </Avatar>
                              <IconButton
                                size="small"
                                onClick={(
                                  event: React.MouseEvent<HTMLButtonElement>
                                ) => {}}
                              />
                            </Table.Cell>
                            <Table.Cell>
                              <div className="flex items-center gap-2">
                                <SubframeCore.Icon
                                  className="text-body font-body text-brand-700"
                                  name="FeatherFlag"
                                />
                                <span className="whitespace-nowrap text-body-bold font-body-bold text-brand-700">
                                  Normal
                                </span>
                              </div>
                            </Table.Cell>
                            <Table.Cell>
                              <span className="whitespace-nowrap text-body font-body text-neutral-500">
                                Aug 13
                              </span>
                            </Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>
                              <div className="flex items-center gap-2 px-1 py-1">
                                <SubframeCore.Icon
                                  className="text-body font-body text-subtext-color"
                                  name="FeatherPlus"
                                />
                                <span className="text-body font-body text-subtext-color">
                                  Add
                                </span>
                              </div>
                            </Table.Cell>
                            <Table.Cell />
                            <Table.Cell />
                            <Table.Cell />
                          </Table.Row>
                        </Table>
                        <div className="flex w-full items-center justify-center gap-1 px-1 py-1">
                          <div className="flex items-center justify-center gap-1">
                            <IconButton
                              size="medium"
                              icon="FeatherChevronFirst"
                              onClick={(
                                event: React.MouseEvent<HTMLButtonElement>
                              ) => {}}
                            />
                            <IconButton
                              size="medium"
                              icon="FeatherChevronLeft"
                              onClick={(
                                event: React.MouseEvent<HTMLButtonElement>
                              ) => {}}
                            />
                          </div>
                          <div className="flex items-center justify-center gap-1">
                            <Button
                              variant="brand-secondary"
                              size="medium"
                              onClick={(
                                event: React.MouseEvent<HTMLButtonElement>
                              ) => {}}
                            >
                              1
                            </Button>
                            <Button
                              variant="neutral-tertiary"
                              size="medium"
                              onClick={(
                                event: React.MouseEvent<HTMLButtonElement>
                              ) => {}}
                            >
                              2
                            </Button>
                            <Button
                              variant="neutral-tertiary"
                              size="medium"
                              onClick={(
                                event: React.MouseEvent<HTMLButtonElement>
                              ) => {}}
                            >
                              3
                            </Button>
                            <Button
                              variant="neutral-tertiary"
                              size="medium"
                              onClick={(
                                event: React.MouseEvent<HTMLButtonElement>
                              ) => {}}
                            >
                              4
                            </Button>
                            <Button
                              variant="neutral-tertiary"
                              size="medium"
                              onClick={(
                                event: React.MouseEvent<HTMLButtonElement>
                              ) => {}}
                            >
                              5
                            </Button>
                          </div>
                          <div className="flex items-center justify-center gap-1">
                            <IconButton
                              size="medium"
                              icon="FeatherChevronRight"
                              onClick={(
                                event: React.MouseEvent<HTMLButtonElement>
                              ) => {}}
                            />
                            <IconButton
                              size="medium"
                              icon="FeatherChevronLast"
                              onClick={(
                                event: React.MouseEvent<HTMLButtonElement>
                              ) => {}}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-80 flex-none flex-col items-start self-stretch border-l border-solid border-brand-50 mobile:hidden mobile:h-auto mobile:w-full mobile:flex-none">
          <div className="flex w-full flex-col items-start">
            <div className="flex w-full flex-col items-start border-b border-solid border-brand-50 bg-default-background">
              <Accordion
                trigger={
                  <div className="flex w-full items-center gap-2 px-4 py-3">
                    <SubframeCore.Icon
                      className="text-body font-body text-default-font"
                      name="FeatherGripVertical"
                    />
                    <SubframeCore.Icon
                      className="text-body font-body text-default-font"
                      name="FeatherType"
                    />
                    <span className="grow shrink-0 basis-0 text-caption-bold font-caption-bold text-default-font">
                      Page Heading
                    </span>
                    <Accordion.Chevron />
                  </div>
                }
              >
                <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-2 px-4 pb-4">
                  <TextField
                    className="h-auto w-full flex-none"
                    variant="filled"
                    label=""
                    helpText=""
                  >
                    <TextField.Input
                      placeholder="Main Title (Heading)"
                      value=""
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {}}
                    />
                  </TextField>
                  <TextField
                    className="h-auto w-full flex-none"
                    variant="filled"
                    label=""
                    helpText="This is the light-colored text after the heading"
                  >
                    <TextField.Input
                      placeholder="Subtext Optional"
                      value=""
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {}}
                    />
                  </TextField>
                  <div className="flex w-full items-center rounded-sm border border-solid border-brand-50 bg-default-background px-2 py-3">
                    <span className="grow shrink-0 basis-0 text-caption-bold font-caption-bold text-default-font">
                      Hide the Share Button
                    </span>
                    <div className="flex items-center justify-end">
                      <Switch
                        checked={false}
                        onCheckedChange={(checked: boolean) => {}}
                      />
                    </div>
                  </div>
                  <div className="flex w-full items-center rounded-sm border border-solid border-brand-50 bg-default-background px-2 py-3">
                    <span className="grow shrink-0 basis-0 text-caption-bold font-caption-bold text-default-font">
                      Hide the Help Button
                    </span>
                    <div className="flex items-center justify-end">
                      <Switch
                        checked={false}
                        onCheckedChange={(checked: boolean) => {}}
                      />
                    </div>
                  </div>
                  <div className="flex w-full items-center rounded-sm border border-solid border-brand-50 bg-default-background px-2 py-3">
                    <span className="grow shrink-0 basis-0 text-caption-bold font-caption-bold text-default-font">
                      Hide Database Switcher
                    </span>
                    <div className="flex items-center justify-end">
                      <Switch
                        checked={false}
                        onCheckedChange={(checked: boolean) => {}}
                      />
                    </div>
                  </div>
                </div>
              </Accordion>
            </div>
            <div className="flex w-full flex-col items-start border-b border-solid border-brand-50 bg-default-background">
              <Accordion
                trigger={
                  <div className="flex w-full items-center gap-2 px-4 py-3">
                    <SubframeCore.Icon
                      className="text-body font-body text-default-font"
                      name="FeatherGripVertical"
                    />
                    <SubframeCore.Icon
                      className="text-body font-body text-default-font"
                      name="FeatherText"
                    />
                    <span className="grow shrink-0 basis-0 text-caption-bold font-caption-bold text-default-font">
                      Description
                    </span>
                    <Accordion.Chevron />
                  </div>
                }
              >
                <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-2 px-4 pb-4">
                  <TextArea
                    className="h-auto w-full flex-none"
                    variant="filled"
                    label=""
                    helpText="This goes under the Page title"
                  >
                    <TextArea.Input
                      className="h-auto min-h-[96px] w-full flex-none"
                      placeholder="Write a Short Description here"
                      value=""
                      onChange={(
                        event: React.ChangeEvent<HTMLTextAreaElement>
                      ) => {}}
                    />
                  </TextArea>
                </div>
              </Accordion>
            </div>
            <div className="flex w-full flex-col items-start border border-solid border-brand-50 bg-default-background">
              <Accordion
                trigger={
                  <div className="flex w-full items-center gap-2 px-4 py-3">
                    <SubframeCore.Icon
                      className="text-body font-body text-default-font"
                      name="FeatherGripVertical"
                    />
                    <SubframeCore.Icon
                      className="text-body font-body text-default-font"
                      name="FeatherLayoutTemplate"
                    />
                    <span className="grow shrink-0 basis-0 text-caption-bold font-caption-bold text-default-font">
                      Grid View
                    </span>
                    <Accordion.Chevron />
                  </div>
                }
              >
                <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-2 px-4 pb-4">
                  <div className="flex w-full flex-col items-center gap-2">
                    <div className="flex w-full items-center">
                      <span className="grow shrink-0 basis-0 text-caption-bold font-caption-bold text-default-font">
                        Add Data to the Table
                      </span>
                      <Select
                        variant="filled"
                        label=""
                        placeholder="Load all Data"
                        helpText=""
                        value={undefined}
                        onValueChange={(value: string) => {}}
                      >
                        <Select.Item value="Core Company KPIs CSV">
                          Core Company KPIs CSV
                        </Select.Item>
                        <Select.Item value="Webflow Connection">
                          Webflow Connection
                        </Select.Item>
                        <Select.Item value="Stripe Connection">
                          Stripe Connection
                        </Select.Item>
                        <Select.Item value="Snowflake Connection">
                          Snowflake Connection
                        </Select.Item>
                        <Select.Item value="Users">Users</Select.Item>
                      </Select>
                    </div>
                    <div className="flex w-full items-center">
                      <span className="grow shrink-0 basis-0 text-caption-bold font-caption-bold text-default-font">
                        Number of cards per row
                      </span>
                      <Select
                        variant="filled"
                        label=""
                        placeholder="3 Cards"
                        helpText=""
                        value={undefined}
                        onValueChange={(value: string) => {}}
                      >
                        <Select.Item value="2 Cards">2 Cards</Select.Item>
                        <Select.Item value="4 Cards">4 Cards</Select.Item>
                      </Select>
                    </div>
                    <div className="flex w-full flex-col items-center gap-2 rounded-sm border border-solid border-brand-50 px-2 py-2">
                      <div className="flex w-full items-center justify-between">
                        <div className="flex items-center gap-2">
                          <SubframeCore.Icon
                            className="text-body font-body text-default-font"
                            name="FeatherGripVertical"
                          />
                          <SubframeCore.Icon
                            className="text-body font-body text-default-font"
                            name="FeatherDatabase"
                          />
                          <span className="text-body font-body text-default-font">
                            Core Company KPIs
                          </span>
                        </div>
                        <div className="flex items-center justify-center gap-1 self-stretch">
                          <IconButton
                            size="small"
                            icon="FeatherEdit"
                            onClick={(
                              event: React.MouseEvent<HTMLButtonElement>
                            ) => {}}
                          />
                          <IconButton
                            size="small"
                            icon="FeatherTrash"
                            onClick={(
                              event: React.MouseEvent<HTMLButtonElement>
                            ) => {}}
                          />
                        </div>
                      </div>
                      <div className="flex w-full items-start gap-2 py-1">
                        <TextField
                          className="h-auto grow shrink-0 basis-0"
                          variant="filled"
                          label=""
                          helpText=""
                        >
                          <TextField.Input
                            placeholder="File Title"
                            value=""
                            onChange={(
                              event: React.ChangeEvent<HTMLInputElement>
                            ) => {}}
                          />
                        </TextField>
                        <Select
                          variant="filled"
                          label=""
                          placeholder="Set Action"
                          helpText=""
                          value={undefined}
                          onValueChange={(value: string) => {}}
                        >
                          <Select.Item value="Actions coming soon">
                            Actions coming soon
                          </Select.Item>
                        </Select>
                      </div>
                      <div className="flex w-full items-center rounded-sm border border-solid border-brand-50 bg-default-background px-2 py-3">
                        <span className="grow shrink-0 basis-0 text-caption-bold font-caption-bold text-default-font">
                          Hide (any) Title
                        </span>
                        <div className="flex items-center justify-end">
                          <Switch
                            checked={false}
                            onCheckedChange={(checked: boolean) => {}}
                          />
                        </div>
                      </div>
                      <div className="flex w-full items-center rounded-sm border border-solid border-brand-50 bg-default-background px-2 py-3">
                        <span className="grow shrink-0 basis-0 text-caption-bold font-caption-bold text-default-font">
                          Hide (any) Details
                        </span>
                        <div className="flex items-center justify-end">
                          <Switch
                            checked={false}
                            onCheckedChange={(checked: boolean) => {}}
                          />
                        </div>
                      </div>
                      <div className="flex w-full items-center rounded-sm border border-solid border-brand-50 bg-default-background px-2 py-3">
                        <span className="grow shrink-0 basis-0 text-caption-bold font-caption-bold text-default-font">
                          Hide (any) Media
                        </span>
                        <div className="flex items-center justify-end">
                          <Switch
                            checked={false}
                            onCheckedChange={(checked: boolean) => {}}
                          />
                        </div>
                      </div>
                      <div className="flex w-full items-center rounded-sm border border-solid border-brand-50 bg-default-background px-2 py-3">
                        <span className="grow shrink-0 basis-0 text-caption-bold font-caption-bold text-default-font">
                          Link to Detail Pages
                        </span>
                        <div className="flex items-center justify-end">
                          <Switch
                            checked={false}
                            onCheckedChange={(checked: boolean) => {}}
                          />
                        </div>
                      </div>
                      <div className="flex w-full items-center rounded-sm border border-solid border-brand-50 bg-default-background px-2 py-3">
                        <span className="grow shrink-0 basis-0 text-caption-bold font-caption-bold text-default-font">
                          Allow it to be downloaded
                        </span>
                        <div className="flex items-center justify-end">
                          <Switch
                            checked={false}
                            onCheckedChange={(checked: boolean) => {}}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full flex-col items-center gap-2 rounded-sm border border-solid border-brand-50 px-2 py-2">
                      <div className="flex w-full items-center justify-between">
                        <div className="flex items-center gap-2">
                          <SubframeCore.Icon
                            className="text-body font-body text-default-font"
                            name="FeatherGripVertical"
                          />
                          <SubframeCore.Icon
                            className="text-body font-body text-default-font"
                            name="FeatherDatabase"
                          />
                          <span className="text-body font-body text-default-font">
                            Webflow Connections
                          </span>
                        </div>
                        <div className="flex items-center justify-center gap-1 self-stretch">
                          <IconButton
                            size="small"
                            icon="FeatherEdit"
                            onClick={(
                              event: React.MouseEvent<HTMLButtonElement>
                            ) => {}}
                          />
                          <IconButton
                            size="small"
                            icon="FeatherTrash"
                            onClick={(
                              event: React.MouseEvent<HTMLButtonElement>
                            ) => {}}
                          />
                        </div>
                      </div>
                      <div className="flex w-full items-start gap-2 py-1">
                        <TextField
                          className="h-auto grow shrink-0 basis-0"
                          variant="filled"
                          label=""
                          helpText=""
                        >
                          <TextField.Input
                            placeholder="File Title"
                            value=""
                            onChange={(
                              event: React.ChangeEvent<HTMLInputElement>
                            ) => {}}
                          />
                        </TextField>
                        <Select
                          variant="filled"
                          label=""
                          placeholder="Set Action"
                          helpText=""
                          value={undefined}
                          onValueChange={(value: string) => {}}
                        >
                          <Select.Item value="Actions coming soon">
                            Actions coming soon
                          </Select.Item>
                        </Select>
                      </div>
                      <div className="flex w-full items-center rounded-sm border border-solid border-brand-50 bg-default-background px-2 py-3">
                        <span className="grow shrink-0 basis-0 text-caption-bold font-caption-bold text-default-font">
                          Allow it to be downloaded
                        </span>
                        <div className="flex items-center justify-end">
                          <Switch
                            checked={false}
                            onCheckedChange={(checked: boolean) => {}}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start gap-2">
                    <div className="flex w-full items-center rounded-sm border border-solid border-brand-50 bg-default-background px-2 py-3">
                      <span className="grow shrink-0 basis-0 text-caption-bold font-caption-bold text-default-font">
                        Hide time stamps
                      </span>
                      <div className="flex items-center justify-end">
                        <Switch
                          checked={false}
                          onCheckedChange={(checked: boolean) => {}}
                        />
                      </div>
                    </div>
                    <div className="flex w-full items-center rounded-sm border border-solid border-brand-50 bg-default-background px-2 py-3">
                      <span className="grow shrink-0 basis-0 text-caption-bold font-caption-bold text-default-font">
                        Hide file type
                      </span>
                      <div className="flex items-center justify-end">
                        <Switch
                          checked={false}
                          onCheckedChange={(checked: boolean) => {}}
                        />
                      </div>
                    </div>
                    <div className="flex w-full items-center rounded-sm border border-solid border-brand-50 bg-default-background px-2 py-3">
                      <span className="grow shrink-0 basis-0 text-caption-bold font-caption-bold text-default-font">
                        Hide file count 
                      </span>
                      <div className="flex items-center justify-end">
                        <Switch
                          checked={false}
                          onCheckedChange={(checked: boolean) => {}}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Accordion>
            </div>
            <div className="flex w-full flex-col items-start border border-solid border-brand-50 bg-default-background">
              <Accordion
                trigger={
                  <div className="flex w-full items-center gap-2 px-4 py-3">
                    <SubframeCore.Icon
                      className="text-body font-body text-default-font"
                      name="FeatherGripVertical"
                    />
                    <SubframeCore.Icon
                      className="text-body font-body text-default-font"
                      name="FeatherCode2"
                    />
                    <span className="grow shrink-0 basis-0 text-caption-bold font-caption-bold text-default-font">
                      Custom Code
                    </span>
                    <Accordion.Chevron />
                  </div>
                }
              >
                <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-2 px-4 pb-4">
                  <div className="flex w-full flex-col items-center gap-2">
                    <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-2 px-4 pb-4">
                      <div className="flex w-full flex-col items-start gap-4 rounded-md bg-neutral-50 px-2 py-2">
                        <span className="w-full whitespace-pre-wrap text-caption font-caption text-default-font">
                          {
                            ".var printText = $('.text').data('text');\r\n\r\nvar contentArray = printText.split('/n');\r\n$.each(contentArray, function(index, newLine) {\r\n  $('.text').append('<span style=\"display:block;\" id=\"'+index+'\"></span>');"
                          }
                        </span>
                        <div className="flex w-full items-start gap-4">
                          <SidebarButton
                            className="h-5 w-auto flex-none"
                            icon="FeatherEdit2"
                            text="Edit"
                          />
                          <SidebarButton
                            className="h-5 w-auto flex-none"
                            icon="FeatherTrash"
                            text="Delete"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full items-center rounded-sm border border-solid border-brand-50 bg-default-background px-2 py-3">
                    <div className="flex grow shrink-0 basis-0 items-center">
                      <span className="grow shrink-0 basis-0 text-caption-bold font-caption-bold text-default-font">
                        Add fullwidth or responsiveness
                      </span>
                    </div>
                    <div className="flex items-center justify-end">
                      <Switch
                        checked={false}
                        onCheckedChange={(checked: boolean) => {}}
                      />
                    </div>
                  </div>
                </div>
              </Accordion>
            </div>
            <div className="flex w-full flex-col items-start border-b border-solid border-brand-50 bg-default-background">
              <Accordion
                trigger={
                  <div className="flex w-full items-center gap-2 px-4 py-3">
                    <SubframeCore.Icon
                      className="text-body font-body text-default-font"
                      name="FeatherGripVertical"
                    />
                    <SubframeCore.Icon
                      className="text-body font-body text-default-font"
                      name="FeatherTable2"
                    />
                    <span className="grow shrink-0 basis-0 text-caption-bold font-caption-bold text-default-font">
                      Table View
                    </span>
                    <Accordion.Chevron />
                  </div>
                }
              >
                <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-2 px-4 pb-4">
                  <div className="flex w-full flex-col items-center gap-2">
                    <div className="flex w-full items-center">
                      <span className="grow shrink-0 basis-0 text-caption-bold font-caption-bold text-default-font">
                        Add Data to the Table
                      </span>
                      <Select
                        variant="filled"
                        label=""
                        placeholder="Load all Data"
                        helpText=""
                        value={undefined}
                        onValueChange={(value: string) => {}}
                      >
                        <Select.Item value="Core Company KPIs CSV">
                          Core Company KPIs CSV
                        </Select.Item>
                        <Select.Item value="Webflow Connection">
                          Webflow Connection
                        </Select.Item>
                        <Select.Item value="Stripe Connection">
                          Stripe Connection
                        </Select.Item>
                        <Select.Item value="Snowflake Connection">
                          Snowflake Connection
                        </Select.Item>
                        <Select.Item value="Users">Users</Select.Item>
                      </Select>
                    </div>
                    <div className="flex w-full flex-col items-center gap-2 rounded-sm border border-solid border-brand-50 px-2 py-2">
                      <div className="flex w-full items-center justify-between">
                        <div className="flex items-center gap-2">
                          <SubframeCore.Icon
                            className="text-body font-body text-default-font"
                            name="FeatherGripVertical"
                          />
                          <SubframeCore.Icon
                            className="text-body font-body text-default-font"
                            name="FeatherDatabase"
                          />
                          <span className="text-body font-body text-default-font">
                            Core Company KPIs
                          </span>
                        </div>
                        <div className="flex items-center justify-center gap-1 self-stretch">
                          <IconButton
                            size="small"
                            icon="FeatherEdit"
                            onClick={(
                              event: React.MouseEvent<HTMLButtonElement>
                            ) => {}}
                          />
                          <IconButton
                            size="small"
                            icon="FeatherTrash"
                            onClick={(
                              event: React.MouseEvent<HTMLButtonElement>
                            ) => {}}
                          />
                        </div>
                      </div>
                      <div className="flex w-full items-start gap-2 py-1">
                        <TextField
                          className="h-auto grow shrink-0 basis-0"
                          variant="filled"
                          label=""
                          helpText=""
                        >
                          <TextField.Input
                            placeholder="File Title"
                            value=""
                            onChange={(
                              event: React.ChangeEvent<HTMLInputElement>
                            ) => {}}
                          />
                        </TextField>
                        <Select
                          variant="filled"
                          label=""
                          placeholder="Set Action"
                          helpText=""
                          value={undefined}
                          onValueChange={(value: string) => {}}
                        >
                          <Select.Item value="Actions coming soon">
                            Actions coming soon
                          </Select.Item>
                        </Select>
                      </div>
                      <div className="flex w-full items-center rounded-sm border border-solid border-brand-50 bg-default-background px-2 py-3">
                        <span className="grow shrink-0 basis-0 text-caption-bold font-caption-bold text-default-font">
                          Allow it to be editable
                        </span>
                        <div className="flex items-center justify-end">
                          <Switch
                            checked={false}
                            onCheckedChange={(checked: boolean) => {}}
                          />
                        </div>
                      </div>
                      <div className="flex w-full items-center rounded-sm border border-solid border-brand-50 bg-default-background px-2 py-3">
                        <span className="grow shrink-0 basis-0 text-caption-bold font-caption-bold text-default-font">
                          Link to Detail Pages
                        </span>
                        <div className="flex items-center justify-end">
                          <Switch
                            checked={false}
                            onCheckedChange={(checked: boolean) => {}}
                          />
                        </div>
                      </div>
                      <div className="flex w-full items-center rounded-sm border border-solid border-brand-50 bg-default-background px-2 py-3">
                        <span className="grow shrink-0 basis-0 text-caption-bold font-caption-bold text-default-font">
                          Allow it to be downloaded
                        </span>
                        <div className="flex items-center justify-end">
                          <Switch
                            checked={false}
                            onCheckedChange={(checked: boolean) => {}}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full flex-col items-center gap-2 rounded-sm border border-solid border-brand-50 px-2 py-2">
                      <div className="flex w-full items-center justify-between">
                        <div className="flex items-center gap-2">
                          <SubframeCore.Icon
                            className="text-body font-body text-default-font"
                            name="FeatherGripVertical"
                          />
                          <SubframeCore.Icon
                            className="text-body font-body text-default-font"
                            name="FeatherDatabase"
                          />
                          <span className="text-body font-body text-default-font">
                            Webflow Connections
                          </span>
                        </div>
                        <div className="flex items-center justify-center gap-1 self-stretch">
                          <IconButton
                            size="small"
                            icon="FeatherEdit"
                            onClick={(
                              event: React.MouseEvent<HTMLButtonElement>
                            ) => {}}
                          />
                          <IconButton
                            size="small"
                            icon="FeatherTrash"
                            onClick={(
                              event: React.MouseEvent<HTMLButtonElement>
                            ) => {}}
                          />
                        </div>
                      </div>
                      <div className="flex w-full items-start gap-2 py-1">
                        <TextField
                          className="h-auto grow shrink-0 basis-0"
                          variant="filled"
                          label=""
                          helpText=""
                        >
                          <TextField.Input
                            placeholder="File Title"
                            value=""
                            onChange={(
                              event: React.ChangeEvent<HTMLInputElement>
                            ) => {}}
                          />
                        </TextField>
                        <Select
                          variant="filled"
                          label=""
                          placeholder="Set Action"
                          helpText=""
                          value={undefined}
                          onValueChange={(value: string) => {}}
                        >
                          <Select.Item value="Actions coming soon">
                            Actions coming soon
                          </Select.Item>
                        </Select>
                      </div>
                      <div className="flex w-full items-center rounded-sm border border-solid border-brand-50 bg-default-background px-2 py-3">
                        <span className="grow shrink-0 basis-0 text-caption-bold font-caption-bold text-default-font">
                          Allow it to be downloaded
                        </span>
                        <div className="flex items-center justify-end">
                          <Switch
                            checked={false}
                            onCheckedChange={(checked: boolean) => {}}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start gap-2">
                    <div className="flex w-full items-center rounded-sm border border-solid border-brand-50 bg-default-background px-2 py-3">
                      <span className="grow shrink-0 basis-0 text-caption-bold font-caption-bold text-default-font">
                        Hide time stamps
                      </span>
                      <div className="flex items-center justify-end">
                        <Switch
                          checked={false}
                          onCheckedChange={(checked: boolean) => {}}
                        />
                      </div>
                    </div>
                    <div className="flex w-full items-center rounded-sm border border-solid border-brand-50 bg-default-background px-2 py-3">
                      <span className="grow shrink-0 basis-0 text-caption-bold font-caption-bold text-default-font">
                        Hide file type
                      </span>
                      <div className="flex items-center justify-end">
                        <Switch
                          checked={false}
                          onCheckedChange={(checked: boolean) => {}}
                        />
                      </div>
                    </div>
                    <div className="flex w-full items-center rounded-sm border border-solid border-brand-50 bg-default-background px-2 py-3">
                      <span className="grow shrink-0 basis-0 text-caption-bold font-caption-bold text-default-font">
                        Hide file count 
                      </span>
                      <div className="flex items-center justify-end">
                        <Switch
                          checked={false}
                          onCheckedChange={(checked: boolean) => {}}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Accordion>
            </div>
            <div className="flex w-full flex-col items-start border-b border-solid border-brand-50 bg-default-background">
              <Accordion
                trigger={
                  <div className="flex w-full items-center gap-2 px-4 py-3">
                    <SubframeCore.Icon
                      className="text-body font-body text-default-font"
                      name="FeatherCode2"
                    />
                    <span className="grow shrink-0 basis-0 text-caption-bold font-caption-bold text-default-font">
                      Embed this Page
                    </span>
                    <Accordion.Chevron />
                  </div>
                }
              >
                <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-2 px-4 pb-4">
                  <div className="flex w-full flex-col items-start gap-4 rounded-md bg-neutral-50 px-2 py-2">
                    <span className="w-full whitespace-pre-wrap text-caption font-caption text-default-font">
                      {
                        ".var printText = $('.text').data('text');\r\n\r\nvar contentArray = printText.split('/n');\r\n$.each(contentArray, function(index, newLine) {\r\n  $('.text').append('<span style=\"display:block;\" id=\"'+index+'\"></span>');"
                      }
                    </span>
                    <SidebarButton
                      className="h-5 w-auto flex-none"
                      icon="FeatherCopy"
                      text="Copy Embed"
                    />
                  </div>
                </div>
              </Accordion>
            </div>
            <div className="flex w-full flex-col items-start border-b border-solid border-brand-50 bg-default-background">
              <Accordion
                trigger={
                  <div className="flex w-full items-center gap-2 px-4 py-3">
                    <SubframeCore.Icon
                      className="text-body font-body text-default-font"
                      name="FeatherSearchCode"
                    />
                    <span className="grow shrink-0 basis-0 text-caption-bold font-caption-bold text-default-font">
                      Page Meta Details
                    </span>
                    <Accordion.Chevron />
                  </div>
                }
              >
                <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-2 px-4 pb-4">
                  <TextField
                    className="h-auto w-full flex-none"
                    variant="filled"
                    label=""
                    helpText=""
                  >
                    <TextField.Input
                      placeholder="Meta Title"
                      value=""
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {}}
                    />
                  </TextField>
                  <TextField
                    className="h-auto w-full flex-none"
                    variant="filled"
                    label=""
                    helpText=""
                  >
                    <TextField.Input
                      placeholder="Meta Description"
                      value=""
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {}}
                    />
                  </TextField>
                </div>
              </Accordion>
            </div>
            <div className="flex w-full flex-col items-start border-b border-solid border-brand-50 bg-default-background">
              <Accordion
                trigger={
                  <div className="flex w-full items-center gap-2 px-4 py-3">
                    <SubframeCore.Icon
                      className="text-body font-body text-default-font"
                      name="FeatherDatabase"
                    />
                    <span className="grow shrink-0 basis-0 text-caption-bold font-caption-bold text-default-font">
                      Data Connections
                    </span>
                    <Accordion.Chevron />
                  </div>
                }
              >
                <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-2 px-4 pb-4">
                  <ButtonPlaceholder
                    className="h-9 w-full flex-none"
                    icon="FeatherPlus"
                  >
                    Add New Data Connection
                  </ButtonPlaceholder>
                  <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-6">
                    <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-2 rounded-md border border-solid border-brand-50 bg-default-background px-4 py-4 shadow-sm">
                      <img
                        className="w-7 flex-none"
                        src="https://res.cloudinary.com/subframe/image/upload/v1726426096/uploads/2266/k0mw9tkqto16m4fe92mf.png"
                      />
                      <span className="text-body font-body text-default-font">
                        CSV Files
                      </span>
                      <div className="flex w-full items-center gap-4 rounded-md border border-solid border-brand-50 bg-default-background px-2 py-2 shadow-sm">
                        <div className="flex grow shrink-0 basis-0 items-center gap-1">
                          <span className="grow shrink-0 basis-0 text-caption-bold font-caption-bold text-default-font">
                            Core-company-kpis
                          </span>
                          <LinkButton
                            disabled={false}
                            variant="neutral"
                            size="medium"
                            iconRight="FeatherDownload"
                            onClick={(
                              event: React.MouseEvent<HTMLButtonElement>
                            ) => {}}
                          >
                            Download
                          </LinkButton>
                        </div>
                      </div>
                      <div className="flex w-full items-center gap-4 rounded-md border border-solid border-brand-50 bg-default-background px-2 py-2 shadow-sm">
                        <div className="flex grow shrink-0 basis-0 items-center gap-1">
                          <span className="grow shrink-0 basis-0 text-caption-bold font-caption-bold text-default-font">
                            users
                          </span>
                          <LinkButton
                            disabled={false}
                            variant="neutral"
                            size="medium"
                            iconRight="FeatherDownload"
                            onClick={(
                              event: React.MouseEvent<HTMLButtonElement>
                            ) => {}}
                          >
                            Download
                          </LinkButton>
                        </div>
                      </div>
                      <Button
                        variant="brand-secondary"
                        icon="FeatherUpload"
                        onClick={(
                          event: React.MouseEvent<HTMLButtonElement>
                        ) => {}}
                      >
                        Upload New CSV
                      </Button>
                    </div>
                    <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-2 rounded-md border border-solid border-brand-50 bg-default-background px-4 py-4 shadow-sm">
                      <img
                        className="w-7 flex-none"
                        src="https://res.cloudinary.com/subframe/image/upload/v1726421728/uploads/2266/xxzddpc9givyxjrik0cu.png"
                      />
                      <TextField
                        className="h-auto w-full flex-none"
                        label="Stripe Connection"
                        helpText="Paste New API Key"
                      >
                        <TextField.Input
                          placeholder="****************************"
                          value=""
                          onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                          ) => {}}
                        />
                      </TextField>
                      <div className="flex w-full grow shrink-0 basis-0 items-start gap-1">
                        <span className="grow shrink-0 basis-0 text-caption-bold font-caption-bold text-default-font">
                          Stripe
                        </span>
                        <LinkButton
                          disabled={false}
                          variant="neutral"
                          size="medium"
                          iconRight="FeatherArrowRight"
                          onClick={(
                            event: React.MouseEvent<HTMLButtonElement>
                          ) => {}}
                        >
                          Re-Connect
                        </LinkButton>
                      </div>
                    </div>
                    <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-2 rounded-md border border-solid border-brand-50 bg-default-background px-4 py-4 shadow-sm">
                      <img
                        className="w-7 flex-none"
                        src="https://res.cloudinary.com/subframe/image/upload/v1726421710/uploads/2266/j7kt7b3x09o3ukncqkte.png"
                      />
                      <TextField
                        className="h-auto w-full flex-none"
                        label="Webflow Connection"
                        helpText="Paste New API Key"
                      >
                        <TextField.Input
                          placeholder="****************************"
                          value=""
                          onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                          ) => {}}
                        />
                      </TextField>
                      <div className="flex w-full grow shrink-0 basis-0 items-start gap-1">
                        <span className="grow shrink-0 basis-0 text-caption-bold font-caption-bold text-default-font">
                          Webflow
                        </span>
                        <LinkButton
                          disabled={false}
                          variant="neutral"
                          size="medium"
                          iconRight="FeatherArrowRight"
                          onClick={(
                            event: React.MouseEvent<HTMLButtonElement>
                          ) => {}}
                        >
                          Connect
                        </LinkButton>
                      </div>
                    </div>
                  </div>
                </div>
              </Accordion>
            </div>
            <div className="flex w-full flex-col items-start border-b border-solid border-brand-50 bg-default-background">
              <Accordion
                trigger={
                  <div className="flex w-full items-center gap-2 px-4 py-3">
                    <SubframeCore.Icon
                      className="text-body font-body text-default-font"
                      name="FeatherEye"
                    />
                    <span className="grow shrink-0 basis-0 text-caption-bold font-caption-bold text-default-font">
                      Page Visibility
                    </span>
                    <Accordion.Chevron />
                  </div>
                }
              >
                <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-2 px-4 pb-4">
                  <RadioGroup
                    className="h-auto w-full flex-none"
                    label=""
                    helpText=""
                    value=""
                    onValueChange={(value: string) => {}}
                  >
                    <RadioGroup.Option
                      label="Show page and include in menu"
                      value="e428fe8d"
                    />
                    <RadioGroup.Option
                      label="Include page but hide from menu"
                      value="b71a0448"
                    />
                    <RadioGroup.Option
                      label="Private page and hide"
                      value="2de9beef"
                    />
                  </RadioGroup>
                  <div className="flex w-full items-center rounded-sm border border-solid border-brand-50 bg-default-background px-2 py-3">
                    <span className="grow shrink-0 basis-0 text-caption-bold font-caption-bold text-default-font">
                      Hide Menu from the top page
                    </span>
                    <div className="flex items-center justify-end">
                      <Switch
                        checked={false}
                        onCheckedChange={(checked: boolean) => {}}
                      />
                    </div>
                  </div>
                </div>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuilderData;
