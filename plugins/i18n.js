import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

// Importar os arquivos de tradução
import en from '~/locales/en.json';
import pt from '~/locales/pt.json';

export default ({ app }) => {
  const i18n = new VueI18n({
    locale: 'pt', // Idioma padrão
    fallbackLocale: 'pt',
    messages: {
      en,
      pt
    }
  });

  // Configurar o i18n no app Vue
  app.i18n = i18n;
}
