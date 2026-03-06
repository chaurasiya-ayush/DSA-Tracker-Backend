import { Router } from 'express';
import {
  registerStudent,
  loginStudent,
  loginAdmin,
  logoutStudent,
  logoutAdmin,
} from '../controllers/auth.controller';

const router = Router();

// ===== STUDENT AUTH (Public) =====
router.post('/student/register', registerStudent);
router.post('/student/login', loginStudent);
router.post('/student/logout', logoutStudent);

// ===== ADMIN AUTH (Public) =====
// Note: This is for ALL admins (Superadmin, Teacher, Intern)
router.post('/admin/login', loginAdmin);
router.post('/admin/logout', logoutAdmin);

export default router;
