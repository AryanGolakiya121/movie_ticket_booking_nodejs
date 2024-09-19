import mongoose, { Schema } from "mongoose";

const screenSchema = new Schema(
    {
        screenNumber: {
            type: Number,
            required: true,
            unique: true
        },
        totalSeats: {
            type: Number,
            required: true,
        },
        sections:[
            {
                name: { type: String },
                seatCategories: [
                    {
                        category: { type: String }, // for example VIP, Premium, "Regular"
                        price: { type: Number },
                        seatCount: { type: Number }
                    }
                ]
            }
        ]
    },
    {
        timestamps: true,
    }
)

export const Screen = mongoose.model("Screen", screenSchema)
