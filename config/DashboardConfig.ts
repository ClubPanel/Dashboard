import {Config} from "../../../shared/config/types/config";

export interface DashboardConfig extends Config {
  url: string;
  name: string;
}