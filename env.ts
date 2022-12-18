const NUXT_ENV_VERCEL_ENV = process.env.NUXT_ENV_VERCEL_ENV;

const IS_PROD = NUXT_ENV_VERCEL_ENV === "production";
const IS_PREVIEW = NUXT_ENV_VERCEL_ENV === "preview";
const IS_DEV = !NUXT_ENV_VERCEL_ENV || NUXT_ENV_VERCEL_ENV === "development";

const BASE_APP_URL = IS_PROD
  ? "https://app.drawbeat.com"
  : IS_PREVIEW
  ? "https://app-dev.drawbeat.com"
  : "http://localhost:3003";
const BASE_API_URL = IS_PROD
  ? "https://api.drawbeat.com"
  : IS_PREVIEW
  ? "https://api-dev.drawbeat.com"
  : "http://localhost:3000";

export const ENV = {
  NUXT_ENV_VERCEL_ENV: process.env.NUXT_ENV_VERCEL_ENV,
  IS_PROD,
  IS_PREVIEW,
  IS_DEV,
  BASE_APP_URL,
  BASE_API_URL,
  SUPABASE_URL: "https://sblfngwrevfkzzausysf.supabase.co",
  SUPABASE_KEY:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNibGZuZ3dyZXZma3p6YXVzeXNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzAyMjAyNjksImV4cCI6MTk4NTc5NjI2OX0.cWkADPBOC5X7up8-22CsPHsLQR2VRoO-7htKKOthJXI",
};
