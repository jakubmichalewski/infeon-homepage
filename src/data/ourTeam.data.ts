import type { Locale } from '@/i18n/config';

const ourTeamData = {
  leaders: [
    {
      name: 'Vincent Cassidy',
      position: { en: 'CIO', pl: 'Dyrektor ds. informatyki (CIO)' },
      bio: {
        en: 'Technology, change, and information security specialist, with over 20 years’ experience of establishing and delivering technology strategy to align with business need.',
        pl: 'Specjalista ds. technologii, zarządzania zmianą i bezpieczeństwa informacji. Od ponad 20 lat opracowuje i wdraża strategie technologiczne dopasowane do potrzeb biznesu.'
      },
      image: '/images/team/vincent-cassidy.png'
    },
    {
      name: 'Jakub Michalewski',
      position: { en: 'CTO', pl: 'Dyrektor ds. technologii (CTO)' },
      bio: {
        en: 'Experienced technical expert and leader with over 20 years of experience in software development, data analytics and DevOps.',
        pl: 'Ekspert technologiczny i lider z ponad 20-letnim doświadczeniem w tworzeniu oprogramowania, analizie danych i DevOps.'
      },
      image: '/images/team/jakub-michalewski.png'
    }
  ],
  specialists: [
    {
      name: 'Dawid',
      position: { en: 'Frontend Developer', pl: 'Programista frontend' },
      bio: {
        en: 'Creates fancy and innovative UIs with all the logic behind them in various applications.',
        pl: 'Tworzy nowoczesne interfejsy użytkownika i odpowiada za logikę ich działania w różnych aplikacjach.'
      },
      gender: 'man'
    },
    {
      name: 'Iwona',
      position: { en: 'Tester', pl: 'Testerka oprogramowania' },
      bio: {
        en: 'Manual and automation tester with attention to details, will find all the bugs in any software.',
        pl: 'Prowadzi testy manualne i automatyczne. Dzięki dbałości o szczegóły wykrywa błędy w oprogramowaniu.'
      },
      gender: 'woman'
    },
    {
      name: 'Katarzyna',
      position: {
        en: 'Business Intelligence Engineer',
        pl: 'Inżynierka Business Intelligence'
      },
      bio: {
        en: 'Knowledgeable BI engineer and architect.',
        pl: 'Doświadczona inżynierka i architektka rozwiązań Business Intelligence.'
      },
      gender: 'woman'
    },
    {
      name: 'Mateusz',
      position: {
        en: 'Head of Software Development and DevOps',
        pl: 'Kierownik zespołu wytwarzania oprogramowania i DevOps'
      },
      bio: {
        en: 'Experienced developer focused on delivering high-quality software.',
        pl: 'Doświadczony programista, który dba o wysoką jakość dostarczanego oprogramowania.'
      },
      gender: 'man'
    },
    {
      name: 'Michał',
      position: {
        en: 'Head of Business Analysts',
        pl: 'Kierownik zespołu analiz biznesowych'
      },
      bio: {
        en: 'Master in requirements gathering and ensuring clients needs are always meet.',
        pl: 'Specjalizuje się w zbieraniu wymagań i dba o to, by rozwiązania odpowiadały na potrzeby klientów.'
      },
      gender: 'man'
    },
    {
      name: 'Sebastian',
      position: { en: 'Head of User Experience', pl: 'Kierownik zespołu UX' },
      bio: {
        en: 'Creative mind with over 20 years experience in software development.',
        pl: 'Łączy kreatywne podejście z ponad 20-letnim doświadczeniem w tworzeniu oprogramowania.'
      },
      gender: 'man'
    }
  ]
};

export function getOurTeamData(locale: Locale) {
  return {
    leaders: ourTeamData.leaders.map((person) => ({
      ...person,
      position: person.position[locale],
      bio: person.bio[locale]
    })),
    specialists: ourTeamData.specialists.map((person) => ({
      ...person,
      position: person.position[locale],
      bio: person.bio[locale]
    }))
  };
}
