// TODO(verify): assets are hot-linked from the live site for now. Download them
// into public/images, point BASE at "/images", and drop remotePatterns from
// next.config.ts.
const BASE = "https://visiprotonaglobal.com/wp-content/uploads/2026/06";

export function asset(file: string): string {
  return `${BASE}/${file}`;
}
