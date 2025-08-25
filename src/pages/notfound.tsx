import { useTranslation } from 'react-i18next';
import { Layout } from '@/components/layout';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <Layout>
      <span className="text-3xl">🤚🏻 {t('page_not_found')}</span>
    </Layout>
  );
}
