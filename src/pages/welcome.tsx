import { Layout } from '@/components/layout';
import { useTranslation } from 'react-i18next';

export default function Welcome() {
  const { t } = useTranslation();

  return (
    <Layout>
      <span className="text-3xl">🏡 {t('welcome')}</span>
    </Layout>
  );
}
