$(document).ready(function() {
    // Aplicar máscara aos campos CPF, telefone e CEP
    $("#cpf").mask("000.000.000-00");
    $("#telefone").mask("(00) 00000-0000");
    $("#cep").mask("00000-000");

    // Enviar o formulário de cadastro
    $("#form-cadastro").submit(function(event) {
        event.preventDefault();
        alert("Formulário enviado com sucesso!");
    });
});
