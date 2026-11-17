import type { Locale } from '@/i18n/config';

type TermsBlock =
  | { kind: 'paragraph' | 'subheading' | 'privacyLink'; text: string }
  | { kind: 'list'; items: string[] };

type TermsCopy = {
  title: string;
  archiveNotice: string;
  sections: { title: string; body: TermsBlock[] }[];
};

export const legacyTerms: Record<Locale, TermsCopy> = {
  en: {
    title: 'Terms and Conditions',
    archiveNotice:
      'Archived document. These terms applied to the previous website operated by Endpoint Tech Ltd in the United Kingdom.',
    sections: [
      {
        title: '1. Agreement to terms',
        body: [
          {
            kind: 'paragraph',
            text: 'These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and Endpoint Tech LTD ("Company," “we," “us," or “our”), concerning your access to and use of the https://www.endpoint-it.co.uk website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”). We are registered in the United Kingdom and have our registered office at Thynne Cottage Thynnes Lane, Mattishall, Dereham NR20 3JU. Our VAT number is 385496248. You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms of Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY. Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Use from time to time. We will alert you about any changes by updating the “Last updated” date of these Terms of Use, and you waive any right to receive specific notice of each such change. Please ensure that you check the applicable Terms every time you use our Site so that you understand which Terms apply. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Terms of Use by your continued use of the Site after the date such revised Terms of Use are posted. The information provided on the Site is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Site from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable. The Site is not tailored to comply with industry-specific regulations (Health Insurance Portability and Accountability Act (HIPAA), Federal Information Security Management Act (FISMA), etc.), so if your interactions would be subjected to such laws, you may not use this Site. You may not use the Site in a way that would violate the Gramm-Leach-Bliley Act (GLBA). All users who are minors in the jurisdiction in which they reside (generally under the age of 18) must have the permission of, and be directly supervised by, their parent or guardian to use the Site. If you are a minor, you must have your parent or guardian read and agree to these Terms of Use prior to you using the Site.'
          }
        ]
      },
      {
        title: '2. Intellectual Property Rights',
        body: [
          {
            kind: 'paragraph',
            text: 'Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of the United States, international copyright laws, and international conventions. The Content and the Marks are provided on the Site “AS IS” for your information and personal use only. Except as expressly provided in these Terms of Use, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.'
          },
          {
            kind: 'paragraph',
            text: 'Provided that you are eligible to use the Site, you are granted a limited license to access and use the Site and to download or print a copy of any portion of the Content to which you have properly gained access solely for your personal, non-commercial use. We reserve all rights not expressly granted to you in and to the Site, the Content and the Marks.'
          }
        ]
      },
      {
        title: '3. User Representation',
        body: [
          {
            kind: 'paragraph',
            text: 'By using the Site, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Terms of Use; (2) you are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental permission to use the Site; (3) you will not access the Site through automated or non-human means, whether through a bot, script, or otherwise; (4) you will not use the Site for any illegal or unauthorized purpose; and (5) your use of the Site will not violate any applicable law or regulation.'
          },
          {
            kind: 'paragraph',
            text: 'If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Site (or any portion thereof).'
          }
        ]
      },
      {
        title: '4. Prohibited Activities',
        body: [
          {
            kind: 'paragraph',
            text: 'You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.'
          },
          {
            kind: 'paragraph',
            text: 'As a user of the Site, you agree not to:'
          },
          {
            kind: 'list',
            items: [
              'Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.',
              'Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.',
              'Circumvent, disable, or otherwise interfere with security-related features of the Site, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Site and/or the Content contained therein..',
              'Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Site.',
              'Use any information obtained from the Site in order to harass, abuse, or harm another person.',
              'Make improper use of our support services or submit false reports of abuse or misconduct.',
              'Use the Site in a manner inconsistent with any applicable laws or regulations.',
              'Engage in unauthorized framing of or linking to the Site.',
              'Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party’s uninterrupted use and enjoyment of the Site or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Site.',
              'Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.',
              'Delete the copyright or other proprietary rights notice from any Content.',
              'Attempt to impersonate another user or person or use the username of another user.',
              'Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats (“gifs”), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as “spyware” or “passive collection mechanisms” or “pcms”).',
              'Interfere with, disrupt, or create an undue burden on the Site or the networks or services connected to the Site.',
              'Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Site to you.',
              'Attempt to bypass any measures of the Site designed to prevent or restrict access to the Site, or any portion of the Site.',
              'Copy or adapt the Site’s software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.',
              'Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Site.',
              'Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Site, or using or launching any unauthorized script or other software.',
              'Use a buying agent or purchasing agent to make purchases on the Site.',
              'Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.',
              'Use the Site as part of any effort to compete with us or otherwise use the Site and/or the Content for any revenue-generating endeavor or commercial enterprise.'
            ]
          }
        ]
      },
      {
        title: '5. User Generated Contributions',
        body: [
          {
            kind: 'paragraph',
            text: 'The Site does not offer users to submit or post content. We may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Site, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, "Contributions"). Contributions may be viewable by other users of the Site and through third-party websites. As such, any Contributions you transmit may be treated in accordance with the Site Privacy Policy. When you create or make available any Contributions, you thereby represent and warrant that:'
          },
          {
            kind: 'list',
            items: [
              'The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.',
              'You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Site, and other users of the Site to use your Contributions in any manner contemplated by the Site and these Terms of Use.',
              'You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Site and these Terms of Use.',
              'Your Contributions are not false, inaccurate, or misleading.',
              'Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.',
              'Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable (as determined by us).',
              'Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.',
              'Your Contributions are not used to harass or threaten (in the legal sense of those terms) any other person and to promote violence against a specific person or class of people.',
              'Your Contributions do not violate any applicable law, regulation, or rule.',
              'Your Contributions do not violate the privacy or publicity rights of any third party.',
              'Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the health or well-being of minors.',
              'Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap.',
              'Your Contributions do not otherwise violate, or link to material that violates, any provision of these Terms of Use, or any applicable law or regulation.'
            ]
          },
          {
            kind: 'paragraph',
            text: 'Any use of the Site in violation of the foregoing violates these Terms of Use and may result in, among other things, termination or suspension of your rights to use the Site.'
          }
        ]
      },
      {
        title: '6. Contribution Licence',
        body: [
          {
            kind: 'paragraph',
            text: 'You agree that we may access, store, process, and use any information and personal data that you provide following the terms of the Privacy Policy and your choices (including settings).'
          },
          {
            kind: 'paragraph',
            text: 'By submitting suggestions or other feedback regarding the Site, you agree that we can use and share such feedback for any purpose without compensation to you.'
          },
          {
            kind: 'paragraph',
            text: 'We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Site. You are solely responsible for your Contributions to the Site and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.'
          }
        ]
      },
      {
        title: '7. Submissions',
        body: [
          {
            kind: 'paragraph',
            text: 'You acknowledge and agree that any questions, comments, suggestions, ideas, feedback, or other information regarding the Site ("Submissions") provided by you to us are non-confidential and shall become our sole property. We shall own exclusive rights, including all intellectual property rights, and shall be entitled to the unrestricted use and dissemination of these Submissions for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you. You hereby waive all moral rights to any such Submissions, and you hereby warrant that any such Submissions are original with you or that you have the right to submit such Submissions. You agree there shall be no recourse against us for any alleged or actual infringement or misappropriation of any proprietary right in your Submissions.'
          }
        ]
      },
      {
        title: '8. Third-Party Website and Content',
        body: [
          {
            kind: 'paragraph',
            text: 'The Site may contain (or you may be sent via the Site) links to other websites ("Third-Party Websites") as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, applications, software, and other content or items belonging to or originating from third parties ("Third-Party Content"). Such Third-Party Websites and Third-Party Content are not investigated, monitored, or checked for accuracy, appropriateness, or completeness by us, and we are not responsible for any Third-Party Websites accessed through the Site or any Third-Party Content posted on, available through, or installed from the Site, including the content, accuracy, offensiveness, opinions, reliability, privacy practices, or other policies of or contained in the Third-Party Websites or the Third-Party Content. Inclusion of, linking to, or permitting the use or installation of any Third-Party Websites or any Third-Party Content does not imply approval or endorsement thereof by us. If you decide to leave the Site and access the Third-Party Websites or to use or install any Third-Party Content, you do so at your own risk, and you should be aware these Terms of Use no longer govern. You should review the applicable terms and policies, including privacy and data gathering practices, of any website to which you navigate from the Site or relating to any applications you use or install from the Site. Any purchases you make through Third-Party Websites will be through other websites and from other companies, and we take no responsibility whatsoever in relation to such purchases which are exclusively between you and the applicable third party. You agree and acknowledge that we do not endorse the products or services offered on Third-Party Websites and you shall hold us harmless from any harm caused by your purchase of such products or services. Additionally, you shall hold us harmless from any losses sustained by you or harm caused to you relating to or resulting in any way from any Third-Party Content or any contact with Third-Party Websites.'
          }
        ]
      },
      {
        title: '9. Site Management',
        body: [
          {
            kind: 'paragraph',
            text: 'We reserve the right, but not the obligation, to: (1) monitor the Site for violations of these Terms of Use; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms of Use, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Site or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Site in a manner designed to protect our rights and property and to facilitate the proper functioning of the Site.'
          }
        ]
      },
      {
        title: '10. Term and Termination',
        body: [
          {
            kind: 'privacyLink',
            text: 'We care about data privacy and security. Please review our Privacy Policy:'
          },
          {
            kind: 'paragraph',
            text: 'By using the Site, you agree to be bound by our Privacy Policy, which is incorporated into these Terms of Use. Please be advised the Site is hosted in the United Kingdom. If you access the Site from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in the United Kingdom, then through your continued use of the Site, you are transferring your data to the United Kingdom, and you agree to have your data transferred to and processed in the United Kingdom.'
          }
        ]
      },
      {
        title: '11. Modifications and Interruptions',
        body: [
          {
            kind: 'paragraph',
            text: 'These Terms of Use shall remain in full force and effect while you use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF USE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS OF USE OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SITE OR DELETE ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.'
          },
          {
            kind: 'paragraph',
            text: 'If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.'
          }
        ]
      },
      {
        title: '12. Modifications and Interruptions',
        body: [
          {
            kind: 'paragraph',
            text: 'We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site. We also reserve the right to modify or discontinue all or part of the Site without notice at any time. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Site.'
          },
          {
            kind: 'paragraph',
            text: 'We cannot guarantee the Site will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Site, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Site at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Site during any downtime or discontinuance of the Site. Nothing in these Terms of Use will be construed to obligate us to maintain and support the Site or to supply any corrections, updates, or releases in connection therewith.'
          }
        ]
      },
      {
        title: '13. Governing Law',
        body: [
          {
            kind: 'paragraph',
            text: 'These conditions are governed by and interpreted following the laws of the United Kingdom, and the use of the United Nations Convention of Contracts for the International Sale of Goods is expressly excluded. If your habitual residence is in the EU, and you are a consumer, you additionally possess the protection provided to you by obligatory provisions of the law of your country of residence. Endpoint Tech LTD and yourself both agree to submit to the non-exclusive jurisdiction of the courts of East Anglia, which means that you may make a claim to defend your consumer protection rights in regards to these Terms of Use in the United Kingdom, or in the EU country in which you reside.'
          }
        ]
      },
      {
        title: '14. Dispute Resolution',
        body: [
          {
            kind: 'subheading',
            text: 'Informal Negotiations'
          },
          {
            kind: 'paragraph',
            text: 'To expedite resolution and control the cost of any dispute, controversy, or claim related to these Terms of Use (each "Dispute" and collectively, the “Disputes”) brought by either you or us (individually, a “Party” and collectively, the “Parties”), the Parties agree to first attempt to negotiate any Dispute (except those Disputes expressly provided below) informally for at least thirty (30) days before initiating arbitration. Such informal negotiations commence upon written notice from one Party to the other Party.'
          },
          {
            kind: 'subheading',
            text: 'Binding Arbitration'
          },
          {
            kind: 'paragraph',
            text: 'Any dispute arising from the relationships between the Parties to this contract shall be determined by one arbitrator who will be chosen in accordance with the Arbitration and Internal Rules of the European Court of Arbitration being part of the European Centre of Arbitration having its seat in Strasbourg, and which are in force at the time the application for arbitration is filed, and of which adoption of this clause constitutes acceptance. The seat of arbitration shall be Cambridge, United Kingdom. The language of the proceedings shall be English. Applicable rules of substantive law shall be the law of the United Kingdom.'
          },
          {
            kind: 'subheading',
            text: 'Restrictions'
          },
          {
            kind: 'paragraph',
            text: 'The Parties agree that any arbitration shall be limited to the Dispute between the Parties individually. To the full extent permitted by law, (a) no arbitration shall be joined with any other proceeding; (b) there is no right or authority for any Dispute to be arbitrated on a class-action basis or to utilize class action procedures; and (c) there is no right or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public or any other persons.'
          },
          {
            kind: 'subheading',
            text: 'Exceptions to Informal Negotiations and Arbitration'
          },
          {
            kind: 'paragraph',
            text: 'The Parties agree that the following Disputes are not subject to the above provisions concerning informal negotiations and binding arbitration: (a) any Disputes seeking to enforce or protect, or concerning the validity of, any of the intellectual property rights of a Party; (b) any Dispute related to, or arising from, allegations of theft, piracy, invasion of privacy, or unauthorized use; and (c) any claim for injunctive relief. If this provision is found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling within that portion of this provision found to be illegal or unenforceable and such Dispute shall be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, and the Parties agree to submit to the personal jurisdiction of that court.'
          }
        ]
      },
      {
        title: '15. Corrections',
        body: [
          {
            kind: 'paragraph',
            text: 'There may be information on the Site that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Site at any time, without prior notice.'
          }
        ]
      },
      {
        title: '16. Disclaimer',
        body: [
          {
            kind: 'paragraph',
            text: 'THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SITE’S CONTENT OR THE CONTENT OF ANY WEBSITES LINKED TO THE SITE AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SITE, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SITE, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SITE BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SITE. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SITE, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.'
          }
        ]
      },
      {
        title: '17. Limitations of Liability',
        body: [
          {
            kind: 'paragraph',
            text: 'IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.'
          }
        ]
      },
      {
        title: '18. Indemnification',
        body: [
          {
            kind: 'paragraph',
            text: 'You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys’ fees and expenses, made by any third party due to or arising out of: (1) use of the Site; (2) breach of these Terms of Use; (3) any breach of your representations and warranties set forth in these Terms of Use; (4) your violation of the rights of a third party, including but not limited to intellectual property rights; or (5) any overt harmful act toward any other user of the Site with whom you connected via the Site. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.'
          }
        ]
      },
      {
        title: '19. User Data',
        body: [
          {
            kind: 'paragraph',
            text: 'We will maintain certain data that you transmit to the Site for the purpose of managing the performance of the Site, as well as data relating to your use of the Site. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Site. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.'
          }
        ]
      },
      {
        title: '20. Electronic Communications, Transactions, and Signatures',
        body: [
          {
            kind: 'paragraph',
            text: 'Visiting the Site, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Site, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SITE. You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.'
          }
        ]
      },
      {
        title: '21. California Users and Residents',
        body: [
          {
            kind: 'paragraph',
            text: 'If any complaint with us is not satisfactorily resolved, you can contact the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs in writing at 1625 North Market Blvd., Suite N 112, Sacramento, California 95834 or by telephone at (800) 952-5210 or (916) 445-1254.'
          }
        ]
      },
      {
        title: '22. Miscellaneous',
        body: [
          {
            kind: 'paragraph',
            text: 'These Terms of Use and any policies or operating rules posted by us on the Site or in respect to the Site constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Terms of Use shall not operate as a waiver of such right or provision. These Terms of Use operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Terms of Use is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Terms of Use and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Terms of Use or use of the Site. You agree that these Terms of Use will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of these Terms of Use and the lack of signing by the parties hereto to execute these Terms of Use.'
          }
        ]
      },
      {
        title: '23. Contact Us',
        body: [
          {
            kind: 'paragraph',
            text: 'In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:'
          }
        ]
      }
    ]
  },
  pl: {
    title: 'Regulamin',
    archiveNotice:
      'Dokument archiwalny. Poniższy regulamin dotyczył poprzedniej witryny prowadzonej przez brytyjską spółkę Endpoint Tech Ltd.',
    sections: [
      {
        title: '1. Akceptacja regulaminu',
        body: [
          {
            kind: 'paragraph',
            text: 'Niniejszy regulamin stanowi prawnie wiążącą umowę między Tobą, działającym we własnym imieniu lub w imieniu podmiotu („Użytkownik”), a Endpoint Tech LTD („Spółka”, „my”, „nas” lub „nasz”). Dotyczy dostępu do witryny https://www.endpoint-it.co.uk i korzystania z niej oraz z powiązanych z nią lub połączonych z nią mediów, kanałów, witryn mobilnych i aplikacji (łącznie „Witryna”). Spółka jest zarejestrowana w Wielkiej Brytanii i ma siedzibę pod adresem Thynne Cottage, Thynnes Lane, Mattishall, Dereham NR20 3JU. Nasz numer VAT to 385496248. Uzyskując dostęp do Witryny, potwierdzasz zapoznanie się z całością regulaminu, jego zrozumienie i zgodę na jego postanowienia. JEŚLI NIE AKCEPTUJESZ CAŁOŚCI REGULAMINU, NIE WOLNO CI KORZYSTAĆ Z WITRYNY I MUSISZ NATYCHMIAST ZAPRZESTAĆ KORZYSTANIA Z NIEJ. Dodatkowe warunki i dokumenty publikowane okresowo w Witrynie stanowią część regulaminu na podstawie zawartego tu odwołania. Zastrzegamy sobie prawo do zmiany regulaminu według własnego uznania. O zmianach informujemy przez aktualizację daty ostatniej zmiany regulaminu. Zrzekasz się prawa do odrębnych powiadomień o poszczególnych zmianach. Przed każdym skorzystaniem z Witryny zapoznaj się z aktualnym regulaminem, aby wiedzieć, jakie postanowienia obowiązują. Dalsze korzystanie z Witryny po ogłoszeniu zmienionego regulaminu oznacza, że znasz i akceptujesz zmiany. Informacje dostępne w Witrynie nie są przeznaczone do rozpowszechniania ani wykorzystywania tam, gdzie naruszałoby to przepisy lub nakładało na nas obowiązek rejestracji. Osoby korzystające z Witryny z innych lokalizacji robią to z własnej inicjatywy i odpowiadają za przestrzeganie lokalnych przepisów w zakresie, w jakim mają one zastosowanie. Witryna nie jest dostosowana do wymagań branżowych, w tym amerykańskich ustaw HIPAA i FISMA. Nie możesz korzystać z Witryny, jeśli takie przepisy miałyby zastosowanie do Twoich działań. Nie wolno Ci również korzystać z Witryny w sposób naruszający ustawę Gramm–Leach–Bliley (GLBA). Użytkownicy małoletni zgodnie z przepisami miejsca zamieszkania (zwykle poniżej 18 lat) mogą korzystać z Witryny za zgodą i pod bezpośrednim nadzorem rodzica lub opiekuna. Przed rozpoczęciem korzystania z Witryny rodzic lub opiekun osoby małoletniej musi zapoznać się z regulaminem i go zaakceptować.'
          }
        ]
      },
      {
        title: '2. Prawa własności intelektualnej',
        body: [
          {
            kind: 'paragraph',
            text: 'O ile nie wskazano inaczej, Witryna stanowi naszą własność. Kod źródłowy, bazy danych, funkcje, oprogramowanie, projekty stron, nagrania dźwiękowe i wideo, teksty, zdjęcia i grafiki dostępne w Witrynie (łącznie „Treści”) oraz zawarte w niej znaki towarowe, znaki usługowe i logo („Znaki”) należą do nas, podlegają naszej kontroli lub korzystamy z nich na podstawie licencji. Chronią je przepisy Stanów Zjednoczonych dotyczące praw autorskich, znaków towarowych, innych praw własności intelektualnej i nieuczciwej konkurencji oraz międzynarodowe przepisy i konwencje dotyczące praw autorskich. Treści i Znaki są udostępniane w stanie, w jakim się znajdują, wyłącznie do celów informacyjnych i osobistych. Bez naszej uprzedniej wyraźnej zgody na piśmie nie wolno w jakimkolwiek celu komercyjnym kopiować, reprodukować, zestawiać, ponownie publikować, przesyłać, zamieszczać, publicznie wyświetlać, kodować, tłumaczyć, transmitować, rozpowszechniać, sprzedawać, licencjonować ani w inny sposób wykorzystywać żadnej części Witryny, Treści ani Znaków, chyba że niniejszy regulamin wyraźnie na to zezwala.'
          },
          {
            kind: 'paragraph',
            text: 'Osobom uprawnionym do korzystania z Witryny udzielamy ograniczonej licencji na dostęp do niej, korzystanie z niej oraz pobranie lub wydrukowanie kopii Treści, do których uzyskały prawidłowy dostęp, wyłącznie na własny użytek niekomercyjny. Zachowujemy wszelkie prawa do Witryny, Treści i Znaków, których wyraźnie nie udzieliliśmy.'
          }
        ]
      },
      {
        title: '3. Oświadczenia użytkownika',
        body: [
          {
            kind: 'paragraph',
            text: 'Korzystając z Witryny, oświadczasz i gwarantujesz, że (1) masz zdolność do zawarcia umowy i zgadzasz się przestrzegać regulaminu, (2) nie jesteś osobą małoletnią w miejscu zamieszkania lub masz zgodę rodzica na korzystanie z Witryny, (3) nie będziesz uzyskiwać dostępu do Witryny w sposób zautomatyzowany ani bez udziału człowieka, w tym za pomocą bota lub skryptu, (4) nie będziesz korzystać z Witryny w celach nielegalnych lub nieuprawnionych, (5) korzystanie przez Ciebie z Witryny nie naruszy obowiązujących przepisów.'
          },
          {
            kind: 'paragraph',
            text: 'Jeśli podasz nieprawdziwe, niedokładne, nieaktualne lub niekompletne informacje, możemy zawiesić albo zamknąć Twoje konto oraz odmówić Ci obecnego i przyszłego dostępu do Witryny lub jej części.'
          }
        ]
      },
      {
        title: '4. Działania zabronione',
        body: [
          {
            kind: 'paragraph',
            text: 'Z Witryny możesz korzystać wyłącznie w celach, w których ją udostępniamy. Wykorzystywanie jej do przedsięwzięć komercyjnych wymaga naszego wyraźnego poparcia lub zgody.'
          },
          {
            kind: 'paragraph',
            text: 'Jako użytkownik Witryny zobowiązujesz się powstrzymać od poniższych działań:'
          },
          {
            kind: 'list',
            items: [
              'Systematyczne pobieranie danych i treści z Witryny w celu bezpośredniego lub pośredniego tworzenia zbiorów, zestawień, baz danych lub katalogów bez naszej pisemnej zgody.',
              'Podstęp, oszustwo lub wprowadzanie w błąd nas lub innych użytkowników, szczególnie w celu uzyskania poufnych danych konta, takich jak hasła.',
              'Obchodzenie, wyłączanie lub zakłócanie zabezpieczeń Witryny, w tym zabezpieczeń przed użyciem lub kopiowaniem Treści oraz ograniczeń korzystania z Witryny lub Treści.',
              'Zniesławianie, podważanie reputacji lub inne działanie szkodzące w naszej ocenie nam lub Witrynie.',
              'Wykorzystywanie informacji z Witryny do nękania, znieważania lub wyrządzania krzywdy innym osobom.',
              'Nadużywanie obsługi technicznej lub dokonywanie fałszywych zgłoszeń nadużyć albo niewłaściwego postępowania.',
              'Korzystanie z Witryny niezgodnie z obowiązującymi przepisami.',
              'Nieuprawnione osadzanie Witryny w ramkach lub umieszczanie odsyłaczy do niej.',
              'Przesyłanie lub próba przesyłania wirusów, koni trojańskich lub innych materiałów, w tym spamu i tekstów nadużywających wielkich liter, które zakłócają korzystanie z Witryny lub zmieniają, utrudniają albo zakłócają jej funkcje, działanie lub utrzymanie.',
              'Zautomatyzowane używanie systemu, w tym przesyłanie komentarzy albo wiadomości za pomocą skryptów oraz korzystanie z narzędzi do eksploracji danych, robotów lub podobnych narzędzi do pozyskiwania danych.',
              'Usuwanie informacji o prawach autorskich lub innych prawach własności z dowolnej Treści.',
              'Próby podszywania się pod innego użytkownika lub inną osobę albo korzystanie z cudzej nazwy użytkownika.',
              'Przesyłanie lub próba przesyłania materiałów służących do biernego lub aktywnego zbierania albo przekazywania informacji, w tym przezroczystych plików GIF, pikseli 1×1, znaczników internetowych, plików cookie oraz podobnych mechanizmów, określanych niekiedy jako oprogramowanie szpiegujące lub mechanizmy biernego zbierania danych.',
              'Zakłócanie działania Witryny, podłączonych do niej sieci lub usług albo ich nadmierne obciążanie.',
              'Nękanie, naprzykrzanie się, zastraszanie lub grożenie pracownikom i przedstawicielom, którzy udostępniają Ci dowolną część Witryny.',
              'Próby obchodzenia środków ograniczających lub uniemożliwiających dostęp do całości albo części Witryny.',
              'Kopiowanie lub adaptowanie oprogramowania Witryny, w tym kodu Flash, PHP, HTML, JavaScript i innego kodu.',
              'Rozszyfrowywanie, dekompilacja, dezasemblacja lub inżynieria wsteczna oprogramowania stanowiącego część Witryny, poza zakresem dozwolonym przez obowiązujące prawo.',
              'Używanie, uruchamianie, opracowywanie lub rozpowszechnianie automatycznych systemów uzyskujących dostęp do Witryny, w tym programów indeksujących, robotów, narzędzi do oszukiwania, programów pobierających treści i czytników offline, oraz uruchamianie nieuprawnionych skryptów lub programów. Wyjątkiem jest standardowe korzystanie z wyszukiwarek i przeglądarek.',
              'Posługiwanie się pośrednikiem zakupowym przy dokonywaniu zakupów w Witrynie.',
              'Korzystanie z Witryny bez upoważnienia, w tym zbieranie nazw i adresów e-mail użytkowników elektronicznie lub w inny sposób w celu rozsyłania niezamówionych wiadomości oraz zakładanie kont automatycznie lub pod fałszywym pretekstem.',
              'Korzystanie z Witryny w celu konkurowania z nami lub wykorzystywanie Witryny albo Treści do jakiejkolwiek działalności zarobkowej lub komercyjnej.'
            ]
          }
        ]
      },
      {
        title: '5. Materiały użytkowników',
        body: [
          {
            kind: 'paragraph',
            text: 'Witryna nie oferuje użytkownikom funkcji przesyłania ani publikowania treści. Możemy umożliwić Ci tworzenie, przesyłanie, zamieszczanie, wyświetlanie, przekazywanie, wykonywanie, publikowanie, rozpowszechnianie lub nadawanie materiałów w Witrynie lub bezpośrednio do nas. Obejmuje to między innymi teksty, nagrania wideo i audio, zdjęcia, grafiki, komentarze, sugestie, dane osobowe oraz inne materiały (łącznie „Materiały użytkownika”). Materiały mogą być widoczne dla innych użytkowników Witryny i za pośrednictwem witryn podmiotów trzecich. Przekazane Materiały użytkownika mogą podlegać polityce prywatności Witryny. Tworząc lub udostępniając Materiały użytkownika, składasz następujące oświadczenia i zapewnienia:'
          },
          {
            kind: 'list',
            items: [
              'Tworzenie, rozpowszechnianie, transmitowanie, publiczne wyświetlanie lub wykonywanie Twoich Materiałów użytkownika oraz uzyskiwanie do nich dostępu, ich pobieranie lub kopiowanie nie narusza i nie naruszy praw podmiotów trzecich. Dotyczy to zwłaszcza praw autorskich, patentów, znaków towarowych, tajemnic przedsiębiorstwa i autorskich praw osobistych.',
              'Jesteś twórcą i właścicielem Materiałów użytkownika albo dysponujesz licencjami, prawami, zgodami i zezwoleniami wymaganymi do ich używania oraz udzielenia nam, Witrynie i pozostałym użytkownikom Witryny prawa do używania ich w sposób przewidziany w Witrynie i regulaminie.',
              'Masz pisemną zgodę lub zezwolenie każdej możliwej do zidentyfikowania osoby widocznej w Twoich Materiałach użytkownika na użycie jej imienia, nazwiska lub wizerunku w sposób przewidziany w Witrynie i regulaminie.',
              'Twoje Materiały użytkownika nie są nieprawdziwe, niedokładne ani wprowadzające w błąd.',
              'Twoje materiały nie stanowią niezamówionej lub niedozwolonej reklamy, promocji, piramidy finansowej, łańcuszków, spamu, korespondencji masowej ani innych form pozyskiwania klientów.',
              'Twoje materiały nie są obsceniczne, lubieżne, wulgarne, brutalne, nękające, zniesławiające, oszczercze ani w inny sposób niedopuszczalne w naszej ocenie.',
              'Twoje materiały nikogo nie ośmieszają, nie wyszydzają, nie znieważają, nie zastraszają i nie krzywdzą.',
              'Twoje materiały nie służą nękaniu ani grożeniu w rozumieniu prawa i nie propagują przemocy wobec konkretnej osoby lub grupy.',
              'Twoje materiały nie naruszają obowiązującego prawa, przepisów ani zasad.',
              'Twoje materiały nie naruszają prawa do prywatności ani prawa do rozporządzania swoim wizerunkiem przez osoby trzecie.',
              'Twoje materiały nie naruszają przepisów dotyczących pornografii dziecięcej ani innych przepisów chroniących zdrowie i dobro małoletnich.',
              'Twoje materiały nie zawierają obraźliwych wypowiedzi dotyczących rasy, pochodzenia narodowego, płci, orientacji seksualnej lub niepełnosprawności fizycznej.',
              'Twoje materiały nie naruszają pozostałych postanowień niniejszego regulaminu ani obowiązujących przepisów i nie zawierają odsyłaczy do treści, które je naruszają.'
            ]
          },
          {
            kind: 'paragraph',
            text: 'Korzystanie z Witryny z naruszeniem powyższych postanowień narusza niniejszy regulamin i może skutkować między innymi odebraniem lub zawieszeniem prawa do korzystania z Witryny.'
          }
        ]
      },
      {
        title: '6. Licencja na materiały użytkownika',
        body: [
          {
            kind: 'paragraph',
            text: 'Wyrażasz zgodę na to, abyśmy uzyskiwali dostęp do podanych przez Ciebie informacji i danych osobowych, przechowywali je, przetwarzali i wykorzystywali zgodnie z polityką prywatności oraz Twoimi wyborami, w tym ustawieniami.'
          },
          {
            kind: 'paragraph',
            text: 'Przesyłając sugestie lub inne uwagi na temat Witryny, zgadzasz się na ich wykorzystywanie i udostępnianie przez nas w dowolnym celu bez wynagrodzenia dla Ciebie.'
          },
          {
            kind: 'paragraph',
            text: 'Nie rościmy sobie prawa własności do Twoich Materiałów użytkownika. Zachowujesz pełnię praw do tych materiałów, w tym związane z nimi prawa własności intelektualnej i inne prawa majątkowe. Nie odpowiadamy za oświadczenia zawarte w Materiałach użytkownika, które umieszczasz w Witrynie. Ponosisz wyłączną odpowiedzialność za swoje materiały i wyraźnie zgadzasz się zwolnić nas z wszelkiej odpowiedzialności oraz powstrzymać się od działań prawnych przeciwko nam w związku z tymi materiałami.'
          }
        ]
      },
      {
        title: '7. Przekazane informacje',
        body: [
          {
            kind: 'paragraph',
            text: 'Przyjmujesz do wiadomości i akceptujesz, że pytania, komentarze, sugestie, pomysły, opinie i inne informacje na temat Witryny przekazane nam przez Ciebie („Przekazane informacje”) mają charakter niepoufny i stają się naszą wyłączną własnością. Przysługują nam wyłączne prawa, w tym prawa własności intelektualnej, oraz prawo do korzystania z tych informacji i ich rozpowszechniania bez ograniczeń w dowolnym zgodnym z prawem celu, komercyjnym lub innym, bez wskazywania autorstwa ani wypłaty wynagrodzenia. Zrzekasz się wszelkich autorskich praw osobistych do Przekazanych informacji i gwarantujesz, że są one Twojego autorstwa albo masz prawo je przekazać. Zgadzasz się nie dochodzić od nas roszczeń z tytułu domniemanego lub rzeczywistego naruszenia albo przywłaszczenia praw do Przekazanych informacji.'
          }
        ]
      },
      {
        title: '8. Witryny i treści podmiotów trzecich',
        body: [
          {
            kind: 'paragraph',
            text: 'Witryna może zawierać lub przekazywać Ci odsyłacze do innych serwisów („Witryny podmiotów trzecich”), a także artykuły, zdjęcia, teksty, grafiki, obrazy, projekty, muzykę, dźwięki, nagrania wideo, informacje, aplikacje, oprogramowanie oraz inne treści lub materiały należące do podmiotów trzecich lub od nich pochodzące („Treści podmiotów trzecich”). Nie badamy i nie monitorujemy takich witryn ani treści oraz nie sprawdzamy ich dokładności, stosowności ani kompletności. Nie odpowiadamy za Witryny podmiotów trzecich osiągalne z Witryny ani za Treści podmiotów trzecich publikowane, udostępniane lub instalowane za jej pośrednictwem. Dotyczy to także zawartości, dokładności, obraźliwego charakteru, opinii, wiarygodności oraz praktyk prywatności i innych zasad tych witryn lub treści. Zamieszczenie odsyłacza, udostępnienie witryny lub umożliwienie korzystania z takich treści albo ich instalacji nie oznacza naszej akceptacji ani rekomendacji. Jeśli opuścisz Witrynę, wejdziesz do innego serwisu, skorzystasz z Treści podmiotów trzecich lub je zainstalujesz, robisz to na własne ryzyko. Niniejszy regulamin przestaje wtedy mieć zastosowanie. Zapoznaj się z warunkami i zasadami innych witryn oraz aplikacji, w tym z praktykami dotyczącymi prywatności i pozyskiwania danych. Zakupów w innych witrynach dokonujesz u podmiotów trzecich. Nie ponosimy odpowiedzialności za zakupy będące wyłącznie sprawą Twoją i danego sprzedawcy. Przyjmujesz do wiadomości, że nie rekomendujemy produktów ani usług oferowanych w tych witrynach, i zgadzasz się zwolnić nas z odpowiedzialności za wynikłą z zakupu szkodę. Zwolnienie dotyczy również strat lub szkód związanych z Treściami podmiotów trzecich lub kontaktem z ich witrynami.'
          }
        ]
      },
      {
        title: '9. Zarządzanie Witryną',
        body: [
          {
            kind: 'paragraph',
            text: 'Zastrzegamy sobie prawo, ale nie mamy obowiązku, (1) monitorować Witryny pod kątem naruszeń regulaminu, (2) podejmować odpowiednich kroków prawnych wobec osób, które w naszej ocenie naruszają prawo lub regulamin, w tym zgłaszać je organom ścigania, (3) według własnego uznania odmawiać dostępu do Materiałów użytkownika, ograniczać go albo wyłączać materiały w zakresie technicznie możliwym, (4) według własnego uznania i bez powiadomienia ani odpowiedzialności usuwać lub wyłączać z Witryny pliki i treści nadmiernie duże lub obciążające systemy, (5) zarządzać Witryną w sposób chroniący nasze prawa i mienie oraz zapewniający jej prawidłowe działanie.'
          }
        ]
      },
      {
        title: '10. Okres obowiązywania i rozwiązanie',
        body: [
          {
            kind: 'privacyLink',
            text: 'Dbamy o prywatność i bezpieczeństwo danych. Zapoznaj się z naszą polityką prywatności:'
          },
          {
            kind: 'paragraph',
            text: 'Korzystając z Witryny, zgadzasz się przestrzegać polityki prywatności stanowiącej część regulaminu. Witryna jest hostowana w Wielkiej Brytanii. Jeśli korzystasz z niej w regionie, w którym przepisy lub inne wymogi dotyczące zbierania, wykorzystywania lub ujawniania danych osobowych różnią się od obowiązujących w Wielkiej Brytanii, dalsze korzystanie z Witryny skutkuje przekazaniem Twoich danych do Wielkiej Brytanii i oznacza zgodę na ich przekazanie i przetwarzanie w tym państwie.'
          }
        ]
      },
      {
        title: '11. Zmiany i przerwy w działaniu',
        body: [
          {
            kind: 'paragraph',
            text: 'Regulamin obowiązuje przez cały okres korzystania z Witryny. Z ZACHOWANIEM POZOSTAŁYCH POSTANOWIEŃ REGULAMINU ZASTRZEGAMY SOBIE PRAWO DO ODMOWY DOSTĘPU DO WITRYNY LUB KORZYSTANIA Z NIEJ DOWOLNEJ OSOBIE WEDŁUG WŁASNEGO UZNANIA (W TYM PRZEZ BLOKOWANIE ADRESÓW IP), BEZ POWIADOMIENIA I ODPOWIEDZIALNOŚCI, Z DOWOLNEJ PRZYCZYNY LUB BEZ PODANIA PRZYCZYNY. DOTYCZY TO W SZCZEGÓLNOŚCI NARUSZENIA OŚWIADCZENIA, ZAPEWNIENIA LUB ZOBOWIĄZANIA ZAWARTEGO W REGULAMINIE LUB OBOWIĄZUJĄCEGO PRZEPISU. MOŻEMY W KAŻDEJ CHWILI BEZ OSTRZEŻENIA I WEDŁUG WŁASNEGO UZNANIA ZAKOŃCZYĆ TWÓJ UDZIAŁ LUB MOŻLIWOŚĆ KORZYSTANIA Z WITRYNY ORAZ USUNĄĆ OPUBLIKOWANE PRZEZ CIEBIE TREŚCI LUB INFORMACJE.'
          },
          {
            kind: 'paragraph',
            text: 'Po zamknięciu lub zawieszeniu konta z dowolnej przyczyny nie wolno Ci rejestrować ani tworzyć nowego konta pod własnym, zmyślonym lub cudzym nazwiskiem, również jeśli działasz w imieniu innej osoby. Poza zamknięciem lub zawieszeniem konta możemy podjąć odpowiednie kroki prawne, w tym dochodzić ochrony cywilnej, karnej oraz nakazów lub zakazów sądowych.'
          }
        ]
      },
      {
        title: '12. Zmiany i przerwy w działaniu',
        body: [
          {
            kind: 'paragraph',
            text: 'Możemy w dowolnym momencie i z dowolnej przyczyny zmieniać, modyfikować lub usuwać zawartość Witryny bez powiadomienia. Nie mamy obowiązku aktualizowania informacji. Możemy również bez powiadomienia zmienić Witrynę lub zaprzestać jej udostępniania w całości lub części. Nie ponosimy odpowiedzialności wobec Ciebie ani osób trzecich za zmiany, zmianę cen, zawieszenie lub zakończenie działalności Witryny.'
          },
          {
            kind: 'paragraph',
            text: 'Nie gwarantujemy stałej dostępności Witryny. Usterki sprzętu, oprogramowania, inne problemy lub prace konserwacyjne mogą powodować przerwy, opóźnienia lub błędy. Możemy w dowolnym momencie i z dowolnej przyczyny, bez powiadomienia, zmienić, skorygować, zaktualizować, zawiesić, zamknąć lub w inny sposób zmodyfikować Witrynę. Zgadzasz się, że nie ponosimy odpowiedzialności za straty, szkody ani niedogodności wynikłe z braku dostępu do Witryny lub możliwości korzystania z niej w okresie przerwy albo po zaprzestaniu działalności. Regulamin nie nakłada na nas obowiązku utrzymywania i wspierania Witryny ani dostarczania poprawek, aktualizacji lub nowych wersji.'
          }
        ]
      },
      {
        title: '13. Prawo właściwe',
        body: [
          {
            kind: 'paragraph',
            text: 'Niniejsze warunki podlegają prawu Zjednoczonego Królestwa i zgodnie z nim są interpretowane. Wyraźnie wyłącza się stosowanie Konwencji Narodów Zjednoczonych o umowach międzynarodowej sprzedaży towarów. Jeśli jesteś konsumentem i masz miejsce zwykłego pobytu w Unii Europejskiej, przysługuje Ci ponadto ochrona wynikająca z bezwzględnie obowiązujących przepisów państwa zamieszkania. Endpoint Tech LTD i Ty akceptujecie niewyłączną jurysdykcję sądów regionu East Anglia. Oznacza to, że możesz dochodzić w związku z regulaminem ochrony swoich praw konsumenckich w Zjednoczonym Królestwie albo w państwie Unii Europejskiej, w którym mieszkasz.'
          }
        ]
      },
      {
        title: '14. Rozstrzyganie sporów',
        body: [
          {
            kind: 'subheading',
            text: 'Negocjacje nieformalne'
          },
          {
            kind: 'paragraph',
            text: 'W celu przyspieszenia rozstrzygnięcia i ograniczenia kosztów sporów, rozbieżności lub roszczeń dotyczących niniejszego regulaminu (każdy z nich to „Spór”, łącznie „Spory”) zgłaszanych przez Ciebie lub przez nas (każdy z osobna to „Strona”, łącznie „Strony”) Strony zgadzają się w pierwszej kolejności podjąć nieformalne negocjacje przez co najmniej trzydzieści (30) dni przed wszczęciem arbitrażu. Nie dotyczy to Sporów wyraźnie wskazanych poniżej. Negocjacje rozpoczynają się z chwilą pisemnego powiadomienia jednej Strony przez drugą.'
          },
          {
            kind: 'subheading',
            text: 'Wiążący arbitraż'
          },
          {
            kind: 'paragraph',
            text: 'Spory wynikające ze stosunku łączącego Strony niniejszej umowy rozpoznaje jeden arbiter wybrany zgodnie z regulaminem arbitrażowym i wewnętrznym Europejskiego Sądu Arbitrażowego, należącego do Europejskiego Centrum Arbitrażu z siedzibą w Strasburgu. Stosuje się regulamin obowiązujący w chwili złożenia wniosku o arbitraż. Przyjęcie tej klauzuli oznacza jego akceptację. Miejscem arbitrażu jest Cambridge w Zjednoczonym Królestwie. Postępowanie prowadzi się w języku angielskim. Właściwym prawem materialnym jest prawo Zjednoczonego Królestwa.'
          },
          {
            kind: 'subheading',
            text: 'Ograniczenia'
          },
          {
            kind: 'paragraph',
            text: 'Strony uzgadniają, że arbitraż ogranicza się do indywidualnego Sporu między Stronami. W najszerszym zakresie przewidzianym prawem (a) postępowania arbitrażowego nie łączy się z innymi postępowaniami, (b) nie można prowadzić arbitrażu w trybie pozwu zbiorowego ani stosować procedur zbiorowych, (c) nie można wnieść Sporu w charakterze przedstawiciela ogółu społeczeństwa lub innych osób.'
          },
          {
            kind: 'subheading',
            text: 'Wyjątki od negocjacji nieformalnych i arbitrażu'
          },
          {
            kind: 'paragraph',
            text: 'Strony uzgadniają, że powyższe postanowienia o negocjacjach nieformalnych i wiążącym arbitrażu nie dotyczą (a) Sporów o wykonanie lub ochronę praw własności intelektualnej Strony albo o ważność takich praw, (b) Sporów związanych z zarzutem kradzieży, piractwa, naruszenia prywatności lub nieuprawnionego wykorzystania, (c) roszczeń o wydanie nakazu lub zakazu sądowego. Jeśli to postanowienie zostanie uznane za bezprawne lub niewykonalne, żadna ze Stron nie skieruje do arbitrażu Sporu objętego taką częścią postanowienia. Rozpozna go właściwy sąd spośród wskazanych powyżej, a Strony akceptują jego jurysdykcję wobec siebie.'
          }
        ]
      },
      {
        title: '15. Sprostowania',
        body: [
          {
            kind: 'paragraph',
            text: 'Informacje w Witrynie, w tym opisy, ceny i dane o dostępności, mogą zawierać błędy typograficzne, nieścisłości lub braki. Możemy w każdej chwili je poprawiać oraz zmieniać lub aktualizować informacje o Witrynie bez wcześniejszego powiadomienia.'
          }
        ]
      },
      {
        title: '16. Wyłączenie gwarancji',
        body: [
          {
            kind: 'paragraph',
            text: 'WITRYNĘ UDOSTĘPNIAMY W STANIE, W JAKIM SIĘ ZNAJDUJE, I W ZAKRESIE, W JAKIM JEST DOSTĘPNA. ZGADZASZ SIĘ KORZYSTAĆ Z WITRYNY I USŁUG NA WŁASNE RYZYKO. W NAJSZERSZYM ZAKRESIE DOZWOLONYM PRZEZ PRAWO WYŁĄCZAMY WSZELKIE WYRAŹNE I DOROZUMIANE GWARANCJE DOTYCZĄCE WITRYNY I KORZYSTANIA Z NIEJ, W SZCZEGÓLNOŚCI GWARANCJE PRZYDATNOŚCI HANDLOWEJ, PRZYDATNOŚCI DO OKREŚLONEGO CELU I NIENARUSZANIA PRAW. NIE UDZIELAMY GWARANCJI ANI ZAPEWNIEŃ CO DO DOKŁADNOŚCI LUB KOMPLETNOŚCI TREŚCI WITRYNY LUB WITRYN Z NIĄ POWIĄZANYCH I NIE PONOSIMY ODPOWIEDZIALNOŚCI ZA (1) BŁĘDY LUB NIEŚCISŁOŚCI W TREŚCIACH, (2) URAZY LUB SZKODY MAJĄTKOWE WYNIKAJĄCE Z DOSTĘPU DO WITRYNY I KORZYSTANIA Z NIEJ, (3) NIEUPRAWNIONY DOSTĘP DO NASZYCH ZABEZPIECZONYCH SERWERÓW LUB DANYCH OSOBOWYCH ALBO FINANSOWYCH BĄDŹ ICH WYKORZYSTANIE, (4) PRZERWANIE LUB ZAKOŃCZENIE TRANSMISJI DO LUB Z WITRYNY, (5) BŁĘDY, WIRUSY, KONIE TROJAŃSKIE I PODOBNE ZAGROŻENIA PRZESŁANE DO WITRYNY LUB PRZEZ NIĄ PRZEZ PODMIOT TRZECI, ANI (6) BŁĘDY LUB POMINIĘCIA W TREŚCIACH CZY MATERIAŁACH LUB STRATY I SZKODY WYNIKŁE Z UŻYCIA TREŚCI OPUBLIKOWANYCH, PRZEKAZANYCH LUB INACZEJ UDOSTĘPNIONYCH W WITRYNIE. NIE UDZIELAMY GWARANCJI, NIE REKOMENDUJEMY, NIE RĘCZYMY I NIE PONOSIMY ODPOWIEDZIALNOŚCI ZA PRODUKTY ANI USŁUGI REKLAMOWANE LUB OFEROWANE PRZEZ PODMIOTY TRZECIE W WITRYNIE, W WITRYNACH Z NIĄ POŁĄCZONYCH LUB W INNYCH WITRYNACH I APLIKACJACH PROMOWANYCH W REKLAMACH. NIE JESTEŚMY STRONĄ TRANSAKCJI MIĘDZY TOBĄ A ZEWNĘTRZNYMI DOSTAWCAMI I NIE ODPOWIADAMY ZA ICH MONITOROWANIE. JAK PRZY KAŻDYM ZAKUPIE PRODUKTU LUB USŁUGI, NIEZALEŻNIE OD KANAŁU I WARUNKÓW, KIERUJ SIĘ WŁASNYM OSĄDEM I ZACHOWAJ OSTROŻNOŚĆ TAM, GDZIE JEST TO WSKAZANE.'
          }
        ]
      },
      {
        title: '17. Ograniczenie odpowiedzialności',
        body: [
          {
            kind: 'paragraph',
            text: 'MY, NASI CZŁONKOWIE KIEROWNICTWA, PRACOWNICY I PRZEDSTAWICIELE W ŻADNYM WYPADKU NIE PONOSIMY ODPOWIEDZIALNOŚCI WOBEC CIEBIE ANI PODMIOTU TRZECIEGO ZA SZKODY BEZPOŚREDNIE, POŚREDNIE, NASTĘPCZE, UBOCZNE LUB SZCZEGÓLNE ANI ZA ODSZKODOWANIA O CHARAKTERZE REPRESYJNYM LUB SANKCYJNYM, W TYM ZA UTRATĘ ZYSKU, PRZYCHODÓW LUB DANYCH I INNE SZKODY WYNIKAJĄCE Z KORZYSTANIA Z WITRYNY, NAWET JEŚLI POINFORMOWANO NAS O MOŻLIWOŚCI ICH WYSTĄPIENIA.'
          }
        ]
      },
      {
        title: '18. Zwolnienie z odpowiedzialności',
        body: [
          {
            kind: 'paragraph',
            text: 'Zgadzasz się bronić nas, zwolnić z odpowiedzialności i pokryć straty nas, naszych spółek zależnych i podmiotów powiązanych oraz naszych i ich członków kierownictwa, przedstawicieli, partnerów i pracowników z tytułu strat, szkód, zobowiązań i roszczeń podmiotów trzecich, w tym uzasadnionych kosztów pomocy prawnej, wynikłych z (1) korzystania z Witryny, (2) naruszenia regulaminu, (3) naruszenia złożonych w regulaminie oświadczeń i zapewnień, (4) naruszenia praw podmiotu trzeciego, w tym praw własności intelektualnej, (5) jawnie szkodliwego działania wobec innej osoby, z którą nawiązano kontakt przez Witrynę. Możemy przejąć na Twój koszt wyłączną obronę i prowadzenie sprawy objętej tym zobowiązaniem. Zgadzasz się współpracować z nami przy obronie na swój koszt. Dołożymy uzasadnionych starań, aby Cię poinformować o takim roszczeniu, pozwie lub postępowaniu, gdy się o nim dowiemy.'
          }
        ]
      },
      {
        title: '19. Dane użytkowników',
        body: [
          {
            kind: 'paragraph',
            text: 'Przechowujemy niektóre dane przekazywane do Witryny, aby zarządzać jej działaniem, oraz dane dotyczące korzystania z niej. Pomimo regularnego tworzenia kopii zapasowych tylko Ty odpowiadasz za przesłane dane i dane dotyczące Twojej aktywności w Witrynie. Zgadzasz się, że nie odpowiadamy za utratę ani uszkodzenie tych danych. Zrzekasz się prawa dochodzenia od nas roszczeń z tego tytułu.'
          }
        ]
      },
      {
        title: '20. Komunikacja elektroniczna, transakcje i podpisy',
        body: [
          {
            kind: 'paragraph',
            text: 'Odwiedzanie Witryny, wysyłanie nam wiadomości e-mail i wypełnianie formularzy online stanowią komunikację elektroniczną. Zgadzasz się na otrzymywanie komunikacji elektronicznej. Przyjmujesz, że umowy, zawiadomienia, informacje i inne komunikaty przekazywane pocztą elektroniczną i w Witrynie spełniają wymogi formy pisemnej. ZGADZASZ SIĘ NA STOSOWANIE PODPISÓW, UMÓW, ZAMÓWIEŃ I INNYCH DOKUMENTÓW ELEKTRONICZNYCH ORAZ ELEKTRONICZNE DOSTARCZANIE ZAWIADOMIEŃ, ZASAD I DOKUMENTACJI TRANSAKCJI INICJOWANYCH LUB ZAWIERANYCH PRZEZ NAS LUB W WITRYNIE. Zrzekasz się uprawnień i wymogów wynikających z przepisów dowolnej jurysdykcji, które przewidują oryginalny podpis, dostarczanie lub zachowywanie dokumentów w postaci nieelektronicznej bądź płatności lub udzielanie kredytu w sposób inny niż elektroniczny.'
          }
        ]
      },
      {
        title: '21. Użytkownicy i mieszkańcy Kalifornii',
        body: [
          {
            kind: 'paragraph',
            text: 'Jeśli reklamacja nie zostanie przez nas rozpatrzona w zadowalający sposób, możesz skontaktować się z Complaint Assistance Unit, Division of Consumer Services, California Department of Consumer Affairs. Adres korespondencyjny to 1625 North Market Blvd., Suite N 112, Sacramento, California 95834. Numery telefonów to (800) 952-5210 i (916) 445-1254.'
          }
        ]
      },
      {
        title: '22. Postanowienia różne',
        body: [
          {
            kind: 'paragraph',
            text: 'Niniejszy regulamin i zasady opublikowane w Witrynie lub w związku z nią stanowią całość porozumienia między Tobą a nami. Nieskorzystanie z prawa lub niewykonanie postanowienia nie oznacza zrzeczenia się go. Regulamin obowiązuje w najszerszym zakresie dopuszczalnym przez prawo. Możemy w dowolnym momencie przenieść całość lub część naszych praw i obowiązków na inne podmioty. Nie odpowiadamy za straty, szkody, opóźnienia ani zaniechania spowodowane okolicznościami pozostającymi poza naszą uzasadnioną kontrolą. Postanowienie lub jego część uznane za sprzeczne z prawem, nieważne lub niewykonalne zostają wyłączone bez wpływu na ważność i wykonalność pozostałych postanowień. Regulamin ani korzystanie z Witryny nie tworzą między nami wspólnego przedsięwzięcia, stosunku spółki, zatrudnienia ani przedstawicielstwa. Zgadzasz się, że regulaminu nie należy interpretować na naszą niekorzyść tylko z uwagi na to, że go opracowaliśmy. Zrzekasz się zarzutów opartych na elektronicznej formie regulaminu i braku podpisów stron.'
          }
        ]
      },
      {
        title: '23. Kontakt',
        body: [
          {
            kind: 'paragraph',
            text: 'Aby rozstrzygnąć skargę dotyczącą Witryny lub uzyskać informacje o korzystaniu z niej, skontaktuj się z nami pod poniższym adresem:'
          }
        ]
      }
    ]
  }
};
