import { useTranslation } from 'react-i18next';

export default function NotFound() {
  const { t } = useTranslation();

  return <h1>{t('page_not_found')}</h1>;
}
