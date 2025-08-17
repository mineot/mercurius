import { useTranslation } from 'react-i18next';

export default function Welcome() {
  const { t } = useTranslation();

  return <h1>🏠 {t('welcome')}</h1>;
}
