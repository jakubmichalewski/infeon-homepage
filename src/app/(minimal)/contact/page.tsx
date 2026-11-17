import { getLocale } from '@/i18n/server';
import ContactFormWrapper from '@components/features/ContactForm/ContactFormWrapper';
import Heading from '@components/ui/Heading';
import Section from '@components/ui/Section';
import buildMetadata from '@helpers/buildMetadata';
import { routes } from '@routes/routes';

export async function generateMetadata() {
  return buildMetadata(routes.contact.root, await getLocale());
}

export default async function ContactPage() {
  const polish = (await getLocale()) === 'pl';

  return (
    <Section className="h-full bg-brand-50 py-20" id="contactForm">
      <div className="mx-auto my-auto grid h-full max-w-screen-sm items-center gap-12 lg:max-w-screen-xl lg:grid-cols-2">
        <div>
          <article>
            <Heading level={1} className="text-brand-700">
              {polish
                ? 'Zaufany partner dla Twojej firmy'
                : 'A trusted partner for your business'}
            </Heading>

            <p className="mt-6">
              {polish
                ? 'Masz pytania o nasze usługi, potrzebujesz konsultacji lub chcesz omówić swój pomysł? Chętnie Ci pomożemy.'
                : 'Whether you have a question about our services, need advice or want to discuss an idea, we’re here to help.'}
            </p>
          </article>
        </div>
        <div className="lg:px-10">
          <ContactFormWrapper />
        </div>
      </div>
    </Section>
  );
}
