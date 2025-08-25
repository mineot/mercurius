import { useTranslation } from 'react-i18next';
import { Layout } from '@/components/layout';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <Layout>
      <span className="text-3xl">📩 {t('contact')}</span>
    </Layout>
  );
}
