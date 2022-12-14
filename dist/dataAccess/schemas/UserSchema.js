"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose = __importStar(require("mongoose"));
const tools_1 = require("../../app/tools");
const UserSchema = new mongoose.Schema({
    id: { type: Number },
    username: { type: String },
    name: { type: String },
    surname: { type: String },
    fullName: { type: String },
    emailAddress: { type: String },
    phoneNumber: { type: String },
    address: { type: String },
    isActive: { type: Boolean },
    isVerified: { type: Boolean },
    roleNames: { type: [] },
    password: { type: String },
    agent_code: { type: String },
    superior: { type: String },
    login_ip: { type: String },
    phone: { type: String },
    balance: { type: Number },
    available: { type: Number },
    freeze: { type: Number },
    withdrawable: { type: Number },
    same_day_selling_income: { type: String },
    ipo_application: { type: Boolean },
    last_login_ip: { type: String },
    created_by: { type: String },
    created_at: { type: Date },
    isAdmin: { type: Boolean },
    isSuperAdmin: { type: Boolean },
    avatarPath: { type: String },
});
exports.UserSchema = UserSchema;
UserSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = this;
        if (this.isModified("password") || this.isNew) {
            user.password = yield tools_1.PasswordManager.hash(user.password);
            next();
        }
        else {
            next();
        }
    });
});
UserSchema.methods.comparePassword = function (candidatePassword) {
    return __awaiter(this, void 0, void 0, function* () {
        yield tools_1.PasswordManager.compare(candidatePassword, this.password)
            .then((value) => {
            return value;
        })
            .catch((err) => {
            return err;
        });
    });
};
//# sourceMappingURL=UserSchema.js.map