// Aguarda o carregamento completo do documento HTML antes de executar o código
$(document).ready(function () {
    // Inicializa o carrossel de imagens usando a biblioteca Slick
    $('#carousel-imagens').slick({
        // Define o carrossel para rodar automaticamente
        autoplay: true,
        // Remove as setas de navegação
        arrows: false
    });
});

// Aplica uma máscara de telefone no campo de entrada com o id "telefone"
$('#telefone').mask('(00) 00000-0000', {
    // Define o placeholder exibido no campo antes do preenchimento
    placeholder: '(DDD) 12345-6789'
});

$('#cpf').mask('000.000.000-00', {
    placeholder: '123.456.789-00'
});

$('#cep').mask('00000-000', {
    placeholder: '012345-678'
});

// Configura a validação do formulário usando a biblioteca jQuery Validate
$('form').validate({
    // Define as regras de validação para cada campo do formulário
    rules: {
        nome: {
            // Campo "nome" é obrigatório
            required: true
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true
        },
        endereco: {
            required: true
        },
        cep: {
            required: true
        },
        cpf: {
            required: true
        }
    },
    // Função executada quando o formulário é válido e pronto para ser enviado
    submitHandler: function (form) {
        // Exibe uma mensagem de confirmação ao usuário
        alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
        // Limpa todos os campos do formulário
        form.reset();
    },
    // Função executada quando o formulário é inválido
    invalidHandler: function (form, validator) {
        // Exibe um alerta solicitando o preenchimento correto dos campos
        alert("Por favor, preencha os campos para prosseguir com a compra!");
    }
});