"use client"

import React from "react"
import { useState, useMemo } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react"



export default function DropdownComponent() {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["Serif"]));

  const selectedValue = Array.from(selectedKeys).join(", ").replaceAll("_", " ");

  const handleSelectionChange = (keys: Set<string>) => {
    setSelectedKeys(keys);
  };

  return (
    <section className="ml-40">
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered" className="capitalize">
            {selectedValue} ▼
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Single selection example"
          variant="flat"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selectedKeys}
          onSelectionChange={handleSelectionChange}
        >
          <DropdownItem key="serif">Serif</DropdownItem>
          <DropdownItem key="mono">Mono</DropdownItem>
          <DropdownItem key="sans serif">Sans Serif</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </section>
  );
}
