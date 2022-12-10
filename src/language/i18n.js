import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { languageStore } from '../store/language';

const resources = {
  en: {
    translation: {
      otpRequestInstruction:
        'Enter the email on your account and we will sent you a password reset link.',
      otpVerifyMessage: 'We have sent you a 6-digit verification code via SMS.',
      resetPasswordInstruction: 'Create a new password for your account.',
    },
  },
  sv: {
    translation: {
      otpRequestInstruction:
        'Enter the email on your account and we will sent you a password reset link.',
      otpVerifyMessage:
        'Vi har skickat en 6-siffrig verifieringskod till dig via sms.',
      resetPasswordInstruction: 'Create a new password for your account.',
      Overview: 'Översikt',
      Students: 'Studenter',
      Chat: 'Chatt',
      Leads: 'Leder',
      Users: 'Användare',
    },
  },
};
const language = languageStore.getState().language;
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: language ?? 'sv',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
