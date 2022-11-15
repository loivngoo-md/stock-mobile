import { IBase } from "./IBase";

import { TypeUser, Level, Branch, Sex } from "../app/enums";

export interface IUser extends IBase {
  id: number;

  username: string;

  name: string;

  surname: string;

  fullName: string;

  emailAddress: string;

  phoneNumber: string;

  address: string;

  isActive: boolean;

  isVerified: boolean;

  roleNames: string[];

  password: string;

  agent_code: string;

  superior: string;

  login_ip: string;

  phone: string;

  balance: number;

  available: number;

  freeze: number;

  withdrawable: number;

  same_day_selling_income: string;

  ipo_application: boolean;

  last_login_ip: string;

  created_by: string;

  created_at: Date;
  isAdmin: boolean;
  isSuperAdmin: boolean


  avatarPath: string;
}
