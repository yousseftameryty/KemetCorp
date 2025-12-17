'use client';

import type { Metadata } from 'next';
import { FormEvent, useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';

export const metadata: Metadata = {
  title: 'KEMET // RESET CREDENTIALS',
  description: 'Set a new private passkey for your Kemet node.',
};

function hasRecoveryParams() {
  if (typeof window === 'undefined') return false;
  const hash = window.location.hash || '';
  const search = window.location.search || '';
  return hash.includes('type=recovery') || search.includes('type=recovery');
}

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasToken, setHasToken] = useState(true);

  useEffect(() => {
    setHasToken(hasRecoveryParams());
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedPassword = password || '';
    const trimmedConfirm = confirmPassword || '';

    if (trimmedPassword.length < 6) {
      setError('Passkey must be at least 6 characters.');
      setSuccess('');
      return;
    }

    if (trimmedPassword !== trimmedConfirm) {
      setError('Passkeys do not match.');
      setSuccess('');
      return;
    }

    setIsSubmitting(true);
    setError('');
    setSuccess('');

    try {
      const client = createClient();

      const { data: userData, error: userError } = await client.auth.getUser();
      if (userError || !userData || !userData.user) {
        setError(
          'This recovery link is invalid or has expired. Request a new link from the app.'
        );
        setIsSubmitting(false);
        return;
      }

      const { error: updateError } = await client.auth.updateUser({
        password: trimmedPassword,
      });

      if (updateError) {
        setError(
          'Unable to update passkey. Try again or request a new link.'
        );
        setIsSubmitting(false);
        return;
      }

      setSuccess(
        'Passkey updated. You can now return to Kemet and sign in with your new credentials.'
      );
      setIsSubmitting(false);
    } catch {
      setError('Unexpected error while updating passkey. Try again.');
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md relative z-20">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_12px_#22c55e]" />
              <span className="text-sm font-black tracking-tight">KEMET.</span>
            </div>
            <p className="mt-1 text-[10px] font-mono text-gray-500 uppercase tracking-[0.25em]">
              Credential_Recovery
            </p>
          </div>
          <div className="text-right">
            <p className="text-[9px] font-mono text-gray-500 uppercase tracking-[0.2em]">
              FILE: RESET_01
            </p>
            <p className="text-[9px] font-mono text-gray-600">
              Access requires a valid recovery link.
            </p>
          </div>
        </div>

        <div className="bg-black border border-gray-800 px-6 py-6 md:px-8 md:py-8 shadow-[0_0_40px_rgba(0,0,0,0.8)]">
          <h1 className="text-2xl md:text-3xl font-black tracking-tight mb-2">
            Reset Passkey.
          </h1>
          <p className="text-sm text-gray-400 mb-6 max-w-xs">
            Set a new private passkey for your node. This link is single-use
            and time-limited.
          </p>

          {!hasToken && (
            <div className="mb-4">
              <div className="text-[10px] font-mono text-red-400 bg-red-950/40 border border-red-900 px-3 py-2">
                No active recovery token detected. Use the link from your email.
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block font-mono text-[10px] uppercase tracking-[0.25em] text-gray-500 mb-2">
                New Passkey
              </label>
              <input
                type="password"
                minLength={6}
                autoComplete="new-password"
                className="w-full bg-black text-white text-sm border border-gray-700 px-3 py-2 focus:border-white outline-none"
                placeholder="••••••••"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <div>
              <label className="block font-mono text-[10px] uppercase tracking-[0.25em] text-gray-500 mb-2">
                Confirm Passkey
              </label>
              <input
                type="password"
                minLength={6}
                autoComplete="new-password"
                className="w-full bg-black text-white text-sm border border-gray-700 px-3 py-2 focus:border-white outline-none"
                placeholder="••••••••"
                required
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
            </div>

            <div className="text-[11px] font-mono text-red-400 min-h-[1.5rem]">
              {error}
            </div>
            <div className="text-[11px] font-mono text-emerald-400 min-h-[1.5rem]">
              {success}
            </div>

            <button
              type="submit"
              className="w-full h-11 bg-white text-black text-[11px] font-black tracking-[0.25em] uppercase flex items-center justify-center disabled:bg-gray-300 disabled:text-gray-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Committing…' : 'Commit New Passkey'}
            </button>
          </form>

          <p className="mt-4 text-[10px] font-mono text-gray-500 leading-relaxed">
            If this link has expired, return to the Kemet app and request a new
            recovery transmission from the login screen.
          </p>
        </div>
      </div>
    </div>
  );
}

