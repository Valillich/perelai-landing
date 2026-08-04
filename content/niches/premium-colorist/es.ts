import { independentColoristResearch } from "./research"
import type { NichePageContent } from "@/content/niches/types"

export const content: NichePageContent = {
  meta: {
    title: "Perelai para coloristas independientes",
    description: "Una forma más tranquila de gestionar visitas de color, solicitudes de reserva y el flujo de caja.",
    ogImageAlt: "Espacio de trabajo de Perelai para un colorista independiente, mostrando visitas de color, un calendario y un resumen de finanzas",
  },
  hero: {
    eyebrow: "Para coloristas independientes",
    h1: "Cuando una reserva doble te puede arruinar el día.",
    subhead: "Unifica DMs inundados, visitas de color y el dinero de hoy en un espacio de trabajo diseñado para tu forma de trabajar.",
    mock: "colorist-workspace",
  },
  pains: [
    { title: "Tus DMs de Instagram están completamente inundados", body: "Una solicitud de reserva no debería vivir junto a una pregunta sobre fórmulas de color, una foto y un cambio de horario de madrugada." },
    { title: "Diez minutos de retraso parecen tirar el día por la borda", body: "Un color de raíz, un balayage y un peinado de última hora tienen tiempos distintos. Tu calendario necesita reflejar cómo es realmente el trabajo." },
    { title: "‘Te pago la próxima vez’ sigue siendo un cabo suelto", body: "Registra lo que realmente ingresaste, ve lo que está pendiente, y mantén los productos de color y consumibles a la vista." },
  ],
  dayInLife: {
    title: "Incluso si el día se complica, sabes qué sigue.",
    body: "Perelai mantiene visible el trabajo de un día de color sin pedirte que lo reconstruyas por la noche.",
    steps: [
      { title: "Consulta y prueba de mechón", body: "Inicia la Visita con el servicio que establece el plan de color." },
      { title: "Color de raíz o color dimensional", body: "Mantén el trabajo de color de hoy en el calendario, junto con el tiempo que necesita." },
      { title: "Tratamiento y peinado", body: "Añade el trabajo que cambia la visita, incluyendo los extras que eligió tu cliente." },
      { title: "Pago y seguimiento", body: "Termina el día con el importe recibido, el trabajo pendiente y la próxima decisión visible en la Bandeja Operativa." },
    ],
  },
  terminology: [
    { theirWord: "Color de raíz, balayage o gloss y matiz", perelaiWord: "Visita", why: "Mantiene unidos el servicio, las notas del cliente y los pagos." },
    { theirWord: "Tratamiento, producto extra para pelo largo o peinado", perelaiWord: "Complementos", why: "Asocia el trabajo adicional a la Visita que lo necesita." },
    { theirWord: "Productos de color y materiales desechables", perelaiWord: "Gastos asociados", why: "Visualiza los costes junto al trabajo al que pertenecen." },
    { theirWord: "Un paquete prepagado de retoques de color", perelaiWord: "Paquete", why: "El saldo prepagado se descuenta conforme se van consumiendo las Visitas." },
    { theirWord: "‘Te pago la próxima vez’", perelaiWord: "Pedido", why: "Haz seguimiento de lo que te deben sin llamarlo factura." },
    { theirWord: "Avisar a un cliente que se recibió su pago", perelaiWord: "Confirmación de pago", why: "Envía una confirmación que tu cliente pueda abrir desde un enlace." },
    { theirWord: "Lo que aún necesita tu decisión tras el último cliente", perelaiWord: "Elemento de la Bandeja Operativa", why: "Se queda ahí hasta que lo resuelves, no solo hasta que lo lees." },
  ],
  setup: {
    title: "Empieza con el trabajo de color que ya haces.",
    body: "Nada de listas en blanco genéricas. La plantilla para coloristas incluye desde el principio servicios editables, complementos y gastos asociados.",
    steps: [
      { title: "Abre el espacio para coloristas", body: "Al llegar desde esta página, la plantilla para coloristas independientes será la primera que veas en la configuración inicial." },
      { title: "Haz tuya la lista", body: "Empieza con Consulta, Color de Raíz, Color Dimensional / Balayage, Corrección de Color, Gloss y Matiz, y Corte y Peinado. Edita lo que necesites." },
      { title: "Tráete lo esencial", body: "Importa contactos de tu teléfono vía vCard, conecta tu Google Calendar y luego comparte tu propio enlace de reserva." },
    ],
  },
  faq: [
    { q: "¿Estarán ya incluidos mis servicios de color?", a: "Sí. La plantilla de colorista independiente comienza con seis servicios personalizables, incluyendo Color de Raíz, Color Dimensional / Balayage, Corrección de Color, Gloss y Matiz, y Corte y Peinado. También incluye Tratamiento, Producto Extra y Peinado como complementos." },
    { q: "¿Pueden los clientes dejar de reservar a través de mis DMs?", a: "Comparte un enlace de reserva en tu bio o mándalo por mensaje. Los clientes eligen un servicio, una persona y una hora." },
    { q: "¿Qué ocurre cuando alguien no aparece?", a: "Perelai puede enviar recordatorios automáticos por email, en la app y notificaciones push. Registra el trabajo y el dinero por separado, de forma que una Visita perdida no cuente como dinero recibido." },
    { q: "¿Puedo ver si un día de color realmente mereció la pena?", a: "Registra lo que ingresaste, asocia los productos de color y materiales al trabajo correspondiente, y ve ingresos, costes y saldos pendientes sin abrir una hoja de cálculo." },
    { q: "¿Tengo que migrar todo en un fin de semana?", a: "No. Empieza por los contactos de tu teléfono usando vCard y opcionalmente conecta Google Calendar. La lista de servicios ya es editable, así que puedes ir haciéndola tuya a tu ritmo." },
  ],
  labels: {
    terminologyTitle: "Las palabras que usas en el salón tienen un lugar en Perelai.",
    inYourChair: "En tu sillón",
    inPerelai: "En Perelai",
    whyItMatters: "Por qué importa",
    mocksTitle: "Datos de colorista, tal como se ven en el producto.",
    mocksBody: "Los datos de ejemplo utilizan los propios servicios, complementos y gastos asociados de la plantilla de colorista independiente.",
    faqTitle: "Preguntas que hacen los coloristas antes de cambiar.",
  },
  whatItIsNot: {
    title: "Claridad sobre lo que no es.",
    body: "Perelai está pensado para llevar los clientes, reservas y dinero de tu trabajo de color. No pretende reemplazar herramientas especializadas.",
    items: [
      { title: "No es software de contabilidad", body: "Lleva un registro de lo reservado, completado y pagado para que veas tu flujo de caja. No hace declaración de impuestos ni da consejo financiero." },
      { title: "No es un marketplace", body: "Tu enlace de reserva es tuyo." },
      { title: "No es un sistema médico", body: "No ofrece historiales clínicos, seguimiento de diagnósticos ni gestión de pacientes." },
    ],
  },
  cta: {
    title: "Mantén el ritmo del color sin tener que reconstruir tu día después.",
    body: "Crea un espacio de trabajo que empiece con tus servicios de color y unifique visitas, finanzas y seguimiento en un solo lugar.",
    label: "Crear espacio de trabajo",
    microcopy: "Recibirás un correo de verificación para terminar la configuración.",
  },
  research: independentColoristResearch,
}
