import { useTranslation } from 'react-i18next';
import { Layout } from '@/components/layout';

export default function Blog() {
  const { t } = useTranslation();

  return (
    <Layout>
      <span className="text-3xl">🗃️ {t('blog')}</span>
    </Layout>
  );
}
