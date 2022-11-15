"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdInfoSchema = void 0;
const mongoose_1 = require("mongoose");
exports.IdInfoSchema = new mongoose_1.Schema({
    username: { type: String, required: true },
    displayName: { type: String },
    realName: { type: String },
    id_number: { type: String },
    id_before: { type: String },
    id_after: { type: String },
    account_holder: { type: String },
    account_name: { type: String },
    approver: { type: String },
    isVerified: { type: Boolean },
    id: { type: Number },
    user_id: { type: Number },
});
//# sourceMappingURL=IDInfoSchema.js.map