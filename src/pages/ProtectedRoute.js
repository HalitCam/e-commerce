import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated, adminRequired, admin, children }) => {
   
    if (!isAuthenticated) {
        return <Navigate to="/" replace />
    }

     if (adminRequired && !admin) {
        return <Navigate to="/" replace />
    }

    return children
}

export default ProtectedRoute;
