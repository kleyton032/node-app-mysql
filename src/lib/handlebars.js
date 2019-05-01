const { format } = require('timeago.js')

const helpers = {};

//função responsável por formatar um timestamp
helpers.timeago = (timestamp) =>{
    return format(timestamp);
};

module.exports = helpers