import { useI18n } from '../i18n';

export function GeneralDisclaimer() {
  const { t } = useI18n();
  return (
    <p className="disclaimer general-disclaimer" role="note">
      {t.planner.disclaimer}
    </p>
  );
}
