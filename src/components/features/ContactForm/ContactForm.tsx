'use client';

import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useForm } from 'react-hook-form';

import { useLocale } from '@/i18n/LocaleProvider';
import Button from '@components/ui/Button';
import FormCheckbox from '@components/ui/Checkbox';
import Input from '@components/ui/Input';
import TextArea from '@components/ui/Textarea';
import {
  validateEmail,
  validatePhoneNumber,
  validateRequired
} from '@helpers/validators';

type Props = {
  callback: (
    gReCaptchaToken: string,
    payload: ContactFormPayload
  ) => Promise<void>;
};

export default function ContactForm(props: Props) {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const polish = useLocale() === 'pl';
  const required = validateRequired(polish ? 'Pole wymagane' : undefined);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormPayload>();

  const _submit = (payload: ContactFormPayload) => {
    if (!executeRecaptcha) {
      return;
    }
    return executeRecaptcha('enquiryFormSubmit').then((gReCaptchaToken) =>
      props.callback(gReCaptchaToken, payload)
    );
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit((data, event) => {
        event?.preventDefault();
        return _submit(data);
      })}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Input
            {...register('firstName', required)}
            label={polish ? 'Imię' : 'First name'}
            errorMessage={errors?.firstName?.message}
            autoComplete="given-name"
            required
          />
        </div>
        <div>
          <Input
            {...register('lastName', required)}
            label={polish ? 'Nazwisko' : 'Last name'}
            errorMessage={errors?.lastName?.message}
            autoComplete="family-name"
            required
          />
        </div>
        <div>
          <Input
            {...register('email', {
              ...required,
              ...validateEmail(
                polish
                  ? 'Podaj adres e-mail w formacie np. imie@example.com'
                  : undefined
              )
            })}
            label={polish ? 'Adres e-mail' : 'Email'}
            errorMessage={errors?.email?.message}
            autoComplete="email"
            required
          />
        </div>
        <div>
          <Input
            {...register(
              'phone',
              validatePhoneNumber(
                polish ? 'Podaj poprawny numer telefonu' : undefined
              )
            )}
            label={polish ? 'Telefon' : 'Phone'}
            errorMessage={errors?.phone?.message}
            autoComplete="tel"
          />
        </div>
        <div className="col-span-full">
          <Input
            {...register('company')}
            label={polish ? 'Firma' : 'Company'}
            errorMessage={errors?.company?.message}
            autoComplete="company"
          />
        </div>
        <div className="col-span-full">
          <Input
            {...register('howYouFindUs')}
            label={
              polish
                ? 'Skąd wiesz o Infeon Tech?'
                : 'How did you hear about Infeon Tech?'
            }
            errorMessage={errors?.howYouFindUs?.message}
            autoComplete="tel"
          />
        </div>
        <div className="col-span-full">
          <TextArea
            {...register('message', required)}
            label={polish ? 'Twoja wiadomość' : 'Your message'}
            errorMessage={errors?.message?.message}
            rows={4}
            required
            className="resize-none"
          />
        </div>
        <div className="col-span-full">
          <FormCheckbox
            {...register('isCompliant', required)}
            required
            errorMessage={errors?.isCompliant?.message}
            label={
              polish
                ? 'Wyrażam zgodę na kontakt ze strony Infeon Tech drogą mailową lub telefoniczną.'
                : 'I agree that Infeon Tech may contact me by email or phone.'
            }
          />
        </div>
        <div className="col-span-full">
          <FormCheckbox
            {...register('isMarketing')}
            label={
              polish
                ? 'Wyrażam zgodę na otrzymywanie od Infeon Tech materiałów marketingowych drogą mailową.'
                : 'I agree to receive marketing materials from Infeon Tech by email.'
            }
          />
        </div>
      </div>

      <div className="mt-8">
        <Button isSubmitting={isSubmitting}>
          {polish ? 'Wyślij wiadomość' : 'Send message'}
        </Button>
      </div>
    </form>
  );
}

export type ContactFormPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  howYouFindUs: string;
  message: string;
  isCompliant: string;
  isMarketing: string;
};
