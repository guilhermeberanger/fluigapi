function selectoutroBanco() {
	if ($('#banco').val() == "Itau") {
		$("#divOutroBanco").hide();
	}
	if ($('#banco').val() == "Bradesco") {
		$("#divOutroBanco").hide();
	}
	if ($('#banco').val() == "Brasil") {
		$("#divOutroBanco").hide();
	}
	if ($('#banco').val() == "Santander") {
		$("#divOutroBanco").hide();
	}
	if ($('#banco').val() == "Caixa") {
		$("#divOutroBanco").hide();
	}
	if ($('#banco').val() == "Safra") {
		$("#divOutroBanco").hide();
	}
	if ($('#banco').val() == "Inter") {
		$("#divOutroBanco").hide();
	}
	if ($('#banco').val() == "Nubank") {
		$("#divOutroBanco").hide();
	}
	if ($('#banco').val() == "Sicoob") {
		$("#divOutroBanco").hide();
	}
	if ($('#banco').val() == "Outro") {
		$("#divOutroBanco").show();
	}
};

function selectDadosBancarios() {

	if ($('#reembolso').val() == "SIM") {
		$("#dadosBancarios").show();
		$("#dadosBancarios").hide();
	}
	if ($('#reembolso').val() == "NÃO") {
		$("#dadosBancarios").hide();
		$("#dadosBancarios").show();
	}
};

