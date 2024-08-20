//Código Javascript do programa Cálculo do Peso Ideal

//criando uma função calcular peso

function calcularPeso() {
  //Pegando os elementos utilizando o DOM (página HTML)
  const inNome = document.querySelector("#inNome");
  const rbMasculino = document.querySelector("#rbMasculino");
  const rbFeminino = document.querySelector("#rbFeminino");
  const inAltura = document.querySelector("#inAltura");
  const outResposta = document.querySelector("#outResposta");

  //obtém o conteúdo dos campos de edição da página
  let nome = inNome.value;
  let masculino = rbMasculino.checked;
  let feminino = rbFeminino.checked;
  let altura = Number(inAltura.value);

  //Verifica se nome foi preenchido e sexo selecionado
  if (nome == "" || (masculino == false && feminino == false)) {
    alert("Por favor, informe o nome e selecione o sexo...");
    inNome.focus(); //posiciona( joga o foco) no campo de edição inNome
    return;
  }

  //se altura (0) ou NaN: Not-a-Number (um texto for informado, por exemplo)
  if (altura == 0 || isNaN(altura)) {
    alert("Por favor, informe a altura corretamente...");
    inAltura.focus();
    return;
  }

  if (masculino) {
    //O valor 22 representa o IMC desejado ou o valor médio do IMC homens seria peso / (altura * altura)
    //var peso = 22 * Math.pow(altura, 2); //Math.pow eleva ao quadrado
    var peso = 22 * (altura * altura);
  } else {
    //O valor 21 representa o IMC desejado ou o valor médio do IMC  mulheres
    var peso = 21 * Math.pow(altura, 2);
  }

  // apresenta a resposta (altera o conteúdo da linha outResposta)
  outResposta.textContent =
    nome + ": Seu peso ideal é " + peso.toFixed(3) + " kg";
}

//pegando a id btCalcular com a manipulação do DOM
const btCalcular = document.querySelector("#btCalcular");
btCalcular.addEventListener("click", calcularPeso);


//Criando uma função para limpar os campos
function limparCamposPagina() {
  //carrega a página
  location.reload(); /* executando uma chamada ao método location.reload() que recarrega a página atual.*/
  // posiciona (joga o foco) no elemento inNome
  document.querySelector("#inNome").focus();
}

let btLimparCampos = document.querySelector("#limparCampos");
btLimparCampos.addEventListener("click", limparCamposPagina);
