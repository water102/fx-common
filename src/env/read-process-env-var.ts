type ProcessLike = { env?: Record<string, string | undefined> };

const getProcessEnv = (): Record<string, string | undefined> | undefined =>
  (globalThis as { process?: ProcessLike }).process?.env;

export function readProcessEnvVar(name: string): string | undefined {
  return getProcessEnv()?.[name];
}
