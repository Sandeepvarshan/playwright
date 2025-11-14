import { test } from '@playwright/test';
import { loginpagei } from '../pages/login.js';
import { AdminPage } from '../pages/admin.js';

test('Login → Add Product → Verify Cart', async ({ page }) => {
  const loginpage=new loginpagei(page);
  await loginpage.navi();
  await loginpage.actions("Admin","admin123");
  await loginpage.verify();
  const admin = new AdminPage(page);
  await admin.action();
  await admin.perform();
  await admin.dynamic();
  await admin.fillForm();
});
