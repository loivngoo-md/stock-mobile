"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRouter = void 0;
const Role_1 = require("./Role");
const User_1 = require("./User");
const base_1 = require("../base");
const Session_1 = require("./Session");
const Customer_1 = require("./Customer");
const Configuration_1 = require("./Configuration");
class ServiceRouter extends base_1.BaseRouter {
    constructor() {
        super();
        this.init();
    }
    init() {
        this._router.use("/user", new User_1.UserRouter()._router);
        this._router.use("/session", new Session_1.SessionRouter()._router);
        this._router.use("/customer", new Customer_1.CustomerRouter()._router);
        this._router.use("/role", new Role_1.RoleRouter()._router);
        this._router.use("/configuration", new Configuration_1.ConfigurationRouter()._router);
    }
}
exports.ServiceRouter = ServiceRouter;
//# sourceMappingURL=index.js.map