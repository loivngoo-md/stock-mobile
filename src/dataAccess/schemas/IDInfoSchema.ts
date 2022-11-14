import { Schema } from "mongoose";


export const IdInfoSchema = new Schema({
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
});
