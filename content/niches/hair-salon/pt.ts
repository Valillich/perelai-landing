import { hairSalonResearch } from "./research"
import type { NichePageContent } from "@/content/niches/types"

export const content: NichePageContent = {
  meta: {
    title: "Perelai para donos de salões de cabeleireiro",
    description:
      "Acompanhe faturamento, custos registrados e lucro calculado para qualquer período, com o resultado agrupado por categoria de serviço e cliente.",
    ogImageAlt:
      "Visão financeira Perelai para um salão de cabeleireiro, com faturamento, custos e lucro calculado para um período e detalhamento por categoria de serviço — dados de exemplo.",
  },

  hero: {
    eyebrow: "Software financeiro para donos de salões de cabeleireiro",
    h1: "Veja o mês do seu salão sem remontá-lo à mão.",
    subhead:
      "Acompanhe faturamento, custos registrados e lucro calculado para qualquer período. Revise o resultado por categoria de serviço e cliente, enquanto pagamentos registrados e saldos abertos de pedidos ou planos ficam separados.",
    mock: "colorist-workspace",
  },

  pains: [
    {
      title: "O mês é reconstruído, não lido",
      body: "O faturamento fica no sistema de agendamento, os pagamentos se espalham pelas contas e os custos de produto chegam em faturas de fornecedor semanas depois. O fechamento vira uma noite remontando o que já aconteceu, de memória e do resumo do terminal.",
    },
    {
      title: "Só o faturamento não mostra o que o mês custou",
      body: "Uma agenda cheia ainda pode esconder custos de produto, aluguel e outras despesas registradas. Donos experientes perguntam o que um número já inclui antes de confiar nele. Perelai mantém faturamento, custos registrados e lucro calculado visíveis como números separados.",
    },
    {
      title: "As ferramentas não contam uma história só",
      body: "Agendamentos, histórico de clientes e registros de pagamento costumam viver em sistemas diferentes que não trocam dados, então alguém precisa checar dois ou três lugares para responder uma pergunta. Perelai mantém cada evento financeiro registrado ligado ao cliente e ao trabalho por trás.",
    },
  ],

  dayInLife: {
    title: "Registre o dia enquanto acontece. Leia o mês quando precisar.",
    body: "Conclua visitas, registre pagamentos, resgate pacotes e adicione custos como parte do trabalho do dia. Perelai mantém cada registro ligado ao cliente, à categoria de serviço e ao período — assim a revisão de fim de mês começa de um registro, não de uma reconstrução.",
    steps: [
      {
        title: "Um atendimento está concluído, ainda não liquidado",
        body: "Marcar Corte de cabelo feminino como concluído registra que o trabalho aconteceu. Não afirma que o dinheiro chegou. A visita fica num estado que você vê, em vez de ser contada em silêncio como faturamento.",
      },
      {
        title: "Um pagamento é registrado contra o trabalho que pagou",
        body: "Quando o cliente liquida, o pagamento se vincula a essa visita, não a um total anônimo do fim do dia — o número mantém a ligação com o cliente e a categoria de serviço.",
      },
      {
        title: "Um resgate de pacote liquida sem novo pagamento",
        body: "Um cliente pré-pago que resgata um Tratamento liquida a visita e não move dinheiro naquele dia. Perelai registra o resgate, então pagamentos registrados e faturamento liquidado continuam sendo dois números distintos.",
      },
      {
        title: "O período responde",
        body: "Escolha um dia, semana, mês, trimestre ou ano e leia faturamento, custos registrados e lucro calculado, com o detalhamento por categoria e cliente abaixo e qualquer saldo aberto de pedido mantido à parte.",
      },
    ],
  },

  terminology: [
    {
      theirWord: "Corte de cabelo feminino, Cor da raiz, Balayage / Cor Dimensional, Brilho e toner, Tratamento",
      perelaiWord: "Serviços numa Visita",
      why: "O modelo de salão começa com esses cinco, editáveis. Cada agendamento vira uma Visita carregando cliente, serviço e atividade financeira juntos.",
    },
    {
      theirWord: "Secar e estilizar ou Tratamento de vínculo adicionados na cadeira",
      perelaiWord: "Complementos",
      why: "O trabalho extra se vincula à Visita em que foi feito, para o registro bater com o que aconteceu, não com o que foi agendado no início.",
    },
    {
      theirWord: "Trabalho de cor comparado com acabamento",
      perelaiWord: "Categoria de serviço",
      why: "Faturamento e custos são agrupados por categoria, então o detalhamento compara cor com acabamento. Não reporta um número separado para cada serviço do cardápio.",
    },
    {
      theirWord: "Produto colorido e Suprimentos descartáveis",
      perelaiWord: "Custos vinculados",
      why: "São registrados como custos do período, aparecendo na mesma visão que o faturamento da categoria que apoiaram, em vez de só no extrato do fornecedor. Perelai não mede quanto produto uma única fórmula usou.",
    },
    {
      theirWord: "Um cliente num curso pré-pago de atendimentos",
      perelaiWord: "Pacote",
      why: "Os créditos baixam conforme as Visitas são usadas. Um resgate liquida a visita e não cria movimento de caixa — por isso trabalho resgatado e pagamentos registrados aparecem como coisas diferentes.",
    },
    {
      theirWord: "Um curso de tratamentos pago em parcelas",
      perelaiWord: "Pedido e planos",
      why: "O que ainda é devido fica ligado a esse pedido, então um valor em aberto tem escopo definido, não uma sensação geral de que alguém deve algo.",
    },
    {
      theirWord: "Faturamento menos custos registrados do período",
      perelaiWord: "Lucro",
      why: "O número de lucro do Perelai é faturamento menos as despesas registradas no período selecionado. É um número operacional para rodar o salão, não um resultado contábil ou fiscal.",
    },
    {
      theirWord: "O que cada membro da equipe pode acessar",
      perelaiWord: "Acesso Equipe ou Supervisor(a)",
      why: "Cada pessoa é convidada com um papel, e o acesso segue esse papel — a equipe trabalha num só espaço de trabalho sem que cada conta seja configurada do mesmo jeito.",
    },
  ],

  setup: {
    title: "Comece pela lista de serviços de um salão, não por uma página em branco.",
    body: "O modelo de salão abre com cinco serviços editáveis, dois complementos e dois tipos de custos vinculados — a primeira tela já parece um salão em funcionamento.",
    steps: [
      {
        title: "Abra o espaço de trabalho do salão",
        body: "Chegar por esta página coloca o modelo de salão primeiro no onboarding. Você começa com Corte de cabelo feminino, Cor da raiz, Balayage / Cor Dimensional, Brilho e toner e Tratamento, em vez de nomear uma lista do zero.",
      },
      {
        title: "Torne o cardápio e os custos seus",
        body: "Ajuste durações e preços, mantenha Secar e estilizar e Tratamento de vínculo como complementos se oferecer, e mantenha Produto colorido e Suprimentos descartáveis como os tipos de custo que registra por período.",
      },
      {
        title: "Adicione quem trabalha no salão",
        body: "Convide membros da equipe com acesso Equipe ou Supervisor(a) e mantenha horários, folgas e serviços atribuídos juntos. O acesso segue o papel com que cada pessoa é convidada.",
      },
      {
        title: "Traga o que ajuda nesta semana",
        body: "Importe contatos com vCard, conecte o Google Calendar e compartilhe seu link de agendamento. Comece pelas próximas semanas em vez de pausar o salão para uma migração.",
      },
    ],
  },

  faq: [
    {
      q: "Os serviços do salão já estarão configurados?",
      a: "Sim. O modelo de salão começa com Corte de cabelo feminino, Cor da raiz, Balayage / Cor Dimensional, Brilho e toner e Tratamento, mais Secar e estilizar e Tratamento de vínculo como complementos e Produto colorido e Suprimentos descartáveis como custos vinculados. Tudo é editável.",
    },
    {
      q: "Quão detalhado é o detalhamento de serviços?",
      a: "Faturamento e custos são agrupados por categoria de serviço — você pode comparar trabalho de cor com acabamento num período selecionado e ver o histórico de faturamento de um cliente ao longo do tempo. Perelai não calcula a rentabilidade de cada serviço individual do cardápio.",
    },
    {
      q: "O Perelai rastreia a cor usada em cada fórmula?",
      a: "Não. Perelai registra custos por período e categoria de serviço. Não pesa cor, não calcula uso por fórmula e não gerencia estoque de backbar. Se você precisa do custo exato de produto de uma única fórmula, isso é outro tipo de ferramenta.",
    },
    {
      q: "Um atendimento concluído conta como dinheiro recebido?",
      a: "Não. Trabalho concluído, faturamento liquidado e pagamentos registrados são acompanhados separadamente. Um atendimento pode estar pronto e ainda aguardar pagamento, e um pacote pré-pago pode liquidar uma visita sem que dinheiro se mova naquele dia. Manter os três apartados é o que dá sentido ao número do período.",
    },
    {
      q: "O que a cifra de lucro inclui?",
      a: "Faturamento do período selecionado, menos as despesas registradas contra esse período. É um cálculo para rodar o salão, não um resultado contábil ou fiscal, e não substitui seu contador.",
    },
    {
      q: "Minha equipe pode usar o mesmo espaço de trabalho?",
      a: "Sim. Convide membros da equipe com acesso Equipe ou Supervisor(a). Horários, folgas e serviços atribuídos ficam no mesmo espaço, com acesso conforme cada papel.",
    },
  ],

  labels: {
    terminologyTitle: "Palavras de salão, e como se chamam no Perelai.",
    inYourChair: "No seu salão",
    inPerelai: "No Perelai",
    whyItMatters: "Por que importa",
    mocksTitle: "Dados de salão, mostrados no produto.",
    mocksBody: "Os dados de exemplo usam os serviços, complementos e custos vinculados do modelo de salão.",
    faqTitle: "O que donos de salão perguntam primeiro.",
  },

  whatItIsNot: {
    title: "Claro sobre o que não é.",
    body: "Perelai acompanha o dinheiro ligado ao trabalho que seu salão fez. Não finge ser o resto do seu back office.",
    items: [
      {
        title: "Não é software de contabilidade",
        body: "Registra faturamento, custos e um lucro calculado para um período. Não faz escrituração, declaração fiscal nem aconselhamento financeiro, e não substitui seu contador.",
      },
      {
        title: "Não é folha de pagamento nem RH",
        body: "Você pode convidar membros da equipe e manter horários, folgas e serviços atribuídos juntos. Salários, comissões e folhas de ponto não fazem parte.",
      },
      {
        title: "Não é estoque de backbar",
        body: "Produto colorido e Suprimentos descartáveis são registrados como custos de um período. Perelai não pesa produto, não rastreia uso por fórmula e não reordena estoque.",
      },
    ],
  },

  cta: {
    title: "Veja o mês sem remontá-lo.",
    body: "Comece por uma lista de serviços de salão e mantenha trabalho concluído, pagamentos registrados, resgates de pacote e saldos abertos de pedido como registros separados e legíveis.",
    label: "Criar espaço de trabalho",
    microcopy: "Você receberá um e-mail de confirmação para concluir o cadastro.",
  },

  research: hairSalonResearch,
}
