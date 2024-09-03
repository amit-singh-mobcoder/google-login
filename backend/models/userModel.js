import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        email: {
            type: String
        },
        image: {
            type: String
        }
    }
)

export const UserModel = mongoose.model('social-logins', userSchema);