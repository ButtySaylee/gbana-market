-- Fully Funded Scholarships for Liberians - March 2026
-- This file adds current fully funded scholarship opportunities with active deadlines
-- Execute this in Supabase SQL Editor to add these scholarships to the platform

INSERT INTO opportunities (title, description, type, organization, location, deadline, requirements, application_url, image_url, is_active)
VALUES

-- Mastercard Foundation Scholars Program
(
  'Mastercard Foundation Scholars Program 2026',
  'The Mastercard Foundation Scholars Program provides comprehensive scholarships to academically talented yet economically disadvantaged young people, particularly from Africa. The program covers tuition, accommodation, books, and provides mentorship. Scholars receive full financial support and leadership development to pursue undergraduate and graduate degrees at partner universities worldwide.',
  'scholarship',
  'Mastercard Foundation',
  'Multiple Countries',
  'June 30, 2026',
  'Must be a citizen of an African country (including Liberia). Demonstrate financial need. Strong academic record. Leadership potential and commitment to giving back to your community. Must apply through partner universities.',
  'https://mastercardfdn.org/all/scholars/',
  'https://placehold.co/800x600/002147/white?text=Mastercard+Foundation',
  true
),

-- African Union Scholarship Programme
(
  'African Union Scholarship Programme for African Students',
  'The African Union offers fully funded scholarships to African students to pursue undergraduate and postgraduate studies in science, technology, engineering, and mathematics (STEM) fields. This scholarship fully covers tuition fees, accommodation, living expenses, and travel costs. The program aims to develop African human capital and promote intra-African academic mobility.',
  'scholarship',
  'African Union Commission',
  'Various African Countries',
  'May 15, 2026',
  'Must be a citizen of an African Union Member State (Liberia qualifies). Age 35 years or below. Excellent academic performance in previous studies. Apply for STEM-related programs. Commitment to return and contribute to Africa''s development.',
  'https://au.int/en/ea/opportunities',
  'https://placehold.co/800x600/25D366/white?text=African+Union',
  true
),

-- Chevening Scholarships
(
  'Chevening Scholarships 2026/2027 - UK Government',
  'Chevening Scholarships are the UK government''s global scholarship programme, funded by the Foreign, Commonwealth and Development Office (FCDO). These prestigious awards offer future leaders the opportunity to pursue a one-year master''s degree in the UK. Fully funded package includes tuition fees, living expenses, economy return airfare, and additional allowances.',
  'scholarship',
  'UK Foreign, Commonwealth & Development Office',
  'United Kingdom',
  'November 2, 2026',
  'Liberian citizen. Have an undergraduate degree. At least two years of work experience. Apply to three different eligible UK university courses. Return to Liberia for at least two years after scholarship. English language proficiency required.',
  'https://www.chevening.org/scholarships/',
  'https://placehold.co/800x600/002147/white?text=Chevening+UK',
  true
),

-- Commonwealth Scholarships
(
  'Commonwealth Master''s Scholarships 2026 for Developing Countries',
  'Funded by the UK Foreign, Commonwealth and Development Office (FCDO), Commonwealth Scholarships support talented individuals who could not otherwise afford to study in the UK. Scholarships cover international airfare, tuition fees, living allowance, thesis grant, and arrival allowance. Priority themes include science and technology for development, strengthening health systems, and global prosperity.',
  'scholarship',
  'Commonwealth Scholarship Commission',
  'United Kingdom',
  'December 15, 2026',
  'Be a citizen or permanent resident of a Commonwealth country (Liberia). Hold a first degree of at least upper second class (2:1) or equivalent. Be unable to afford to study in the UK without this scholarship. Demonstrate how the scholarship will support development.',
  'https://cscuk.fcdo.gov.uk/scholarships/',
  'https://placehold.co/800x600/003580/white?text=Commonwealth',
  true
),

-- Fulbright Foreign Student Program
(
  'Fulbright Foreign Student Program 2026-2027',
  'The Fulbright Program offers scholarships for graduate students, young professionals and artists from abroad to study and conduct research in the United States. Fully funded scholarships cover tuition, airfare, living stipend, and health insurance for master''s and Ph.D. degree programs. This prestigious program promotes mutual understanding between the people of the United States and other countries.',
  'scholarship',
  'U.S. Department of State',
  'United States',
  'May 31, 2026',
  'Liberian citizenship. Bachelor''s degree or equivalent. Proficiency in English. Strong academic record and leadership qualities. Must return to Liberia after completing the program. Apply through the U.S. Embassy in Monrovia.',
  'https://foreign.fulbrightonline.org/',
  'https://placehold.co/800x600/1E3A8A/white?text=Fulbright+USA',
  true
),

-- Turkish Government Scholarships
(
  'Türkiye Scholarships 2026 - Fully Funded',
  'Türkiye Scholarships (Türkiye Bursları) is a government-funded scholarship program coordinated by YTB (Presidency for Turks Abroad and Related Communities). The scholarship provides full tuition waiver, monthly stipend, accommodation, health insurance, one-way flight ticket, and Turkish language course for one year. Available for undergraduate, graduate, and doctoral programs.',
  'scholarship',
  'Republic of Türkiye - YTB',
  'Turkey',
  'February 20, 2026',
  'Open to international students from any country including Liberia. Under 21 for undergraduate, under 30 for master''s, under 35 for Ph.D. Minimum 70% in previous degree. No Turkish university attendance in the past. Good health condition.',
  'https://www.turkiyeburslari.gov.tr/',
  'https://placehold.co/800x600/E30A17/white?text=Turkiye',
  true
),

-- Chinese Government Scholarship
(
  'Chinese Government Scholarship (CSC) 2026',
  'The Chinese Government Scholarship is established by the Ministry of Education of China to support international students and scholars to undertake degree studies or research in Chinese universities. Full coverage includes tuition fee, accommodation, living allowance, and comprehensive medical insurance. Programs available for undergraduate, master''s, and doctoral studies.',
  'scholarship',
  'China Scholarship Council (CSC)',
  'China',
  'April 30, 2026',
  'Non-Chinese citizens in good health. Applicants for undergraduate programs must have senior high school diploma and be under 25. For master''s programs: bachelor''s degree, under 35. For doctoral programs: master''s degree, under 40. Good academic performance.',
  'https://www.campuschina.org/',
  'https://placehold.co/800x600/DE2910/white?text=China+CSC',
  true
),

-- Japanese Government MEXT Scholarship
(
  'MEXT Scholarship 2026 - Japanese Government',
  'The Japanese Ministry of Education, Culture, Sports, Science and Technology (MEXT) offers scholarships to international students who wish to study at Japanese universities as undergraduate or graduate students. Full scholarship includes tuition fees, monthly allowance, and round-trip airfare. This prestigious scholarship promotes international exchange and mutual understanding.',
  'scholarship',
  'Japanese Ministry of Education (MEXT)',
  'Japan',
  'May 1, 2026',
  'Liberian nationality. Age requirements vary by program level. Good academic record. Good health. Must study Japanese language. Apply through Japanese Embassy in Monrovia. Not have prior Japanese government scholarship.',
  'https://www.mext.go.jp/en/policy/education/highered/title02/detail02/sdetail02/1373897.htm',
  'https://placehold.co/800x600/BC002D/white?text=MEXT+Japan',
  true
),

-- DAAD Scholarships Germany
(
  'DAAD Scholarships 2026 - Development-Related Postgraduate Courses',
  'The German Academic Exchange Service (DAAD) offers scholarships for development-related postgraduate courses in Germany. Scholarships are awarded to foreign graduates from development and newly industrialised countries. Full funding includes monthly stipend, health insurance, travel allowance, and study and research allowance. Covers master''s degree programs.',
  'scholarship',
  'DAAD (German Academic Exchange Service)',
  'Germany',
  'October 31, 2026',
  'Liberian or from other development country. Bachelor''s degree with above-average results. At least two years of professional experience. Development-oriented focus in studies or work. German or English language proficiency depending on program.',
  'https://www.daad.de/en/study-and-research-in-germany/scholarships/',
  'https://placehold.co/800x600/000000/white?text=DAAD+Germany',
  true
),

-- ADB-JSP Scholarship
(
  'ADB-Japan Scholarship Program 2026',
  'The Asian Development Bank-Japan Scholarship Program (ADB-JSP) provides opportunities to citizens of ADB''s developing member countries to undertake postgraduate studies in economics, management, science and technology, and other development-related fields. Full scholarship covers tuition fees, housing, books, medical insurance, and travel. Available at participating academic institutions.',
  'scholarship',
  'Asian Development Bank',
  'Various Countries (Asia-Pacific)',
  'August 1, 2026',
  'Liberian citizen (ADB developing member country). Bachelor''s degree with excellent academic record. At least two years of professional experience. Proficiency in oral and written English. Not more than 35 years old. Commitment to return to home country.',
  'https://www.adb.org/work-with-us/careers/japan-scholarship-program',
  'https://placehold.co/800x600/0058A3/white?text=ADB-JSP',
  true
),

-- Australian Awards Scholarship
(
  'Australian Awards Scholarships 2026',
  'Australian Awards Scholarships offer opportunities for people from developing countries, particularly in the Indo-Pacific region, to undertake full-time undergraduate or postgraduate study at participating Australian universities. Scholarships cover full tuition fees, return air travel, living expenses, health coverage, and additional academic support. Focuses on building skills and knowledge for development.',
  'scholarship',
  'Australian Government - Department of Foreign Affairs',
  'Australia',
  'April 30, 2026',
  'Citizen of an eligible country (check Liberia eligibility). Minimum age 18. Academic merit and professional experience. English language proficiency. Not hold Australian citizenship or permanent residency. Commitment to return home after studies.',
  'https://www.dfat.gov.au/people-to-people/australia-awards',
  'https://placehold.co/800x600/012169/white?text=Australia+Awards',
  true
),

-- African Development Bank Scholarship
(
  'AfDB Scholarship Program 2026 for African Students',
  'The African Development Bank Scholarship Program provides opportunities for young Africans to pursue master''s degree programs in development-related fields. The program is open to citizens of AfDB member countries. Scholarships cover tuition, accommodation, travel, health insurance, and provide a monthly stipend. Focuses on building capacity in areas critical to Africa''s development.',
  'scholarship',
  'African Development Bank (AfDB)',
  'Various Countries',
  'March 31, 2026',
  'National of an AfDB member country (Liberia qualifies). Not more than 30 years for master''s programs. Good academic record. Work experience in development-related field preferred. Must return to work in an African country after studies.',
  'https://www.afdb.org/en/about-us/careers/scholarship-program',
  'https://placehold.co/800x600/003D7A/white?text=AfDB',
  true
);

-- Success message
SELECT 'Successfully added 12 fully funded scholarship opportunities for Liberian students!' AS message;
