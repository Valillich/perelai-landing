import { lashArtistResearch } from "./research"
import type { NichePageContent } from "@/content/niches/types"

export const content: NichePageContent = {
  meta: {
    title: "Perelai para lash artists independentes",
    description: "Mantenha o controle dos seus agendamentos de cílios, atendimento a clientes e receita, mesmo quando o WhatsApp e os atrasos bagunçam seu dia.",
    ogImageAlt: "Espaço de trabalho do Perelai para uma lash artist independente, com visitas de cílios, agenda e resumo financeiro",
  },
  hero: {
    eyebrow: "Para lash artists independentes",
    h1: "Você não pode passar o dia inteiro respondendo mensagens.",
    subhead: "Mantenha suas extensões completas, manutenções e o faturamento real em um só lugar. Um atraso de cliente não vai mais fazer você reconstruir o dia inteiro à noite.",
    mock: "lash-workspace",
  },
  pains: [
    { title: "Um pedido de agendamento não deveria ficar perdido em conversas", body: "Horários vagos, dúvidas sobre sinal, fotos de referência e trocas de horário não devem fazer você procurar mensagens entre uma cliente e outra. Uma conversa cheia de prints não é uma forma segura de começar o dia de trabalho." },
    { title: "Um horário alterado pode desorganizar o resto do dia", body: "Lash Lifting & Tinta não cabem no tempo de uma manutenção, e uma aplicação completa em atraso empurra todos os atendimentos seguintes. Organize a agenda com base no serviço real, não em blocos genéricos de tempo." },
    { title: "Seu tempo, materiais e receita precisam da mesma visão", body: "Anote o que foi recebido, mantenha materiais e cola vinculados ao atendimento e veja o saldo pendente sem montar planilhas em Excel." },
    { title: "O histórico da cliente deve ser fácil de encontrar", body: "Quando uma cliente frequente pede uma manutenção, as Visitas, anotações e pagamentos dela pertencem à ficha dela. Você não precisa rolar conversas antigas para achar um detalhe antes de ela deitar na maca." },
    { title: "A última mensagem não deveria tomar sua noite", body: "Suas clientes ainda podem tirar dúvidas com você. Mas os agendamentos de rotina podem migrar para o seu link próprio, definindo um limite claro entre o último atendimento e seu tempo livre." },
  ],
  dayInLife: {
    title: "Mesmo que a agenda mude, você sabe exatamente o que exige atenção.",
    body: "O Perelai mantém visível a estrutura do seu dia de cílios depois que a última cliente vai embora: do design de sobrancelhas de manhã ao faturamento após a última manutenção.",
    steps: [
      { title: "Design de sobrancelhas com início claro", body: "Cadastre Design de Sobrancelhas, Tintura e Brow Lamination como serviços próprios com o tempo real necessário no dia." },
      { title: "Lifting com o tempo que realmente precisa", body: "Mantenha Lash Lifting & Tinta bem visíveis na agenda antes que atendimentos mais rápidos encavalem seus horários." },
      { title: "Aplicação completa no lugar certo", body: "Adicione Extensão de Cílios como uma Visita com os detalhes da cliente e o tempo correto, em vez de guardar tudo no WhatsApp." },
      { title: "Manutenção sempre conectada", body: "Mantenha a Manutenção de Cílios na agenda junto com o resto do dia, sem precisar procurar detalhes na última mensagem." },
      { title: "O próximo agendamento é uma escolha consciente", body: "Consulte sua disponibilidade real quando pedirem horários. Um link direto de agendamento permite que a cliente escolha o serviço, profissional e horário." },
      { title: "Sua tabela de serviços continua reconhecível", body: "Mantenha os nomes conhecidos pelas suas clientes em uma lista de serviços totalmente editável." },
      { title: "O trabalho com cílios tem seu próprio ritmo", body: "Higienização, isolamento, acoplagem, escolha de curvatura e retenção exigem cuidados e tempos diferentes para cada serviço." },
      { title: "Uma cliente fiel não é apenas um horário vago", body: "A conversa sobre uma manutenção começa com o histórico de visitas, notas e pagamentos da cliente no mesmo lugar." },
      { title: "Os materiais são contabilizados", body: "Vincule Materiais & Cola ao serviço realizado, em vez de guardar comprovantes em um canto da bancada." },
      { title: "Dinheiro e pendências continuam visíveis", body: "Registre quanto foi recebido, vincule os materiais e deixe a próxima decisão salva na Entrada Operacional." },
      { title: "O comprovante de pagamento tem uma conclusão clara", body: "Após registrar o pagamento recebido, uma Confirmação de Pagamento pode ser enviada por um link prático." },
      { title: "Amanhã começa com uma lista real", body: "Uma dúvida não respondida ou um saldo pendente ficam na Entrada Operacional como uma tarefa até serem resolvidos." },
    ],
  },
  terminology: [
    { theirWord: "Design de sobrancelhas, Tintura ou Brow Lamination", perelaiWord: "Visita", why: "Agrupa o serviço, notas da cliente e histórico de pagamentos." },
    { theirWord: "Lash Lifting & Tinta, Extensão ou Manutenção", perelaiWord: "Visita", why: "Dá a cada tipo de procedimento de cílios seu próprio espaço na agenda." },
    { theirWord: "Foi adicionado um combo de Tintura Cílios & Sobrancelhas", perelaiWord: "Adicionais", why: "Soma o trabalho extra diretamente à Visita correspondente." },
    { theirWord: "Materiais & Cola para o dia", perelaiWord: "Despesas vinculadas", why: "Mostra esses custos ao lado do procedimento em que foram utilizados." },
    { theirWord: "Um pacote pré-pago de manutenções de cílios", perelaiWord: "Pacote", why: "O saldo diminui à medida que as Visitas são realizadas." },
    { theirWord: "Uma cliente que vai pagar o restante depois", perelaiWord: "Pedido", why: "Acompanhe saldos pendentes sem precisar chamar de fatura." },
    { theirWord: "Dúvidas sobre regras ou acompanhamento pós-procedimento", perelaiWord: "Item na Entrada Operacional", why: "Permanece visível até você resolver, sem se perder entre mensagens novas." },
  ],
  setup: {
    title: "Comece com o trabalho de cílios que você já faz.",
    body: "Nada de formulários genéricos em branco. O modelo para lash artists começa com serviços editáveis, um adicional de tintura e custos de materiais vinculados.",
    steps: [
      { title: "Abra o espaço de trabalho para lash artists", body: "Ao acessar por esta página, o modelo para lash artists independentes virá selecionado por padrão na configuração." },
      { title: "Deixe sua lista de serviços com a sua cara", body: "Comece com Design de Sobrancelhas, Tintura de Sobrancelhas, Brow Lamination, Lash Lifting & Tinta, Extensão de Cílios e Manutenção de Cílios. Altere tempos e preços conforme necessário." },
      { title: "Traga o que é mais importante", body: "Importe contatos do celular via vCard, conecte o Google Agenda e compartilhe seu link de agendamento." },
    ],
  },
  faq: [
    { q: "Meus serviços de cílios já virão prontos?", a: "Sim. O modelo para lash artists começa com seis serviços editáveis (Design, Tintura, Brow Lamination, Lash Lifting & Tinta, Extensão e Manutenção) além de materiais e adicionais vinculados." },
    { q: "Os clientes podem agendar sem mandar mensagem?", a: "Compartilhe um link de agendamento na bio ou no WhatsApp. As clientes escolhem o serviço, profissional e horário." },
    { q: "O que acontece se uma cliente atrasar ou faltar?", a: "O Perelai pode enviar lembretes automáticos por e-mail, in-app e push. O atendimento e a receita são separados, então um atendimento cancelado não conta como dinheiro recebido." },
    { q: "Consigo ver quanto a semana realmente rendeu?", a: "Registre os recebimentos reais, vincule materiais e cola ao serviço feito e veja receitas, custos e pendências sem usar planilhas." },
    { q: "Preciso migrar tudo em um único fim de semana?", a: "Não. Comece importando contatos do celular via vCard e conecte o Google Agenda se desejar. A lista de serviços pode ser personalizada aos poucos no seu tempo." },
  ],
  labels: {
    terminologyTitle: "Os termos da sua sala de atendimento têm espaço no Perelai.",
    inYourChair: "Na sua maca",
    inPerelai: "No Perelai",
    whyItMatters: "Por que isso importa",
    mocksTitle: "Dados de uma lash artist como aparecem no aplicativo.",
    mocksBody: "Os exemplos usam os serviços, adicionais e despesas do modelo para lash artists.",
    faqTitle: "Perguntas frequentes de lash artists antes de mudar.",
  },
  whatItIsNot: {
    title: "Transparência total sobre o que não somos.",
    body: "O Perelai foi feito para gerenciar clientes, agendamentos e finanças do seu trabalho com cílios. Não substitui softwares ultra-especializados.",
    items: [
      { title: "Não é software de contabilidade", body: "Acompanha o que foi agendado, realizado e pago para dar clareza ao fluxo de caixa. Não faz balanço nem declaração de impostos." },
      { title: "Não é um marketplace", body: "Seu link é seu." },
      { title: "Não é um sistema de prontuário médico", body: "Não gerencia prontuários clínicos, diagnósticos nem fichas médicas." },
    ],
  },
  cta: {
    title: "Mantenha o seu dia de cílios organizado mesmo após a última cliente ir embora.",
    body: "Crie um espaço de trabalho que começa pelos seus serviços e reúne visitas, recebimentos e pendências no mesmo lugar.",
    label: "Criar espaço de trabalho",
    microcopy: "Você receberá um e-mail de confirmação para concluir o cadastro.",
  },
  research: lashArtistResearch,
}
