const mongoose = require("mongoose");

const mongoChecker = {
    name: 'Mongo Test',
    cron: '0 * * * *',
    imageUrl: 'http://www.decom.ufop.br/imobilis/wp-content/uploads/2014/04/mongodb-logo.png',
    check: (config) => {
        return new Promise((res, rej) => {
            mongoose.connect(config.MONGO_URL, { useNewUrlParser: true }, function(err) {
                if (err) 
                    rej(err);
                else 
                    res();
                    mongoose.connection.close();
            });
        });
    }
}

module.exports = {
    mongoChecker
};