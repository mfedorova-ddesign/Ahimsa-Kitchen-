import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('App error:', error, info);
  }

  handleReset = () => {
    localStorage.removeItem('ahimsa-kitchen-plan');
    localStorage.removeItem('ahimsa-kitchen-settings');
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-fallback">
          <h1>Something went wrong</h1>
          <p>
            Try clearing saved data and reloading. This can happen after an app update.
          </p>
          <button type="button" className="btn-primary" onClick={this.handleReset}>
            Clear data &amp; reload
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
