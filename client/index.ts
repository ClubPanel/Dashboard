import {ClientSide} from "../../../shared/module/moduleClient";
import {registerClient} from "./client";

const output: ClientSide = {
  register: registerClient,
  priority: 362,
  identifier: "dashboard"
};

export default output;