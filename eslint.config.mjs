import { defineConfig, globalIgnores } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

/**
 * ============================================================
 *  پیکربندی ESLint پروژه | Project ESLint configuration
 * ------------------------------------------------------------
 *  از پیکربندی flat رسمی Next.js استفاده می‌شود و قواعد پروژه روی آن سوار است.
 *  Built on the official Next.js flat config with project-specific overrides.
 * ============================================================
 */
export default defineConfig([
  // پایه: قواعد Next.js + Core Web Vitals | base: Next.js + Core Web Vitals rules
  ...nextCoreWebVitals,

  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),

  {
    files: ["src/**/*.tsx"],
    rules: {
      /**
       * فارسی: لینک‌های دانلود (CSV / بکاپ SQL) به مسیرهای API اشاره می‌کنند و
       *       باید با تگ <a> رندر شوند تا مرورگر فایل را دانلود کند؛ <Link> برای
       *       مسیرهای صفحه است و ناوبری نرم انجام می‌دهد.
       * English: download links (CSV / SQL backup) point to API file endpoints
       *          and must be rendered as <a> so the browser downloads the file;
       *          <Link> is meant for page routes and performs soft navigation.
       */
      "@next/next/no-html-link-for-pages": "off",
    },
  },
]);
