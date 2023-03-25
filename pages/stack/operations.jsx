"use client";
import { Button, Input, Select } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { StackArr } from "./stack.slice";

export default function Selectoperation() {
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState(
    typesOfOperations[0] + "( )"
  );
  const [intVal, setIntVal] = useState("");

  return (
    <div className="flex justify-center w-full">
      <div className="flex w-[50%]">
        <Input
          disabled={selectedValue !== "push( )"}
          value={intVal}
          onChange={(e) => setIntVal(e.target.value)}
          addonAfter={
            <Select
              value={selectedValue}
              onChange={(val) => setSelectedValue(val)}
              style={{ minWidth: 100 }}
            >
              {typesOfOperations.map((item, i) => (
                <Select.Option className="mb-2" value={item + "( )"} key={i}>
                  {item + "( )"}
                </Select.Option>
              ))}
            </Select>
          }
        />
        <Button
          onClick={() => {
            dispatch(StackArr({ name: intVal, type: selectedValue }));
            setIntVal("");
          }}
          className="ml-4"
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

const typesOfOperations = [
  "push",
  "pop",
  "isEmpty",
  "isFull",
  "peek",
  "count",
  "change",
  "display",
];
