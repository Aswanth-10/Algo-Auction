import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { RealtimeProvider } from './context/RealtimeContext';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Team from './pages/Team';

const ProtectedRoute = ({ children, role }) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  if (role && user.role !== role) return <Navigate to="/login" />;
  return children;
};

const AppRoutes = () => {
  const { user } = useAuth();
  return (
    <Routes>
      <Route path="/login" element={user ? <Navigate to={`/${user.role}`} /> : <Login />} />
      <Route path="/admin/*" element={<ProtectedRoute role="admin"><Admin /></ProtectedRoute>} />
      <Route path="/team/*" element={<ProtectedRoute role="team"><Team /></ProtectedRoute>} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <RealtimeProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-[#16171d] text-[#f3f4f6] font-sans">
            <AppRoutes />
          </div>
        </BrowserRouter>
      </RealtimeProvider>
    </AuthProvider>
  );
}

export default App;
