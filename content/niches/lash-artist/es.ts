import { lashArtistResearch } from "./research"
import type { NichePageContent } from "@/content/niches/types"

export const content: NichePageContent = {
  meta: {
    title: "Perelai para lash artists independientes",
    description: "Mantén bajo control tus reservas de pestañas, el trabajo con clientes y tu dinero, incluso cuando los DMs y un cliente impuntual alteren tu día.",
    ogImageAlt: "Espacio de trabajo de Perelai para un lash artist independiente, mostrando visitas de pestañas, un calendario y una visión de las finanzas",
  },
  hero: {
    eyebrow: "Para lash artists independientes",
    h1: "No puedes estar todo el día contestando DMs.",
    subhead: "Mantén las extensiones, los rellenos y el dinero que ingresas en un solo espacio, para que un cliente impuntual no te obligue a reconstruir el día entero por la noche.",
    mock: "lash-workspace",
  },
  pains: [
    { title: "Una solicitud de reserva no debería vivir en un hilo de DMs", body: "Disponibilidad, dudas sobre una señal, una foto de referencia y un cambio de horario no deberían hacerte rebuscar mensajes entre clientes. Un chat lleno de capturas de pantalla no es un lugar fiable para empezar el día, especialmente si ya estás preparando las pestañas y los materiales del primer cliente." },
    { title: "Un bloque alterado puede cambiar todo el día", body: "Un Lifting de Pestañas no se puede meter con calzador en el tiempo de un Relleno, y un Set Nuevo que llega tarde altera todo lo que va detrás. Necesitas un calendario que refleje el servicio real que haces, no un hueco genérico." },
    { title: "Tu tiempo, materiales y dinero necesitan la misma visión", body: "Anota lo que has cobrado, mantén los Materiales y Pegamento ligados a la cita, y mira lo que falta por cobrar sin reconstruir la semana en Excel. Un martes saturado no debe dejarte adivinando cuánto te llevaste de verdad o si una tanda de rellenos cubrió los gastos fijos." },
    { title: "El historial de un cliente debe ser fácil de encontrar", body: "Cuando una clienta habitual te pide cita para relleno, sus Visitas, notas y pagos pertenecen a ella. No deberías tener que hacer scroll en mensajes viejos para buscar el último detalle justo antes de que la clienta se acueste en la camilla. El historial es útil si está a mano antes de que empiece la charla." },
    { title: "El último mensaje no debería secuestrar tu noche", body: "Tus clientes te pueden seguir haciendo preguntas. Pero las reservas de rutina pueden ir a tu propio enlace, dejándote una frontera clara entre el último cliente y tu tiempo libre. Tu enlace de reserva se ocupa de la elección de servicio, persona y hora." },
  ],
  dayInLife: {
    title: "Cuando la agenda se mueve, sabes dónde centrarte.",
    body: "Perelai mantiene visible la estructura de tu día después de que el último cliente se haya ido, desde unas cejas por la mañana hasta lo cobrado tras el último relleno. El objetivo no es hacer el oficio genérico, sino dar a tus servicios, al historial de clientes, costes de material y tareas pendientes un lugar fiable fuera de tu bandeja de DMs. Aislamiento, bandejas de pestañas, pinzas, parches, mapping, diámetro, curvatura, abanicos, humedad, retención y pegamento son trabajo real alrededor de un set, no detalles que un hueco vacío deba aplanar.",
    steps: [
      { title: "Las cejas tienen un inicio claro", body: "Pon Diseño de Cejas, Tinte y Laminado en tu día como servicios independientes, con su tiempo real en lugar de un marcador vacío. El calendario diferencia el retoque de unas cejas de un servicio de pestañas más largo." },
      { title: "Un lifting tiene su propio tiempo", body: "Mantén el Lifting y Tinte a la vista en el calendario antes de que el trabajo rápido se te acumule. Cuando alguien pide cita, ves la forma de tu día antes de contestar, en lugar de prometer un hueco en el que en realidad necesitabas preparar tu cabina." },
      { title: "Un Set Nuevo encuentra su sitio", body: "Añade Extensiones de Pestañas como una Visita con los detalles del cliente y el tiempo necesario, en lugar de guardarlo todo en la cabeza o en mensajes. La Visita unifica el servicio, las notas y el dinero." },
      { title: "El relleno se queda conectado", body: "Mantén el Relleno de Pestañas en el calendario con el resto del día. Así puedes prepararte para un cliente habitual sin tener que reconstruir su historia de memoria ni adivinar si el hueco que apartaste se movió o si confirmaron." },
      { title: "La próxima reserva es una elección consciente", body: "Muestra el tiempo que de verdad tienes libre cuando te pregunten. Un enlace directo de reserva deja que los clientes elijan el servicio, la persona y la hora, sin transformar cada espacio en una conversación infinita por Instagram." },
      { title: "Tu menú de servicios sigue siendo tuyo", body: "Conserva los nombres que conocen tus clientes, desde Laminado de Cejas hasta Extensiones, en una lista de servicios que puedes editar. Si tu menú cambia, puedes ajustar la lista de base." },
      { title: "El trabajo con pestañas tiene su ritmo", body: "Limpieza, aislamiento, colocación, elección de curvas y retención son parte de tu oficio. El tiempo, concentración y preparación que exige un Diseño de Cejas, un Lifting o unas Extensiones no son iguales." },
      { title: "Un cliente recurrente no es un hueco vacío", body: "La conversación sobre un relleno arranca con el historial del cliente, las notas y sus pagos, en lugar de un DM nuevo donde debes acordarte de cada detalle. Tienes una mejor posición para decidir qué necesita ese próximo servicio." },
      { title: "Los suministros cuentan", body: "Asocia Materiales y Pegamento al trabajo que realizaste, en lugar de tenerlos en un montón aparte con recibos y compras memorizadas. El coste pasa a ser parte de la visión financiera de ese trabajo." },
      { title: "El dinero y lo pendiente siguen visibles", body: "Registra lo que cobraste, asocia los Materiales, y deja la próxima decisión en la Bandeja Operativa en lugar de arrastrarla a mañana. El final del día tiene una lista clara que revisar, no un montón de notificaciones que desaparecen al leerlas." },
      { title: "El pago tiene un cierre claro", body: "Al registrar el cobro de unas cejas, un lifting, un set nuevo o un relleno, puedes mandar una Confirmación de pago que el cliente abrirá mediante un enlace. El trabajo completado y el dinero ingresado van separados." },
      { title: "El día de mañana empieza con una lista real", body: "Una pregunta por responder, un pago pendiente o una tarea tras una Visita se quedan en tu Bandeja Operativa. Leer un aviso no lo elimina: cuando mires mañana, sabrás de un vistazo qué te falta sin adivinar." },
    ],
  },
  terminology: [
    { theirWord: "Un Diseño de Cejas, Tinte o Laminado", perelaiWord: "Visita", why: "Mantiene juntos el servicio, las notas del cliente y los pagos, incluso si las cejas se cuelan entre servicios largos de pestañas." },
    { theirWord: "Lifting y Tinte, Extensiones o Relleno", perelaiWord: "Visita", why: "Cada tipo de trabajo tiene su espacio en el calendario, sin encajar todas las reservas a la fuerza." },
    { theirWord: "Se añadió un Tinte de Cejas y Pestañas", perelaiWord: "Complementos", why: "Suma ese trabajo adicional a la Visita donde corresponde, reflejando lo que pasó en la camilla y no en un cuaderno." },
    { theirWord: "Materiales y Pegamento para el día", perelaiWord: "Gastos asociados", why: "Visualiza ese coste junto al trabajo, en lugar de intentar acordarte de todo tras una semana saturada." },
    { theirWord: "Un bono prepagado de rellenos futuros", perelaiWord: "Paquete", why: "El saldo baja cuando se gastan las Visitas, así no es un recuento mental o una nota perdida en el chat del cliente." },
    { theirWord: "Un cliente que pagará el resto más tarde", perelaiWord: "Pedido", why: "Sigue los saldos pendientes sin llamarlos 'factura' y mantén su seguimiento a la vista." },
    { theirWord: "Dudas de políticas o recordatorios pos-cita", perelaiWord: "Elemento de la Bandeja Operativa", why: "Se queda hasta que lo solucionas. No se pierde por un aluvión de nuevas reservas o cambios en Instagram." },
  ],
  setup: {
    title: "Empieza con el trabajo que ya realizas.",
    body: "No partes de cero con una lista genérica. La plantilla de Lash Artist arranca con servicios personalizables, un complemento de tinte y costes de materiales asociados, para que refleje tu día.",
    steps: [
      { title: "Abre el espacio de Lash Artist", body: "Llegar desde esta página hace que la plantilla para lash artists independientes salga primero. Tu inicio reflejará los servicios que los clientes ven en tu enlace, en lugar de un inicio genérico pensado para macro-salones." },
      { title: "Adapta el menú a ti", body: "Empieza con Diseño de Cejas, Tinte, Laminado, Lifting y Tinte, Extensiones y Relleno de Pestañas. Cambia las duraciones, pon lo que tú ofreces o quita lo que no. La lista sigue siendo tuya." },
      { title: "Tráete lo fundamental", body: "Importa los contactos de tu teléfono vía vCard, vincula Google Calendar y después comparte tu enlace. Así empezarás a usar la info útil hoy mismo, sin tener que pausar tus citas para una gran migración." },
    ],
  },
  faq: [
    { q: "¿Estarán mis servicios de pestañas ya ahí?", a: "Sí. La plantilla incluye seis servicios editables (Diseño, Tinte, Laminado, Lifting, Extensiones y Relleno) y también el Tinte Combinado y los Materiales, para que no tengas que picarlo todo a mano." },
    { q: "¿Podrán reservar sin pasar por mis DMs?", a: "Comparte tu enlace de reserva en tu bio o en un mensaje. Ellos escogen servicio, persona y hora. Alguien que busca un Tinte de Cejas lo ve claro, y quien busca un Relleno no tiene que esperar a que le pases horarios por texto." },
    { q: "¿Qué pasa si un cliente llega tarde o no aparece?", a: "Perelai envía avisos automáticos por correo, en la app y por push. Como separa el trabajo hecho del dinero ingresado, una Visita a la que no se presentan no cuenta como si lo hubieras cobrado. La decisión pendiente se queda ahí hasta que veas qué hacer con esa reserva." },
    { q: "¿Puedo ver lo que ingresé esta semana en realidad?", a: "Apunta lo cobrado, vincula tus Materiales al trabajo que toque, y mira tus ingresos, costes y lo que falta por pagar sin usar Excel. Te da un punto de partida mejor que andar mirando atrás sumando rellenos y materiales en los chats." },
    { q: "¿Tengo que mudar todo en un mismo fin de semana?", a: "No. Empieza subiendo contactos con vCard y enganchando tu Google Calendar si quieres. La lista de servicios se puede ir editando. Arranca con las reservas próximas y luego vas trayendo más, sin dejar de atender lo que paga las facturas." },
  ],
  labels: {
    terminologyTitle: "Las palabras de tu cabina tienen hueco en Perelai.",
    inYourChair: "En tu cabina",
    inPerelai: "En Perelai",
    whyItMatters: "Por qué importa",
    mocksTitle: "Datos de una Lash Artist, tal como se ven en la app.",
    mocksBody: "Estos ejemplos usan los servicios, complementos y gastos propios de la plantilla de Lash Artist.",
    faqTitle: "Dudas habituales antes de cambiar.",
  },
  whatItIsNot: {
    title: "Lo que Perelai no es.",
    body: "Perelai está pensado para los clientes, las reservas y el dinero de tu trabajo con pestañas. No es una herramienta contable compleja.",
    items: [
      { title: "No es software de contabilidad", body: "Apuntamos lo reservado, hecho y pagado para tu visión de caja. No hace declaración de la Renta." },
      { title: "No es un marketplace", body: "Tu enlace es tuyo." },
      { title: "No es un sistema médico", body: "No llevamos historiales clínicos, ni diagnósticos ni gestión de pacientes oftalmológicos." },
    ],
  },
  cta: {
    title: "Mantén a la vista tu día de pestañas incluso tras el último cliente.",
    body: "Crea un espacio de trabajo que empieza por tus servicios y unifica visitas, pagos y decisiones en el mismo sitio.",
    label: "Crear espacio de trabajo",
    microcopy: "Te llegará un correo para rematar el alta.",
  },
  research: lashArtistResearch,
}
