import {Express} from "express";
import {GetConfig} from "../../../shared/config/configStore";
import {DashboardConfig} from "../config/DashboardConfig";
import {requireAuth} from "../../../server/util/auth";

export const registerServer = (app: Express) => {
  const configs = GetConfig<DashboardConfig>("client/dashboard.json");

  app.get(configs.url, requireAuth());
};