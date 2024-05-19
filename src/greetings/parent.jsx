import React from "react";
import Child from "./child";
import GrandChild from "./grandchild";

export default function Parent() {
  return (
    <div>
      <Child name="Child" age="22" />
      <GrandChild name="Grandchild" />
    </div>
  );
}
