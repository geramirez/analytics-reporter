var mongoose = require('mongoose');
var Mixed = mongoose.Schema.Types.Mixed;

module.exports = {
    Analytics: mongoose.model(
        'AnalyticsSchema', new mongoose.Schema({
            slug: {
                type: String,
                required: true,
                unique: true
            },
            apicall: {
                type: String,
                required: true,
                unique: true
            },
            update_interval: {
                type: Number,
                required: false
            },
            last_update: {
                type: Number,
                required: false
            },
            data: {
                type: Mixed,
                required: false
            }
        })
    )
};