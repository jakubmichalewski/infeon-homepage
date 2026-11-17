import { Metadata } from 'next';

import { getLocale } from '@/i18n/server';
import BulletList from '@components/ui/BulletList';
import Section from '@components/ui/Section';
import Triangle from '@components/ui/Triangle';
import buildMetadata from '@helpers/buildMetadata';
import { routes } from '@routes/routes';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata(routes.privacyPolicy.root, await getLocale());
}
export default async function PrivacyPolicyPage() {
  const locale = await getLocale();
  const listOne =
    locale === 'pl'
      ? [
          'Imię, nazwisko i stanowisko.',
          'Dane kontaktowe, w tym adres e-mail.',
          'Informacje demograficzne, takie jak kod pocztowy, preferencje i zainteresowania.',
          'Inne informacje istotne dla ankiet lub ofert kierowanych do klientów.'
        ]
      : [
          'Name and job title.',
          'Contact information including email address.',
          'Demographic information such as postcode, preferences and interests.',
          'Other information relevant to customer surveys and/or offers.'
        ];

  const listTwo =
    locale === 'pl'
      ? [
          'Prowadzenie wewnętrznej dokumentacji.',
          'Udoskonalanie naszych produktów i usług.',
          'Okresowe wysyłanie na podany adres e-mail wiadomości promocyjnych dotyczących nowych produktów, ofert specjalnych lub innych informacji, które mogą Cię zainteresować.',
          'Okresowy kontakt na potrzeby badań rynku za pośrednictwem poczty elektronicznej, telefonu lub poczty tradycyjnej. Informacje mogą również posłużyć do dostosowania witryny Endpoint Tech Ltd do Twoich zainteresowań.'
        ]
      : [
          'Internal record keeping.',
          'We may use the information to improve our products and services.',
          'We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address you have provided.',
          'From time to time, we may also use your information to (minimal) you for market research purposes. We may (minimal) you by email, phone or mail. We may use the information to customise the Endpoint Tech Ltd website according to your interests.'
        ];

  const listThree =
    locale === 'pl'
      ? [
          'Podczas wypełniania formularza w witrynie poszukaj pola umożliwiającego zaznaczenie, że nie chcesz, aby ktokolwiek wykorzystywał podane informacje do celów marketingu bezpośredniego.',
          'Jeśli wcześniej udzielono nam zgody na wykorzystywanie danych osobowych do celów marketingu bezpośredniego, zgodę można w każdej chwili wycofać listownie lub mailowo na adres podany w oryginale jako (minimal)@endpoint-it.co.uk.'
        ]
      : [
          'Whenever you are asked to fill in a form on the website, look for the box that you can click to indicate that you do not want the information to be used by anybody for direct marketing purposes.',
          'If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by writing to or emailing us at (minimal)@endpoint-it.co.uk.'
        ];

  return (
    <Section className="mx-auto max-w-screen-sm py-12 md:py-16 lg:max-w-screen-lg">
      <Triangle className="absolute top-0 right-0 -z-20 h-auto w-4/5 transform fill-current stroke-current text-slate-50" />
      <article>
        <h1 className="mx-auto w-full text-3xl font-bold">
          {locale === 'pl'
            ? 'Polityka prywatności Endpoint Tech Ltd'
            : 'Endpoint Tech Ltd Privacy Policy'}
        </h1>

        <p className="mt-6 rounded-lg bg-slate-100 p-4 text-slate-800">
          {locale === 'pl'
            ? 'Dokument archiwalny. Poniższa polityka prywatności dotyczyła poprzedniej witryny prowadzonej przez brytyjską spółkę Endpoint Tech Ltd.'
            : 'Archived document. This privacy policy applied to the previous website operated by Endpoint Tech Ltd in the United Kingdom.'}
        </p>

        <p className="mt-8 text-slate-600">
          {locale === 'pl'
            ? 'Niniejsza polityka prywatności opisuje, w jaki sposób Endpoint Tech Ltd wykorzystuje i chroni informacje przekazywane firmie podczas korzystania z tej witryny.'
            : 'This privacy policy sets out how Endpoint Tech Ltd uses and protects any information that you give Endpoint Tech Ltd when you use this website.'}
        </p>

        <p className="mt-4 text-slate-600">
          {locale === 'pl'
            ? 'Endpoint Tech Ltd zobowiązuje się chronić Twoją prywatność. Jeśli poprosimy o informacje umożliwiające identyfikację podczas korzystania z witryny, wykorzystamy je wyłącznie zgodnie z niniejszą polityką prywatności.'
            : 'Endpoint Tech Ltd is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will only be used in accordance with this privacy policy statement.'}
        </p>

        <p className="mt-4 text-slate-600">
          {locale === 'pl'
            ? 'Endpoint Tech Ltd może zmieniać niniejszą politykę, aktualizując tę stronę. Warto sprawdzać ją co pewien czas, aby zapoznać się ze zmianami. Polityka obowiązuje od 1 kwietnia 2022 r.'
            : 'Endpoint Tech Ltd may change this privacy policy from time to time by updating this page. You should check this page from time to time to ensure that you are happy with any changes. This privacy policy is effective from 1st April 2022.'}
        </p>

        <h2 className="mt-8 text-xl font-bold">
          {locale === 'pl'
            ? 'Jakie dane zbieramy'
            : 'What we collect – as defined in this privacy policy'}
        </h2>

        <p className="mt-4 text-slate-600">
          {locale === 'pl'
            ? 'Możemy zbierać następujące informacje:'
            : 'We may collect the following information:'}
        </p>

        <div className="my-4">
          <BulletList data={listOne} />
        </div>

        <h2 className="mt-8 text-xl font-bold">
          {locale === 'pl'
            ? 'Jak wykorzystujemy zebrane informacje'
            : 'What we do with the information we gather'}
        </h2>

        <p className="mt-4 text-slate-600">
          {locale === 'pl'
            ? 'Podczas rejestracji prosimy o te informacje, aby lepiej zrozumieć Twoje potrzeby i doskonalić świadczone usługi, w szczególności w następujących celach:'
            : 'When you sign up, we require this information to understand your needs and to provide you with a better service, and in particular for the following reasons:'}
        </p>

        <div className="my-4">
          <BulletList data={listTwo} />
        </div>

        <h2 className="mt-8 text-xl font-bold">
          {locale === 'pl' ? 'Bezpieczeństwo' : 'Security'}
        </h2>

        <p className="mt-4 text-slate-600">
          {locale === 'pl'
            ? 'Zobowiązujemy się zapewniać bezpieczeństwo Twoich informacji. Aby zapobiec nieuprawnionemu dostępowi lub ujawnieniu, stosujemy procedury fizyczne, elektroniczne i organizacyjne służące ochronie danych zbieranych przez internet.'
            : 'We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.'}
        </p>

        <h2 className="mt-8 text-xl font-bold">
          {locale === 'pl'
            ? 'Jak wykorzystujemy pliki cookie'
            : 'How we use cookies'}
        </h2>

        <p className="mt-4 text-slate-600">
          {locale === 'pl'
            ? 'Plik cookie to niewielki plik, który witryna może zapisać na Twoim urządzeniu za Twoją zgodą. Po zapisaniu plik pomaga analizować ruch lub rozpoznawać wizyty na określonej stronie. Pliki cookie pozwalają aplikacjom internetowym dostosować się do poszczególnych użytkowników.'
            : 'A cookie is a small file which asks permission to be placed on your computer’s hard drive. Once you agree, the file is added and the cookie helps analyse web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual.'}
        </p>

        <p className="mt-4 text-slate-600">
          {locale === 'pl'
            ? 'Aplikacja internetowa może dostosować działanie do Twoich potrzeb i upodobań, zapisując i zapamiętując informacje o Twoich preferencjach.'
            : 'The web application can tailor its operations to your needs, likes and dislikes by gathering and remembering information about your preferences.'}
        </p>

        <p className="mt-4 text-slate-600">
          {locale === 'pl'
            ? 'Używamy plików cookie do pomiaru ruchu i sprawdzania, które strony są odwiedzane. Dzięki temu możemy analizować ruch i ulepszać witrynę z uwzględnieniem potrzeb klientów. Wykorzystujemy te informacje wyłącznie do analiz statystycznych, po czym usuwamy je z systemu.'
            : 'We use traffic log cookies to identify which pages are being used. This helps us analyse data about web page traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system.'}
        </p>

        <p className="mt-4 text-slate-600">
          {locale === 'pl'
            ? 'Pliki cookie pomagają ulepszać witrynę, ponieważ dzięki nim możemy sprawdzić, które strony są dla Ciebie przydatne. Plik cookie nie daje nam dostępu do Twojego urządzenia ani do informacji innych niż te, które zdecydujesz się nam udostępnić.'
            : 'Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us.'}
        </p>

        <p className="mt-4 text-slate-600">
          {locale === 'pl'
            ? 'Możesz zaakceptować lub odrzucić pliki cookie. Większość przeglądarek akceptuje je automatycznie, ale zwykle można je wyłączyć w ustawieniach. Może to ograniczyć działanie niektórych funkcji witryny.'
            : 'You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer. This may prevent you from taking full advantage of the website.'}
        </p>

        <h2 className="mt-8 text-xl font-bold">
          {locale === 'pl'
            ? 'Odsyłacze do innych witryn'
            : 'Links to other websites'}
        </h2>

        <p className="mt-4 text-slate-600">
          {locale === 'pl'
            ? 'Nasza witryna może zawierać odsyłacze do innych stron. Po kliknięciu odsyłacza opuszczasz naszą witrynę i przechodzisz do serwisu, nad którym nie sprawujemy kontroli.'
            : 'Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website.'}
        </p>

        <p className="mt-4 text-slate-600">
          {locale === 'pl'
            ? 'Nie odpowiadamy za ochronę ani prywatność informacji przekazywanych podczas odwiedzania takich serwisów. Niniejsza polityka nie znajduje do nich zastosowania. Zachowaj ostrożność i zapoznaj się z polityką prywatności danego serwisu.'
            : 'Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites and such sites are not governed by this privacy statement. You should exercise caution and look at the privacy statement applicable to the website in question.'}
        </p>

        <h2 className="mt-8 text-xl font-bold">
          {locale === 'pl'
            ? 'Kontrola nad danymi osobowymi'
            : 'Controlling your personal information'}
        </h2>

        <p className="mt-4 text-slate-600">
          {locale === 'pl'
            ? 'Możesz ograniczyć zbieranie lub wykorzystywanie swoich danych osobowych w następujący sposób:'
            : 'You may choose to restrict the collection or use of your personal information in the following ways:'}
        </p>

        <div className="my-4">
          <BulletList data={listThree} />
        </div>

        <p className="mt-4 text-slate-600">
          {locale === 'pl'
            ? 'Nie sprzedajemy, nie udostępniamy ani nie wynajmujemy Twoich danych osobowych osobom trzecim bez Twojej zgody, chyba że wymaga tego prawo. Możemy przesyłać Ci informacje promocyjne dotyczące podmiotów trzecich, które mogą Cię zainteresować, jeśli wyrazisz takie życzenie.'
            : 'We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required to do so by law. We may use your personal information to send you promotional information about third parties which we think you may find interesting if you tell us that you wish for this to happen.'}
        </p>

        <p className="mt-4 text-slate-600">
          {locale === 'pl'
            ? 'Na podstawie brytyjskiej ustawy Data Protection Act 1998 możesz zwrócić się o informacje dotyczące przechowywanych przez nas danych osobowych. Za udostępnienie informacji pobierana jest niewielka opłata. Aby otrzymać kopię, napisz do Endpoint Tech Ltd, Thynne Cottage, Thynnes Lane, Mattishall, Dereham, NR20 3JU. Jeśli uważasz, że przechowywane przez nas dane są nieprawidłowe lub niekompletne, skontaktuj się z nami jak najszybciej listownie lub mailowo, korzystając z powyższych danych. Niezwłocznie poprawimy błędne informacje.'
            : 'You may request details of personal information which we hold about you under the Data Protection Act 1998. A small fee will be payable. If you would like a copy of the information held, please write to Endpoint Tech Ltd, Thynne Cottage, Thynnes Lane, Mattishall, Dereham, NR20 3JU. If you believe that any information we hold on you is incorrect or incomplete, please write to or email us as soon as possible, at the above address. We will promptly correct any information found to be incorrect.'}
        </p>

        <p className="mt-4 text-slate-600">Endpoint Tech Ltd.</p>
      </article>
    </Section>
  );
}
