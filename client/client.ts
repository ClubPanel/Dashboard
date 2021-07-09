import {ClientRegisterCallback} from "../../../shared/module/moduleClient";
import {GetConfig} from "../../../shared/config/configStore";
import {DashboardConfig} from "../config/DashboardConfig";

export const registerClient = (callback: ClientRegisterCallback) => {
  const configs = GetConfig<DashboardConfig>("client/dashboard.json");

  callback(configs.url, {
    name: configs.name
  }, "./client/components/DashboardPageComponent.tsx");
};