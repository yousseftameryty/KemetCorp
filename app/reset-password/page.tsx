'use client';

import { FormEvent, useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasToken, setHasToken] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const hashRaw = window.location.hash.startsWith('#')
      ? window.location.hash.slice(1)
      : window.location.hash;
    const hashParams = new URLSearchParams(hashRaw);
    const searchParams = new URLSearchParams(window.location.search);

    const errorParam =
      hashParams.get('error') || searchParams.get('error');
    const errorDescriptionParam =
      hashParams.get('error_description') ||
      searchParams.get('error_description');

    if (errorParam) {
      setHasToken(false);
      setError(
        errorDescriptionParam ||
          'This recovery link is invalid or has expired. Request a new link from the app.'
      );
      return;
    }

    const typeParam =
      hashParams.get('type') || searchParams.get('type');
    const accessToken = hashParams.get('access_token');
    const refreshToken = hashParams.get('refresh_token');

    const hasAnyParams =
      !!typeParam || !!accessToken || !!refreshToken;
    setHasToken(hasAnyParams);

    if (typeParam !== 'recovery' || !accessToken || !refreshToken) {
      return;
    }

    const client = createClient();

    client.auth
      .setSession({
        access_token: accessToken,
        refresh_token: refreshToken,
      })
      .then(({ error: sessionError }) => {
        if (sessionError) {
          setError(
            'This recovery link is invalid or has expired. Request a new link from the app.'
          );
        } else {
          setSuccess('Recovery link verified. Set your new passkey.');
        }
      })
      .catch(() => {
        setError(
          'This recovery link is invalid or has expired. Request a new link from the app.'
        );
      });
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedPassword = password || '';
    const trimmedConfirm = confirmPassword || '';

    const disallowed = [
      '123456',
      '123456789',
      '123123',
      '000000',
      '111111',
      'password',
      'qwerty',
      'letmein',
      'admin',
    ];

    if (trimmedPassword.length < 12) {
      setError(
        'Passkey must be at least 12 characters with upper, lower, number, and symbol.'
      );
      setSuccess('');
      return;
    }

    const hasUpper = /[A-Z]/.test(trimmedPassword);
    const hasLower = /[a-z]/.test(trimmedPassword);
    const hasNumber = /[0-9]/.test(trimmedPassword);
    const hasSymbol = /[^A-Za-z0-9]/.test(trimmedPassword);

    if (!hasUpper || !hasLower || !hasNumber || !hasSymbol) {
      setError(
        'Passkey must include uppercase, lowercase, number, and symbol characters.'
      );
      setSuccess('');
      return;
    }

    if (/\s/.test(trimmedPassword)) {
      setError('Passkey cannot contain spaces.');
      setSuccess('');
      return;
    }

    if (/(.)\1{3,}/.test(trimmedPassword)) {
      setError('Passkey cannot contain long sequences of repeated characters.');
      setSuccess('');
      return;
    }

    const lowered = trimmedPassword.toLowerCase();
    if (disallowed.some((value) => lowered.includes(value))) {
      setError('Passkey is too weak or common. Choose a more complex passkey.');
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
