import fs from 'fs';
import path from 'path';

const locales = ['uk', 'es', 'fr', 'pt', 'tr'];
const baseDir = '/Users/valery/Sites/perelai-landing/messages';

const fixes = {
  uk: {
    // 158 -> 146
    description: "Записи, клієнти та фінанси для незалежних фахівців. Один список незавершених справ, достовірна цифра, одне посилання для вашого профілю."
  },
  es: {
    // 61 -> 55
    title: "Perelai — Clientes, Reservas y Flujo de Caja",
    // already fixed in sed, but let's ensure
    description: "Software de reservas, clientes y finanzas para profesionales independientes. Todo lo que necesitas para tu negocio en un solo lugar."
  },
  fr: {
    // 65 -> 53
    title: "Perelai — Clients, réservations et trésorerie",
    // 167 -> 153
    description: "Logiciel de réservation et finances pour professionnels indépendants. Une liste de tâches claires, un chiffre fiable, un lien unique pour votre bio."
  },
  pt: {
    // 66 -> 55
    title: "Perelai — Clientes, Agendamentos e Fluxo de Caixa",
    // 174 -> 154
    description: "Software de agendamento e finanças para profissionais independentes. Uma lista clara de pendências, um número confiável, um link para a sua bio."
  },
  tr: {
    // 62 -> 57
    title: "Perelai — Müşteriler, Randevular ve Nakit Akışı",
    // 158 -> 151
    description: "Bağımsız uzmanlar için randevu, müşteri ve finans yazılımı. Net bir yapılacaklar listesi, güvenilir bir rakam, biyografiniz için tek bağlantı."
  }
};

for (const locale of locales) {
  const homePath = path.join(baseDir, locale, 'home.json');
  if (fs.existsSync(homePath)) {
    const data = JSON.parse(fs.readFileSync(homePath, 'utf8'));
    if (fixes[locale].title) {
      data.meta.title = fixes[locale].title;
    }
    if (fixes[locale].description) {
      data.meta.description = fixes[locale].description;
    }
    fs.writeFileSync(homePath, JSON.stringify(data, null, 2) + '\n');
    console.log(`Updated ${homePath}`);
  }
}
