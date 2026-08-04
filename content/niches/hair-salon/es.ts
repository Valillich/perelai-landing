import { hairSalonResearch } from "./research"
import type { NichePageContent } from "@/content/niches/types"

export const content: NichePageContent = {
  meta: {
    title: "Perelai para dueños de salones de peluquería",
    description:
      "Controla ingresos, costes registrados y beneficio calculado para cualquier período, con el resultado agrupado por categoría de servicio y cliente.",
    ogImageAlt:
      "Resumen financiero de Perelai para un salón de peluquería, con ingresos, costes y beneficio calculado para un período y desglose por categoría de servicio — datos de ejemplo.",
  },

  hero: {
    eyebrow: "Software financiero para dueños de salones de peluquería",
    h1: "Ve el mes de tu salón sin reconstruirlo a mano.",
    subhead:
      "Controla ingresos, costes registrados y beneficio calculado para cualquier período. Revisa el resultado por categoría de servicio y cliente, mientras los pagos registrados y los saldos abiertos de pedidos o cuotas se mantienen aparte.",
    mock: "colorist-workspace",
  },

  pains: [
    {
      title: "El mes se reconstruye, no se lee",
      body: "Los ingresos están en el sistema de citas, los pagos se reparten entre cuentas y los costes de producto llegan en facturas de proveedor semanas después. El cierre de mes se convierte en una noche reconstruyendo lo que ya ocurrió, de memoria y del resumen del datáfono.",
    },
    {
      title: "Los ingresos solos no muestran lo que costó el mes",
      body: "Una agenda llena puede seguir ocultando costes de producto, alquiler y otros gastos registrados. Los dueños con experiencia preguntan qué incluye ya una cifra antes de confiar en ella. Perelai mantiene ingresos, costes registrados y beneficio calculado visibles como cifras separadas.",
    },
    {
      title: "Las herramientas no cuentan una sola historia",
      body: "Citas, historial de clientes y registros de pago suelen vivir en sistemas distintos que no intercambian datos, así que alguien tiene que mirar dos o tres sitios para responder una pregunta. Perelai mantiene cada evento financiero registrado conectado al cliente y al trabajo detrás.",
    },
  ],

  dayInLife: {
    title: "Registra el día mientras ocurre. Lee el mes cuando lo necesites.",
    body: "Completa visitas, registra pagos, canjea paquetes y añade costes como parte del trabajo del día. Perelai mantiene cada registro conectado al cliente, la categoría de servicio y el período al que pertenece, para que la revisión de fin de mes parta de un registro y no de una reconstrucción.",
    steps: [
      {
        title: "Una cita está completada, aún no liquidada",
        body: "Marcar Corte de Dama como completo registra que el trabajo ocurrió. No afirma que el dinero haya llegado. La visita queda en un estado visible en lugar de contarse en silencio como ingreso.",
      },
      {
        title: "Un pago se registra contra el trabajo que pagó",
        body: "Cuando el cliente liquida, el pago se adjunta a esa visita en lugar de a un total anónimo de fin de día, así la cifra conserva su vínculo con el cliente y la categoría de servicio.",
      },
      {
        title: "Un canje de paquete liquida sin un pago nuevo",
        body: "Un cliente prepago que canjea un Tratamiento liquida la visita y no mueve dinero ese día. Perelai registra el canje, de modo que pagos registrados e ingresos liquidados siguen siendo dos cifras distintas.",
      },
      {
        title: "El período responde",
        body: "Elige un día, semana, mes, trimestre o año y lee ingresos, costes registrados y beneficio calculado, con el desglose por categoría y cliente debajo y cualquier saldo abierto de pedido aparte.",
      },
    ],
  },

  terminology: [
    {
      theirWord: "Corte de Dama, Retoque de Raíz, Balayage / Color Dimensional, Brillo y Matizador, Tratamiento",
      perelaiWord: "Servicios en una Visita",
      why: "La plantilla de salón empieza con estos cinco, editables. Cada cita reservada se convierte en una Visita que lleva cliente, servicio y actividad monetaria juntos.",
    },
    {
      theirWord: "Secado y Peinado o Tratamiento Multiplexor (Plex) añadidos en el sillón",
      perelaiWord: "Complementos",
      why: "El trabajo extra se adjunta a la Visita en la que se realizó, para que el registro coincida con lo ocurrido y no con lo reservado al principio.",
    },
    {
      theirWord: "Trabajo de color frente a trabajo de acabado",
      perelaiWord: "Categoría de servicio",
      why: "Ingresos y costes se agrupan por categoría, así el desglose compara color con acabado. No informa una cifra aparte por cada servicio del menú.",
    },
    {
      theirWord: "Tinte / Oxidante y Desechables",
      perelaiWord: "Gastos vinculados",
      why: "Se registran como costes del período, así aparecen en la misma vista que los ingresos de categoría que apoyaron, en lugar de solo en un extracto del proveedor. Perelai no mide cuánto producto usó una sola fórmula.",
    },
    {
      theirWord: "Un cliente en un curso prepago de citas",
      perelaiWord: "Paquete",
      why: "Los créditos se descuentan al usar Visitas. Un canje liquida la visita y no crea movimiento de caja, por eso el trabajo canjeado y los pagos registrados se muestran como cosas distintas.",
    },
    {
      theirWord: "Un curso de tratamientos pagado a plazos",
      perelaiWord: "Pedido y cuotas",
      why: "Lo que aún se debe permanece ligado a ese pedido, así un importe pendiente tiene un alcance definido y no es una sensación general de que alguien debe algo.",
    },
    {
      theirWord: "Ingresos menos costes registrados del período",
      perelaiWord: "Beneficio",
      why: "La cifra de beneficio de Perelai es ingresos menos los gastos registrados del período seleccionado. Es un número operativo para dirigir el salón, no un resultado contable o fiscal.",
    },
    {
      theirWord: "A qué puede acceder cada miembro del equipo",
      perelaiWord: "Acceso Personal o Supervisor",
      why: "Cada persona se invita con un rol, y el acceso sigue ese rol, para que el equipo trabaje en un solo espacio de trabajo sin que cada cuenta se configure igual.",
    },
  ],

  setup: {
    title: "Empieza desde la lista de servicios de un salón, no desde una página en blanco.",
    body: "La plantilla de salón abre con cinco servicios editables, dos complementos y dos tipos de gastos vinculados, así la primera pantalla ya parece un salón en marcha.",
    steps: [
      {
        title: "Abre el espacio de trabajo del salón",
        body: "Llegar desde esta página pone la plantilla de salón primero en el onboarding. Empiezas con Corte de Dama, Retoque de Raíz, Balayage / Color Dimensional, Brillo y Matizador y Tratamiento, en lugar de nombrar una lista desde cero.",
      },
      {
        title: "Haz tuyos el menú y los costes",
        body: "Ajusta duraciones y precios, mantén Secado y Peinado y Tratamiento Multiplexor (Plex) como complementos si los ofreces, y mantén Tinte / Oxidante y Desechables como los tipos de coste que registras por período.",
      },
      {
        title: "Añade a quienes trabajan en el suelo",
        body: "Invita a miembros del equipo con acceso Personal o Supervisor, y mantén horarios, ausencias y servicios asignados juntos. El acceso sigue el rol con el que se invita a cada persona.",
      },
      {
        title: "Trae lo que ayuda esta semana",
        body: "Importa contactos con vCard, conecta Google Calendar y comparte tu enlace de reserva. Empieza por las próximas semanas en lugar de pausar el salón para una migración.",
      },
    ],
  },

  faq: [
    {
      q: "¿Los servicios del salón ya estarán configurados?",
      a: "Sí. La plantilla de salón empieza con Corte de Dama, Retoque de Raíz, Balayage / Color Dimensional, Brillo y Matizador y Tratamiento, más Secado y Peinado y Tratamiento Multiplexor (Plex) como complementos y Tinte / Oxidante y Desechables como gastos vinculados. Todo es editable.",
    },
    {
      q: "¿Qué tan detallado es el desglose de servicios?",
      a: "Ingresos y costes se agrupan por categoría de servicio, así puedes comparar trabajo de color con acabado en un período seleccionado y ver el historial de ingresos de un cliente en el tiempo. Perelai no calcula la rentabilidad de cada servicio individual del menú.",
    },
    {
      q: "¿Perelai rastrea el color usado en cada fórmula?",
      a: "No. Perelai registra costes por período y categoría de servicio. No pesa color, no calcula uso a nivel de fórmula ni gestiona inventario de backbar. Si necesitas el coste exacto de producto detrás de una sola fórmula, eso es otra clase de herramienta.",
    },
    {
      q: "¿Una cita completada cuenta como dinero recibido?",
      a: "No. Trabajo completado, ingresos liquidados y pagos registrados se siguen por separado. Una cita puede estar terminada y seguir esperando pago, y un paquete prepago puede liquidar una visita sin que ese día se mueva dinero. Mantener los tres aparte es lo que da sentido a la cifra del período.",
    },
    {
      q: "¿Qué incluye la cifra de beneficio?",
      a: "Ingresos del período seleccionado, menos los gastos registrados contra ese período. Es un cálculo para dirigir el salón, no un resultado contable o fiscal, y no sustituye a tu contable.",
    },
    {
      q: "¿Puede mi equipo usar el mismo espacio de trabajo?",
      a: "Sí. Invita a miembros del equipo con acceso Personal o Supervisor. Horarios, ausencias y servicios asignados se quedan en el mismo espacio, con acceso según cada rol.",
    },
  ],

  labels: {
    terminologyTitle: "Palabras de salón, y cómo se llaman en Perelai.",
    inYourChair: "En tu salón",
    inPerelai: "En Perelai",
    whyItMatters: "Por qué importa",
    mocksTitle: "Datos de salón, mostrados en el producto.",
    mocksBody: "Los datos de ejemplo usan los servicios, complementos y gastos vinculados de la plantilla de salón.",
    faqTitle: "Lo que preguntan primero los dueños de salones.",
  },

  whatItIsNot: {
    title: "Claro sobre lo que no es.",
    body: "Perelai sigue el dinero conectado al trabajo que hizo tu salón. No pretende ser el resto de tu back office.",
    items: [
      {
        title: "No es software de contabilidad",
        body: "Registra ingresos, costes y una cifra de beneficio calculado para un período. No hace contabilidad, presentación fiscal ni asesoría financiera, y no sustituye a tu contable.",
      },
      {
        title: "No es nómina ni RR. HH.",
        body: "Puedes invitar a miembros del equipo y mantener horarios, ausencias y servicios asignados juntos. Sueldos, comisiones y hojas de horas no forman parte.",
      },
      {
        title: "No es inventario de backbar",
        body: "Tinte / Oxidante y Desechables se registran como costes de un período. Perelai no pesa producto, no rastrea uso por fórmula ni reordena stock.",
      },
    ],
  },

  cta: {
    title: "Ve el mes sin reconstruirlo.",
    body: "Empieza desde una lista de servicios de salón y mantén trabajo completado, pagos registrados, canjes de paquete y saldos abiertos de pedido como registros separados y legibles.",
    label: "Crear espacio de trabajo",
    microcopy: "Recibirás un correo de verificación para terminar la configuración.",
  },

  research: hairSalonResearch,
}
