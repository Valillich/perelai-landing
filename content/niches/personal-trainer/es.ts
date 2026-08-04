import { personalTrainerResearch } from "./research"
import type { NichePageContent } from "@/content/niches/types"

export const content: NichePageContent = {
  meta: {
    title: "Perelai para entrenadores personales",
    description:
      "Controla ingresos de sesiones, costes registrados y beneficio calculado para cualquier período, con historial del cliente y canjes de paquetes legibles.",
    ogImageAlt:
      "Resumen financiero de Perelai para un entrenador personal, con ingresos de sesiones, costes registrados y beneficio calculado para un período — datos de ejemplo.",
  },

  hero: {
    eyebrow: "Software financiero para entrenadores personales",
    h1: "Una visión clara de las finanzas de tu entrenamiento personal.",
    subhead:
      "Controla ingresos de sesiones, costes registrados y beneficio calculado para un día, semana, mes, trimestre o año. Revisa el resultado por cliente y categoría de servicio, mientras las sesiones completadas, los pagos registrados y los canjes de paquetes permanecen separados.",
    mock: "lash-workspace",
  },

  pains: [
    {
      title: "Un calendario lleno no responde la pregunta",
      body: "Sesiones de entrenamiento 1 a 1, coaching de fuerza y evaluaciones seguidas llenan el día y no dicen nada del mes. El alquiler del gimnasio, los desplazamientos a clientes y el reemplazo de material fitness quedan detrás de los entrenamientos — y nada de eso está en el calendario.",
    },
    {
      title: "Los bloques de paquetes prepagados oscurecen el seguimiento del período",
      body: "Cuando un cliente compra un bloque de diez sesiones por adelantado, contar ese pago único el primer día hace que las semanas de coaching siguientes parezcan sin registrar. Registrar los canjes de paquete cuando el cliente asiste a cada sesión mantiene claro el trabajo fitness completado.",
    },
    {
      title: "Sesiones, pagos y gastos viven en lugares distintos",
      body: "Las citas están en una app de calendario, los pagos de clientes en otra herramienta y los gastos del gimnasio en cuadernos o recibos en papel. Revisar el período significa volver a reunir esos registros.",
    },
  ],

  dayInLife: {
    title: "Registra cada sesión. Revisa el período cuando lo necesites.",
    body: "Completa sesiones, registra pagos, canjea créditos de paquetes y añade gastos del negocio durante la administración habitual. Perelai mantiene esos registros conectados al cliente, la categoría de servicio y el período seleccionado.",
    steps: [
      {
        title: "La finalización de la sesión y el pago permanecen separados",
        body: "Completar una Sesión de Entrenamiento 1 a 1 registra que la sesión tuvo lugar. No registra un pago. El estado del pago sigue siendo una parte separada de la misma Visita.",
      },
      {
        title: "El pago permanece conectado a la sesión y al cliente",
        body: "Un pago registrado permanece conectado a la sesión y al cliente correspondientes, para que la historia financiera pueda rastrearse hasta el trabajo detrás.",
      },
      {
        title: "Los créditos de paquete se canjean contra sesiones asistidas",
        body: "Cuando un cliente usa un Paquete de Entrenamientos prepagado, canjear un crédito se registra como liquidación sin efectivo. Las sesiones entregadas y los pagos registrados permanecen distintos.",
      },
      {
        title: "Lee los totales de entrenamiento del período",
        body: "Evalúa ingresos de sesiones, costes registrados y beneficio calculado para un día, semana, mes, trimestre o año, organizados por cliente y categoría de servicio.",
      },
    ],
  },

  terminology: [
    {
      theirWord: "Evaluación y Diagnóstico Inicial, Sesión de Entrenamiento 1 a 1, Paquete de Entrenamientos, Plan de Asesoría Online",
      perelaiWord: "Servicios en una Visita",
      why: "La plantilla de entrenador personal ofrece cuatro servicios iniciales para coaching fitness, acondicionamiento y programación de entrenamientos. Cada sesión reservada se convierte en una Visita con el cliente, el servicio y el registro de pago juntos.",
    },
    {
      theirWord: "Plan Nutricional / Rutina Personalizada",
      perelaiWord: "Complemento en una Visita",
      why: "Entregado junto a sesiones 1 a 1 o paquetes de entrenamiento, un complemento nutricional o de entrenamiento forma parte del registro de la visita.",
    },
    {
      theirWord: "Alquiler de sala, desplazamientos a clientes, equipamiento",
      perelaiWord: "Gasto registrado",
      why: "Registra tarifas de sala, desplazamientos y costes de equipamiento para un período. Contribuyen al beneficio calculado del período seleccionado.",
    },
    {
      theirWord: "Bloque de diez sesiones",
      perelaiWord: "Paquete prepagado",
      why: "Los paquetes prepagados de clientes quedan como saldos de crédito, canjeados sesión a sesión sin distorsionar los ingresos del período.",
    },
  ],

  setup: {
    title: "Empieza con la lista de servicios de un entrenador personal, no con una página en blanco.",
    body: "La plantilla de entrenador personal abre con cuatro servicios editables y un complemento, para que tu primera pantalla ya se parezca a una práctica fitness en funcionamiento.",
    steps: [
      {
        title: "Abre el espacio de trabajo del entrenador personal",
        body: "Llegar desde esta página coloca la plantilla de entrenador personal primero en el onboarding, precargada con Evaluación y Diagnóstico Inicial, Sesión de Entrenamiento 1 a 1, Paquete de Entrenamientos y Plan de Asesoría Online.",
      },
      {
        title: "Ajusta servicios y categorías de costes",
        body: "Configura duraciones y precios de tus sesiones, mantén Plan Nutricional / Rutina Personalizada como complemento si lo ofreces, y registra gastos relevantes del gimnasio contra períodos seleccionados.",
      },
      {
        title: "Registra sesiones y revisa resultados del período",
        body: "Marca visitas completadas, registra pagos, canjea créditos de paquetes y revisa ingresos, gastos registrados y beneficio calculado para un día, semana, mes, trimestre o año.",
      },
    ],
  },

  faq: [
    {
      q: "¿Cómo se gestionan los paquetes de entrenamiento prepagados?",
      a: "Los paquetes prepagados se registran como saldos de crédito. Cuando un cliente asiste a una sesión, se canjea un crédito, manteniendo el trabajo completado y los pagos registrados separados.",
    },
    {
      q: "¿Puedo registrar gastos como alquiler de sala o desplazamientos?",
      a: "Sí. Puedes registrar gastos relevantes del negocio para un período. Se incluyen en los costes registrados y el beneficio calculado del período seleccionado.",
    },
    {
      q: "¿Completar una sesión también registra un pago?",
      a: "No. La finalización y el estado del pago se registran por separado. Una sesión completada puede existir antes de que se registre un pago.",
    },
    {
      q: "¿Son editables los servicios de la plantilla?",
      a: "Sí. Los servicios de la plantilla (Evaluación y Diagnóstico Inicial, Sesión de Entrenamiento 1 a 1, Paquete de Entrenamientos, Plan de Asesoría Online) y el complemento Plan Nutricional / Rutina Personalizada son totalmente editables.",
    },
  ],

  labels: {
    terminologyTitle: "Términos de entrenamiento personal y conceptos de Perelai.",
    inYourChair: "En tu práctica",
    inPerelai: "En Perelai",
    whyItMatters: "Por qué importa",
    mocksTitle: "Datos de entrenamiento personal, mostrados en el producto.",
    mocksBody: "Los datos de ejemplo usan los servicios y el complemento de la plantilla de entrenador personal.",
    faqTitle: "Preguntas frecuentes.",
  },

  whatItIsNot: {
    title: "Claro sobre lo que no es.",
    body: "Perelai rastrea sesiones de entrenamiento completadas, costes registrados y beneficio calculado en períodos seleccionados. No es un back office completo de gimnasio.",
    items: [
      {
        title: "No es software de contabilidad",
        body: "Ingresos, gastos y beneficio calculado se rastrean para un período. Perelai no hace contabilidad, declaraciones fiscales ni asesoramiento financiero, y no reemplaza a tu contable.",
      },
      {
        title: "No es un rastreador fitness ni planificador de entrenamientos",
        body: "Puedes rastrear servicios, complementos y canjes de paquetes. La programación de entrenamientos, repeticiones y progreso fitness no forman parte.",
      },
      {
        title: "No es un marketplace",
        body: "Tu enlace de reserva es tuyo. Perelai no alquila la relación con el cliente.",
      },
    ],
  },

  cta: {
    title: "Sabe a qué llegó el período.",
    body: "Empieza con un menú de servicios de entrenador personal para mantener sesiones completadas, pagos registrados, canjes de paquetes y saldos abiertos de pedidos estructurados y legibles.",
    label: "Crear espacio de trabajo",
    microcopy: "Recibirás un correo de verificación para terminar la configuración.",
  },

  research: personalTrainerResearch,
}
