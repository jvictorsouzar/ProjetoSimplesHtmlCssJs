document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("orcamentoForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const nome = document.getElementById("nome").value;
        const sobrenome = document.getElementById("sobrenome").value;
        const email = document.getElementById("email").value;
        const servico = document.querySelector("input[name=servico]:checked").value;
        const tipoCarro = document.getElementById("tipo-carro").value;
        const anoModelo = document.getElementById("ano-modelo").value;

    
        const confirmacao = document.createElement("p");
        confirmacao.textContent = `Obrigado, ${nome} ${sobrenome}! Você escolheu o serviço de ${servico} para seu veículo ${tipoCarro}. Ano e modelo do veículo: ${anoModelo}. Seu pedido foi registrado com sucesso.`;

        const divMensagem = document.getElementById("div-mensagem");
        divMensagem.innerHTML = "";
        divMensagem.appendChild(confirmacao);

        
        form.reset();
    });
});

