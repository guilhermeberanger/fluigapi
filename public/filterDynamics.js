
function filterTipo() {
	valorSelecionado = $('#tipo').val();

	//quando tiver visualizando o formulário o valor fica no campo text;
	if (!valorSelecionado) {
		valorSelecionado = $('#tipo').text();
	}
	switch (valorSelecionado) {
		case "veicular":
			$('#Auto_Pecas').show();
			$('#combustiveis').hide();
			$('#Implementos_Pecas_Veiculos').show();
			$('#Locacao_Veiculos').show();
			$('#pneus').show();
			$('#Seguro_Veiculos').show();
			$('#Servicos_Veiculos').show();
			$('#veiculos').show();
			$('#Material_Limpeza').hide();
			$('#uniformes').hide();
			$('#epi').hide();
			$('#epc').hide();
			$('#Maquinas_Equipamentos').hide();
			$('#ferramentas').hide();
			$('#Material_Copa_Cozinha').hide();
			$('#Material_Escritorio').hide();
			$('#Material_Obra_Civil_Manutenção').hide();
			$('#Mat_Sinalizacao_Comunicacao').hide();
			$('#Material_Grafico_Institucional').hide();
			$('#Medicamentos_Grupo').hide();
			$('#Locacao_Grupo').hide();
			$('#Brindes_Clientes').hide();
			$('#moveis').hide();
			$('#Seguros_Grupo').hide();
			$('#Servicos_Pessoal').hide();
			$('#Despesas_Viagem').hide();
			$('#Despesas_Gerais').hide();
			$('#Serv_Tecnicos_Especializados').hide();
			$('#Material_Automotivo').show();
			$('#Despesas_Juridicas').hide();
			$('#Reembolso_Grupo').hide();
			$('#jardinagem').hide();

			
			break;

		case "combustiveisTipo":
			$('#Auto_Pecas').hide();
			$('#combustiveis').show();
			$('#Implementos_Pecas_Veiculos').hide();
			$('#Locacao_Veiculos').hide();
			$('#pneus').hide();
			$('#Seguro_Veiculos').hide();
			$('#Servicos_Veiculos').hide();
			$('#veiculos').hide();
			$('#Servicos_Veiculos').hide();
			$('#uniformes').hide();
			$('#epi').hide();
			$('#epc').hide();
			$('#Maquinas_Equipamentos').hide();
			$('#ferramentas').hide();
			$('#Material_Copa_Cozinha').hide();
			$('#Material_Escritorio').hide();
			$('#Material_Obra_Civil_Manutenção').hide();
			$('#Mat_Sinalizacao_Comunicacao').hide();
			$('#Material_Grafico_Institucional').hide();
			$('#Medicamentos_Grupo').hide();
			$('#Locacao_Grupo').hide();
			$('#Brindes_Clientes').hide();
			$('#moveis').hide();
			$('#Seguros_Grupo').hide();
			$('#Servicos_Pessoal').hide();
			$('#Despesas_Viagem').hide();
			$('#Despesas_Gerais').hide();
			$('#Serv_Tecnicos_Especializados').hide();
			$('#Material_Automotivo').hide();
			$('#Despesas_Juridicas').hide();
			$('#Reembolso_Grupo').hide();
			$('#jardinagem').hide();
			$('#Material_Limpeza').hide();

			break;

		case "limpeza":
			$('#Auto_Pecas').hide();
			$('#combustiveis').hide();
			$('#Implementos_Pecas_Veiculos').hide();
			$('#Locacao_Veiculos').hide();
			$('#pneus').hide();
			$('#Seguro_Veiculos').hide();
			$('#Servicos_Veiculos').hide();
			$('#veiculos').hide();
			$('#Servicos_Veiculos').hide();
			$('#uniformes').hide();
			$('#epi').hide();
			$('#epc').hide();
			$('#Maquinas_Equipamentos').hide();
			$('#ferramentas').hide();
			$('#Material_Copa_Cozinha').hide();
			$('#Material_Escritorio').hide();
			$('#Material_Obra_Civil_Manutenção').hide();
			$('#Mat_Sinalizacao_Comunicacao').hide();
			$('#Material_Grafico_Institucional').hide();
			$('#Medicamentos_Grupo').hide();
			$('#Locacao_Grupo').hide();
			$('#Brindes_Clientes').hide();
			$('#moveis').hide();
			$('#Seguros_Grupo').hide();
			$('#Servicos_Pessoal').hide();
			$('#Despesas_Viagem').hide();
			$('#Despesas_Gerais').hide();
			$('#Serv_Tecnicos_Especializados').hide();
			$('#Material_Automotivo').hide();
			$('#Despesas_Juridicas').hide();
			$('#Reembolso_Grupo').hide();
			$('#jardinagem').hide();
			$('#Material_Limpeza').show();

			break;

		case "uniformesEpi":
			$('#Auto_Pecas').hide();
			$('#combustiveis').hide();
			$('#Implementos_Pecas_Veiculos').hide();
			$('#Locacao_Veiculos').hide();
			$('#pneus').hide();
			$('#Seguro_Veiculos').hide();
			$('#Servicos_Veiculos').hide();
			$('#veiculos').hide();
			$('#Servicos_Veiculos').hide();
			$('#uniformes').show();
			$('#epi').show();
			$('#epc').hide();
			$('#Maquinas_Equipamentos').hide();
			$('#ferramentas').hide();
			$('#Material_Copa_Cozinha').hide();
			$('#Material_Escritorio').hide();
			$('#Material_Obra_Civil_Manutenção').hide();
			$('#Mat_Sinalizacao_Comunicacao').hide();
			$('#Material_Grafico_Institucional').hide();
			$('#Medicamentos_Grupo').hide();
			$('#Locacao_Grupo').hide();
			$('#Brindes_Clientes').hide();
			$('#moveis').hide();
			$('#Seguros_Grupo').hide();
			$('#Servicos_Pessoal').hide();
			$('#Despesas_Viagem').hide();
			$('#Despesas_Gerais').hide();
			$('#Serv_Tecnicos_Especializados').hide();
			$('#Material_Automotivo').hide();
			$('#Despesas_Juridicas').hide();
			$('#Reembolso_Grupo').hide();
			$('#jardinagem').hide();
			$('#Material_Limpeza').hide();

			break;

		case "epcs":
			$('#Auto_Pecas').hide();
			$('#combustiveis').hide();
			$('#Implementos_Pecas_Veiculos').hide();
			$('#Locacao_Veiculos').hide();
			$('#pneus').hide();
			$('#Seguro_Veiculos').hide();
			$('#Servicos_Veiculos').hide();
			$('#veiculos').hide();
			$('#Servicos_Veiculos').hide();
			$('#uniformes').hide();
			$('#epi').hide();
			$('#epc').show();
			$('#Maquinas_Equipamentos').hide();
			$('#ferramentas').hide();
			$('#Material_Copa_Cozinha').hide();
			$('#Material_Escritorio').hide();
			$('#Material_Obra_Civil_Manutenção').hide();
			$('#Mat_Sinalizacao_Comunicacao').hide();
			$('#Material_Grafico_Institucional').hide();
			$('#Medicamentos_Grupo').hide();
			$('#Locacao_Grupo').hide();
			$('#Brindes_Clientes').hide();
			$('#moveis').hide();
			$('#Seguros_Grupo').hide();
			$('#Servicos_Pessoal').hide();
			$('#Despesas_Viagem').hide();
			$('#Despesas_Gerais').hide();
			$('#Serv_Tecnicos_Especializados').hide();
			$('#Material_Automotivo').hide();
			$('#Despesas_Juridicas').hide();
			$('#Reembolso_Grupo').hide();
			$('#jardinagem').hide();
			$('#Material_Limpeza').hide();

			break;

		case "maquinasEquipFerramentas":
			$('#Auto_Pecas').hide();
			$('#combustiveis').hide();
			$('#Implementos_Pecas_Veiculos').hide();
			$('#Locacao_Veiculos').hide();
			$('#pneus').hide();
			$('#Seguro_Veiculos').hide();
			$('#Servicos_Veiculos').hide();
			$('#veiculos').hide();
			$('#Servicos_Veiculos').hide();
			$('#uniformes').hide();
			$('#epi').hide();
			$('#epc').hide();
			$('#Maquinas_Equipamentos').show();
			$('#ferramentas').show();
			$('#Material_Copa_Cozinha').hide();
			$('#Material_Escritorio').hide();
			$('#Material_Obra_Civil_Manutenção').hide();
			$('#Mat_Sinalizacao_Comunicacao').hide();
			$('#Material_Grafico_Institucional').hide();
			$('#Medicamentos_Grupo').hide();
			$('#Locacao_Grupo').hide();
			$('#Brindes_Clientes').hide();
			$('#moveis').hide();
			$('#Seguros_Grupo').hide();
			$('#Servicos_Pessoal').hide();
			$('#Despesas_Viagem').hide();
			$('#Despesas_Gerais').hide();
			$('#Serv_Tecnicos_Especializados').hide();
			$('#Material_Automotivo').hide();
			$('#Despesas_Juridicas').hide();
			$('#Reembolso_Grupo').hide();
			$('#jardinagem').hide();
			$('#Material_Limpeza').hide();

			break;

		case "copaCozinha":
			$('#Auto_Pecas').hide();
			$('#combustiveis').hide();
			$('#Implementos_Pecas_Veiculos').hide();
			$('#Locacao_Veiculos').hide();
			$('#pneus').hide();
			$('#Seguro_Veiculos').hide();
			$('#Servicos_Veiculos').hide();
			$('#veiculos').hide();
			$('#Servicos_Veiculos').hide();
			$('#uniformes').hide();
			$('#epi').hide();
			$('#epc').hide();
			$('#Maquinas_Equipamentos').hide();
			$('#ferramentas').hide();
			$('#Material_Copa_Cozinha').show();
			$('#Material_Escritorio').hide();
			$('#Material_Obra_Civil_Manutenção').hide();
			$('#Mat_Sinalizacao_Comunicacao').hide();
			$('#Material_Grafico_Institucional').hide();
			$('#Medicamentos_Grupo').hide();
			$('#Locacao_Grupo').hide();
			$('#Brindes_Clientes').hide();
			$('#moveis').hide();
			$('#Seguros_Grupo').hide();
			$('#Servicos_Pessoal').hide();
			$('#Despesas_Viagem').hide();
			$('#Despesas_Gerais').hide();
			$('#Serv_Tecnicos_Especializados').hide();
			$('#Material_Automotivo').hide();
			$('#Despesas_Juridicas').hide();
			$('#Reembolso_Grupo').hide();
			$('#jardinagem').hide();
			$('#Material_Limpeza').hide();

			break;

		case "matEscritorio":
			$('#Auto_Pecas').hide();
			$('#combustiveis').hide();
			$('#Implementos_Pecas_Veiculos').hide();
			$('#Locacao_Veiculos').hide();
			$('#pneus').hide();
			$('#Seguro_Veiculos').hide();
			$('#Servicos_Veiculos').hide();
			$('#veiculos').hide();
			$('#Servicos_Veiculos').hide();
			$('#uniformes').hide();
			$('#epi').hide();
			$('#epc').hide();
			$('#Maquinas_Equipamentos').hide();
			$('#ferramentas').hide();
			$('#Material_Copa_Cozinha').hide();
			$('#Material_Escritorio').show();
			$('#Material_Obra_Civil_Manutenção').hide();
			$('#Mat_Sinalizacao_Comunicacao').hide();
			$('#Material_Grafico_Institucional').hide();
			$('#Medicamentos_Grupo').hide();
			$('#Locacao_Grupo').hide();
			$('#Brindes_Clientes').hide();
			$('#moveis').show();
			$('#Seguros_Grupo').hide();
			$('#Servicos_Pessoal').hide();
			$('#Despesas_Viagem').hide();
			$('#Despesas_Gerais').hide();
			$('#Serv_Tecnicos_Especializados').hide();
			$('#Material_Automotivo').hide();
			$('#Despesas_Juridicas').hide();
			$('#Reembolso_Grupo').hide();
			$('#jardinagem').hide();
			$('#Material_Limpeza').hide();

			break;

		case "obraCivilManutencao":
			$('#Auto_Pecas').hide();
			$('#combustiveis').hide();
			$('#Implementos_Pecas_Veiculos').hide();
			$('#Locacao_Veiculos').hide();
			$('#pneus').hide();
			$('#Seguro_Veiculos').hide();
			$('#Servicos_Veiculos').hide();
			$('#veiculos').hide();
			$('#Servicos_Veiculos').hide();
			$('#uniformes').hide();
			$('#epi').hide();
			$('#epc').hide();
			$('#Maquinas_Equipamentos').hide();
			$('#ferramentas').hide();
			$('#Material_Copa_Cozinha').hide();
			$('#Material_Escritorio').hide();
			$('#Material_Obra_Civil_Manutenção').show();
			$('#Mat_Sinalizacao_Comunicacao').hide();
			$('#Material_Grafico_Institucional').hide();
			$('#Medicamentos_Grupo').hide();
			$('#Locacao_Grupo').hide();
			$('#Brindes_Clientes').hide();
			$('#moveis').hide();
			$('#Seguros_Grupo').hide();
			$('#Servicos_Pessoal').hide();
			$('#Despesas_Viagem').hide();
			$('#Despesas_Gerais').hide();
			$('#Serv_Tecnicos_Especializados').hide();
			$('#Material_Automotivo').hide();
			$('#Despesas_Juridicas').hide();
			$('#Reembolso_Grupo').hide();
			$('#jardinagem').hide();
			$('#Material_Limpeza').hide();

			break;

		case "comunicacao":
			$('#Auto_Pecas').hide();
			$('#combustiveis').hide();
			$('#Implementos_Pecas_Veiculos').hide();
			$('#Locacao_Veiculos').hide();
			$('#pneus').hide();
			$('#Seguro_Veiculos').hide();
			$('#Servicos_Veiculos').hide();
			$('#veiculos').hide();
			$('#Servicos_Veiculos').hide();
			$('#uniformes').hide();
			$('#epi').hide();
			$('#epc').hide();
			$('#Maquinas_Equipamentos').hide();
			$('#ferramentas').hide();
			$('#Material_Copa_Cozinha').hide();
			$('#Material_Escritorio').hide();
			$('#Material_Obra_Civil_Manutenção').hide();
			$('#Mat_Sinalizacao_Comunicacao').show();
			$('#Material_Grafico_Institucional').show();
			$('#Medicamentos_Grupo').hide();
			$('#Locacao_Grupo').hide();
			$('#Brindes_Clientes').hide();
			$('#moveis').hide();
			$('#Seguros_Grupo').hide();
			$('#Servicos_Pessoal').hide();
			$('#Despesas_Viagem').hide();
			$('#Despesas_Gerais').hide();
			$('#Serv_Tecnicos_Especializados').hide();
			$('#Material_Automotivo').hide();
			$('#Despesas_Juridicas').hide();
			$('#Reembolso_Grupo').hide();
			$('#jardinagem').hide();
			$('#Material_Limpeza').hide();

			break;

		case "medicamentos":
			$('#Auto_Pecas').hide();
			$('#combustiveis').hide();
			$('#Implementos_Pecas_Veiculos').hide();
			$('#Locacao_Veiculos').hide();
			$('#pneus').hide();
			$('#Seguro_Veiculos').hide();
			$('#Servicos_Veiculos').hide();
			$('#veiculos').hide();
			$('#Servicos_Veiculos').hide();
			$('#uniformes').hide();
			$('#epi').hide();
			$('#epc').hide();
			$('#Maquinas_Equipamentos').hide();
			$('#ferramentas').hide();
			$('#Material_Copa_Cozinha').hide();
			$('#Material_Escritorio').hide();
			$('#Material_Obra_Civil_Manutenção').hide();
			$('#Mat_Sinalizacao_Comunicacao').hide();
			$('#Material_Grafico_Institucional').hide();
			$('#Medicamentos_Grupo').show();
			$('#Locacao_Grupo').hide();
			$('#Brindes_Clientes').hide();
			$('#moveis').hide();
			$('#Seguros_Grupo').hide();
			$('#Servicos_Pessoal').hide();
			$('#Despesas_Viagem').hide();
			$('#Despesas_Gerais').hide();
			$('#Serv_Tecnicos_Especializados').hide();
			$('#Material_Automotivo').hide();
			$('#Despesas_Juridicas').hide();
			$('#Reembolso_Grupo').hide();
			$('#jardinagem').hide();
			$('#Material_Limpeza').hide();

			break;


		case "locacao":
			$('#Auto_Pecas').hide();
			$('#combustiveis').hide();
			$('#Implementos_Pecas_Veiculos').hide();
			$('#Locacao_Veiculos').hide();
			$('#pneus').hide();
			$('#Seguro_Veiculos').hide();
			$('#Servicos_Veiculos').hide();
			$('#veiculos').hide();
			$('#Servicos_Veiculos').hide();
			$('#uniformes').hide();
			$('#epi').hide();
			$('#epc').hide();
			$('#Maquinas_Equipamentos').hide();
			$('#ferramentas').hide();
			$('#Material_Copa_Cozinha').hide();
			$('#Material_Escritorio').hide();
			$('#Material_Obra_Civil_Manutenção').hide();
			$('#Mat_Sinalizacao_Comunicacao').hide();
			$('#Material_Grafico_Institucional').hide();
			$('#Medicamentos_Grupo').hide();
			$('#Locacao_Grupo').show();
			$('#Brindes_Clientes').hide();
			$('#moveis').hide();
			$('#Seguros_Grupo').hide();
			$('#Servicos_Pessoal').hide();
			$('#Despesas_Viagem').hide();
			$('#Despesas_Gerais').hide();
			$('#Serv_Tecnicos_Especializados').hide();
			$('#Material_Automotivo').hide();
			$('#Despesas_Juridicas').hide();
			$('#Reembolso_Grupo').hide();
			$('#jardinagem').hide();
			$('#Material_Limpeza').hide();

			break;

		case "brindes":
			$('#Auto_Pecas').hide();
			$('#combustiveis').hide();
			$('#Implementos_Pecas_Veiculos').hide();
			$('#Locacao_Veiculos').hide();
			$('#pneus').hide();
			$('#Seguro_Veiculos').hide();
			$('#Servicos_Veiculos').hide();
			$('#veiculos').hide();
			$('#Servicos_Veiculos').hide();
			$('#uniformes').hide();
			$('#epi').hide();
			$('#epc').hide();
			$('#Maquinas_Equipamentos').hide();
			$('#ferramentas').hide();
			$('#Material_Copa_Cozinha').hide();
			$('#Material_Escritorio').hide();
			$('#Material_Obra_Civil_Manutenção').hide();
			$('#Mat_Sinalizacao_Comunicacao').hide();
			$('#Material_Grafico_Institucional').hide();
			$('#Medicamentos_Grupo').hide();
			$('#Locacao_Grupo').hide();
			$('#Brindes_Clientes').hide();
			$('#moveis').hide();
			$('#Seguros_Grupo').hide();
			$('#Servicos_Pessoal').hide();
			$('#Despesas_Viagem').hide();
			$('#Despesas_Gerais').hide();
			$('#Serv_Tecnicos_Especializados').hide();
			$('#Material_Automotivo').hide();
			$('#Despesas_Juridicas').hide();
			$('#Reembolso_Grupo').hide();
			$('#jardinagem').hide();
			$('#Material_Limpeza').hide();

			break;

		case "brindes":
			$('#Auto_Pecas').hide();
			$('#combustiveis').hide();
			$('#Implementos_Pecas_Veiculos').hide();
			$('#Locacao_Veiculos').hide();
			$('#pneus').hide();
			$('#Seguro_Veiculos').hide();
			$('#Servicos_Veiculos').hide();
			$('#veiculos').hide();
			$('#Servicos_Veiculos').hide();
			$('#uniformes').hide();
			$('#epi').hide();
			$('#epc').hide();
			$('#Maquinas_Equipamentos').hide();
			$('#ferramentas').hide();
			$('#Material_Copa_Cozinha').hide();
			$('#Material_Escritorio').hide();
			$('#Material_Obra_Civil_Manutenção').hide();
			$('#Mat_Sinalizacao_Comunicacao').hide();
			$('#Material_Grafico_Institucional').hide();
			$('#Medicamentos_Grupo').hide();
			$('#Locacao_Grupo').hide();
			$('#Brindes_Clientes').show();
			$('#moveis').hide();
			$('#Seguros_Grupo').hide();
			$('#Servicos_Pessoal').hide();
			$('#Despesas_Viagem').hide();
			$('#Despesas_Gerais').hide();
			$('#Serv_Tecnicos_Especializados').hide();
			$('#Material_Automotivo').hide();
			$('#Despesas_Juridicas').hide();
			$('#Reembolso_Grupo').hide();
			$('#jardinagem').hide();
			$('#Material_Limpeza').hide();

			break;

		case "seguros":
			$('#Auto_Pecas').hide();
			$('#combustiveis').hide();
			$('#Implementos_Pecas_Veiculos').hide();
			$('#Locacao_Veiculos').hide();
			$('#pneus').hide();
			$('#Seguro_Veiculos').hide();
			$('#Servicos_Veiculos').hide();
			$('#veiculos').hide();
			$('#Servicos_Veiculos').hide();
			$('#uniformes').hide();
			$('#epi').hide();
			$('#epc').hide();
			$('#Maquinas_Equipamentos').hide();
			$('#ferramentas').hide();
			$('#Material_Copa_Cozinha').hide();
			$('#Material_Escritorio').hide();
			$('#Material_Obra_Civil_Manutenção').hide();
			$('#Mat_Sinalizacao_Comunicacao').hide();
			$('#Material_Grafico_Institucional').hide();
			$('#Medicamentos_Grupo').hide();
			$('#Locacao_Grupo').hide();
			$('#Brindes_Clientes').hide();
			$('#moveis').hide();
			$('#Seguros_Grupo').show();
			$('#Servicos_Pessoal').hide();
			$('#Despesas_Viagem').hide();
			$('#Despesas_Gerais').hide();
			$('#Serv_Tecnicos_Especializados').hide();
			$('#Material_Automotivo').hide();
			$('#Despesas_Juridicas').hide();
			$('#Reembolso_Grupo').hide();
			$('#jardinagem').hide();
			$('#Material_Limpeza').hide();

			break;

		case "servicos":
			$('#Auto_Pecas').hide();
			$('#combustiveis').hide();
			$('#Implementos_Pecas_Veiculos').hide();
			$('#Locacao_Veiculos').hide();
			$('#pneus').hide();
			$('#Seguro_Veiculos').hide();
			$('#Servicos_Veiculos').hide();
			$('#veiculos').hide();
			$('#Servicos_Veiculos').hide();
			$('#uniformes').hide();
			$('#epi').hide();
			$('#epc').hide();
			$('#Maquinas_Equipamentos').hide();
			$('#ferramentas').hide();
			$('#Material_Copa_Cozinha').hide();
			$('#Material_Escritorio').hide();
			$('#Material_Obra_Civil_Manutenção').hide();
			$('#Mat_Sinalizacao_Comunicacao').hide();
			$('#Material_Grafico_Institucional').hide();
			$('#Medicamentos_Grupo').hide();
			$('#Locacao_Grupo').hide();
			$('#Brindes_Clientes').hide();
			$('#moveis').hide();
			$('#Seguros_Grupo').hide();
			$('#Servicos_Pessoal').show();
			$('#Despesas_Viagem').hide();
			$('#Despesas_Gerais').hide();
			$('#Serv_Tecnicos_Especializados').show();
			$('#Material_Automotivo').hide();
			$('#Despesas_Juridicas').hide();
			$('#Reembolso_Grupo').hide();
			$('#jardinagem').hide();
			$('#Material_Limpeza').hide();

			break;

		case "gerais":
			$('#Auto_Pecas').hide();
			$('#combustiveis').hide();
			$('#Implementos_Pecas_Veiculos').hide();
			$('#Locacao_Veiculos').hide();
			$('#pneus').hide();
			$('#Seguro_Veiculos').hide();
			$('#Servicos_Veiculos').hide();
			$('#veiculos').hide();
			$('#Servicos_Veiculos').hide();
			$('#uniformes').hide();
			$('#epi').hide();
			$('#epc').hide();
			$('#Maquinas_Equipamentos').hide();
			$('#ferramentas').hide();
			$('#Material_Copa_Cozinha').hide();
			$('#Material_Escritorio').hide();
			$('#Material_Obra_Civil_Manutenção').hide();
			$('#Mat_Sinalizacao_Comunicacao').hide();
			$('#Material_Grafico_Institucional').hide();
			$('#Medicamentos_Grupo').hide();
			$('#Locacao_Grupo').hide();
			$('#Brindes_Clientes').hide();
			$('#moveis').hide();
			$('#Seguros_Grupo').hide();
			$('#Servicos_Pessoal').hide();
			$('#Despesas_Viagem').show();
			$('#Despesas_Gerais').show();
			$('#Serv_Tecnicos_Especializados').hide();
			$('#Material_Automotivo').hide();
			$('#Despesas_Juridicas').hide();
			$('#Reembolso_Grupo').hide();
			$('#jardinagem').show();
			$('#Material_Limpeza').hide();

			break;

		case "juridicas":
			$('#Auto_Pecas').hide();
			$('#combustiveis').hide();
			$('#Implementos_Pecas_Veiculos').hide();
			$('#Locacao_Veiculos').hide();
			$('#pneus').hide();
			$('#Seguro_Veiculos').hide();
			$('#Servicos_Veiculos').hide();
			$('#veiculos').hide();
			$('#Servicos_Veiculos').hide();
			$('#uniformes').hide();
			$('#epi').hide();
			$('#epc').hide();
			$('#Maquinas_Equipamentos').hide();
			$('#ferramentas').hide();
			$('#Material_Copa_Cozinha').hide();
			$('#Material_Escritorio').hide();
			$('#Material_Obra_Civil_Manutenção').hide();
			$('#Mat_Sinalizacao_Comunicacao').hide();
			$('#Material_Grafico_Institucional').hide();
			$('#Medicamentos_Grupo').hide();
			$('#Locacao_Grupo').hide();
			$('#Brindes_Clientes').hide();
			$('#moveis').hide();
			$('#Seguros_Grupo').hide();
			$('#Servicos_Pessoal').hide();
			$('#Despesas_Viagem').hide();
			$('#Despesas_Gerais').hide();
			$('#Serv_Tecnicos_Especializados').hide();
			$('#Material_Automotivo').hide();
			$('#Despesas_Juridicas').show();
			$('#Reembolso_Grupo').hide();
			$('#jardinagem').hide();
			$('#Material_Limpeza').hide();

			break;

		case "reembolso":
			$('#Auto_Pecas').hide();
			$('#combustiveis').hide();
			$('#Implementos_Pecas_Veiculos').hide();
			$('#Locacao_Veiculos').hide();
			$('#pneus').hide();
			$('#Seguro_Veiculos').hide();
			$('#Servicos_Veiculos').hide();
			$('#veiculos').hide();
			$('#Servicos_Veiculos').hide();
			$('#uniformes').hide();
			$('#epi').hide();
			$('#epc').hide();
			$('#Maquinas_Equipamentos').hide();
			$('#ferramentas').hide();
			$('#Material_Copa_Cozinha').hide();
			$('#Material_Escritorio').hide();
			$('#Material_Obra_Civil_Manutenção').hide();
			$('#Mat_Sinalizacao_Comunicacao').hide();
			$('#Material_Grafico_Institucional').hide();
			$('#Medicamentos_Grupo').hide();
			$('#Locacao_Grupo').hide();
			$('#Brindes_Clientes').hide();
			$('#moveis').hide();
			$('#Seguros_Grupo').hide();
			$('#Servicos_Pessoal').hide();
			$('#Despesas_Viagem').hide();
			$('#Despesas_Gerais').hide();
			$('#Serv_Tecnicos_Especializados').hide();
			$('#Material_Automotivo').hide();
			$('#Despesas_Juridicas').hide();
			$('#Reembolso_Grupo').show();
			$('#jardinagem').hide();
			$('#Material_Limpeza').hide();

			break;
		default:

	}
}

/*-------------------------------------x-------------------------------------------------------------*/
