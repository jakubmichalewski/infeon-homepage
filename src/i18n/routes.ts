import { Locale } from './config';

const polishRoutes: Record<string, [title: string, description?: string]> = {
  'IT Services': [
    'Usługi IT',
    'Rozwijaj swoją firmę z Infeon Tech dzięki rozwiązaniom z zakresu danych, automatyzacji i doradztwa technologicznego.'
  ],
  Services: [
    'Usługi',
    'Dopasuj technologię do strategii swojej firmy, usprawnij procesy i obsługę klientów oraz ogranicz koszty i ryzyko.'
  ],
  'Case Studies': [
    'Realizacje',
    'Zobacz, jak klienci skorzystali z naszego doświadczenia i podejścia.'
  ],
  'About Us': ['O nas', 'Poznaj Infeon Tech, firmę technologiczną z Polski.'],
  'Contact Us': [
    'Kontakt',
    'Skontaktuj się z nami, jeśli masz pytania o nasze usługi, potrzebujesz konsultacji lub chcesz omówić pomysł.'
  ],
  'Our Team': ['Nasz zespół', 'Poznaj zespół Infeon Tech.'],
  'Thank you': ['Dziękujemy', 'Dziękujemy za kontakt z Infeon Tech.'],
  'Terms and conditions': ['Regulamin'],
  'Privacy policy': ['Polityka prywatności'],
  'Dax Formatter': [
    'Formater DAX',
    'Formatuj kod DAX za pomocą prostego narzędzia.'
  ],
  'Secret Share': [
    'Udostępnianie sekretów',
    'Udostępniaj bezpiecznie hasła i wiadomości tekstowe.'
  ],
  Assessments: ['Samoocena'],
  'Strategic Consultancy': ['Doradztwo strategiczne'],
  'Audits & Assessments': ['Audyty i oceny'],
  Design: ['Projektowanie'],
  Development: ['Tworzenie oprogramowania'],
  'Business Intelligence': ['Analityka biznesowa'],
  Cloud: ['Chmura'],
  'Change Leadership': [
    'Zarządzanie zmianą',
    'Pomagamy zaplanować zmiany i skutecznie je wdrożyć, tak aby zespół sprawnie przyjął nowe sposoby pracy.'
  ],
  'Cyber Security': [
    'Cyberbezpieczeństwo',
    'Identyfikujemy podatności, pomagamy chronić zasoby i wspieramy zgodność z wymogami cyberbezpieczeństwa.'
  ],
  'Technology Strategy': [
    'Strategia technologiczna',
    'Wspólnie opracujemy strategię technologiczną i plan działań dopasowany do celów Twojej firmy.'
  ],
  'Compliance Audit': [
    'Audyt zgodności',
    'Sprawdź, w jakim stopniu Twoja organizacja spełnia obowiązujące wymagania, i dowiedz się, co warto poprawić.'
  ],
  'Cyber Security Audit': [
    'Audyt cyberbezpieczeństwa',
    'Oceń zabezpieczenia organizacji, zidentyfikuj luki i zaplanuj działania, które ograniczą ryzyko.'
  ],
  'ITSM Assessment': [
    'Ocena ITSM',
    'Sprawdź, jak działa zarządzanie usługami IT i gdzie możesz poprawić procesy oraz jakość obsługi.'
  ],
  'Technology Maturity': [
    'Dojrzałość technologiczna',
    'Oceń dojrzałość technologiczną organizacji i ustal, na czym skoncentrować dalsze inwestycje.'
  ],
  'UX Review': [
    'Audyt UX',
    'Sprawdź, gdzie użytkownicy napotykają trudności, i poznaj sposoby na poprawę użyteczności produktu.'
  ],
  'UI Design': [
    'Projektowanie UI',
    'Projektujemy spójne, intuicyjne i atrakcyjne wizualnie interfejsy dopasowane do potrzeb użytkowników.'
  ],
  'UX Design': [
    'Projektowanie UX',
    'Projektujemy doświadczenia, które pomagają użytkownikom łatwo i sprawnie korzystać z Twojego produktu.'
  ],
  'Data Warehouse': [
    'Hurtownie danych',
    'Zintegruj dane z wielu źródeł, aby usprawnić raportowanie, analizę i podejmowanie decyzji biznesowych.'
  ],
  'Data Transformation': [
    'Transformacja danych',
    'Porządkujemy i przekształcamy dane, aby można było je wiarygodnie wykorzystywać w analizach i raportach.'
  ],
  'Power BI Reports': [
    'Raporty Power BI',
    'Tworzymy interaktywne raporty Power BI, które ułatwiają analizę danych i podejmowanie decyzji.'
  ],
  'Minimum Viable Product': [
    'Minimalna wersja produktu (MVP)',
    'Szybko tworzymy bezpieczną pierwszą wersję produktu, aby zweryfikować pomysł, zebrać opinie i sprawniej wejść na rynek.'
  ],
  'Web Development': [
    'Aplikacje webowe',
    'Projektujemy i tworzymy aplikacje webowe dopasowane do potrzeb Twojej firmy i specyfiki branży.'
  ],
  'Mobile Development': [
    'Aplikacje mobilne',
    'Tworzymy aplikacje mobilne na różne platformy i wspieramy je od pierwszej koncepcji po utrzymanie.'
  ],
  'Low-Code Development': [
    'Rozwiązania low-code',
    'Sprawnie budujemy oprogramowanie dostosowane do Twoich wymagań, wykorzystując platformy low-code.'
  ],
  'Database Development': [
    'Tworzenie baz danych',
    'Projektujemy nowe bazy danych, a także rozwijamy i utrzymujemy istniejące systemy informacyjne.'
  ],
  'React Development': [
    'Aplikacje w React',
    'Tworzymy kompletne aplikacje w React lub wspieramy Twój zespół specjalistyczną wiedzą.'
  ],
  'NextJs Development': [
    'Aplikacje w Next.js',
    'Budujemy szybkie, bezpieczne i skalowalne aplikacje renderowane po stronie serwera za pomocą Next.js.'
  ],
  'Angular Development': [
    'Aplikacje w Angularze',
    'Tworzymy wydajne i skalowalne aplikacje webowe w Angularze, korzystając z architektury komponentowej.'
  ],
  'Vue Development': [
    'Aplikacje w Vue',
    'Rozwijamy aplikacje w Vue, dostosowując funkcje i doświadczenie użytkownika do potrzeb projektu.'
  ],
  'C# Development': [
    'Programowanie w C#',
    'Tworzymy i rozwijamy aplikacje biznesowe w C#, korzystając z doświadczenia w projektach korporacyjnych.'
  ],
  'Go Development': [
    'Programowanie w Go',
    'Wykorzystujemy nasze doświadczenie w Go, aby tworzyć wydajne oprogramowanie dopasowane do Twoich potrzeb.'
  ],
  DevOps: [
    'DevOps',
    'Automatyzujemy tworzenie, wdrażanie i utrzymanie oprogramowania, aby usprawnić pracę zespołów IT.'
  ],
  Infrastructure: [
    'Infrastruktura',
    'Projektujemy i rozwijamy infrastrukturę IT wspierającą bieżące potrzeby i dalszy rozwój firmy.'
  ],
  'Native Cloud Development': [
    'Aplikacje cloud-native',
    'Tworzymy aplikacje zaprojektowane z myślą o skalowalności i możliwościach środowisk chmurowych.'
  ],
  'Auriga Services': ['Auriga Services', 'Realizacja dla Auriga Services'],
  'The Careers & Enterprise Company (CEC)': [
    'The Careers & Enterprise Company (CEC)',
    'Realizacja dla The Careers & Enterprise Company'
  ],
  'The Construction Industry Training Board': [
    'The Construction Industry Training Board',
    'Realizacja dla CITB'
  ],
  Culligan: ['Culligan', 'Realizacja dla Culligan']
};

export function localizeRoute<
  T extends { title: string; description?: string }
>(route: T, locale: Locale): T {
  const translation = locale === 'pl' && polishRoutes[route.title];
  if (!translation) return route;

  const [title, description] = translation;
  return {
    ...route,
    title,
    ...(route.description && description ? { description } : {})
  };
}
