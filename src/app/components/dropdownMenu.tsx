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
    <section className="ml-10 text-pink-600">
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered" className="capitalize flex gap-4">
            {selectedValue} <MdOutlineKeyboardArrowDown className="h-10 w-10 border-r-2 pr-2 text-pink-600 border-r-pink-600" />
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Font"
          variant="flat"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selectedKeys}
          onSelectionChange={(keys) => handleSelectionChange(keys)}
          className="bg-yellow-400 dark:bg-black w-32 m-auto h-36 flex flex-col justify-center items-center"
          >  
          <DropdownItem key="serif" className=" text-pink-600 m-auto">Serif</DropdownItem>
          <DropdownItem key="mono" className=" text-pink-600 m-auto">Mono</DropdownItem>
          <DropdownItem key="sans-serif" className=" text-pink-600 m-auto">Sans Serif</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </section>
  );
}
