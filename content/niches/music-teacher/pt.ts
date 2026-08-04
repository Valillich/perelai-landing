import { musicTeacherResearch } from "./research"
import type { NichePageContent } from "@/content/niches/types"

export const content: NichePageContent = {
  meta: {
    title: "Perelai para professores de música",
    description:
      "Acompanhe faturamento de aulas, custos registrados e lucro calculado para qualquer período, com histórico do aluno e resgates de pacotes legíveis.",
    ogImageAlt:
      "Visão financeira Perelai para um professor de música, com faturamento de aulas, custos registrados e lucro calculado para um período — dados de exemplo.",
  },

  hero: {
    eyebrow: "Software financeiro para professores de música",
    h1: "Uma visão clara das finanças do seu ensino particular.",
    subhead:
      "Acompanhe faturamento de aulas, custos registrados e lucro calculado para um dia, semana, mês, trimestre ou ano. Revise o resultado por aluno e categoria de aula, enquanto aulas concluídas, pagamentos registrados e resgates de pacotes permanecem separados.",
    mock: "lash-workspace",
  },

  pains: [
    {
      title: "Horas de ensino escondem despesas do estúdio",
      body: "Uma agenda cheia de aulas de piano, guitarra e leitura à primeira vista mostra atividade de ensino, não o resultado financeiro do período. Afinação de piano, troca de cordas e impressão de partituras existem ao lado das horas de aula — e não estão no calendário do estúdio.",
    },
    {
      title: "Pagamento antecipado do semestre complica a visão semanal",
      body: "Receber a mensalidade completa do semestre na matrícula mascara se as semanas de ensino seguintes geraram novos movimentos de caixa. Registrar resgates de crédito sem dinheiro por cada aula frequentada mantém o ensino instrumental concluído transparente.",
    },
    {
      title: "Aulas, pagamentos e despesas vivem em lugares diferentes",
      body: "Aulas particulares são reservadas no calendário, mensalidades de alunos chegam por transferência, e recibos de partituras e afinação ficam em gavetas. Avaliar as finanças do estúdio significa reunir esses fragmentos.",
    },
  ],

  dayInLife: {
    title: "Registre cada aula. Revise o período quando precisar.",
    body: "Conclua aulas, registre pagamentos, resgate créditos de pacotes e adicione despesas de ensino na administração normal. O Perelai mantém esses registros conectados ao aluno, à categoria de aula e ao período selecionado.",
    steps: [
      {
        title: "Conclusão da aula e status de pagamento são coisas distintas",
        body: "Marcar uma Aula de piano como concluída registra que o ensino aconteceu. A cobrança é registrada separadamente como parte da visita.",
      },
      {
        title: "Pagamentos permanecem conectados à aula e ao aluno",
        body: "Quando um pagamento é registrado, ele se anexa ao aluno e à aula específicos — o histórico financeiro permanece ligado ao ensino prestado.",
      },
      {
        title: "Créditos do bloco semestral aplicam-se a visitas agendadas",
        body: "Descontar um crédito de um bloco de aulas semestral encerra a visita sem movimento de dinheiro. Ensino entregue e registros de pagamento permanecem separados.",
      },
      {
        title: "Ver o resultado financeiro do estúdio",
        body: "Exiba faturamento de aulas, custos registrados e lucro calculado para um dia, semana, mês, trimestre ou ano — por aluno ou categoria de aula.",
      },
    ],
  },

  terminology: [
    {
      theirWord: "Aula de piano, Aula de guitarra",
      perelaiWord: "Serviços em uma Visita",
      why: "O modelo de professor de música inclui dois tipos de aula iniciais para repertório, treino auditivo e escalas. Cada aula agendada se torna uma Visita com o aluno, o tipo de aula e o registro de pagamento juntos.",
    },
    {
      theirWord: "Partituras",
      perelaiWord: "Complemento em uma Visita",
      why: "Livros de partituras ou partituras impressas são registrados como complementos anexados ao registro de visita do aluno.",
    },
    {
      theirWord: "Manutenção de Instrumentos",
      perelaiWord: "Despesa registrada",
      why: "Registre afinação, troca de cordas e outras despesas de ensino como custos do período. Contribuem para o lucro calculado do período selecionado.",
    },
    {
      theirWord: "Bloco de aulas semestral",
      perelaiWord: "Pacote pré-pago",
      why: "Pacotes de aulas pré-pagos ficam como saldos de crédito, resgatados aula a aula sem distorcer o faturamento do período.",
    },
  ],

  setup: {
    title: "Comece pela lista de aulas de um estúdio de música, não por uma página em branco.",
    body: "O modelo de professor de música abre com dois tipos de aula editáveis, um complemento e uma categoria de despesa — sua primeira tela já se parece com um estúdio em funcionamento.",
    steps: [
      {
        title: "Configure seu catálogo de aulas",
        body: "Escolha durações de aulas instrumentais e valores do modelo de professor de música pré-carregado.",
      },
      {
        title: "Agende aulas e adicione itens relevantes",
        body: "Agende aulas recorrentes, conclua visitas e adicione Partituras quando fizerem parte do registro da aula.",
      },
      {
        title: "Acompanhe o desempenho do estúdio por período",
        body: "Revise faturamento do período, custos registrados e lucro calculado para um dia, semana, mês, trimestre ou ano.",
      },
    ],
  },

  faq: [
    {
      q: "Como são tratados os pacotes de aulas semestrais pré-pagos?",
      a: "Pacotes semestrais ficam como créditos. Quando um aluno comparece, um crédito é resgatado — aulas ministradas e pagamento permanecem separados.",
    },
    {
      q: "Posso registrar despesas como afinação de piano ou troca de cordas?",
      a: "Sim. Você pode registrar despesas relevantes de ensino. Elas entram nos custos e no lucro calculado do período selecionado.",
    },
    {
      q: "Concluir uma aula também registra um pagamento?",
      a: "Não. Conclusão e status de pagamento são registrados separadamente. Uma aula concluída pode existir antes de um pagamento ser registrado.",
    },
    {
      q: "As opções de aula do modelo são personalizáveis?",
      a: "Sim. Você pode editar ou expandir os serviços iniciais (Aula de piano, Aula de guitarra), o complemento Partituras e a categoria de despesa Manutenção de Instrumentos.",
    },
  ],

  labels: {
    terminologyTitle: "Termos de ensino musical e conceitos Perelai.",
    inYourChair: "No seu estúdio",
    inPerelai: "No Perelai",
    whyItMatters: "Por que importa",
    mocksTitle: "Dados do estúdio de música, mostrados no produto.",
    mocksBody: "Os dados de exemplo usam os serviços, o complemento e a despesa do modelo de professor de música.",
    faqTitle: "Perguntas frequentes.",
  },

  whatItIsNot: {
    title: "Claro sobre o que não é.",
    body: "O Perelai registra aulas concluídas, despesas de ensino e lucro calculado para um período escolhido. Não atua como seu back office completo de estúdio.",
    items: [
      {
        title: "Não é software de contabilidade",
        body: "Exibe faturamento do período, despesas registradas e lucro calculado. Contabilidade, preparação fiscal e consultoria financeira pertencem ao seu contador.",
      },
      {
        title: "Não é software de partituras ou notação",
        body: "Você pode acompanhar serviços, complementos e resgates de pacotes. Notação musical, composição e gravação de áudio não fazem parte.",
      },
      {
        title: "Não é um marketplace",
        body: "Seu link de agendamento é seu. O Perelai não se interpõe entre você e seus alunos.",
      },
    ],
  },

  cta: {
    title: "Saiba a que o período chegou.",
    body: "Comece com uma lista de aulas do estúdio para gerenciar ensino concluído, pagamentos registrados, resgates de pacotes e saldos abertos de pedidos como registros legíveis.",
    label: "Criar espaço de trabalho",
    microcopy: "Você receberá um e-mail de confirmação para concluir o cadastro.",
  },

  research: musicTeacherResearch,
}
