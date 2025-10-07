// Para proteger las rutas y no se puedan acceder
export function isAuthenticated(req, res, next) {
    if (req.session && req.session.user) {
        return next(); // sigue con la ruta protegida
    } else {
        return res.status(401).json({ authenticated: false, message: 'Unauthorized: Session required' });
    }
}