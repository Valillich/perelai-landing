import { massageTherapistResearch } from "./research"
import type { NichePageContent } from "@/content/niches/types"

export const content: NichePageContent = {
  meta: {
    title: "Perelai para masajistas",
    description:
      "Ingresos, costes registrados y beneficio calculado para cualquier período, con historial de cliente, paquetes prepago y saldos abiertos aparte.",
    ogImageAlt:
      "Resumen financiero de Perelai para un masajista, con ingresos, costes registrados y beneficio calculado para un período — datos de ejemplo.",
  },

  hero: {
    eyebrow: "Software financiero para masajistas",
    h1: "Una semana llena y una buena semana no son la misma cifra.",
    subhead:
      "Ingresos, los costes que registras contra ellos y lo que queda — por un día, una semana o un año. Junto a lo que ha gastado cada habitual, qué bloques prepago siguen activos y lo que queda sin pagar en un pedido.",
    mock: "lash-workspace",
  },

  pains: [
    {
      title: "Una semana a tope no responde a la pregunta",
      body: "Tres Masajes Descontracturantes seguidos llenan el día y no dicen nada del mes. La cifra que importa está detrás de los aceites que repones, la sala que alquilas o los kilómetros que conduces, y nada de eso está en el calendario que acabas de llenar.",
    },
    {
      title: "Citas aquí, pagos allá, tickets en otro sitio",
      body: "Los profesionales en solitario suelen acabar con una app para citas, otra para cobrar y una tercera para tickets. Cada una funciona. Ninguna responde a una pregunta que necesita las tres, así que tú te conviertes en la integración entre ellas.",
    },
    {
      title: "Solo estás tú, así que la admin no tiene a dónde ir",
      body: "No hay recepción a quien pasárselo. Registrar la semana acaba siendo una noche con una hoja que alguien te montó, o un cuaderno del mayorista, reconstruido a fin de mes porque nada lo recogió mientras ocurría.",
    },
  ],

  dayInLife: {
    title: "Regístralo entre clientes. Míralo cuando quieras.",
    body: "Terminar una sesión, cobrarla, descontar el bloque de seis de alguien, reponer aceites — cada uno es un toque mientras se cambia la camilla. Como se registran donde ocurren, la práctica se puede mirar después sin que nadie se siente a recordarla.",
    steps: [
      {
        title: "Terminado y liquidado son dos cosas distintas",
        body: "Marcar un Masaje de Relajación dice que la hora ocurrió. No dice si te han pagado. Viven como estados separados, para que un martes lleno nunca se convierta en silencio en una cifra que aún no ha llegado.",
      },
      {
        title: "El dinero aterriza en la sesión a la que pertenece",
        body: "El pago va a esa hora con ese cliente, no a un bote indiferenciado del día. Seis meses después el importe sigue apuntando a quién vino y a qué tratamiento.",
      },
      {
        title: "Los bloques de seis salen del bloque, no de la caja",
        body: "Alguien a mitad de un bloque prepago toma una hora de tu tiempo y no entrega nada, y eso es correcto. Descontar un crédito se registra como su propio tipo de evento; por eso entregado y pagado nunca se colapsan en un total engañoso.",
      },
      {
        title: "Elige un tramo de tiempo y léelo",
        body: "Un día, una semana, un mes, un trimestre, un año — como realmente piensas. Obtienes ingresos, los costes que registraste y lo que dejan. Todo lo pendiente en un pedido o cuota se mantiene aparte del dinero ya registrado.",
      },
    ],
  },

  terminology: [
    {
      theirWord: "Masaje Descontracturante, Masaje de Relajación, Masaje Deportivo",
      perelaiWord: "Servicios en una Visita",
      why: "La plantilla de masaje empieza con estos tres, editables. Cada cita reservada se convierte en una Visita que lleva cliente, tratamiento y actividad monetaria juntos.",
    },
    {
      theirWord: "Un Suplemento de Piedras Calientes en la sesión",
      perelaiWord: "Complementos",
      why: "El extra se adjunta a la Visita en la que se realizó, para que el registro coincida con la sesión real y no con la reservada al principio.",
    },
    {
      theirWord: "La factura de Aceites de Masaje que pagaste el jueves pasado",
      perelaiWord: "Gastos vinculados",
      why: "Se registra contra el tramo de tiempo en el que cae, así la reposición aparece junto a las horas que apoyó. Nadie pesa un bote: es una compra que introdujiste, no una medición de lo que usó un cliente.",
    },
    {
      theirWord: "El cliente a tres sesiones de un bloque de seis",
      perelaiWord: "Paquete",
      why: "Los créditos bajan de uno en uno al usarse las horas. Lo que esa persona aún tiene a su favor es una cifra guardada, no una nota al dorso de su tarjeta.",
    },
    {
      theirWord: "Alguien pagando un curso a plazos",
      perelaiWord: "Pedido y cuotas",
      why: "El resto pertenece a ese acuerdo concreto. Cuando algo se describe como pendiente, significa ese importe impagado concreto, no una sensación vaga de dinero flotando.",
    },
    {
      theirWord: "El habitual del jueves por la mañana desde hace nueve años",
      perelaiWord: "Historial de ingresos del cliente",
      why: "Lo que esa persona ha gastado realmente contigo, a lo largo del tiempo junto a las horas que reservó. La fidelidad deja de ser una sensación y pasa a ser una cifra que puedes mirar.",
    },
    {
      theirWord: "Lo que queda una vez restadas las compras del mes",
      perelaiWord: "Beneficio",
      why: "Toma los ingresos del período y resta los gastos que registraste en él. Un número de trabajo para decidir si subir tu tarifa horaria — enfáticamente no una posición fiscal ni el resultado de un contable.",
    },
    {
      theirWord: "Solo tú y una camilla, al menos este año",
      perelaiWord: "Un espacio de trabajo",
      why: "Trabaja a tu aire. Añade personas cuando lo necesites — nada aquí asume un segundo par de manos, y nada de lo anterior se rompe si nunca lo hay.",
    },
  ],

  setup: {
    title: "Una tarde, no un fin de semana.",
    body: "Tres tratamientos, un complemento y un tipo de coste esperan al llegar. Todo lo de abajo es orden opcional.",
    steps: [
      {
        title: "Aterriza en la plantilla de masaje",
        body: "Llegar desde esta página te entrega Masaje Descontracturante, Masaje de Relajación y Masaje Deportivo ya escritos. Nadie mira una pantalla vacía preguntándose cómo llamar a un Swedish de sesenta minutos.",
      },
      {
        title: "Adáptala a tu práctica",
        body: "Duraciones, tarifas, si el Suplemento de Piedras Calientes va como extra, y Aceites de Masaje como sustituto de lo que realmente repones. Renombra, borra, añade — nada está fijo.",
      },
      {
        title: "Trae solo lo que el lunes necesita",
        body: "Números del teléfono vía vCard, Google Calendar conectado si vives en él, y un enlace listo para pegar donde te encuentran. Nueve años de historial pueden venir después, o nunca.",
      },
    ],
  },

  faq: [
    {
      q: "¿Mis tratamientos ya estarán configurados?",
      a: "Sí. La plantilla de masaje empieza con Masaje Descontracturante, Masaje de Relajación y Masaje Deportivo, más Suplemento de Piedras Calientes y Aceites de Masaje como gasto vinculado. Todo es editable, así que un menú con cuatro tratamientos o doce es unos minutos de trabajo.",
    },
    {
      q: "¿Perelai guarda notas clínicas o gestiona facturación de seguros?",
      a: "No, y conviene ser directo. Perelai guarda notas de cliente y de visita para dirigir la práctica. No es un sistema de historial clínico: sin intake ni SOAP, sin planes de tratamiento, sin seguimiento de diagnósticos y sin reclamaciones ni facturación de seguros. Si tu práctica depende de eso, Perelai no es la herramienta adecuada para esa parte.",
    },
    {
      q: "Si mi semana estaba llena, ¿eso es mi ingreso?",
      a: "No necesariamente, y confundir ambas es cómo una semana bonita te decepciona después. Una hora entregada, una hora pagada y una hora descontada de un bloque prepago son aquí tres estados distintos. Se cuentan aparte a propósito, para que la cifra que acabas mirando signifique una cosa concreta.",
    },
    {
      q: "¿Cómo sé dónde está alguien en su bloque de seis?",
      a: "Cada crédito se descuenta al usarse una hora, dejando el resto guardado contra ese cliente en lugar de en una tarjeta en un cajón. Los cursos pagados a plazos se comportan igual: la parte impagada sigue unida a su propio acuerdo en lugar de mezclarse con el dinero que ya has cobrado.",
    },
    {
      q: "¿De dónde sale la cifra de beneficio?",
      a: "Ingresos del tramo de tiempo que elegiste, menos los gastos que registraste en ese mismo tramo. Útil para decidir si una hora está bien tarifada. No es una posición fiscal, no es un resultado que firmaría un contable, y no sustituye tener uno.",
    },
  ],

  labels: {
    terminologyTitle: "Cómo tu vocabulario se mapea al nuestro.",
    inYourChair: "En la camilla",
    inPerelai: "En Perelai",
    whyItMatters: "Por qué importa",
    mocksTitle: "Una práctica como la tuya, mostrada en vivo.",
    mocksBody: "Las cifras de abajo son ilustrativas, construidas a partir de los tres tratamientos, el complemento y el tipo de coste de esta plantilla.",
    faqTitle: "Preguntado antes de registrarse.",
  },

  whatItIsNot: {
    title: "Dónde se detiene.",
    body: "Sigue el dinero unido a las horas que has entregado. Tres cosas que deliberadamente no hace:",
    items: [
      {
        title: "No es un sistema de historial clínico",
        body: "Las notas existen para dirigir la práctica — quién prefiere qué presión, quién vuelve en dos semanas. Sin formularios de intake, charting SOAP, planes de tratamiento, seguimiento de diagnósticos ni reclamaciones de seguros.",
      },
      {
        title: "No es software de contabilidad",
        body: "Obtienes ingresos, costes registrados y lo que dejan en un tramo elegido. Contabilidad, presentación y asesoría financiera son trabajo de otro, y tu contable conserva el suyo.",
      },
      {
        title: "No es un marketplace",
        body: "El enlace de reserva te pertenece. Perelai no alquila la relación con el cliente.",
      },
    ],
  },

  cta: {
    title: "Sabe a cuánto llegó realmente la semana.",
    body: "Empieza desde una lista de servicios de masaje y mantén trabajo completado, pagos registrados, sesiones prepago y saldos abiertos como registros separados y legibles.",
    label: "Crear espacio de trabajo",
    microcopy: "Recibirás un correo de verificación para terminar la configuración.",
  },

  research: massageTherapistResearch,
}
