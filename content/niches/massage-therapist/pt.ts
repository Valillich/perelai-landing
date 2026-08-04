import { massageTherapistResearch } from "./research"
import type { NichePageContent } from "@/content/niches/types"

export const content: NichePageContent = {
  meta: {
    title: "Perelai para massoterapeutas",
    description:
      "Acompanhe faturamento, custos registrados e lucro calculado para qualquer período, com histórico do cliente, pacotes pré-pagos e saldos abertos separados.",
    ogImageAlt:
      "Visão financeira Perelai para um massoterapeuta, com faturamento, custos registrados e lucro calculado para um período — dados de exemplo.",
  },

  hero: {
    eyebrow: "Software financeiro para massoterapeutas",
    h1: "Uma semana cheia e uma boa semana não são o mesmo número.",
    subhead:
      "Faturamento, os custos que você registra contra ele, e o que os dois deixam — por um dia, uma semana ou um ano. Ao lado do que cada cliente regular gastou, quais blocos pré-pagos ainda estão ativos e o que ficou em aberto num pedido.",
    mock: "lash-workspace",
  },

  pains: [
    {
      title: "Uma semana lotada não responde à pergunta",
      body: "Três Massagens Profundas seguidas enchem o dia e não dizem nada sobre o mês. O número que importa está atrás dos óleos que você reabasteceu, da sala que aluga ou dos quilômetros que dirigiu — e nada disso está no calendário que você acabou de preencher.",
    },
    {
      title: "Agendamento aqui, pagamentos ali, recibos em outro lugar",
      body: "Profissionais solo costumam terminar com um app para horários, outro para cobrar e um terceiro para recibos. Cada um funciona. Nenhum responde a uma pergunta que precisa dos três, então você vira a integração entre eles.",
    },
    {
      title: "É só você, então a admin não tem para onde ir",
      body: "Não há recepção para quem passar. Registrar a semana vira uma noite com uma planilha que alguém montou para você, ou um caderno do atacadista, remontado no fim de cada mês porque nada coletou enquanto acontecia.",
    },
  ],

  dayInLife: {
    title: "Registre entre clientes. Olhe quando quiser.",
    body: "Terminar uma sessão, receber por ela, baixar o bloco de seis de alguém, repor óleos — cada um é um toque enquanto a maca é trocada. Como são registrados onde acontecem, a prática pode ser vista depois sem ninguém sentar para lembrar.",
    steps: [
      {
        title: "Concluído e liquidado são duas coisas diferentes",
        body: "Marcar uma Massagem de Relaxamento diz que a hora aconteceu. Não diz se você foi pago. Os dois vivem como estados separados, para que uma terça lotada nunca vire em silêncio um número que ainda não chegou.",
      },
      {
        title: "O dinheiro cai na sessão a que pertence",
        body: "O pagamento vai para aquela hora com aquele cliente, não para um pote indiferenciado do dia. Seis meses depois o valor ainda aponta de quem veio e para qual tratamento.",
      },
      {
        title: "Blocos de seis saem do bloco, não do caixa",
        body: "Alguém no meio de um bloco pré-pago toma uma hora do seu tempo e não entrega nada — e isso é correto. Baixar um crédito é registrado como seu próprio tipo de evento; por isso entregue e pago nunca colapsam num total enganoso.",
      },
      {
        title: "Escolha um trecho de tempo e leia",
        body: "Um dia, uma semana, um mês, um trimestre, um ano — como você realmente pensa. Você vê faturamento, os custos que registrou e o que os dois deixam. Tudo ainda em aberto num pedido ou plano fica separado do dinheiro já registrado.",
      },
    ],
  },

  terminology: [
    {
      theirWord: "Massagem Profunda, Massagem de Relaxamento, Massagem Desportiva",
      perelaiWord: "Serviços numa Visita",
      why: "O modelo de massagem começa com esses três, editáveis. Cada agendamento vira uma Visita carregando cliente, tratamento e atividade financeira juntos.",
    },
    {
      theirWord: "Um Complemento Pedra Quente na sessão",
      perelaiWord: "Complementos",
      why: "O extra se vincula à Visita em que foi feito, para o registro bater com a sessão real, não com a agendada no início.",
    },
    {
      theirWord: "A fatura de Óleos de massagem que você pagou na quinta passada",
      perelaiWord: "Custos vinculados",
      why: "Registrada contra o trecho de tempo em que cai, assim a reposição aparece ao lado das horas que apoiou. Ninguém pesa um frasco: é uma compra que você digitou, não uma medição do que um cliente usou.",
    },
    {
      theirWord: "O cliente na terceira sessão de um bloco de seis",
      perelaiWord: "Pacote",
      why: "Os créditos baixam uma hora de cada vez. O que essa pessoa ainda tem a receber é um número guardado, não um bilhete no verso do cartão.",
    },
    {
      theirWord: "Alguém pagando um curso em parcelas",
      perelaiWord: "Pedido e planos",
      why: "O restante pertence a esse acordo específico. Quando algo é descrito como em aberto, significa aquele valor não pago concreto, não uma sensação vaga de dinheiro flutuando.",
    },
    {
      theirWord: "O cliente fixo da manhã de quinta há nove anos",
      perelaiWord: "Histórico de faturamento do cliente",
      why: "O que essa pessoa realmente gastou com você, ao longo do tempo ao lado das horas que agendou. Fidelidade deixa de ser um sentimento e vira um número que você pode olhar.",
    },
    {
      theirWord: "O que sobra depois das compras do mês",
      perelaiWord: "Lucro",
      why: "Pega o faturamento do período e subtrai as despesas que você registrou nele. Um número de trabalho para decidir se subir a taxa horária — enfaticamente não uma posição fiscal nem o resultado de um contador.",
    },
    {
      theirWord: "Só você e uma maca, pelo menos este ano",
      perelaiWord: "Um espaço de trabalho",
      why: "Trabalhe solo. Adicione pessoas quando precisar — nada aqui assume um segundo par de mãos, e nada do acima quebra se nunca houver um.",
    },
  ],

  setup: {
    title: "Uma noite, não um fim de semana.",
    body: "Três tratamentos, um complemento e um tipo de custo já esperam quando você chega. Tudo abaixo é organização opcional.",
    steps: [
      {
        title: "Pouse no modelo de massagem",
        body: "Chegar por esta página já entrega Massagem Profunda, Massagem de Relaxamento e Massagem Desportiva. Ninguém fica olhando uma tela vazia se perguntando como chamar um Swedish de sessenta minutos.",
      },
      {
        title: "Dobre para a sua prática",
        body: "Durações, taxas, se o Complemento Pedra Quente vai como extra, e Óleos de massagem no lugar do que você realmente repõe. Renomeie, apague, adicione — nada é fixo.",
      },
      {
        title: "Traga só o que a segunda precisa",
        body: "Números do telefone via vCard, Google Calendar conectado se você vive nele, e um link pronto para colar onde as pessoas te encontram. Nove anos de histórico podem vir depois, ou nunca.",
      },
    ],
  },

  faq: [
    {
      q: "Meus tratamentos já estarão configurados?",
      a: "Sim. O modelo de massagem começa com Massagem Profunda, Massagem de Relaxamento e Massagem Desportiva, mais Complemento Pedra Quente e Óleos de massagem como custo vinculado. Tudo é editável, então um cardápio com quatro tratamentos ou doze é alguns minutos de trabalho.",
    },
    {
      q: "O Perelai guarda notas clínicas ou faz faturamento de seguro?",
      a: "Não, e vale ser direto. Perelai guarda notas de cliente e de visita para rodar a prática. Não é um sistema de prontuário: sem intake nem SOAP, sem planos de tratamento, sem acompanhamento de diagnóstico e sem sinistros ou faturamento de seguro. Se sua prática depende disso, Perelai não é a ferramenta certa para essa parte.",
    },
    {
      q: "Se minha semana estava lotada, isso é meu faturamento?",
      a: "Não necessariamente, e misturar os dois é como uma semana bonita te decepciona depois. Uma hora entregue, uma hora paga e uma hora baixada de um bloco pré-pago são aqui três estados diferentes. São contados à parte de propósito, para que o número que você acaba olhando signifique uma coisa específica.",
    },
    {
      q: "Como sei onde alguém está no bloco de seis?",
      a: "Cada crédito baixa quando uma hora é usada, deixando o restante guardado contra aquele cliente em vez de num cartão numa gaveta. Cursos pagos em parcelas se comportam igual: a parte não paga fica ligada ao próprio acordo, em vez de se misturar ao dinheiro que você já recebeu.",
    },
    {
      q: "De onde vem o número de lucro?",
      a: "Faturamento do trecho de tempo que você escolheu, menos as despesas que registrou nesse mesmo trecho. Útil para decidir se uma hora está bem precificada. Não é posição fiscal, não é um resultado que um contador assinaria, e não substitui ter um.",
    },
  ],

  labels: {
    terminologyTitle: "Como o seu vocabulário mapeia no nosso.",
    inYourChair: "Na maca",
    inPerelai: "No Perelai",
    whyItMatters: "Por que importa",
    mocksTitle: "Uma prática como a sua, renderizada ao vivo.",
    mocksBody: "Os números abaixo são ilustrativos, feitos a partir dos três tratamentos, do complemento e do tipo de custo deste modelo.",
    faqTitle: "Perguntado antes de se cadastrar.",
  },

  whatItIsNot: {
    title: "Onde para.",
    body: "Segue o dinheiro ligado às horas que você entregou. Três coisas que deliberadamente não faz:",
    items: [
      {
        title: "Não é um sistema de prontuário",
        body: "Notas existem para rodar a prática — quem prefere qual pressão, quem volta em duas semanas. Sem formulários de intake, charting SOAP, planos de tratamento, acompanhamento de diagnóstico ou sinistros de seguro.",
      },
      {
        title: "Não é software de contabilidade",
        body: "Você recebe faturamento, custos registrados e o que eles deixam num trecho escolhido. Escrituração, declaração e aconselhamento financeiro são trabalho de outra pessoa, e seu contador mantém o dele.",
      },
      {
        title: "Não é um marketplace",
        body: "O link de agendamento é seu. Perelai não aluga o relacionamento com o cliente.",
      },
    ],
  },

  cta: {
    title: "Saiba no que a semana realmente deu.",
    body: "Comece por uma lista de serviços de massagem e mantenha trabalho concluído, pagamentos registrados, sessões pré-pagas e saldos abertos como registros separados e legíveis.",
    label: "Criar espaço de trabalho",
    microcopy: "Você receberá um e-mail de confirmação para concluir o cadastro.",
  },

  research: massageTherapistResearch,
}
