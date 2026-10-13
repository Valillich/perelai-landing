import type { NichePageContent } from "@/content/niches/types"

// Illustrative workflow; no customer-research or testimonial claim.
export const content: NichePageContent = {
  "meta": {
    "title": "Perelai para barbeiros",
    "description": "Agende cortes e serviços de barba, mantenha o histórico dos clientes e registre pagamentos em um só espaço.",
    "ogImageAlt": "Perelai para barbeiros"
  },
  "hero": {
    "eyebrow": "Agendamentos para barbeiros",
    "h1": "O corte, o cliente e o pagamento ficam juntos.",
    "subhead": "Agende cortes e serviços de barba, mantenha o histórico dos clientes e registre pagamentos em um só espaço.",
    "mock": "appointment-workspace"
  },
  "pains": [
    {
      "title": "O cuidado com a barba amplia o atendimento",
      "body": "O cliente chegou para renovar o corte e decidiu também alinhar o bigode, diminuir o queixo e limpar as bochechas. A passagem da máquina para a navalha muda o trabalho feito. Acrescente o aparo da barba ao degradê com seu próprio preço. Preferências como contorno arredondado, costeletas finas ou barba curta podem ficar nas notas do cadastro. Assim, o atendimento reflete as escolhas feitas na cadeira, mesmo quando mudaram depois da reserva."
    },
    {
      "title": "O próximo corte precisa de contexto",
      "body": "O cliente habitual pede um degradê baixo, mantendo volume no topo e contorno limpo atrás das orelhas. Antes de pegar a máquina, reveja as preferências anotadas: risca, comprimento preservado, acabamento da nuca e desenho das costeletas. Alguns preferem uma transição suave com tesoura; outros querem marcações mais definidas. Essas escolhas ficam no cadastro para orientar o retorno. Cabelo cacheado, redemoinho ou direção de crescimento podem mudar o acabamento escolhido. Anote o que foi combinado: topo texturizado, franja curta, laterais baixas ou finalização com tesoura. São preferências de penteado que você descreve; o aplicativo não recomenda nem executa uma técnica de corte."
    },
    {
      "title": "Cadeira ocupada não significa pagamento recebido",
      "body": "Concluir a barba com toalha quente registra o trabalho. Anotar o pagamento registra como foi quitado. Um pacote pré-pago válido pode cobrir o serviço sem novo recebimento."
    }
  ],
  "dayInLife": {
    "title": "Do agendamento ao próximo corte",
    "body": "Acompanhe um corte concreto durante seu dia de trabalho.",
    "steps": [
      {
        "title": "Reserve tempo para o degradê",
        "body": "Escolha um degradê clássico ou barba com toalha quente e atribua o barbeiro. Ajuste a duração aos cortes que oferece."
      },
      {
        "title": "Adicione o trabalho na barba",
        "body": "Registre o aparo de barba realizado com seu preço. O adicional fica vinculado ao agendamento."
      },
      {
        "title": "Registre o pagamento ou use um pacote",
        "body": "Anote um pagamento em dinheiro ou cartão, ou use um pacote pré-pago válido. O uso do pacote não gera novo pagamento nem receita."
      },
      {
        "title": "Prepare a próxima visita",
        "body": "Quando o cliente voltar para outro degradê, o corte e a quitação anteriores continuam no histórico. Consulte as notas antes de repetir ou mudar o estilo."
      }
    ]
  },
  "terminology": [
    {
      "theirWord": "Degradê clássico ou barba com toalha quente",
      "perelaiWord": "Serviços",
      "why": "As entradas iniciais do catálogo são editáveis. Cada agendamento registra uma execução específica."
    },
    {
      "theirWord": "Aparo de barba na cadeira",
      "perelaiWord": "Adicionais",
      "why": "O aparo depois do corte complementa o mesmo atendimento. Seu preço fica ao lado do degradê, em vez de virar um recebimento sem contexto."
    },
    {
      "theirWord": "A pessoa na sua cadeira",
      "perelaiWord": "Cliente",
      "why": "Contato, cortes anteriores e notas ajudam na próxima visita. O Perelai não escolhe estilo nem técnica."
    },
    {
      "theirWord": "Um barbeiro trabalhando por conta própria",
      "perelaiWord": "Profissional",
      "why": "O proprietário pode prestar os serviços. O modelo não exige um login de equipe separado."
    }
  ],
  "setup": {
    "title": "Comece pela sua própria cadeira",
    "body": "O menu inicial traz dois serviços, dois extras opcionais e uma categoria de despesas para lâminas e desinfetante. Adapte os nomes à barbearia; materiais continuam sendo custos.",
    "steps": [
      {
        "title": "Escolha o modelo de barbearia",
        "body": "Esta página recomenda o modelo de barbearia durante a configuração."
      },
      {
        "title": "Adapte seu menu",
        "body": "Mantenha os degradês, serviços com toalha e cuidados de barba que realmente oferece. Aparo de barba e máscara facial são opcionais; remova os extras que não usa."
      },
      {
        "title": "Adicione o barbeiro que atende",
        "body": "Se trabalha sozinho, use seu próprio perfil profissional. O acesso da equipe é uma função separada do STUDIO."
      },
      {
        "title": "Inclua os próximos agendamentos",
        "body": "Adicione clientes, importe contatos vCard se desejar e compartilhe seu link de agendamento quando estiver pronto."
      }
    ]
  },
  "faq": [
    {
      "q": "Posso usar como barbeiro independente?",
      "a": "Sim. O proprietário pode prestar os serviços. SOLO inclui um profissional ativo; o acesso adicional da equipe pertence ao STUDIO."
    },
    {
      "q": "Inclui serviços de barba?",
      "a": "O modelo inclui aparo de barba como adicional editável, além de degradê clássico e barba com toalha quente como serviços iniciais."
    },
    {
      "q": "Posso alterar preços e duração?",
      "a": "Sim. Defina preços e tempos para cortes, barba e extras. As notas podem descrever altura do degradê, transições, nuca ou costeletas. O Perelai não impõe técnica nem tabela de preços."
    },
    {
      "q": "Um corte concluído significa que o cliente pagou?",
      "a": "Não. Conclusão e pagamento são separados. Um pacote pré-pago válido também pode cobrir o serviço sem novo dinheiro no atendimento."
    },
    {
      "q": "O Perelai calcula a comissão dos barbeiros?",
      "a": "Não. Cortes e serviços de barba registrados ajudam a revisar a atividade, mas dividir os recebimentos é sua responsabilidade. Salários, comissões e folha de pagamento não são calculados."
    }
  ],
  "labels": {
    "terminologyTitle": "Seu trabalho e seu registro no Perelai",
    "inYourChair": "No seu trabalho",
    "inPerelai": "No Perelai",
    "whyItMatters": "O que significa",
    "mocksTitle": "Exemplo de espaço de trabalho",
    "mocksBody": "Dados fictícios deste modelo.",
    "faqTitle": "Perguntas antes de começar"
  },
  "whatItIsNot": {
    "title": "Registros diários dos seus serviços",
    "body": "Use o Perelai para agendamentos, clientes e registros de pagamentos.",
    "items": [
      {
        "title": "Controle operacional",
        "body": "Receita, despesas e lucro calculado do período dependem dos dados inseridos. Não são relatórios fiscais."
      },
      {
        "title": "Pagamentos de clientes",
        "body": "Registre como o cliente pagou. O processamento de pagamentos com cartão não está incluído."
      }
    ]
  },
  "cta": {
    "title": "Comece com o próximo corte",
    "body": "Configure seu espaço de barbearia e acompanhe um cliente do agendamento ao registro do pagamento.",
    "label": "Criar seu espaço de trabalho",
    "microcopy": "Confirme seu e-mail para continuar a configuração."
  },
  "research": {
    "sources": [],
    "verbatims": []
  }
}
