/**
 * Prefixes an absolute path with Astro's configured `base` so that links and
 * assets resolve correctly on subpath deployments (e.g. GitHub Project Pages).
 *
 * Pass paths that begin with `/` (e.g. "/images/foo.svg"). Returns a path
 * suitable for use in `href`/`src` attributes regardless of `base` value.
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL; // e.g. "/research-homepage/" or "/"
  if (!path.startsWith("/")) return path;
  const trimmedBase = base.endsWith("/") ? base.slice(0, -1) : base;
  return `${trimmedBase}${path}`;
}
