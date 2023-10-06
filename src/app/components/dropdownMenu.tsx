"use client"

import React from "react"
import { useState, useMemo } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react"
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

// Main component
export default function DropdownComponent() {
  // state for selected keys
  const [selectedKeys, setSelectedKeys] = useState(new Set(["serif"]));
  // get selected value
  const selectedValue = Array.from(selectedKeys).join(", ").replaceAll("_", " ");
  // handle selection change
  const handleSelectionChange = (keys: any) => {
    // set selected keys
    setSelectedKeys(new Set(Array.from(Set.prototype.values.call(keys))));
  };
  
  return (
    <section className="ml-20 dark:text-pink-600">
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered" className="capitalize flex gap-4">
            {selectedValue} <MdOutlineKeyboardArrowDown className="h-10 w-10 text-gray-600 border-r-2 pr-2 dark:text-pink-600 dark:border-r-pink-600" />
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Font"
          variant="flat"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selectedKeys}
          onSelectionChange={(keys) => handleSelectionChange(keys)}>
          <DropdownItem key="serif">Serif</DropdownItem>
          <DropdownItem key="mono">Mono</DropdownItem>
          <DropdownItem key="sans serif">Sans Serif</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </section>
  );
}
