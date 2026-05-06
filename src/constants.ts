import { TourDate, Album, NewsItem, VIPPackage } from './types';
import { ASSETS } from './assets';

export const TOUR_DATES: TourDate[] = [
  // Upcoming Dates (from May 3, 2026 onwards)
  { id: 't-2026-0', date: 'May 9, 2026', venue: 'Marktplatz', location: 'Zeulenroda-Triebes (MDR Live)', country: 'Germany', status: 'upcoming', ticketUrl: '#', timestamp: 1778284800000 },
  { id: 't-2026-sp', date: 'May 16, 2026', venue: 'VAZ St. Pölten', location: 'St. Pölten', country: 'Austria', status: 'upcoming', ticketUrl: '#', timestamp: 1778889600000 },
  { id: 't-2026-1', date: 'Jun 27, 2026', venue: 'Kirtaplatz', location: 'Sankt Martin', country: 'Austria', status: 'upcoming', ticketUrl: '#', timestamp: 1782518400000 },
  { id: 't-2026-2', date: 'Jul 10-11, 2026', venue: 'Wörthersee Ostbucht', location: 'Klagenfurt', country: 'Austria', status: 'upcoming', ticketUrl: '#', timestamp: 1783641600000 },
  { id: 't-2026-3', date: 'Aug 8, 2026', venue: 'Freilichtbühne', location: 'Wiesmoor', country: 'Germany', status: 'upcoming', ticketUrl: '#', timestamp: 1786147200000 },
  { id: 't-2026-4', date: 'Sep 12, 2026', venue: 'Festung Kufstein', location: 'Kufstein', country: 'Austria', status: 'upcoming', ticketUrl: '#', timestamp: 1789171200000 },
  { id: 't-2026-5', date: 'Sep 19, 2026', venue: 'Buderus Arena', location: 'Wetzlar', country: 'Germany', status: 'upcoming', ticketUrl: '#', timestamp: 1789776000000 },
  { id: 't-2026-6', date: 'Sep 25, 2026', venue: 'Jahrhunderthalle', location: 'Frankfurt', country: 'Germany', status: 'upcoming', ticketUrl: '#', timestamp: 1790294400000 },
  { id: 't-2026-7', date: 'Sep 26, 2026', venue: 'Porsche Arena', location: 'Stuttgart', country: 'Germany', status: 'upcoming', ticketUrl: '#', timestamp: 1790380800000 },
  { id: 't-2026-8', date: 'Oct 1, 2026', venue: 'Stadthalle', location: 'Bielefeld', country: 'Germany', status: 'upcoming', ticketUrl: '#', timestamp: 1790812800000 },
  { id: 't-2026-9', date: 'Oct 2, 2026', venue: 'Messehalle', location: 'Erfurt', country: 'Germany', status: 'upcoming', ticketUrl: '#', timestamp: 1790899200000 },
  { id: 't-2026-10', date: 'Oct 3, 2026', venue: 'Rudolf Weber Arena', location: 'Oberhausen', country: 'Germany', status: 'upcoming', ticketUrl: '#', timestamp: 1790985600000 },
  { id: 't-2026-11', date: 'Oct 4, 2026', venue: 'Wunderino Arena', location: 'Kiel', country: 'Germany', status: 'upcoming', ticketUrl: '#', timestamp: 1791072000000 },
  { id: 't-2026-12', date: 'Oct 6, 2026', venue: 'Swiss Life Hall', location: 'Hannover', country: 'Germany', status: 'upcoming', ticketUrl: '#', timestamp: 1791244800000 },
  { id: 't-2026-13', date: 'Oct 7, 2026', venue: 'Stadthalle', location: 'Rostock', country: 'Germany', status: 'upcoming', ticketUrl: '#', timestamp: 1791331200000 },
  { id: 't-2026-14', date: 'Oct 9, 2026', venue: 'SAP Arena', location: 'Mannheim', country: 'Germany', status: 'upcoming', ticketUrl: '#', timestamp: 1791504000000 },
  { id: 't-2026-15', date: 'Oct 10, 2026', venue: 'Hallenstadion', location: 'Zurich', country: 'Switzerland', status: 'upcoming', ticketUrl: '#', timestamp: 1791590400000 },
  { id: 't-2026-16', date: 'Oct 16, 2026', venue: 'Messe Dresden', location: 'Dresden', country: 'Germany', status: 'upcoming', ticketUrl: '#', timestamp: 1792108800000 },
  { id: 't-2026-17', date: 'Oct 17, 2026', venue: 'Quarterback Arena', location: 'Leipzig', country: 'Germany', status: 'upcoming', ticketUrl: '#', timestamp: 1792195200000 },
  { id: 't-2026-18', date: 'Oct 18, 2026', venue: 'Mitsubishi Electric Halle', location: 'Düsseldorf', country: 'Germany', status: 'upcoming', ticketUrl: '#', timestamp: 1792281600000 },
  { id: 't-2026-19', date: 'Oct 22, 2026', venue: 'Kia Metropol Arena', location: 'Nuremberg', country: 'Germany', status: 'upcoming', ticketUrl: '#', timestamp: 1792627200000 },
  { id: 't-2026-20', date: 'Oct 23, 2026', venue: 'GETEC Arena', location: 'Magdeburg', country: 'Germany', status: 'upcoming', ticketUrl: '#', timestamp: 1792713600000 },
  { id: 't-2026-21', date: 'Oct 24, 2026', venue: 'Uber Arena', location: 'Berlin', country: 'Germany', status: 'upcoming', ticketUrl: '#', timestamp: 1792800000000 },
  { id: 't-2026-22', date: 'Oct 25, 2026', venue: 'Barclays Arena', location: 'Hamburg', country: 'Germany', status: 'upcoming', ticketUrl: '#', timestamp: 1792886400000 },
  { id: 't-2026-23', date: 'Oct 30, 2026', venue: 'SWT Arena', location: 'Trier', country: 'Germany', status: 'upcoming', ticketUrl: '#', timestamp: 1793318400000 },
  { id: 't-2026-24', date: 'Oct 31, 2026', venue: 'bigBOX Allgäu', location: 'Kempten', country: 'Germany', status: 'upcoming', ticketUrl: '#', timestamp: 1793404800000 },
  { id: 't-2026-25', date: 'Nov 12, 2026', venue: 'Stadthalle', location: 'Zwickau', country: 'Germany', status: 'upcoming', ticketUrl: '#', timestamp: 1794441600000 },
  { id: 't-2026-26', date: 'Nov 13, 2026', venue: 'BMW Park', location: 'Munich', country: 'Germany', status: 'upcoming', ticketUrl: '#', timestamp: 1794528000000 },
  { id: 't-2026-27', date: 'Nov 14, 2026', venue: 'Wiener Stadthalle', location: 'Vienna', country: 'Austria', status: 'upcoming', ticketUrl: '#', timestamp: 1794614400000 },

  // Past Dates
  { id: 'p-2026-1', date: 'Mar 12, 2026', venue: 'Porsche Arena', location: 'Stuttgart', country: 'Germany', status: 'past', ticketUrl: '#', timestamp: 1773273600000 },
  { id: 'p-2026-2', date: 'Mar 13, 2026', venue: 'SAP Arena', location: 'Mannheim', country: 'Germany', status: 'past', ticketUrl: '#', timestamp: 1773360000000 },
  { id: 'p-2026-3', date: 'Mar 14, 2026', venue: 'Festhalle', location: 'Frankfurt', country: 'Germany', status: 'past', ticketUrl: '#', timestamp: 1773446400000 },
  { id: 'p-2025-4', date: 'Oct 11, 2025', venue: 'Messe Graz', location: 'Graz', country: 'Austria', status: 'past', ticketUrl: '#', timestamp: 1760140800000 },
  { id: 'p-2025-3', date: 'Sep 26, 2025', venue: 'TipsArena', location: 'Linz', country: 'Austria', status: 'past', ticketUrl: '#', timestamp: 1758844800000 },
  { id: 'p-2025-5', date: 'Aug 15, 2025', venue: 'Seebühne Mörbisch', location: 'Mörbisch', country: 'Austria', status: 'past', ticketUrl: '#', timestamp: 1755216000000 },
  { id: 'p-2025-6', date: 'Jul 12, 2025', venue: 'Wörthersee Ostbucht', location: 'Klagenfurt', country: 'Austria', status: 'past', ticketUrl: '#', timestamp: 1752278400000 },
  { id: 'p-2025-1', date: 'Apr 11, 2025', venue: 'Messe', location: 'Dresden', country: 'Germany', status: 'past', ticketUrl: '#', timestamp: 1744329600000 },
  { id: 'p-2025-2', date: 'Apr 13, 2025', venue: 'Milchwerk', location: 'Radolfzell', country: 'Germany', status: 'past', ticketUrl: '#', timestamp: 1744502400000 },
  { id: 'p-2024-7', date: 'Jul 13, 2024', venue: 'Wörthersee Schlagernacht', location: 'Klagenfurt', country: 'Austria', status: 'past', ticketUrl: '#', timestamp: 1720828800000 },
  { id: 'p-2024-6', date: 'Jul 12, 2024', venue: 'Seebühne Mörbisch', location: 'Mörbisch', country: 'Austria', status: 'past', ticketUrl: '#', timestamp: 1720742400000 },
  { id: 'p-2024-5', date: 'May 5, 2024', venue: 'Wiener Stadthalle', location: 'Vienna', country: 'Austria', status: 'past', ticketUrl: '#', timestamp: 1714867200000 },
  { id: 'p-2024-4', date: 'May 4, 2024', venue: 'Circus Krone', location: 'Munich', country: 'Germany', status: 'past', ticketUrl: '#', timestamp: 1714780800000 },
  { id: 'p-2024-3', date: 'Apr 18, 2024', venue: 'Tempodrom', location: 'Berlin', country: 'Germany', status: 'past', ticketUrl: '#', timestamp: 1713398400000 },
  { id: 'p-2024-2', date: 'Apr 13, 2024', venue: 'Jahrhunderthalle', location: 'Frankfurt', country: 'Germany', status: 'past', ticketUrl: '#', timestamp: 1712966400000 },
  { id: 'p-2024-1', date: 'Apr 11, 2024', venue: 'Kulturpalast', location: 'Dresden', country: 'Germany', status: 'past', ticketUrl: '#', timestamp: 1712793600000 },
];

export const ALBUMS: Album[] = [
  {
    id: 'a1',
    title: 'Sag mir wo wohnen die Engel',
    year: '2007',
    coverUrl: ASSETS.ALBUMS.SAG_MIR,
    price: 14.99,
    tracks: [
      { id: 't12', title: 'Sag mir wo wohnen die Engel', duration: '3:15', previewUrl: '#' }
    ]
  },
  {
    id: 'a2',
    title: 'Wenn der Himmel es so will',
    year: '2008',
    coverUrl: ASSETS.ALBUMS.HIMMEL,
    price: 14.99,
    tracks: [
      { id: 't14', title: 'Wenn der Himmel es so will', duration: '3:05', previewUrl: '#' }
    ]
  },
  {
    id: 'a3',
    title: 'Feuer und Flamme',
    year: '2011',
    coverUrl: ASSETS.ALBUMS.FEUER,
    price: 14.99,
    tracks: [
      { id: 't16', title: 'Feuer und Flamme', duration: '3:10', previewUrl: '#' }
    ]
  },
  {
    id: 'a4',
    title: 'Glücksgefühle',
    year: '2013',
    coverUrl: ASSETS.ALBUMS.GLUCKSGEFUHLE,
    price: 19.99,
    tracks: [
      { id: 't7', title: 'Mein Herz', duration: '3:18', previewUrl: '#' },
      { id: 't8', title: 'Jetzt und hier für immer', duration: '3:28', previewUrl: '#' },
    ]
  },
  {
    id: 'a5',
    title: 'Pure Lebensfreude',
    year: '2013',
    coverUrl: ASSETS.ALBUMS.PURE_LEBENSFREUDE,
    price: 19.99,
    tracks: [
      { id: 't18', title: 'Verrückt nach dir', duration: '3:15', previewUrl: '#' },
      { id: 't19', title: 'Irgendwann', duration: '3:20', previewUrl: '#' }
    ]
  },
  {
    id: 'a6',
    title: 'Bis hierher und viel weiter',
    year: '2014',
    coverUrl: ASSETS.ALBUMS.BIS_HIERHER,
    price: 19.99,
    tracks: [
      { id: 't20', title: 'Auf die Plätze, fertig, ins Glück', duration: '3:12', previewUrl: '#' },
      { id: 't21', title: 'Wir leben laut', duration: '3:20', previewUrl: '#' }
    ]
  },
  {
    id: 'a7',
    title: 'Kick im Augenblick',
    year: '2016',
    coverUrl: ASSETS.ALBUMS.KICK,
    price: 22.99,
    tracks: [
      { id: 't22', title: 'Kick im Augenblick', duration: '3:18', previewUrl: '#' },
      { id: 't23', title: 'Fliegen', duration: '3:05', previewUrl: '#' }
    ]
  },
  {
    id: 'a8',
    title: 'Wohlfühlgarantie',
    year: '2018',
    coverUrl: ASSETS.ALBUMS.WOHLFUHLGARANTIE,
    price: 22.99,
    tracks: [
      { id: 't24', title: 'Herz an', duration: '3:24', previewUrl: '#' },
      { id: 't25', title: 'Wohlfühlgarantie', duration: '3:18', previewUrl: '#' }
    ]
  },
  {
    id: 'a9',
    title: 'Natürlich!',
    year: '2019',
    coverUrl: ASSETS.ALBUMS.NATURLICH,
    price: 24.99,
    tracks: [
      { id: 't26', title: 'Terra Australia', duration: '3:25', previewUrl: '#' },
      { id: 't27', title: 'Le Li La', duration: '3:10', previewUrl: '#' }
    ]
  },
  {
    id: 'a10',
    title: 'Mini Schwiiz, mini Heimat',
    year: '2020',
    coverUrl: ASSETS.ALBUMS.MINI_SCHWIIZ,
    price: 24.99,
    tracks: [
      { id: 't28', title: 'Mini Schwiiz, mini Heimat', duration: '3:15', previewUrl: '#' }
    ]
  },
  {
    id: 'a11',
    title: 'Alles was du brauchst',
    year: '2021',
    coverUrl: ASSETS.ALBUMS.ALLES_WAS_DU_BRAUCHST,
    price: 29.99,
    tracks: [
      { id: 't1', title: 'Alles was du brauchst', duration: '3:12', previewUrl: '#' },
      { id: 't2', title: 'Samstagnacht', duration: '3:07', previewUrl: '#' },
    ]
  },
  {
    id: 'a12',
    title: 'Balance',
    year: '2023',
    coverUrl: ASSETS.ALBUMS.BALANCE,
    price: 34.99,
    tracks: [
      { id: 't10', title: 'Volles Risiko', duration: '3:15', previewUrl: '#' },
      { id: 't11', title: 'Balance', duration: '3:05', previewUrl: '#' }
    ]
  },
  {
    id: 'a13',
    title: 'Hör nie auf damit',
    year: '2025',
    coverUrl: ASSETS.ALBUMS.HOR_NIE_AUF,
    price: 39.90,
    isPreorder: true,
    tracks: [
      { id: 't30', title: 'Hör nie auf damit', duration: '3:20', previewUrl: '#' },
      { id: 't31', title: 'Alles was bleibt', duration: '3:10', previewUrl: '#' }
    ]
  }
];

export const NEWS: NewsItem[] = [
  { id: 'n1', title: 'Arena Tour 2026: Extra Dates Added Due to High Demand', date: 'Apr 20, 2026', category: 'Tickets & Bookings', imageUrl: ASSETS.NEWS.SINGLE_REACH },
  { id: 'n2', title: 'Beatrice Egli Show Sets New Record Ratings', date: 'Mar 15, 2026', category: 'Television', imageUrl: ASSETS.NEWS.WORKSHOP },
  { id: 'n3', title: 'Exclusive "Volles Risiko" Live Album Announced', date: 'Feb 10, 2026', category: 'Music', imageUrl: ASSETS.NEWS.STUDIO_SESSIONS },
];

export const VIP_PACKAGES: VIPPackage[] = [
  { id: 'v1', name: 'Meeting Permit Regular Card', price: 1500, description: ['Official Meeting Access', 'Dedicated Entry', 'Digital Commemorative Card', 'Standard Event Participation'] },
  { id: 'v2', name: 'Meeting Permit V.I.P Card', price: 3500, description: ['Priority Meeting Access', 'Front Section Seating', 'Physical VIP Laminate', 'Limited Edition Merchandise Pack'] },
  { id: 'v3', name: 'Meeting Permit V.V.I.P Card', price: 5000, description: ['Exclusive Backstage Access', 'Ultra-Premium Seating', 'One-on-One Introduction', 'Luxury Catering and Lounge Access'] },
  { id: 'v4', name: 'Special Guest Card', price: 10000, description: ['All-Access Stage Pass', 'Private Dressing Room Visit', 'Personal Professional Photoshoot', 'Lifetime Fan Club Membership'] },
  { id: 'v5', name: 'Simple Meet & Greet', price: 5000, description: ['Group Meet & Greet Session', 'Professional Group Photo', 'Pre-signed Autograph Card', 'Early Entry Access'] },
  { id: 'v6', name: 'VIP Meet & Greet', price: 10000, description: ['Solo Meet & Greet Session', 'Video Message from Beatrice', 'Custom Signed Memorabilia', 'First Row Premium Seating'] },
];

export const BIO_CONTENT = {
  earlyYears: "Born June 21, 1988, in Lachen, Switzerland. Growing up in a musical family, she began singing at local festivals at a young age and later attended drama school in Hamburg to hone her acting and vocal skills.",
  achievements: "Her breakthrough came in 2013 when she won the tenth season of 'Deutschland sucht den Superstar' (DSDS). Following her victory, her hit single 'Mein Herz' reached number one in Germany, Switzerland, and Austria. She has sold millions of records and won prestigious awards like the Echo and the Swiss Music Award.",
  philanthropy: "Beyond her successful music career and television hosting, she is a passionate advocate for body positivity, self-love, and staying true to oneself, inspiring millions of fans across the German-speaking world."
};
