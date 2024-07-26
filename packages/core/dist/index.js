"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  AgendaUtils: () => AgendaUtils,
  DataUtils: () => DataUtils,
  ObterHorariosOcupados: () => ObterHorariosOcupados,
  TEMPO_SLOT: () => TEMPO_SLOT,
  TelefoneUtils: () => TelefoneUtils,
  clientes: () => clientes_default,
  profissionais: () => profissionais_default,
  servicos: () => servicos_default
});
module.exports = __toCommonJS(src_exports);

// src/constants/clientes.ts
var clientes = [
  {
    id: 1,
    imagemURL: "/clientes/cliente-1.jpg",
    nome: "Ricardo Soundbar",
    testemunho: 'Chega falando alto e ocupando espa\xE7o com seu tamanho de viking, mas que tem um cora\xE7\xE3o do tamanho de seu topete! Um verdadeiro gigante gente boa, ele sempre diz: "Os caras aqui s\xE3o brutais no corte e na amizade! Servi\xE7o top, recomendo de olhos fechados!"'
  },
  {
    id: 2,
    imagemURL: "/clientes/cliente-2.jpg",
    nome: 'Tiaguinho - "O Atacante"',
    testemunho: 'Fan\xE1tico por futebol! Ele sempre chega animado, pronto para bater um papo e discutir o \xFAltimo jogo. Tiaguinho sempre diz: "Cortar cabelo aqui \xE9 muito legal, mas eu prefiro fazer gol!"'
  },
  {
    id: 3,
    imagemURL: "/clientes/cliente-3.jpg",
    nome: "Patr\xEDcia",
    testemunho: 'Nossa cliente com o cabelo mais vermelho do bairro e uma paix\xE3o por doramas que n\xE3o tem fim! Patr\xEDcia diz: "Aqui \xE9 meu lugar favorito! Saio com o cabelo perfeito e ainda compartilho todos os dramas dos doramas. Servi\xE7o top demais!"'
  },
  {
    id: 4,
    imagemURL: "/clientes/cliente-4.jpg",
    nome: "Sr. Carlos",
    testemunho: 'Nosso cliente mais velho e cheio de hist\xF3rias incr\xEDveis que nunca se repetem! Ele anima a barbearia com suas aventuras e sabedoria. Sr. Carlos diz: "A Barba Brutal \xE9 raiz, me lembra a barbearia que eu ia quando era moleque. Servi\xE7o excelente e hist\xF3rias boas garantidas"'
  }
];
var clientes_default = clientes;

// src/constants/profissionais.ts
var profissionais = [
  {
    id: 1,
    nome: "Marc\xE3o Machadada",
    descricao: "Salve, salve, galera! Sou o Marc\xE3o Machadada, o \xFAnico cabeleireiro que pode transformar uma juba de le\xE3o em um corte digno de um rei com um \xFAnico movimento de tesoura.",
    imagemUrl: "/profissionais/profissional-1.jpg",
    avaliacao: 5,
    quantidadeAvaliacoes: 87
  },
  {
    id: 2,
    nome: "Beto Brutal",
    descricao: "Quando o assunto \xE9 barba, ningu\xE9m faz melhor que Beto Brutal! Suas l\xE2minas afiadas s\xE3o lend\xE1rias e seu estilo \xE9 inconfund\xEDvel. Para um visual marcante e robusto, ele \xE9 o seu homem!",
    imagemUrl: "/profissionais/profissional-2.jpg",
    avaliacao: 4.5,
    quantidadeAvaliacoes: 39
  },
  {
    id: 3,
    nome: "Kathya Tesourada",
    descricao: "Kathya n\xE3o tem medo de tesourar! Com precis\xE3o e ousadia, ela transforma qualquer cabelo em uma obra-prima r\xFAstica. Seu lema? Corte raiz sem perder a feminilidade!",
    imagemUrl: "/profissionais/profissional-3.jpg",
    avaliacao: 5,
    quantidadeAvaliacoes: 91
  },
  {
    id: 4,
    nome: "S\xE9rgio Serrador",
    descricao: "S\xE9rgio \xE9 conhecido por sua t\xE9cnica impec\xE1vel e estilo \xFAnico. Com sua serra (ou melhor, tesoura) em m\xE3os, ele cria visuais que impressionam. Barba bem-feita \xE9 com ele mesmo!",
    imagemUrl: "/profissionais/profissional-4.jpg",
    avaliacao: 4.5,
    quantidadeAvaliacoes: 29
  },
  {
    id: 5,
    nome: "Rafa Raspa Tudo",
    descricao: "Para aqueles que preferem um look mais rente, Rafa \xE9 o especialista! Sua m\xE1quina raspa tudo com precis\xE3o, deixando um acabamento perfeito. Raspar \xE9 a sua arte!",
    imagemUrl: "/profissionais/profissional-5.jpg",
    avaliacao: 4.5,
    quantidadeAvaliacoes: 44
  },
  {
    id: 6,
    nome: "Fernanda Fa\xEDsca",
    descricao: "Fernanda traz um toque de brilho e energia a cada corte. Com suas l\xE2minas \xE1geis, ela faz milagres em qualquer tipo de cabelo. Precisa de um look cheio de fa\xEDsca? \xC9 com ela mesmo!",
    imagemUrl: "/profissionais/profissional-6.jpg",
    avaliacao: 5,
    quantidadeAvaliacoes: 46
  }
];
var profissionais_default = profissionais;

// src/constants/servicos.ts
var servicos = [
  {
    id: 1,
    nome: "Corte Viking",
    descricao: "Venha receber um corte de Viking, com l\xE2mina na pele e estilo de guerreiro. Saia pronto para enfrentar qualquer batalha com um visual que imp\xF5e respeito.",
    preco: 55,
    qtdeSlots: 3,
    imagemURL: "/servicos/corte-de-cabelo.jpg"
  },
  {
    id: 2,
    nome: "Barba de Lenhador",
    descricao: "Venha dar um trato na sua barba de lenhador, com aparo preciso e estilo de macho raiz. Saia com uma barba que imp\xF5e respeito e faz tremer at\xE9 as \xE1rvores.",
    preco: 45,
    qtdeSlots: 2,
    imagemURL: "/servicos/corte-de-barba.jpg"
  },
  {
    id: 3,
    nome: "Garras Brutais",
    descricao: "Venha transformar suas patas de urso em garras de lobo. Nosso servi\xE7o de Manicure & Pedicure para homens \xE9 t\xE3o bruto quanto voc\xEA, mas com um toque de classe.",
    preco: 40,
    qtdeSlots: 2,
    imagemURL: "/servicos/manicure-pedicure.jpg"
  },
  {
    id: 4,
    nome: "Combo Alpha",
    descricao: 'Nosso combo "Alpha" inclui um corte de cabelo de Viking, uma barba de lenhador e manicure & pedicure de gladiador. Saia pronto para enfrentar qualquer batalha com estilo e unhas afiadas.',
    preco: 95,
    qtdeSlots: 2,
    imagemURL: "/servicos/combo.jpg"
  },
  {
    id: 5,
    nome: "Pequeno Ca\xE7ador",
    descricao: "Transforme seu pequeno aventureiro em um mini ca\xE7ador, com um corte cheio de atitude e estilo. Cabelo afiado como uma guitarra e maneiro como uma Harley.",
    preco: 60,
    qtdeSlots: 2,
    imagemURL: "/servicos/corte-infantil.jpg"
  },
  {
    id: 6,
    nome: "Noivo Raiz",
    descricao: "Prepare-se para o grande dia com um tratamento digno de um verdadeiro guerreiro da estrada. Corte de cabelo afiado, barba de lenhador e manicure de motoqueiro, tudo enquanto voc\xEA relaxa ao som de rock pesado.",
    preco: 189,
    qtdeSlots: 2,
    imagemURL: "/servicos/dia-de-noivo.jpg"
  }
];
var servicos_default = servicos;

// src/constants/index.ts
var TEMPO_SLOT = 15;

// src/agendamento/ObterHorariosOcupados.ts
var ObterHorariosOcupados = class {
  constructor(repo) {
    this.repo = repo;
  }
  async executar(profissionalId, data) {
    const agendamentos = await this.repo.buscarPorProfissionalEData(profissionalId, data);
    const dados = agendamentos.map((agendamento) => {
      return {
        data: agendamento.data,
        slots: agendamento.servicos.reduce((total, s) => total + s.qtdeSlots, 0)
      };
    }).reduce((horariosOcupados, dados2) => {
      const horario = dados2.data;
      const slots = dados2.slots;
      const horarios = Array.from(
        { length: slots },
        (_, i) => this.somarMinutos(horario, i * TEMPO_SLOT)
      );
      return [...horariosOcupados, ...horarios];
    }, []).map((d) => d.toTimeString().slice(0, 5));
    return dados;
  }
  somarMinutos(data, minutos) {
    return new Date(data.getTime() + minutos * 6e4);
  }
};

// src/utils/AgendaUtils.ts
var AgendaUtils = class {
  static horariosDoDia() {
    return {
      manha: this.gerarHorarios([8, 9, 10, 11]),
      tarde: this.gerarHorarios([14, 15, 16, 17]),
      noite: this.gerarHorarios([18, 19, 20, 21])
    };
  }
  static gerarHorarios(horas) {
    return horas.reduce((horarios, hora) => {
      const todos = this.minutos.map((minuto) => {
        return `${String(hora).padStart(2, "0")}:${String(minuto).padStart(2, "0")}`;
      });
      return horarios.concat(todos);
    }, []);
  }
};
AgendaUtils.minutos = [0, 15, 30, 45];

// src/utils/DataUtils.ts
var DataUtils = class {
  static hoje() {
    const hoje = /* @__PURE__ */ new Date();
    hoje.setHours(0, 0, 0, 0);
    return hoje;
  }
  // new Date(), '09:45'
  static aplicarHorario(data, horario) {
    const novaData = new Date(data);
    const partes = horario.split(":");
    novaData.setHours(parseInt(partes[0]), parseInt(partes[1]));
    return novaData;
  }
};

// src/utils/TelefoneUtils.ts
var TelefoneUtils = class {
  static formatar(telefone) {
    if (!telefone) return "";
    const numeros = this.desformatar(telefone);
    return numeros.length <= 10 ? this.substituirNumeros(numeros, "(xx) xxxx-xxxx") : this.substituirNumeros(numeros, "(xx) xxxxx-xxxx");
  }
  static desformatar(telefone) {
    if (!telefone) return "";
    return telefone.replace(/\D/g, "").slice(0, 11);
  }
  static substituirNumeros(telefone, ref) {
    let formatado = telefone.split("").reduce((telefone2, numero) => {
      return telefone2.replace("x", numero);
    }, ref).replace(/x/g, "");
    if (telefone.length <= 2) formatado = formatado.replace(")", "").replace(" ", "");
    if (telefone.length <= 6) formatado = formatado.replace("-", "");
    return formatado;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AgendaUtils,
  DataUtils,
  ObterHorariosOcupados,
  TEMPO_SLOT,
  TelefoneUtils,
  clientes,
  profissionais,
  servicos
});
