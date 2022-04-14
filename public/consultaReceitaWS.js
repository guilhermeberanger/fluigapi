$(document).ready(function () {

	$("#pessoaJuridica").blur(function () {
		//Capturando o valor do campo 'pessoaJuridica' e retirando os caracateres especiais, atrelando o valor na URL e realizando a consulta<--
		$.getJSON("//publica.cnpj.ws/cnpj/" + $("#pessoaJuridica").val().replace(/\D/g, ''), function (dados) {

			//Capturando os valores separados
			var wsLogradouro = dados.estabelecimento.logradouro;
			var wsNumeroLogradouro = dados.estabelecimento.numero;
			var wsBairro = dados.estabelecimento.bairro;
			var wsCnpj = dados.estabelecimento.situacao_cadastral;
			var nmFantasia = dados.estabelecimento.nome_fantasia;
			if (nmFantasia == null) {

				nmFantasia = dados.razao_social
			}
			//Criando as Strings
			var enderecoCompleto = wsLogradouro + ',' + wsNumeroLogradouro + ' - ' + wsBairro;

			//Atribuindoo os valores finais das Strings
			$("#razaoSocial").val(dados.razao_social);
			$("#bairro").val(dados.estabelecimento.bairro);
			$("#nomeFantasia").val(nmFantasia);
			$("#enderecoCompleto").val(enderecoCompleto);
			$("#cep").val(dados.estabelecimento.cep);
			$("#cidade").val(dados.estabelecimento.cidade.nome);
			$("#estado").val(dados.estabelecimento.estado.sigla);
			$("#inscricaoEstadual").val(dados.estabelecimento.inscricoes_estaduais[0].inscricao_estadual);
			$("#infosCNPJ").val(wsCnpj);
		})

	});
});