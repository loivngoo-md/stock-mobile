import { RoleRouter } from "./Role";

import { UserRouter } from "./User";

import { BaseRouter } from "../base";

import { SessionRouter } from "./Session";

import { CustomerRouter } from "./Customer";

import { ConfigurationRouter } from "./Configuration";

class ServiceRouter extends BaseRouter {
  constructor() {
    super();
    this.init();
  }

  public init() {

    this._router.use("/user", new UserRouter()._router);

    this._router.use("/session", new SessionRouter()._router);

    this._router.use("/customer", new CustomerRouter()._router);

    this._router.use("/role", new RoleRouter()._router);

    this._router.use("/configuration", new ConfigurationRouter()._router);

  }
}

export { ServiceRouter };
