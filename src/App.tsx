import { PlannerHome } from './components/PlannerHome';
import { ErrorBoundary } from './components/ErrorBoundary';
import { I18nProvider } from './i18n/I18nProvider';
import { NutrientGoalsProvider } from './hooks/useNutrientGoals';

export default function App() {
  return (
    <ErrorBoundary>
      <I18nProvider>
        <NutrientGoalsProvider>
          <PlannerHome />
        </NutrientGoalsProvider>
      </I18nProvider>
    </ErrorBoundary>
  );
}
