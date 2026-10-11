import type { Bootstrap } from '../domain/types';
import { seed } from './seed';

export interface OtpChallenge {
  id: string;
  phone: string;
  purpose: string;
  code: string;
  expiresAt: number;
  attempts: number;
  used: boolean;
}

export interface RytuvoClient {
  bootstrap(): Bootstrap;
  requestOtp(phone: string, purpose?: string): OtpChallenge;
  verifyOtp(challengeId: string, code: string): { ok: boolean; reason?: string };
}

const challenges = new Map<string, OtpChallenge>();
let seq = 1;

function clone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

/** In-memory client. Dev OTP is echoed and labelled; it is never a real SMS provider. */
export const mockClient: RytuvoClient = {
  bootstrap() {
    return clone(seed);
  },
  requestOtp(phone, purpose = 'LOGIN') {
    const code = '123456';
    const challenge: OtpChallenge = {
      id: `otp-${seq++}`,
      phone,
      purpose,
      code,
      expiresAt: Date.now() + 10 * 60 * 1000,
      attempts: 0,
      used: false,
    };
    challenges.set(challenge.id, challenge);
    return { ...challenge };
  },
  verifyOtp(challengeId, code) {
    const challenge = challenges.get(challengeId);
    if (!challenge) return { ok: false, reason: 'missing' };
    if (challenge.used) return { ok: false, reason: 'used' };
    if (Date.now() > challenge.expiresAt) return { ok: false, reason: 'expired' };
    if (challenge.attempts >= 5) return { ok: false, reason: 'locked' };
    if (code !== challenge.code) {
      challenge.attempts += 1;
      return { ok: false, reason: 'mismatch' };
    }
    challenge.used = true;
    return { ok: true };
  },
};

export type { Bootstrap };
