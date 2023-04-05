const { Schema, model, Types } = require('mongoose')

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: true,
            required: true,
            
        }
    }
)