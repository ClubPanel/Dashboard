import {RegisterConfig} from "../../../shared/config/configFilesManager";
import {DashboardConfig} from "./DashboardConfig";

export const registerConfigs = () => {
  RegisterConfig({name: "client/dashboard.json", default: config});
};

const config: DashboardConfig = {
  url: "/",
  name: "Dashboard",
  welcomeMessageDescription: "Here is a list of all the pages you can visit.",
  __comment__categoryDescriptions__: "Below are the descriptions for each category that will appear in the dashboard, above the links to each item in them.",
  categoryDescriptions: {
    "Example Category": "This is an example category. Put the description for this category here."
  },
  enableDelete: true
};