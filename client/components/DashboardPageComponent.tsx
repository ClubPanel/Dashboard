import { chakra } from "@chakra-ui/react";
import {RenderProps} from "../../../../pages/[[...name]]";
import React from "react";

const DashboardPageComponent = ({config, userInfo, data}: Partial<RenderProps>) => {
  return (
    <chakra.h2 align="left">Welcome {userInfo.username}!</chakra.h2>
  );
};

export default DashboardPageComponent;