'use client';

import {
  ClipboardDocumentCheckIcon,
  ClipboardIcon,
  RocketLaunchIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import React, { FormEvent, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useLocale } from '@/i18n/LocaleProvider';
import { localeHeader } from '@/i18n/config';
import ErrorMessage from '@components/ui/ErrorMessage';
import Spinner from '@components/ui/Spinner';
import { validateRequired } from '@helpers/validators';

export default function DaxFormatterForm() {
  const locale = useLocale();
  const polish = locale === 'pl';
  const [results, setResults] = useState<string>();
  const [isCopied, setIsCopied] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { isSubmitting, errors }
  } = useForm<{ code: string }>();

  function handleChange(e: FormEvent<HTMLTextAreaElement>) {
    e.currentTarget.style.height = 'auto';
    e.currentTarget.style.height = e.currentTarget.scrollHeight + 'px';
  }

  async function handleCopyToClipboard(payload: string) {
    await navigator.clipboard.writeText(payload);

    setIsCopied(true);
  }

  async function _submit(payload: { code: string }) {
    const result = await getResults(payload.code);

    setResults(result);
  }

  function _clear() {
    if (results) {
      setResults(undefined);
      setIsCopied(false);
    }

    reset();
  }

  async function getResults(payload: string) {
    const response = await fetch('/api/format-dax', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        [localeHeader]: locale
      },
      body: JSON.stringify({ expression: payload })
    });

    if (response.status == 200) {
      return response.json();
    } else {
      setError('code', {
        message: polish
          ? 'Niepoprawny kod DAX. Spróbuj ponownie.'
          : 'Invalid DAX. Please try again.'
      });
    }
  }

  function colorFormattedCode(code: string) {
    keywords.forEach((keyword) => {
      let regex = new RegExp(`\\b${keyword}\\b`, 'g');

      code = code.replace(
        regex,
        `<span class='text-brand-700'>${keyword}</span>`
      );
    });

    return code;
  }

  return (
    <>
      <ErrorMessage className="my-4">{errors.code?.message}</ErrorMessage>

      <form onSubmit={handleSubmit((data) => _submit(data))}>
        <div className="relative flex">
          <div className="h-fit flex-1 border-l-2 border-slate-200 pr-6">
            {results ? (
              <code
                className="block px-6 py-4 font-mono whitespace-pre-wrap"
                dangerouslySetInnerHTML={{
                  __html: colorFormattedCode(results)
                }}
              />
            ) : (
              <textarea
                {...register('code', {
                  ...validateRequired(
                    polish ? 'Wpisz kod DAX' : 'Enter your DAX code'
                  )
                })}
                rows={3}
                placeholder={polish ? 'Wpisz kod DAX' : 'Enter your DAX code'}
                aria-label={polish ? 'Kod DAX' : 'DAX code'}
                onInputCapture={handleChange}
                className="wh block w-full resize-none overflow-y-hidden rounded-r-xl border-0 px-6 py-4 font-mono transition hover:shadow-lg hover:shadow-slate-900/5 focus:bg-brand-50 focus:shadow-none focus:ring-0"
              />
            )}
          </div>
          <div className="sticky top-28 flex h-fit flex-col gap-2">
            {results ? (
              <button
                type="button"
                title={polish ? 'Kopiuj do schowka' : 'Copy to clipboard'}
                onClick={() => handleCopyToClipboard(results)}
                className={clsx(
                  'size-12 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600',
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
            ) : (
              <button
                title={polish ? 'Formatuj kod DAX' : 'Format DAX'}
                className="flex size-12 items-center justify-center rounded-xl bg-brand-600 text-white hover:bg-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
              >
                {isSubmitting ? (
                  <Spinner
                    className="absolute h-5 w-5 text-current"
                    strokeWidth={2}
                  />
                ) : (
                  <RocketLaunchIcon className="mx-auto h-6 w-6" />
                )}
              </button>
            )}
            <button
              title={polish ? 'Wyczyść' : 'Reset'}
              type="button"
              onClick={_clear}
              className="size-12 rounded-xl border border-brand-200 text-brand-700 hover:bg-brand-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
            >
              <XMarkIcon className="mx-auto h-6 w-6" />
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

const keywords = [
  'SUM',
  'AVERAGE',
  'MIN',
  'MAX',
  'COUNT',
  'COUNTA',
  'COUNTROWS',
  'DISTINCTCOUNT',
  'SUMX',
  'AVERAGEX',
  'MINX',
  'MAXX',
  'DATE',
  'NOW',
  'TODAY',
  'YEAR',
  'MONTH',
  'DAY',
  'HOUR',
  'MINUTE',
  'SECOND',
  'DATEDIFF',
  'DATEADD',
  'EOMONTH',
  'WEEKDAY',
  'WEEKNUM',
  'IF',
  'AND',
  'OR',
  'NOT',
  'SWITCH',
  'TRUE',
  'FALSE',
  'IFERROR',
  'ROUND',
  'INT',
  'MOD',
  'ABS',
  'SQRT',
  'RAND',
  'RANDBETWEEN',
  'CONCATENATE',
  'EXACT',
  'LEFT',
  'RIGHT',
  'MID',
  'LOWER',
  'UPPER',
  'TRIM',
  'REPLACE',
  'SUBSTITUTE',
  'LEN',
  'SEARCH',
  'FIND',
  'FILTER',
  'ALL',
  'ALLEXCEPT',
  'ALLSELECTED',
  'VALUES',
  'RELATED',
  'RELATEDTABLE',
  'CALCULATE',
  'CALCULATETABLE',
  'SELECTEDVALUE',
  'VAR',
  'VARP',
  'STDEV',
  'STDEVP',
  'RANKX',
  'TOTALYTD',
  'TOTALQTD',
  'TOTALMTD',
  'SAMEPERIODLASTYEAR',
  'PARALLELPERIOD',
  'DATESYTD',
  'DATESQTD',
  'DATESMTD',
  'ISBLANK',
  'ISNUMBER',
  'ISTEXT',
  'ISNONTEXT',
  'ISERROR',
  'ISEVEN',
  'ISODD',
  'USERNAME',
  'ISFILTERED',
  'ISCROSSFILTERED',
  'PATH',
  'PATHLENGTH',
  'PATHITEM',
  'PATHITEMREVERSE',
  'EVALUATE',
  'SUMMARIZE',
  'SUMMARIZECOLUMNS',
  'ADDCOLUMNS',
  'SELECTCOLUMNS',
  'DISTINCT',
  'WINDOW',
  'ORDERBY',
  'REL',
  'PARTITIONBY',
  'TOJSON',
  'SOR',
  'ASC'
];
