import { getLocale } from '@/i18n/server';
import Button from '@components/ui/Button';
import Logo from '@components/ui/Logo';

export default async function NotFound() {
  const polish = (await getLocale()) === 'pl';

  return (
    <main className="mx-auto grid min-h-screen max-w-lg place-content-center gap-6 px-6 text-center">
      <Logo className="mx-auto" />
      <h1 className="text-2xl font-bold">
        {polish ? 'Strona nie została znaleziona' : 'Page not found'}
      </h1>
      <Button href="/">
        {polish ? 'Wróć na stronę główną' : 'Go to homepage'}
      </Button>
    </main>
  );
}
