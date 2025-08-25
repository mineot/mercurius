import { useTranslation } from 'react-i18next';
import { Layout } from '@/components/layout';

export default function Projects() {
  const { t } = useTranslation();

  return (
    <Layout>
      <span className="text-3xl">🖥️ {t('projects')}</span>
    </Layout>
  );
}
