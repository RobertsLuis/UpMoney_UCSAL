
function toggleMenu() {
    var hiddenMenu = document.getElementById("hidden-menu");
    if (hiddenMenu) {
        hiddenMenu.style.display = (hiddenMenu.style.display === 'block') ? 'none' : 'block'
    }
}

function limparFormulario(id) {
    // Selecionar formulário da vez
    let id_form = 'form'+id.toString()
    var formulario = document.getElementById(id_form);

    // Apagar valores nos inputs
    if (formulario) {
        formulario.reset()
        let id_resposta = "resposta-form"+id
        var resposta = document.getElementById(id_resposta)
        if (resposta){
            resposta.style.display = 'none'
        }
    }
    // Caso seja o formulário 1, temos que definir como padrão o radiobt selecionado como o 1º
    if (id == '1') {
        let primeirobt = document.getElementById('metodologia1')
        primeirobt.checked = true
    }
}

function mostrarResultado(id) {
    
    // Selecionar formulário da vez e seus inputs
    let id_form = "form"+id.toString()
    let formulario = document.getElementById(id_form);
    let inputs = formulario.querySelectorAll('input[type="number"]')
    
    // Verificar se todos os campos de input estão preenchidos
    var todosPreenchidos = true
    inputs.forEach(function (input) {
        if (input.value.trim() === '') {
            todosPreenchidos = false
        }
    });

    // Se algum campo estiver vazio, exibir mensagem de erro
    if (!todosPreenchidos) {
        alert('Por favor, preencha todos os campos antes de mostrar o resultado.');
        return;
    }
    // A partir do formulário selecionado, fazer os devidos cálculos e copies de resposta
    switch (id){
        case '1':
            // FORMULÁRIO CONTROLE DE GASTOS

            // Pegar os valores preenchidos e transformar em float
            var salario = parseFloat(document.getElementById('salario').value)
            var radioSelecionado = parseFloat(document.querySelector('input[name="metodologia"]:checked').value)

            if (radioSelecionado == 1){
                // 70-20-10, conversões e normalizações das casas decimais
                let setentaP = (salario * 0.7).toFixed(2)
                let vinteP = (salario * 0.2).toFixed(2)
                let dezP = (salario * 0.1).toFixed(2)

                // Copies randomicas para dinamizar a resposta
                let copies = [
                    "Para otimizar o seu salário de R$" + salario +
                    ", é sugerido que 70% (R$" + (setentaP) + ") seja destinado a despesas essenciais, 20% (R$" + (vinteP) +
                    ") para metas de médio prazo ou lazer, e 10% (R$" + (dezP) + ") seja investido para o futuro.",
                    
                    "Visando uma gestão eficiente do seu salário de R$" + salario +
                    ", é aconselhável destinar 70% (R$" + (setentaP) + ") para as despesas essenciais do dia a dia, 20% (R$" + (vinteP) +
                    ") para investir em metas de curto a médio prazo e 10% (R$" + (dezP) + ") para fortalecer seu planejamento financeiro futuro.",

                    "Com um salário de R$" + salario +
                    ", aconselhamos destinar 70% (R$" + (setentaP) + ") para despesas fixas e essenciais, reservando 20% (R$" + (vinteP) +
                    ") para conquistar metas pessoais ou aproveitar momentos de lazer, e investir 10% (R$" + (dezP) + ") em oportunidades que garantam um futuro financeiramente sólido.",

                    "Ao considerar o seu salário de R$" + salario +
                    ", sugerimos a alocação de 70% (R$" + (setentaP) + ") para despesas essenciais, dedicar 20% (R$" + (vinteP) +
                    ") para investimentos em experiências e lazer, e reservar 10% (R$" + (dezP) + ") para construir um fundo de emergência ou investir no seu desenvolvimento profissional."
                ]

                // Popular a resposta e mostrar na tela
                document.getElementById('resposta-form1').style.display = 'block'
                
                let perfilRecomendado = "<strong>Perfil recomendado: </strong> Ideal para aqueles que já possuem despesas fixas em casa como: filhos, aluguel, contas e dívidas.<br><br>"
                let randomCopy = copies[Math.floor(Math.random()*copies.length)]
                let mensagemFinal =" <br><br>Vale salientar, que caso você se encontre endividado, utilize os 20% para pagar as dívidas, definindo quais são as prioritárias. Porém, mantenha o investimento com 10%. Com os outros 70%, tente enxugar ao máximo os gastos e o que sobrar utilize para lazer e/ou parcelas de bens fúteis.";
                
                document.getElementById('resposta-form1-texto').innerHTML = perfilRecomendado + randomCopy + mensagemFinal

            }else if (radioSelecionado == 2){
                // 50-30-20, conversões e normalizações das casas decimais
                let cinquentaP = (salario * 0.5).toFixed(2)
                let trintaP = (salario * 0.3).toFixed(2)
                let vinteP = (salario * 0.2).toFixed(2)

                // Copies randomicas para dinamizar a resposta
                let copies = [
                    "Considerando o seu salário de R$" + salario +
                    ", sugerimos que você destine 50% (R$" + (cinquentaP) + ") para despesas essenciais, " +
                    "30% (R$" + trintaP + ") para momentos de lazer, e " +
                    "20% (R$" + vinteP + ") para investir e construir seu patrimônio.",
                
                    "Planejando o uso do seu salário de R$" + salario +
                    ", indicamos que 50% (R$" + (cinquentaP) + ") seja alocado para despesas essenciais e " +
                    "30% (R$" + trintaP + ") para momentos de lazer. Aproveite 20% (R$" + vinteP + ") para investir e fortalecer seu futuro financeiro.",
                
                    "Com um salário de R$" + salario +
                    ", recomendamos destinar 50% (R$" + (cinquentaP) + ") para despesas essenciais, " +
                    "30% (R$" + trintaP + ") para momentos de lazer. Invista 20% (R$" + vinteP + ") para crescimento financeiro.",
                
                    "Ao receber seu salário de R$" + salario +
                    ", sugerimos que 50% (R$" + (cinquentaP) + ") seja alocado para despesas essenciais e " +
                    "30% (R$" + trintaP + ") para momentos de lazer. Direcione 20% (R$" + vinteP + ") para investimentos visando seu futuro."
                ]

                // Popular a resposta e mostrar na tela
                document.getElementById('resposta-form1').style.display = 'block'
                
                let perfilRecomendado = "<strong>Perfil recomendado: </strong> Ideal para os financeiramente equilibrados, mas ainda com despesas fixas.<br><br>"
                let randomCopy = copies[Math.floor(Math.random()*copies.length)]
                
                document.getElementById('resposta-form1-texto').innerHTML = perfilRecomendado + randomCopy
            
            }else if(radioSelecionado == 3){
                // 30-30-30-10, conversões e normalizações das casas decimais
                let trintaP = (salario*0.3).toFixed(2)
                let dezP = (salario*0.1).toFixed(2)

                // Copies randomicas para dinamizar a resposta
                let copies = [
                    "Considerando o seu salário de R$" + salario +
                    ", sugerimos que você destine 30% (R$" + (trintaP) + ") para despesas essenciais, mais 30% (R$" + (trintaP) + ") para aproveitar momentos de lazer. Outros 30% (R$" + (trintaP) + ") devem ser investidos para construir seu patrimônio, enquanto 10% (R$" + (dezP) + ") podem ser destinados a doações ou caridade.",

                    "Planejando o uso do seu salário de R$" + salario +
                    ", indicamos que 30% (R$" + (trintaP) + ") seja alocado para despesas essenciais e outros 30% (R$" + (trintaP) + ") para momentos de lazer. Aproveite 30% (R$" + (trintaP) + ") para investir e fortalecer seu futuro financeiro, reservando 10% (R$" + (dezP) + ") para doações ou caridade.",

                    "Com um salário de R$" + salario +
                    ", recomendamos destinar 30% (R$" + (trintaP) + ") para despesas essenciais, reservando outros 30% (R$" + (trintaP) + ") para momentos de lazer. Invista 30% (R$" + (trintaP) + ") para crescimento financeiro, enquanto 10% (R$" + (dezP) + ") podem ser direcionados para doações ou caridade.",

                    "Ao receber seu salário de R$" + salario +
                    ", sugerimos que 30% (R$" + (trintaP) + ") seja alocado para despesas essenciais e mais 30% (R$"+ (trintaP) +") para momentos de lazer. Direcione 30% (R$" + (trintaP) + ") para investimentos visando seu futuro, reservando 10% (R$" + (dezP) + ") para doações ou caridade.",
                ]

                // Popular a resposta e mostrar na tela
                document.getElementById('resposta-form1').style.display = 'block'
                
                let perfilRecomendado = "<strong>Perfil recomendado: </strong> Ideal para aqueles que estão estáveis financeiramente, e não buscam mais adquirir bens de consumo superfulos e sim construir um patrimônio sólido. Para isso, 60% do salário (R$"+parseFloat(trintaP)*2+") deve ser suficiente para pagar contas e momentos de lazer.<br><br>"
                let randomCopy = copies[Math.floor(Math.random()*copies.length)]

                document.getElementById('resposta-form1-texto').innerHTML = perfilRecomendado + randomCopy
            }
            return
        case '2':
            // FORMULÁRIO INVESTIMENTOS

            // Pegar os valores preenchidos e transformar em float
            var valor_inicial = parseFloat(document.getElementById('valor-inicial').value)
            var valor_mensal = parseFloat(document.getElementById('valor-mensal').value)
            var taxa_juros = parseFloat(document.getElementById('taxa-juros').value/100)
            var tempo = parseFloat(document.getElementById('tempo-investimento').value)
    
            var montante = valor_inicial

            // Cálculo do gasto total com o investimento 
            var investimento = valor_inicial + (valor_mensal*tempo*12)
            
            // Cálculo de juros compostos
            for (let i = 1; i < tempo*12; i++) {
                let juros_atual = montante*taxa_juros
                montante += juros_atual + valor_mensal
            }
            
            // Normalização das casas decimais
            investimento = investimento.toFixed(2)
            montante = montante.toFixed(2)
            
            // Copies randomicas para dinamizar a resposta
            let copies = [
                "Ao final do investimento você terá um total de R$" + montante +
                  " sendo que só terá saído do seu bolso R$" + investimento + ". Esse é o poder dos juros compostos.",
                
                "Descubra o poder dos juros compostos! Ao final do período de investimento, seu montante será de R$" + montante +
                  ". Você só terá investido R$" + investimento + ".",
                
                "Veja seu dinheiro crescer! Ao final do investimento, seu montante total será de R$" + montante +
                  ". Você terá investido apenas R$" + investimento + " do seu bolso.",
                
                "Maximize seus ganhos com juros compostos! Seu investimento total seria de R$" + investimento +
                  " e se transformaria em um impressionante montante final de R$" + montante + "."
              ]

            // Popular a resposta e mostrar na tela
            document.getElementById('resposta-form2').style.display = 'block'
            let randomCopy = copies[Math.floor(Math.random()*copies.length)]
            document.getElementById('resposta-form2-texto').textContent = randomCopy
            return
    }

}