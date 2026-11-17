'use client';

import {
  ClipboardDocumentCheckIcon,
  ClipboardIcon
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useLocale } from '@/i18n/LocaleProvider';
import Button from '@components/ui/Button';
import Input from '@components/ui/Input';
import {
  ReceiveSecretRequestBody,
  ReceiveSecretResponseBody
} from '@interfaces/secretShare';

export default function SecretShareReceiveForm() {
  const polish = useLocale() === 'pl';
  const [secret, setSecret] = useState<string>();
  const [isCopied, setIsCopied] = useState(false);

  const { id } = useParams();

  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors }
  } = useForm<{
    id: string;
    key: string;
  }>({ defaultValues: { id: id as string } });

  async function _submit(payload: ReceiveSecretRequestBody) {
    const response =
      await handleReceiveSecretRequest<ReceiveSecretResponseBody>(payload);

    if (response) {
      setSecret(response.message);
    }
  }

  async function handleReceiveSecretRequest<T>(
    payload: ReceiveSecretRequestBody
  ): Promise<T | undefined> {
    const response = await fetch('/api/secret-share/receive', {
      method: 'post',
      headers: {
        Accept: 'application/json'
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

  if (!secret) {
    return (
      <form className="w-full lg:px-10" onSubmit={handleSubmit(_submit)}>
        <div className="grid w-full gap-4">
          <div>
            <Input
              label={polish ? 'Identyfikator wiadomości' : 'Message ID'}
              {...register('id')}
              disabled
            />
          </div>
          <div>
            <Input
              label={polish ? 'Klucz' : 'Key'}
              {...register('key')}
              errorMessage={errors.key?.message}
            />
          </div>
          <div className="mt-6">
            <Button isSubmitting={isSubmitting}>
              {polish ? 'Otwórz wiadomość' : 'Unlock message'}
            </Button>
          </div>
        </div>
      </form>
    );
  } else {
    return (
      <div className="rounded-xl bg-white p-10 break-words">
        <p className="font-medium uppercase">
          {polish ? 'Poufna wiadomość' : 'Secret message'}
        </p>
        <p className="mt-2">{secret}</p>
        <div className="mt-6">
          <button
            title={polish ? 'Kopiuj do schowka' : 'Copy to clipboard'}
            onClick={() => handleCopyToClipboard(secret)}
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
    );
  }
}
