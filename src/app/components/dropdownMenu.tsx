"use client"

import React from "react"
import { useState, useMemo } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react"
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


export default function DropdownComponent() {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["Serif"]));

  const selectedValue = Array.from(selectedKeys).join(", ").replaceAll("_", " ");

  const handleSelectionChange = (keys: Set<string>) => {
    setSelectedKeys(keys);
  };

  return (
    <section className="ml-20">
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered" className="capitalize flex gap-4">
            {selectedValue} <MdOutlineKeyboardArrowDown className="h-10 w-10 text-gray-600 border-r-2 pr-2" />
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Single selection example"
          variant="flat"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selectedKeys}
          onSelectionChange={(keys: Iterable<string>) => handleSelectionChange(new Set(keys))}

        >
          <DropdownItem key="serif">Serif</DropdownItem>
          <DropdownItem key="mono">Mono</DropdownItem>
          <DropdownItem key="sans serif">Sans Serif</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </section>
  );
}
