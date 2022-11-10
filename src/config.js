global.SALT_KEY = 'f5b99242-6504-4ca3-90f2-05e78e5761ef';
global.EMAIL_TMPL = 'Olá, <strong>{0}</strong>, seja bem vindo à AMS Node API!';


module.exports = {
    // Conexão mongobd - banco de Dados
    connectionString: 'mongodb+srv://ams:ams@amsdatabase.f94qdmw.mongodb.net/?retryWrites=true&w=majority',

    // Conexão Storage na Azure
    sendgridKey: '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',

    //
    containerConnectionString: 'SUA CONNECTION STRING'
}