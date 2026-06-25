import { readProcessEnvVar } from './read-process-env-var';

export function readPositiveIntEnv(name: string, fallback: number): number {
  const raw = readProcessEnvVar(name)?.trim();
  if (raw === undefined || raw.length === 0) {
    return fallback;
  }
  const n = Number(raw);
  return Number.isFinite(n) && n > 0 ? Math.floor(n) : fallback;
}
