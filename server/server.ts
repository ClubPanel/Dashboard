import {Express} from "express";
import {GetConfig} from "../../../shared/config/configStore";
import {DashboardConfig} from "../config/DashboardConfig";
import {requireAuth} from "../../../server/util/auth";
import {requireBaseReferrer} from "../../../server/util/referrer";
import bodyParser from "body-parser";
import {requireCSRF} from "../../../server/util/csrf";
import User, {IUser} from "../../../server/database/models/user";
import {hasPermission} from "../../../shared/util/permissions";

declare module "express-session" {
  interface SessionData {
    user?: IUser;
  }
}

export const registerServer = (app: Express) => {
  const configs = GetConfig<DashboardConfig>("client/dashboard.json");

  app.get(configs.url, requireAuth());

  // @ts-ignore
  app.post("/dashboardbackend/deleteme", requireBaseReferrer(), bodyParser.json(), requireCSRF(), requireAuth(), async (req, res) => {
    const user = await User.findOne({id: req.session.user.id});

    if(!user) {
      return res.status(400).send("The specified user does not exist!");
    }

    if(hasPermission(user.permissions, "owner")) {
      return res.status(400).send("The owner cannot be deleted!");
    }

    await user.delete();

    res.status(200).send("Successfully deleted user!");
  });
};