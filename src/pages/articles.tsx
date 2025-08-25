import { useTranslation } from 'react-i18next';
import { Layout } from '@/components/layout';

export default function Articles() {
  const { t } = useTranslation();

  return (
    <Layout>
      <span className="text-3xl">📃 {t('articles')}</span>
    </Layout>
  );
}
