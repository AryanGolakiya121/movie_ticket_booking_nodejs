import mongoose, { Schema } from "mongoose";

const movieSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        genre: [String],
        duration: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        releaseDate: {
            type: Date
        },
        posterUrl: {
            type: String
        },
        rating: {
            type: Number
        },
        isActive: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
)

export const Movie = mongoose.model("Movie", movieSchema)