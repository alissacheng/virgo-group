import './App.css';
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './components/ErrorFallback';
import Form from './components/Form';

const App: React.FC = () => {

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className='bg-[#1b1b1b] min-h-screen flex justify-center pt-10'>
        <Form />
      </div>
    </ErrorBoundary>
  );
}

export default App;
