import fs from 'fs';
import path from 'path';

const locales = ['en', 'uk', 'pl', 'ru', 'es', 'fr', 'de', 'pt', 'tr'];
const baseDir = '/Users/valery/Sites/perelai-landing/messages';

// Standardized names for the language switcher
const languageNames = {
  en: "English",
  uk: "Українська",
  pl: "Polski",
  ru: "Русский",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  pt: "Português",
  tr: "Türkçe"
};

for (const locale of locales) {
  const commonPath = path.join(baseDir, locale, 'common.json');
  if (fs.existsSync(commonPath)) {
    const data = JSON.parse(fs.readFileSync(commonPath, 'utf8'));
    data.languages = languageNames;
    fs.writeFileSync(commonPath, JSON.stringify(data, null, 2) + '\n');
    console.log(`Updated ${commonPath}`);
  }
}
