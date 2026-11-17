import { getLocale } from '@/i18n/server';
import DaxFormatterForm from '@components/features/DaxFormatterForm/DaxFormatterForm';
import Heading from '@components/ui/Heading';
import Section from '@components/ui/Section';
import buildMetadata from '@helpers/buildMetadata';
import { routes } from '@routes/routes';

export async function generateMetadata() {
  return buildMetadata(routes.daxFormatter.root, await getLocale());
}

export default async function DaxFormatterPage() {
  const polish = (await getLocale()) === 'pl';

  return (
    <Section className="mt-16 lg:mt-24">
      <div className="mx-auto max-w-screen-lg">
        <Heading level={2}>
          {polish ? 'Formatuj kod DAX' : 'Format DAX'}
        </Heading>
        <p className="mt-4">
          {polish
            ? 'Zadbaj o czytelność kodu DAX dzięki naszemu bezpłatnemu narzędziu do formatowania.'
            : 'Keep your DAX code easy to read with our free formatting tool.'}
        </p>

        <div className="mt-6">
          <DaxFormatterForm />
        </div>
      </div>
    </Section>
  );
}
