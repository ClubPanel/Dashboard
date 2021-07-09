import {RegisterConfig} from "../../../shared/config/configFilesManager";
import {DashboardConfig} from "./DashboardConfig";

export const registerConfigs = () => {
  RegisterConfig({name: "client/dashboard.json", default: config});
};

const config: DashboardConfig = {
  url: "/",
  name: "Dashboard"
};