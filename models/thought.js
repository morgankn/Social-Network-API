const { Schema, model, Types } = require('mongoose');

const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default:()=> new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            max_length: 250,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default:Date.now,
            get:(date) => new Date(date).toLocaleDateString(),
        }
    }
 )
const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: true,
            required: true,
            min_length: 1,
            max_length: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (date) => new Date(date).toLocaleDateString(),
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [
            ReactionSchema
        ],

    }
)

const Thought = model('Thought', ThoughtSchema)

module.exports = Thought;