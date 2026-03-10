import React from 'react';
import { StitchScreen } from '../components/generated/StitchScreen';

// Error Boundary — prevents a faulty generated component from crashing the entire app
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  override render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-950 text-white p-6">
          <h1 className="text-xl font-bold text-red-400 mb-2">Something went wrong</h1>
          <p className="text-sm text-gray-400 text-center">{this.state.error?.message || 'An unexpected error occurred.'}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  return (
    <div className="dark bg-background-dark min-h-screen">
      <ErrorBoundary>
        <StitchScreen />
      </ErrorBoundary>
    </div>
  );
}
