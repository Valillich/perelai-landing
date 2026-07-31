import { independentColoristResearch } from "./research"
import type { NichePageContent } from "@/content/niches/types"

export const content: NichePageContent = {
  meta: {
    title: "Perelai para coloristas independentes",
    description: "Um jeito mais tranquilo de gerenciar seus agendamentos de coloração, solicitações de clientes e fluxo de caixa.",
    ogImageAlt: "Espaço de trabalho do Perelai para uma colorista independente, mostrando visitas de cor, calendário e resumo financeiro",
  },
  hero: {
    eyebrow: "Para coloristas independentes",
    h1: "Quando um agendamento duplo pode arruinar seu dia inteiro.",
    subhead: "Reúna mensagens diretas acumuladas, visitas de coloração e o faturamento de hoje em um espaço de trabalho feito para a sua rotina.",
    mock: "colorist-workspace",
  },
  pains: [
    { title: "Sua caixa de mensagens no Instagram está completamente lotada", body: "Uma solicitação de agendamento não deveria ficar dividindo espaço com uma dúvida sobre fórmula de cor, uma foto e uma remarcação de madrugada." },
    { title: "Dez minutos de atraso parecem estragar o dia todo", body: "Retocagem de raiz, balayage e uma escova de última hora têm durações diferentes. Sua agenda precisa refletir a estrutura real do seu trabalho." },
    { title: "«Ela paga na próxima vez» continua sendo uma pendência", body: "Registre o que foi realmente recebido, veja o que falta receber e acompanhe os custos com produtos de cor e descartáveis." },
  ],
  dayInLife: {
    title: "Mesmo se o dia sair do controle, você sabe exatamente o próximo passo.",
    body: "O Perelai mantém o trabalho de um dia de coloração visível sem exigir que você reconstrua tudo de cabeça à noite.",
    steps: [
      { title: "Consultoria e teste de mecha", body: "Inicie a Visita com o serviço que define o planejamento da cor." },
      { title: "Retoque de raiz ou cor dimensional", body: "Mantenha o trabalho de coloração do dia no calendário com o tempo necessário." },
      { title: "Tratamento reconstrutor e escova", body: "Adicione o trabalho que complementa o atendimento, incluindo os extras escolhidos pela cliente." },
      { title: "Pagamento e acompanhamento", body: "Conclua com o valor recebido, mantendo o saldo pendente e o próximo passo visíveis na Entrada Operacional." },
    ],
  },
  terminology: [
    { theirWord: "Retoque de raiz, balayage ou matrização / gloss", perelaiWord: "Visita", why: "Mantiene unidos o serviço, as anotações da cliente e o histórico de pagamentos." },
    { theirWord: "Tratamento reconstrutor, adicional para cabelo longo ou escova", perelaiWord: "Adicionais", why: "Vincule o trabalho extra à Visita correspondente." },
    { theirWord: "Produtos de cor e materiais descartáveis", perelaiWord: "Despesas vinculadas", why: "Veja os custos ao lado do atendimento em que foram utilizados." },
    { theirWord: "Um pacote pré-pago de manutenções de cor", perelaiWord: "Pacote", why: "O saldo pré-pago é abatido conforme as Visitas são realizadas." },
    { theirWord: "«Paga na próxima»", perelaiWord: "Pedido", why: "Acompanhe os valores a receber sem precisar chamar de fatura." },
    { theirWord: "Avisar a cliente que o pagamento foi recebido", perelaiWord: "Confirmação de pagamento", why: "Envie um comprovante que sua cliente pode abrir por um link." },
    { theirWord: "O que ainda precisa da sua decisão após o último atendimento", perelaiWord: "Item na Entrada Operacional", why: "Fica visível até você resolver, não apenas até você ler." },
  ],
  setup: {
    title: "Comece com os serviços de cor que você já faz.",
    body: "Nada de listas em branco genéricas. O modelo para coloristas começa com serviços editáveis, adicionais e custos vinculados.",
    steps: [
      { title: "Abra o espaço de trabalho para coloristas", body: "Ao chegar por esta página, o modelo para coloristas independentes estará selecionado por padrão na configuração." },
      { title: "Deixe a lista com a sua cara", body: "Comece com Consultoria & Teste de Mecha, Retoque de Raiz, Cor Dimensional / Balayage, Correção de Cor, Matrização & Gloss, e Corte & Escova. Edite o que precisar." },
      { title: "Traga o que é essencial", body: "Importe contatos do celular via vCard, conecte o Google Agenda e compartilhe seu link de agendamento." },
    ],
  },
  faq: [
    { q: "Meus serviços de coloração já vêm cadastrados?", a: "Sim. O modelo para coloristas independentes começa com seis serviços editáveis, incluindo Retoque de Raiz, Cor Dimensional / Balayage, Correção de Cor, Matrização & Gloss, e Corte & Escova. Inclui também Tratamento, Adicional Cabelo Longo e Escova como adicionais." },
    { q: "Os clientes podem parar de agendar por mensagem direta?", a: "Compartilhe seu link de agendamento na bio ou envie no WhatsApp. Os clientes escolhem o serviço, o profissional e o horário. O Perelai não cobra comissão sobre agendamentos." },
    { q: "O que acontece quando alguém não aparece?", a: "O Perelai pode enviar lembretes automáticos por e-mail, in-app e notificações push. O atendimento e o dinheiro são registrados separadamente, assim uma falta não conta como receita." },
    { q: "Consigo ver se um dia de coloração foi realmente lucrativo?", a: "Registre o que foi realmente recebido, vincule produtos e descartáveis ao serviço e veja receitas, custos e pendências sem planilhas." },
    { q: "Preciso migrar tudo em um único fim de semana?", a: "Não. Comece importando contatos do celular via vCard e conecte o Google Agenda se quiser. A lista de serviços pode ser ajustada gradualmente no seu ritmo." },
  ],
  labels: {
    terminologyTitle: "Os termos da sua cadeira têm espaço no Perelai.",
    inYourChair: "Na sua cadeira",
    inPerelai: "No Perelai",
    whyItMatters: "Por que isso importa",
    mocksTitle: "Dados de colorista como aparecem no produto.",
    mocksBody: "Os dados de exemplo utilizam os próprios serviços, adicionais e despesas do modelo para coloristas independentes.",
    faqTitle: "Perguntas que as coloristas fazem antes de mudar.",
  },
  whatItIsNot: {
    title: "Transparência total sobre o que não somos.",
    body: "O Perelai foi feito para gerenciar clientes, agendamentos e o dinheiro do seu trabalho de cor. Não tenta substituir ferramentas especializadas.",
    items: [
      { title: "Não é software de contabilidade", body: "Registra o agendado, o realizado e o pago para dar visibilidade ao fluxo de caixa. Não faz declaração de imposto de renda." },
      { title: "Não é um marketplace", body: "Seu link de agendamento é seu. O Perelai não cobra comissões nem interfere no relacionamento com seus clientes." },
      { title: "Não é um sistema de prontuário médico", body: "Não oferece prontuários clínicos, acompanhamento de diagnósticos ou gestão de pacientes." },
    ],
  },
  cta: {
    title: "Mantenha o dia de coloração sob controle sem precisar reconstruir tudo à noite.",
    body: "Crie um espaço de trabalho que começa com seus serviços de cor e reúne atendimentos, finanças e próximas etapas em um só lugar.",
    label: "Criar espaço de trabalho",
    microcopy: "Sem cartão de crédito. Você receberá um e-mail de confirmação para concluir o cadastro.",
  },
  research: independentColoristResearch,
}
