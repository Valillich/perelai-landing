import { personalTrainerResearch } from "./research"
import type { NichePageContent } from "@/content/niches/types"

export const content: NichePageContent = {
  meta: {
    title: "Perelai para personal trainers",
    description:
      "Acompanhe faturamento de sessões, custos registrados e lucro calculado para qualquer período, com histórico do cliente e resgates de pacotes legíveis.",
    ogImageAlt:
      "Visão financeira Perelai para um personal trainer, com faturamento de sessões, custos registrados e lucro calculado para um período — dados de exemplo.",
  },

  hero: {
    eyebrow: "Software financeiro para personal trainers",
    h1: "Uma visão clara das finanças do seu treinamento personalizado.",
    subhead:
      "Acompanhe faturamento de sessões, custos registrados e lucro calculado para um dia, semana, mês, trimestre ou ano. Revise o resultado por cliente e categoria de serviço, enquanto sessões concluídas, pagamentos registrados e resgates de pacotes permanecem separados.",
    mock: "lash-workspace",
  },

  pains: [
    {
      title: "Uma agenda cheia não responde à pergunta",
      body: "Sessões de treinamento 1:1, coaching de força e avaliações em sequência preenchem o dia e não dizem nada sobre o mês. Aluguel da academia, deslocamentos até clientes e reposição de equipamentos fitness ficam por trás dos treinos — e nada disso está no calendário.",
    },
    {
      title: "Blocos de pacotes pré-pagos obscurecem o acompanhamento do período",
      body: "Quando um cliente compra um bloco de dez sessões antecipadamente, contar esse pagamento único no primeiro dia faz as semanas de coaching seguintes parecerem não registradas. Registrar resgates de pacote conforme o cliente comparece a cada sessão mantém o trabalho fitness concluído claro.",
    },
    {
      title: "Sessões, pagamentos e despesas vivem em lugares diferentes",
      body: "Compromissos ficam em um app de calendário, pagamentos de clientes em outra ferramenta e despesas da academia em cadernos ou recibos em papel. Revisar o período significa reunir esses registros novamente.",
    },
  ],

  dayInLife: {
    title: "Registre cada sessão. Revise o período quando precisar.",
    body: "Conclua sessões, registre pagamentos, resgate créditos de pacotes e adicione despesas do negócio na administração normal. O Perelai mantém esses registros conectados ao cliente, à categoria de serviço e ao período selecionado.",
    steps: [
      {
        title: "Conclusão da sessão e pagamento permanecem separados",
        body: "Concluir uma Sessão de treinamento 1:1 registra que a sessão aconteceu. Não registra um pagamento. O status do pagamento permanece uma parte separada da mesma Visita.",
      },
      {
        title: "O pagamento permanece conectado à sessão e ao cliente",
        body: "Um pagamento registrado permanece conectado à sessão e ao cliente relevantes, para que o histórico financeiro possa ser rastreado até o trabalho por trás.",
      },
      {
        title: "Créditos de pacote são resgatados contra sessões atendidas",
        body: "Quando um cliente usa um Pacote de treinamento pré-pago, resgatar um crédito é registrado como liquidação sem dinheiro. Sessões entregues e pagamentos registrados permanecem distintos.",
      },
      {
        title: "Ler totais de treinamento do período",
        body: "Avalie faturamento de sessões, custos registrados e lucro calculado para um dia, semana, mês, trimestre ou ano, organizados por cliente e categoria de serviço.",
      },
    ],
  },

  terminology: [
    {
      theirWord: "Sessão de descoberta, Sessão de treinamento 1:1, Pacote de treinamento, Plano de treinamento on-line",
      perelaiWord: "Serviços em uma Visita",
      why: "O modelo de personal trainer oferece quatro serviços iniciais para coaching fitness, condicionamento e programação de treinos. Cada sessão agendada se torna uma Visita com o cliente, o serviço e o registro de pagamento juntos.",
    },
    {
      theirWord: "Plano de refeição/treinamento personalizado",
      perelaiWord: "Complemento em uma Visita",
      why: "Entregue junto a sessões 1:1 ou pacotes de treinamento, um complemento nutricional ou de treino faz parte do registro da visita.",
    },
    {
      theirWord: "Aluguel de sala, deslocamentos a clientes, equipamento",
      perelaiWord: "Despesa registrada",
      why: "Registre taxas de sala, deslocamentos e custos de equipamento para um período. Contribuem para o lucro calculado do período selecionado.",
    },
    {
      theirWord: "Bloco de dez sessões",
      perelaiWord: "Pacote pré-pago",
      why: "Pacotes pré-pagos de clientes ficam como saldos de crédito, resgatados sessão a sessão sem distorcer o faturamento do período.",
    },
  ],

  setup: {
    title: "Comece pela lista de serviços de um personal trainer, não por uma página em branco.",
    body: "O modelo de personal trainer abre com quatro serviços editáveis e um complemento — sua primeira tela já se parece com uma prática fitness em funcionamento.",
    steps: [
      {
        title: "Abra o espaço de trabalho do personal trainer",
        body: "Chegar por esta página coloca o modelo de personal trainer em primeiro no onboarding, pré-carregado com Sessão de descoberta, Sessão de treinamento 1:1, Pacote de treinamento e Plano de treinamento on-line.",
      },
      {
        title: "Ajuste serviços e categorias de custo",
        body: "Defina durações e preços das sessões, mantenha Plano de refeição/treinamento personalizado como complemento se oferecer, e registre despesas relevantes da academia nos períodos selecionados.",
      },
      {
        title: "Registre sessões e revise resultados do período",
        body: "Marque visitas concluídas, registre pagamentos, resgate créditos de pacotes e revise faturamento, despesas registradas e lucro calculado para um dia, semana, mês, trimestre ou ano.",
      },
    ],
  },

  faq: [
    {
      q: "Como são tratados os pacotes de treinamento pré-pagos?",
      a: "Pacotes pré-pagos são registrados como saldos de crédito. Quando um cliente comparece a uma sessão, um crédito é resgatado — trabalho concluído e pagamentos registrados permanecem separados.",
    },
    {
      q: "Posso registrar despesas como aluguel de sala ou deslocamentos?",
      a: "Sim. Você pode registrar despesas relevantes do negócio para um período. Elas entram nos custos registrados e no lucro calculado do período selecionado.",
    },
    {
      q: "Concluir uma sessão também registra um pagamento?",
      a: "Não. Conclusão e status de pagamento são registrados separadamente. Uma sessão concluída pode existir antes de um pagamento ser registrado.",
    },
    {
      q: "Os serviços do modelo são editáveis?",
      a: "Sim. Os serviços do modelo (Sessão de descoberta, Sessão de treinamento 1:1, Pacote de treinamento, Plano de treinamento on-line) e o complemento Plano de refeição/treinamento personalizado são totalmente editáveis.",
    },
  ],

  labels: {
    terminologyTitle: "Termos de treinamento personalizado e conceitos Perelai.",
    inYourChair: "Na sua prática",
    inPerelai: "No Perelai",
    whyItMatters: "Por que importa",
    mocksTitle: "Dados de treinamento personalizado, mostrados no produto.",
    mocksBody: "Os dados de exemplo usam os serviços e o complemento do modelo de personal trainer.",
    faqTitle: "Perguntas frequentes.",
  },

  whatItIsNot: {
    title: "Claro sobre o que não é.",
    body: "O Perelai acompanha sessões de treinamento concluídas, custos registrados e lucro calculado em períodos selecionados. Não é um back office completo de academia.",
    items: [
      {
        title: "Não é software de contabilidade",
        body: "Faturamento, despesas e lucro calculado são acompanhados para um período. O Perelai não faz contabilidade, declarações fiscais nem consultoria financeira — e não substitui seu contador.",
      },
      {
        title: "Não é rastreador fitness nem planejador de treinos",
        body: "Você pode acompanhar serviços, complementos e resgates de pacotes. Programação de treinos, repetições e progresso fitness não fazem parte.",
      },
      {
        title: "Não é um marketplace",
        body: "Seu link de agendamento é seu. O Perelai não aluga o relacionamento com o cliente.",
      },
    ],
  },

  cta: {
    title: "Saiba a que o período chegou.",
    body: "Comece com um menu de serviços de personal trainer para manter sessões concluídas, pagamentos registrados, resgates de pacotes e saldos abertos de pedidos estruturados e legíveis.",
    label: "Criar espaço de trabalho",
    microcopy: "Você receberá um e-mail de confirmação para concluir o cadastro.",
  },

  research: personalTrainerResearch,
}
