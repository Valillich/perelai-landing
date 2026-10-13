import type { NichePageContent } from "@/content/niches/types"

// Illustrative workflow; no customer-research or testimonial claim.
export const content: NichePageContent = {
  "meta": {
    "title": "Perelai para profissionais de unhas",
    "description": "Agende manicure e pedicure cosméticas, adicione esmaltação ou decoração e mantenha os clientes e pagamentos juntos.",
    "ogImageAlt": "Perelai para profissionais de unhas"
  },
  "hero": {
    "eyebrow": "Agendamentos para profissionais de unhas",
    "h1": "Manicure, decoração e pagamento sempre à vista.",
    "subhead": "Agende manicure e pedicure cosméticas, adicione esmaltação ou decoração e mantenha os clientes e pagamentos juntos.",
    "mock": "appointment-workspace"
  },
  "pains": [
    {
      "title": "A remoção também ocupa tempo no agendamento",
      "body": "A cliente volta com a cor da visita anterior. Antes da nova esmaltação, confira se a remoção do esmalte em gel foi incluída. Remoção e manicure mantêm seus próprios itens e preços."
    },
    {
      "title": "A decoração muda o trabalho realizado",
      "body": "Uma esmaltação lisa vira um desenho detalhado. Acrescente a decoração à manicure com o preço combinado, sem deixar a escolha apenas na conversa."
    },
    {
      "title": "Uma cliente habitual traz mais que um horário",
      "body": "Consulte manicures anteriores e preferências de cores ou desenhos antes da nova aplicação. Ao terminar, registre a conclusão e a forma de quitação separadamente."
    }
  ],
  "dayInLife": {
    "title": "Um atendimento, da remoção ao acabamento",
    "body": "Registre os serviços que a cliente realmente recebeu.",
    "steps": [
      {
        "title": "Escolha os serviços do horário",
        "body": "Reserve tempo para manicure clássica, pedicure clássica, esmalte em gel ou sua remoção. Você define a duração de cada serviço; o modelo não impõe o tempo da sessão."
      },
      {
        "title": "Adicione a decoração solicitada",
        "body": "Use o adicional de decoração quando ele for realizado. O trabalho extra e seu preço ficam ligados ao agendamento."
      },
      {
        "title": "Conclua o serviço e registre o pagamento",
        "body": "Marque a conclusão, depois registre o pagamento ou use um pacote pré-pago válido. O uso do pacote não gera novo dinheiro."
      },
      {
        "title": "Prepare o retorno",
        "body": "Mantenha o próximo agendamento e o histórico de serviços juntos no cadastro da cliente."
      }
    ]
  },
  "terminology": [
    {
      "theirWord": "Manicure, pedicure e esmaltação",
      "perelaiWord": "Serviços",
      "why": "São entradas editáveis da oferta, agendadas para uma pessoa e horário específicos."
    },
    {
      "theirWord": "Decoração de unhas",
      "perelaiWord": "Adicionais",
      "why": "O desenho pertence ao atendimento que complementa."
    },
    {
      "theirWord": "Uma cliente que retorna",
      "perelaiWord": "Cliente",
      "why": "O cadastro guarda contato e agendamentos anteriores."
    },
    {
      "theirWord": "Uma série pré-paga de serviços elegíveis",
      "perelaiWord": "Pacotes",
      "why": "A série pode cobrir manicures ou pedicures elegíveis. Descontar seu saldo quita aquela sessão sem cobrar a série novamente."
    }
  ],
  "setup": {
    "title": "Monte seu próprio menu de unhas",
    "body": "Quatro serviços iniciais distinguem manicure, pedicure, esmaltação e remoção. Há dois extras opcionais e uma categoria de despesas para esmaltes e ferramentas. É cuidado cosmético, não um prontuário clínico.",
    "steps": [
      {
        "title": "Abra o modelo de unhas",
        "body": "A página recomenda um modelo que também atende profissionais independentes."
      },
      {
        "title": "Defina duração e preços",
        "body": "Adapte manicure e pedicure aos seus cuidados cosméticos habituais. Diferencie esmaltação e remoção e use o adicional para decoração. Esta página não promete podologia nem tratamento clínico."
      },
      {
        "title": "Adicione seu perfil profissional",
        "body": "Um proprietário pode prestar os serviços. O perfil profissional exigido não obriga a criar um login de equipe separado."
      },
      {
        "title": "Comece pela próxima cliente",
        "body": "Adicione uma cliente e agende o serviço. A importação de contatos vCard é opcional."
      }
    ]
  },
  "faq": [
    {
      "q": "Posso usar trabalhando por conta própria?",
      "a": "Sim. O proprietário pode ser o profissional. SOLO permite um profissional ativo sem acesso adicional da equipe."
    },
    {
      "q": "Posso incluir a remoção do esmalte?",
      "a": "Sim. A remoção de esmalte em gel é um serviço inicial que você pode manter, editar ou remover do menu."
    },
    {
      "q": "Onde registro uma decoração?",
      "a": "Uma francesinha ou uma unha de destaque pode entrar como decoração. Nomeie o adicional conforme sua oferta e registre o preço junto à manicure. O atendimento refletirá esmaltação e desenho."
    },
    {
      "q": "Serve para podologia ou registros de tratamento?",
      "a": "Esta página cobre manicure, pedicure e esmaltações cosméticas comuns. Atividade médica e prontuários clínicos ficam fora do MVP."
    },
    {
      "q": "O uso de um pacote conta como outro pagamento na visita?",
      "a": "Não. Vender uma série pré-paga e usar uma manicure são eventos distintos. A venda é registrada uma vez; o uso reduz o saldo sem novo pagamento nem receita."
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
    "title": "Acompanhe sua próxima manicure por completo",
    "body": "Comece pelo menu de serviços, agende uma cliente e conecte o trabalho ao registro do pagamento.",
    "label": "Criar seu espaço de trabalho",
    "microcopy": "Confirme seu e-mail para continuar a configuração."
  },
  "research": {
    "sources": [],
    "verbatims": []
  }
}
