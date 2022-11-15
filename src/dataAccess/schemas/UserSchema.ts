import * as mongoose from "mongoose";

import { TypeUser, Level, Branch, Sex } from "../../app/enums";

import { IUser } from "../../interfaces";

import { PasswordManager } from "../../app/tools";

const UserSchema: mongoose.Schema = new mongoose.Schema<IUser>({
  id: {type: Number},

  username: {type: String},

  name: {type: String},

  surname: {type: String},

  fullName: {type: String},

  emailAddress: {type: String},
  phoneNumber:{ type: String},

  address: {type: String},

  isActive: {type: Boolean},

  isVerified: {type: Boolean},

  roleNames: {type: []},

  password: {type: String},

  agent_code: {type: String},

  superior: {type: String},

  login_ip: {type: String},

  phone: {type: String},

  balance: {type: Number},

  available: {type: Number},

  freeze: {type: Number},

  withdrawable: {type: Number},

  same_day_selling_income:  {type: String},

  ipo_application: {type: Boolean},

  last_login_ip: {type: String},

  created_by: {type: String},

  created_at: {type: Date},
  isAdmin: {type: Boolean},
  isSuperAdmin: {type: Boolean},

  avatarPath: {type: String},
});

UserSchema.pre("save", async function (next) {
  const user = this;

  if (this.isModified("password") || this.isNew) {
    user.password = await PasswordManager.hash(user.password);
    next();
  } else {
    next();
  }
});

UserSchema.methods.comparePassword = async function (candidatePassword) {
  await PasswordManager.compare(candidatePassword, this.password)
    .then((value) => {
      return value;
    })
    .catch((err) => {
      return err;
    });
};

export { UserSchema };
