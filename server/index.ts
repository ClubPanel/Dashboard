import {ServerSide} from "../../../shared/module/moduleServer";
import {registerServer} from "./server";

const output: ServerSide = {
  identifier: "dashboard",
  priority: 362,
  register: registerServer
};

export default output;