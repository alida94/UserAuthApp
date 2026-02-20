import { AuthProvider } from './context/AuthContext';
import App from './App';

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
