global.SALT_KEY = 'f5b99242-6504-4ca3-90f2-05e78e5761ef';
global.EMAIL_TMPL = 'Olá, <strong>{0}</strong>, seja bem vindo à AMS Node API!';

module.exports = {
    // Conexão mongobd - banco de Dados
    connectionString: '',

    // Envo de E-mail
    sendgridKey: '',

    // Conexão Storage na Azure
    containerConnectionString: ''
}
