import { musicTeacherResearch } from "./research"
import type { NichePageContent } from "@/content/niches/types"

export const content: NichePageContent = {
  meta: {
    title: "Perelai para profesores de música",
    description:
      "Controla ingresos de clases, costes registrados y beneficio calculado para cualquier período, con historial del alumno y canjes de paquetes legibles.",
    ogImageAlt:
      "Resumen financiero de Perelai para un profesor de música, con ingresos de clases, costes registrados y beneficio calculado para un período — datos de ejemplo.",
  },

  hero: {
    eyebrow: "Software financiero para profesores de música",
    h1: "Una visión clara de las finanzas de tu enseñanza privada.",
    subhead:
      "Controla ingresos de clases, costes registrados y beneficio calculado para un día, semana, mes, trimestre o año. Revisa el resultado por alumno y categoría de clase, mientras las clases completadas, los pagos registrados y los canjes de paquetes permanecen separados.",
    mock: "lash-workspace",
  },

  pains: [
    {
      title: "Las horas de enseñanza ocultan los gastos del estudio",
      body: "Un horario lleno de clases de piano, guitarra y lectura a primera vista muestra actividad docente, no el resultado financiero del período. La afinación del piano, el cambio de cuerdas y la impresión de partituras existen junto a las horas de clase — y no están en el calendario del estudio.",
    },
    {
      title: "El pago anticipado del semestre complica la vista semanal",
      body: "Cobrar la cuota completa del semestre al inscribirse enmascara si las semanas de enseñanza posteriores generaron nuevos movimientos de efectivo. Registrar canjes de crédito sin efectivo por cada clase asistida mantiene transparente la enseñanza instrumental completada.",
    },
    {
      title: "Clases, pagos y gastos viven en lugares distintos",
      body: "Las clases privadas se reservan en el calendario, las cuotas de alumnos llegan por transferencia, y los recibos de partituras y afinación quedan en cajones. Evaluar las finanzas del estudio significa reunir esos fragmentos.",
    },
  ],

  dayInLife: {
    title: "Registra cada clase. Revisa el período cuando lo necesites.",
    body: "Completa clases, registra pagos, canjea créditos de paquetes y añade gastos de enseñanza en la administración habitual. Perelai mantiene esos registros conectados al alumno, la categoría de clase y el período seleccionado.",
    steps: [
      {
        title: "La finalización de la clase y el estado del pago son cosas distintas",
        body: "Marcar una Clase de Piano como completada registra que la enseñanza tuvo lugar. El cobro se registra por separado como parte de la visita.",
      },
      {
        title: "Los pagos permanecen conectados a la clase y al alumno",
        body: "Cuando se registra un pago, se adjunta al alumno y a la clase concretos — la historia financiera permanece ligada a la enseñanza impartida.",
      },
      {
        title: "Los créditos del bloque semestral se aplican a visitas programadas",
        body: "Descontar un crédito de un bloque de clases semestral cierra la visita sin movimiento de dinero. La enseñanza impartida y los registros de pago permanecen separados.",
      },
      {
        title: "Ver el resultado financiero del estudio",
        body: "Muestra ingresos de clases, costes registrados y beneficio calculado para un día, semana, mes, trimestre o año — desglosados por alumno o categoría de clase.",
      },
    ],
  },

  terminology: [
    {
      theirWord: "Clase de Piano, Clase de Guitarra",
      perelaiWord: "Servicios en una Visita",
      why: "La plantilla de profesor de música incluye dos tipos de clase iniciales para repertorio, entrenamiento auditivo y escalas. Cada clase programada se convierte en una Visita con el alumno, el tipo de clase y el registro de pago juntos.",
    },
    {
      theirWord: "Partituras y Libros",
      perelaiWord: "Complemento en una Visita",
      why: "Los libros de partituras o las partituras impresas se registran como complementos adjuntos al registro de visita del alumno.",
    },
    {
      theirWord: "Mantenimiento de Instrumentos",
      perelaiWord: "Gasto registrado",
      why: "Registra afinación, cambio de cuerdas y otros gastos de enseñanza como costes del período. Contribuyen al beneficio calculado del período seleccionado.",
    },
    {
      theirWord: "Bloque de clases semestral",
      perelaiWord: "Paquete prepagado",
      why: "Los paquetes de clases prepagados quedan como saldos de crédito, canjeados clase a clase sin distorsionar los ingresos del período.",
    },
  ],

  setup: {
    title: "Empieza con la lista de clases de un estudio de música, no con una página en blanco.",
    body: "La plantilla de profesor de música abre con dos tipos de clase editables, un complemento y una categoría de gasto — tu primera pantalla ya se parece a un estudio en funcionamiento.",
    steps: [
      {
        title: "Configura tu catálogo de clases",
        body: "Elige duraciones de clases instrumentales y tarifas de la plantilla de profesor de música precargada.",
      },
      {
        title: "Programa clases y añade elementos relevantes",
        body: "Programa clases recurrentes, completa visitas y añade Partituras y Libros cuando formen parte del registro de la clase.",
      },
      {
        title: "Sigue el rendimiento del estudio por período",
        body: "Revisa ingresos del período, costes registrados y beneficio calculado para un día, semana, mes, trimestre o año.",
      },
    ],
  },

  faq: [
    {
      q: "¿Cómo se gestionan los paquetes de clases semestrales prepagados?",
      a: "Los paquetes semestrales quedan como créditos. Cuando un alumno asiste, se canjea un crédito — las clases impartidas y el pago permanecen separados.",
    },
    {
      q: "¿Puedo registrar gastos como afinación de piano o cambio de cuerdas?",
      a: "Sí. Puedes registrar gastos relevantes de enseñanza. Se incluyen en los costes y el beneficio calculado del período seleccionado.",
    },
    {
      q: "¿Completar una clase también registra un pago?",
      a: "No. La finalización y el estado del pago se registran por separado. Una clase completada puede existir antes de que se registre un pago.",
    },
    {
      q: "¿Se pueden personalizar las opciones de clase de la plantilla?",
      a: "Sí. Puedes editar o ampliar los servicios iniciales (Clase de Piano, Clase de Guitarra), el complemento Partituras y Libros y la categoría de gasto Mantenimiento de Instrumentos.",
    },
  ],

  labels: {
    terminologyTitle: "Términos de enseñanza musical y conceptos de Perelai.",
    inYourChair: "En tu estudio",
    inPerelai: "En Perelai",
    whyItMatters: "Por qué importa",
    mocksTitle: "Datos del estudio de música, mostrados en el producto.",
    mocksBody: "Los datos de ejemplo usan los servicios, el complemento y el gasto de la plantilla de profesor de música.",
    faqTitle: "Preguntas frecuentes.",
  },

  whatItIsNot: {
    title: "Claro sobre lo que no es.",
    body: "Perelai registra clases completadas, gastos de enseñanza y beneficio calculado para un período elegido. No actúa como tu back office completo de estudio.",
    items: [
      {
        title: "No es software de contabilidad",
        body: "Muestra ingresos del período, gastos registrados y beneficio calculado. La contabilidad, la preparación fiscal y el asesoramiento financiero pertenecen a tu contable.",
      },
      {
        title: "No es software de partituras ni notación",
        body: "Puedes rastrear servicios, complementos y canjes de paquetes. La notación musical, la composición y la grabación de audio no forman parte.",
      },
      {
        title: "No es un marketplace",
        body: "Tu enlace de reserva es tuyo. Perelai no se interpone entre tú y tus alumnos.",
      },
    ],
  },

  cta: {
    title: "Sabe a qué llegó el período.",
    body: "Empieza con una lista de clases del estudio para gestionar enseñanza completada, pagos registrados, canjes de paquetes y saldos abiertos de pedidos como registros legibles.",
    label: "Crear espacio de trabajo",
    microcopy: "Recibirás un correo de verificación para terminar la configuración.",
  },

  research: musicTeacherResearch,
}
