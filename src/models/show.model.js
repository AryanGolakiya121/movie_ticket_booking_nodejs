import mongoose, { Schema } from "mongoose";

const showSchema = new Schema(
    {
        movie: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Movie",
            required: true
        },
        screen: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Screen",
            required: true
        },
        startTime: {
            type: Date,
            required: true
        },
        endTime: {
            type: Date,
            required: true
        },
        availableSeats: {
            type: Number,
            required: true
        },
        seatStatus: [
            {
                seatCategory: { type: String },
                available: { type: String },
                booked: { Type: Number }
            }
        ]
    },
    {
        timestamps: true
    },
)

export const Show = mongoose.model("Show", showSchema)