import mongoose, { Schema } from "mongoose";

const paymentSchema = new Schema(
    {
        booking: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Booking",
            required: true
        },
        amount: {
            type: Number,
            required: true
        },
        method: {    // example, 'credit card', 'debit card', 'UPI'
            type: String,
            required: true
        },
        status: {
            type: String,
            enum: ["pending", "completed", "failed"],
            default: "pending"
        },
        transactionId: {
            type: String
        }
    },
    {
        timestamps: true
    }
)

export const Payment = mongoose.model("Payment", paymentSchema)