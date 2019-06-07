const amqplib = require("amqplib/callback_api");

const rabbitmqChecker = {
    name: 'RabbitMQ Test',
    imageUrl: 'https://cloud.intuz.com/applications/rabbitmq/aws/images/rabbitmq_logo.png',
    check: (config) => {
        return new Promise((res, rej) => {
            amqplib.connect(config.RABBITMQ_URL, (err, conn) => {
                if (err)
                    rej(err);
                else
                    res();
            });
        });
    }
}

module.exports = {
    rabbitmqChecker
};