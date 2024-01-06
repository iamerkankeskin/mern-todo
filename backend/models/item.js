const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Title field is required"]
        },
        list: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'List',
            required: [true, "List select is required"]
        },
        checked: {
            type: Boolean,
            default: false,
            validate: {
                validator: function (value) {
                    return typeof value === 'boolean';
                },
                message: "Checked field must be a boolean"
            }
        }
    },
    {
        timestamps: true
    }
)

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;