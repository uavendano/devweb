# Notas del Proyecto

Este archivo contiene comandos útiles y recordatorios para administración, despliegue y mantenimiento del proyecto.  

---

## Logs
- **Eliminar logs de más de 14 días**
```bash
find ./logs -type f -name "*.log" -mtime +14 -delete