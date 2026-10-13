import type { NichePageContent } from "@/content/niches/types"

// Illustrative workflow; no customer-research or testimonial claim.
export const content: NichePageContent = {
  "meta": {
    "title": "Perelai para barberos",
    "description": "Organiza cortes y servicios de barba, conserva el historial de cada cliente y registra los pagos en un mismo espacio.",
    "ogImageAlt": "Perelai para barberos"
  },
  "hero": {
    "eyebrow": "Citas para barberos",
    "h1": "El corte, el cliente y el pago, juntos.",
    "subhead": "Organiza cortes y servicios de barba, conserva el historial de cada cliente y registra los pagos en un mismo espacio.",
    "mock": "appointment-workspace"
  },
  "pains": [
    {
      "title": "Un arreglo de barba amplía la cita",
      "body": "Durante el degradado, el cliente pide perfilar la barba. Añade el recorte junto al corte de pelo con su propio precio para reflejar el trabajo realizado en el sillón."
    },
    {
      "title": "La próxima visita necesita contexto",
      "body": "Un cliente habitual quiere repetir el degradado del mes pasado. Antes de coger la máquina, consulta el corte anterior y sus preferencias de longitud o peinado."
    },
    {
      "title": "El sillón puede estar ocupado y el pago pendiente",
      "body": "Terminar un afeitado con toalla caliente registra el trabajo. Anotar el pago registra cómo se liquidó. Un bono prepagado válido puede cubrir el afeitado sin un nuevo cobro."
    }
  ],
  "dayInLife": {
    "title": "De la reserva al siguiente corte",
    "body": "Sigue un corte concreto a lo largo de tu jornada.",
    "steps": [
      {
        "title": "Reserva tiempo para el degradado",
        "body": "Elige un degradado clásico o un afeitado con toalla caliente y asigna al barbero. Ajusta la duración a los cortes que ofreces."
      },
      {
        "title": "Añade el trabajo de barba",
        "body": "Registra el recorte de barba cuando se haya realizado, con su precio. El complemento permanece vinculado a la cita."
      },
      {
        "title": "Registra el pago o utiliza un bono",
        "body": "Anota un pago en efectivo o con tarjeta, o utiliza un bono prepagado válido. Usar el bono no añade un nuevo pago ni ingresos."
      },
      {
        "title": "Conserva el contexto de la próxima visita",
        "body": "Cuando el cliente vuelva para otro degradado, tendrás el corte y la liquidación anteriores en su historial. Revisa las notas antes de repetir o cambiar el estilo."
      }
    ]
  },
  "terminology": [
    {
      "theirWord": "Degradado clásico o afeitado con toalla caliente",
      "perelaiWord": "Servicios",
      "why": "Las entradas iniciales del catálogo se pueden editar. Cada cita registra una prestación concreta."
    },
    {
      "theirWord": "Recorte de barba en el sillón",
      "perelaiWord": "Complementos",
      "why": "El arreglo de barba tras el corte se añade a esa misma cita. Su precio queda junto al degradado, en lugar de ser un cobro sin explicación."
    },
    {
      "theirWord": "La persona en tu sillón",
      "perelaiWord": "Cliente",
      "why": "Sus datos de contacto, cortes anteriores y notas ayudan a preparar la próxima visita. Perelai no elige el estilo ni la técnica."
    },
    {
      "theirWord": "Un barbero que trabaja por su cuenta",
      "perelaiWord": "Profesional",
      "why": "El propietario puede prestar los servicios. La plantilla no exige una cuenta de equipo aparte."
    }
  ],
  "setup": {
    "title": "Empieza por tu propio sillón",
    "body": "El menú inicial incluye dos servicios, dos extras opcionales y una categoría de gastos para cuchillas y desinfectante. Adapta los nombres a tu barbería; los materiales son un coste.",
    "steps": [
      {
        "title": "Elige la plantilla de barbería",
        "body": "Esta página recomienda la plantilla de barbería durante la configuración."
      },
      {
        "title": "Adapta tu menú",
        "body": "Conserva los degradados, afeitados con toalla y arreglos de barba que ofrezcas. El recorte de barba y la mascarilla facial son opcionales; elimina los que no uses."
      },
      {
        "title": "Añade al barbero que presta el servicio",
        "body": "Si trabajas solo, usa tu propio perfil profesional. El acceso del equipo es una función separada de STUDIO."
      },
      {
        "title": "Introduce las próximas citas",
        "body": "Añade clientes, importa contactos vCard si lo necesitas y comparte tu enlace de reservas cuando esté listo."
      }
    ]
  },
  "faq": [
    {
      "q": "¿Puedo usarlo como barbero independiente?",
      "a": "Sí. El propietario puede prestar los servicios. SOLO incluye un profesional activo; el acceso adicional del equipo corresponde a STUDIO."
    },
    {
      "q": "¿Incluye servicios de barba?",
      "a": "La plantilla ofrece recorte de barba como complemento editable, junto con degradado clásico y afeitado con toalla caliente como servicios iniciales."
    },
    {
      "q": "¿Puedo cambiar precios y duración?",
      "a": "Sí. Fija tus tarifas y tiempos para cortes, afeitados y extras. Las notas pueden describir altura del degradado, transiciones, nuca o patillas. Perelai no impone técnica ni tarifas."
    },
    {
      "q": "¿Un corte terminado significa que el cliente pagó?",
      "a": "No. Finalización y pago son distintos. Un bono prepagado válido también puede cubrir el servicio sin nuevo efectivo durante esa cita."
    },
    {
      "q": "¿Calcula las comisiones de los barberos?",
      "a": "No. Los cortes y afeitados registrados ayudan a revisar la actividad de la barbería, pero repartir la recaudación es tu responsabilidad. No se calculan salarios, comisiones ni nóminas."
    }
  ],
  "labels": {
    "terminologyTitle": "Tu trabajo y su registro en Perelai",
    "inYourChair": "En tu trabajo",
    "inPerelai": "En Perelai",
    "whyItMatters": "Qué significa",
    "mocksTitle": "Ejemplo de espacio de trabajo",
    "mocksBody": "Datos ficticios de esta plantilla.",
    "faqTitle": "Preguntas antes de empezar"
  },
  "whatItIsNot": {
    "title": "El registro diario de tus servicios",
    "body": "Usa Perelai para citas, clientes y registros de pagos.",
    "items": [
      {
        "title": "Control operativo",
        "body": "Los ingresos, costes y beneficios calculados del período dependen de los datos que introduzcas. No son informes fiscales."
      },
      {
        "title": "Pagos de clientes",
        "body": "Registra cómo pagó el cliente. No se incluye el procesamiento de pagos con tarjeta."
      }
    ]
  },
  "cta": {
    "title": "Empieza con el próximo corte",
    "body": "Configura tu espacio de barbería y sigue a un cliente desde la reserva hasta el registro del pago.",
    "label": "Crea tu espacio de trabajo",
    "microcopy": "Confirma tu correo para continuar con la configuración."
  },
  "research": {
    "sources": [],
    "verbatims": []
  }
}
