import { PlannerHome } from './components/PlannerHome';
import { ErrorBoundary } from './components/ErrorBoundary';
import { I18nProvider } from './i18n/I18nProvider';

export default function App() {
  return (
    <ErrorBoundary>
      <I18nProvider>
        <PlannerHome />
      </I18nProvider>
    </ErrorBoundary>
  );
}
