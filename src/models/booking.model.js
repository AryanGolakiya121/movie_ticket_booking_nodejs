import mongoose, { Schema } from "mongoose";

const bookingSchema = new Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        show: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Show",
            required: true
        },
        seats: [
            {
                section: { type: String },
                category: { type: String },
                seatNumbers: [String],
                price: { type: Number }
            }
        ],
        totalPrice: {
            type: Number,
            required: true
        },
        paymentStatus: {
            type: String,
            enum: ["pending", "completed", "failed"],
            default: "pending"
        },
        paymentMethod: {  //example 
            type: String,
            // enum: ["credit card", "debit card", "upi"]
        },
        status: {
            type: String,
            enum: ["booked", "cancelled"],
            default: "booked"
        },
        bookingDate: {
            type: Date,
            default: Date.now()
        }
    },
    {
        timestamps: true
    }
)

const Booking = mongoose.model("Booking", bookingSchema)