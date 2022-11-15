import { IBase } from "./IBase";

export interface IIdInfo extends IBase {
    username: string,

    displayName?: string,

    realName?: string,

    id_number:string,

    id_before: string,
    id_after: string,
    account_holder: string,
    account_name: string,
    approver: string,
    isVerified: boolean
    id: number
    user_id: number
}
