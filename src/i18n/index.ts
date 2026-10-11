import { useApp } from '../state/store';

export function useTx() {
  const language = useApp((state) => state.session.language);
  return (en: string, te: string) => (language === 'te' ? te : en);
}

export const copy = {
  en: {
    app: 'Rytuvo',
    tag: 'Fair commodity markets',
    offline: 'Offline · entries wait on this phone',
    suggestion: 'Suggestion',
    devOtp: 'DEV ONLY · code 123456',
  },
  te: {
    app: 'రైతువో',
    tag: 'న్యాయమైన సరుకు మార్కెట్లు',
    offline: 'ఆఫ్‌లైన్ · ఎంట్రీలు ఈ ఫోన్‌లో ఉన్నాయి',
    suggestion: 'సూచన',
    devOtp: 'DEV ONLY · కోడ్ 123456',
  },
} as const;
