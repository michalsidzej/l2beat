import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

const coerceBoolean = z.string().transform((val) => {
  return val !== 'false' && val !== '0'
})

const featureFlag = coerceBoolean.optional()

export const env = createEnv({
  /**
   * Server-only environment variables.
   */
  server: {
    NODE_ENV: z
      .enum(['development', 'test', 'production'])
      .default('development'),
    ETHEREUM_RPC_URL: z.string().url().default('https://cloudflare-eth.com'),
  },

  /**
   * Environment variables exposed to the client (should be prefixed with `NEXT_PUBLIC_`)
   */
  client: {
    NEXT_PUBLIC_PLAUSIBLE_DOMAIN: z.string().default('localhost'),
    NEXT_PUBLIC_PLAUSIBLE_ENABLED: coerceBoolean.optional(),
    NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID: z.string().optional(),
    NEXT_PUBLIC_GITCOIN_ROUND_LIVE: featureFlag.default('false'),
    NEXT_PUBLIC_SHOW_HIRING_BADGE: featureFlag.default('true'),
    NEXT_PUBLIC_FEATURE_FLAG_ASSET_RISKS: featureFlag.default('false'),
    NEXT_PUBLIC_FEATURE_FLAG_ZK_CATALOG: featureFlag.default('false'),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_GITCOIN_ROUND_LIVE: process.env.FEATURE_FLAG_GITCOIN_OPTION,
    NEXT_PUBLIC_SHOW_HIRING_BADGE: process.env.FEATURE_FLAG_HIRING,
    NEXT_PUBLIC_PLAUSIBLE_DOMAIN: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN,
    NEXT_PUBLIC_PLAUSIBLE_ENABLED: process.env.NEXT_PUBLIC_PLAUSIBLE_ENABLED,
    NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID:
      process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID,
    ETHEREUM_RPC_URL: process.env.ETHEREUM_RPC_URL,
    NEXT_PUBLIC_FEATURE_FLAG_ASSET_RISKS: process.env.FEATURE_FLAG_ASSET_RISKS,
    NEXT_PUBLIC_FEATURE_FLAG_ZK_CATALOG: process.env.FEATURE_FLAG_ZK_CATALOG,
  },

  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,

  /**
   * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and
   * `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,
})
