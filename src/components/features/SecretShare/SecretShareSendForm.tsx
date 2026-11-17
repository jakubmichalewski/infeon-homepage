'use client';

import {
  ClipboardDocumentCheckIcon,
  ClipboardIcon
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useLocale } from '@/i18n/LocaleProvider';
import { localeHeader } from '@/i18n/config';
import Button from '@components/ui/Button';
import ErrorMessage from '@components/ui/ErrorMessage';
import Input from '@components/ui/Input';
import Select from '@components/ui/Select';
import Textarea from '@components/ui/Textarea';
import {
  SendSecretRequestBody,
  SendSecretResponseBody
} from '@interfaces/secretShare';

export default function SecretShareSendForm() {
  const locale = useLocale();
  const polish = locale === 'pl';
  const searchParams = useSearchParams();
  const email = searchParams.get('email');

  const [error, setError] = useState<string>();
  const [key, setKey] = useState<string>();
  const [isCopied, setIsCopied] = useState(false);

  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting, errors }
  } = useForm<SendSecretRequestBody>({
    defaultValues: { email: email ?? undefined }
  });

  async function _submit(payload: SendSecretRequestBody) {
    const response =
      await handleSendSecretRequest<SendSecretResponseBody>(payload);

    if (response) {
      setKey(response.key);
    } else {
      setError(
        polish
          ? 'Nie udało się wysłać poufnej wiadomości.'
          : 'We couldn’t send the secret.'
      );
    }
  }

  async function handleSendSecretRequest<T>(
    payload: SendSecretRequestBody
  ): Promise<T | undefined> {
    const response = await fetch('/api/secret-share/send', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        [localeHeader]: locale
      },
      body: JSON.stringify(payload)
    });

    if (response.status == 200) {
      return response.json();
    }
  }

  async function handleCopyToClipboard(payload: string) {
    await navigator.clipboard.writeText(payload);

    setIsCopied(true);
  }

  function handleNewSecret() {
    setIsCopied(false);
    setKey(undefined);
    setError(undefined);

    reset();
  }

  if (!key) {
    return (
      <form className="w-full" onSubmit={handleSubmit(_submit)}>
        <div className="grid w-full gap-4">
          <div>
            <Textarea
              rows={6}
              placeholder={
                polish ? 'Wpisz poufną wiadomość' : 'Enter your secret message'
              }
              label={polish ? 'Poufna wiadomość' : 'Your secret'}
              {...register('message')}
              errorMessage={errors.message?.message}
            />
          </div>
          <div>
            <Input
              label={polish ? 'Adres e-mail odbiorcy' : 'Recipient email'}
              {...register('email')}
              errorMessage={errors.email?.message}
            />
          </div>
          <div>
            <Select
              label={polish ? 'Czas ważności' : 'Expires in'}
              options={lifeSpanOptions.map(({ value, label }) => ({
                value,
                label: label[locale]
              }))}
              isSelected={true}
              {...register('lifespan')}
            />
          </div>
          {error && (
            <div>
              <ErrorMessage>{error}</ErrorMessage>
            </div>
          )}
          <div className="mt-8">
            <Button isSubmitting={isSubmitting}>
              {polish ? 'Wyślij' : 'Send'}
            </Button>
          </div>
        </div>
      </form>
    );
  } else {
    return (
      <div className="rounded-xl bg-white p-10">
        <p className="font-medium uppercase">
          {polish ? 'Twój klucz' : 'Your key'}
        </p>
        <p className="mt-2 break-all">{key}</p>
        <div className="mt-6 flex justify-between">
          <div>
            <Button variant={'bordered'} onClick={() => handleNewSecret()}>
              {polish ? 'Nowa wiadomość' : 'New message'}
            </Button>
          </div>
          <div>
            <button
              title={polish ? 'Kopiuj do schowka' : 'Copy to clipboard'}
              onClick={() => handleCopyToClipboard(key)}
              className={clsx(
                'size-12 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600',
                isCopied
                  ? 'bg-brand-100 text-brand-700 hover:bg-brand-200'
                  : 'border border-brand-200 text-brand-700 hover:bg-brand-50'
              )}
            >
              {isCopied ? (
                <ClipboardDocumentCheckIcon className="mx-auto h-6 w-6" />
              ) : (
                <ClipboardIcon className="mx-auto h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const lifeSpanOptions = [
  { label: { en: '1 hour', pl: '1 godzina' }, value: 1 },
  { label: { en: '4 hours', pl: '4 godziny' }, value: 4 },
  { label: { en: '8 hours', pl: '8 godzin' }, value: 8 },
  { label: { en: '1 day', pl: '1 dzień' }, value: 24 },
  { label: { en: '2 days', pl: '2 dni' }, value: 48 },
  { label: { en: '3 days', pl: '3 dni' }, value: 72 },
  { label: { en: '7 days', pl: '7 dni' }, value: 168 }
];
