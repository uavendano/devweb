// En desarrollo, el proxy de React enviará las solicitudes a http://localhost:8000
// En producción, se usan rutas relativas porque front y back estarán en el mismo dominio
const API_BASE = '';

const API_ROUTES = {
    CHECK_AUTH: `${API_BASE}/api/checkauth`,
    LOGIN: `${API_BASE}/api/login`,
    LOGOUT: `${API_BASE}/api/logout`,
    REGISTER: `${API_BASE}/api/register`,
    FORGOT_PASSWORD: `${API_BASE}/api/forgot-password`,
    RESET_PASSWORD: `${API_BASE}/api/reset-password`,
    CUSTOMERS: `${API_BASE}/api/customers`,
    USER: `${API_BASE}/api/user`,
    USER_SUSPEND: `${API_BASE}/api/user/suspend`,
    USER_DELETE: `${API_BASE}/api/user/delete`,
    ADMINS: `${API_BASE}/api/admins`,
    ADD_ADMIN: `${API_BASE}/api/admins/addadmin`,
    ADMIN_REMOVE: `${API_BASE}/api/admins/remove`,
    EMPLOYEE: `${API_BASE}/api/employee`,
    AREA: `${API_BASE}/api/area`,
    AREA_DELETE: `${API_BASE}/api/area/delete`,
    LIST_AREA_ACTIVE: `${API_BASE}/api/list-area-active`,
    USERS_WITHOUT_AREA:`${API_BASE}/api/users-without-area`,
    ASSIGN_AREA_TO_USERS:`${API_BASE}/api/assign-area-to-users`,
    USERS_WITH_AREA:`${API_BASE}/api/users-with-area`,
    UNASSIGN_AREA_TO_USERS:`${API_BASE}/api/unassign-area-to-users`,
    MAIL_CONTACT: `${API_BASE}/api/contact`,
    COURSE_SCHEDULE: `${API_BASE}/api/course-schedule`,
};

export default API_ROUTES;