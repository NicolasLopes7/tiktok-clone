import React from "react";

import { Button } from "./styles";
import { Entypo } from "@expo/vector-icons";
export default function TabButton() {
  return (
    <Button>
      <Entypo name="plus" size={22} color="#000" />
    </Button>
  );
}
