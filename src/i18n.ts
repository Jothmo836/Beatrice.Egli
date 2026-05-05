import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      common: {
        pure: "PURE",
        energy: "ENERGY",
        discoverStory: "Discover the Story",
        partners: "Partners:",
        newShow: "New Show",
        ticket: "Ticket",
        vip: "VIP",
        album: "Album"
      },
      nav: {
        home: "Home",
        tour: "Tour",
        music: "Music",
        merch: "Merch",
        story: "Story",
        checkout: "Checkout",
        socials: "Official Socials",
        menu: "Menu",
        settings: "Settings",
        switchLang: "Switch to German"
      },
      footer: {
        description: "Spreading joy and pure emotions across Europe through modern pop-schlager music.",
        explore: "Explore",
        connect: "Connect",
        rights: "© 2026 EGLI RECORDS. ALL RIGHTS RESERVED.",
        privacy: "Privacy",
        terms: "Terms"
      },
      home: {
        subtitle: "",
        dates: "Tour Dates",
        about: "About Beatrice",
        era: "The New Era of Beatrice Egli",
        music: "Music",
        tour: "Tour",
        upcomingShows: "Upcoming Shows",
        viewFullTour: "View Full Tour",
        tickets: "Tickets",
        merch: "Merch",
        explore: "Explore",
        musicality: "The Musicality",
        title: "",
        title_mobile: "",
        description: "Beyond the stage lies a dedication to creating moments of joy. From her roots in Switzerland to breaking records across Europe, Beatrice Egli brings authentic passion to every performance.",
        awardTitle: "Multi-Platinum Artist",
        awardDesc: "Recognized for outstanding success and chart-topping albums in the German-speaking world.",
        techTitle: "Energy & Charisma",
        techDesc: "Captivating audiences with spectacular live shows and an unmistakable voice.",
        latestUpdate: "Latest Update",
        musicalityTitle: "Beatrice Egli",
        updateText: "Beatrice is taking the \"Volles Risiko\" to the next level during her upcoming tour! Get ready for a spectacular show featuring her latest hits and the beloved classics.",
        readBio: "Read Full Bio",
        musicDesc: "Explore the full catalog from Glücksgefühle to the latest signed master recordings.",
        tourDesc: "See Beatrice live. Official ticket links for all upcoming global engagements.",
        merchDesc: "Official merchandise. From limited hoodies to exclusive accessories.",
        merchSubtitle: "High-quality products for the ultimate fan experience.",
        visualJourney: "Visual Journey",
        stagesOfEmotion: "STAGES OF EMOTION",
        viewAllStory: "View All Story"
      },
      about: {
        producer: "Schlager Superstar",
        title: "MY STORY",
        since: "SINCE\n1988",
        earlyYearsTitle: "The Early Years",
        achievementsTitle: "Achievements",
        visionTitle: "Artistic Vision",
        visionQuote: "\"Music is pure\nJoy of Life.\"",
        performance: "Performance",
        performanceDesc: "Bringing energy, positivity, and modern pop elements into the heart of Schlager music.",
        labelTitle: "The New Era: Sony Music & Ariola",
        labelDesc: "A defining moment in Beatrice's career arrived in 2022 when she joined forces with the legendary label Ariola under the Sony Music umbrella. This 'new era' brought a fresh perspective to her music, blending her signature Schlager warmth with contemporary pop production, resulting in the groundbreaking album 'Balance'.",
        philanthropy: "Philanthropy",
        globalImpact: "Global Impact",
        bio: {
          earlyYears: "Born June 21, 1988, in Lachen, Switzerland. Growing up in a musical family, she began singing at local festivals at a young age and later attended drama school in Hamburg to hone her acting and vocal skills.",
          achievements: "Her breakthrough came in 2013 when she won the tenth season of 'Deutschland sucht den Superstar' (DSDS). Following her victory, her hit single 'Mein Herz' reached number one in Germany, Switzerland, and Austria. She has sold millions of records and won prestigious awards like the Echo and the Swiss Music Award.",
          philanthropyDescription: "Beyond her successful music career and television hosting, she is a passionate advocate for body positivity, self-love, and staying true to oneself, inspiring millions of fans across the German-speaking world."
        }
      },
      news: {
        n1: "Arena Tour 2026: Extra Dates Added Due to High Demand",
        n2: "Beatrice Egli Show Sets New Record Ratings",
        n3: "Exclusive \"Volles Risiko\" Live Album Announced",
        categories: {
          tour: "Tour",
          television: "Television",
          music: "Music"
        }
      },
      vipPackages: {
        v1: {
          name: "Meeting Permit Regular Card",
          description: ["Official Meeting Access", "Dedicated Entry", "Digital Commemorative Card", "Standard Event Participation"]
        },
        v2: {
          name: "Meeting Permit V.I.P Card",
          description: ["Priority Meeting Access", "Front Section Seating", "Physical VIP Laminate", "Limited Edition Merchandise Pack"]
        },
        v3: {
          name: "Meeting Permit V.V.I.P Card",
          description: ["Exclusive Backstage Access", "Ultra-Premium Seating", "One-on-One Introduction", "Luxury Catering and Lounge Access"]
        },
        v4: {
          name: "Special Guest Card",
          description: ["All-Access Stage Pass", "Private Dressing Room Visit", "Personal Professional Photoshoot", "Lifetime Fan Club Membership"]
        },
        v5: {
          name: "Simple Meet & Greet",
          description: ["Group Meet & Greet Session", "Professional Group Photo", "Pre-signed Autograph Card", "Early Entry Access"]
        },
        v6: {
          name: "VIP Meet & Greet",
          description: ["Solo Meet & Greet Session", "Video Message from Beatrice", "Custom Signed Memorabilia", "First Row Premium Seating"]
        }
      },
      tour: {
        subtitle: "Volles Risiko Tour",
        title: "TOUR 2026",
        upcoming: "Upcoming Shows",
        archive: "Archive",
        soldOut: "Sold Out",
        getTickets: "Get Tickets",
        tickets: "Tickets",
        vip: "VIP & Packages",
        concluded: "Concluded Event",
        reserveUpgrade: "Reserve Upgrade",
        viewAll: "View All Dates",
        months: {
          Jan: "Jan", Feb: "Feb", Mar: "Mar", Apr: "Apr", May: "May", Jun: "Jun",
          Jul: "Jul", Aug: "Aug", Sep: "Sep", Oct: "Oct", Nov: "Nov", Dec: "Dec"
        }
      },
      discography: {
        subtitle: "Official Store",
        title: "Master Collection",
        edition: "Edition",
        signedEdition: "Official Signed Edition",
        preOrder: "Pre-Order Now",
        buyNow: "Buy Now",
        preview: "Preview",
        noPreview: "No preview",
        tracklist: "Tracklist",
        signedGift: "(Signed Album + Gift)"
      },
      merchandise: {
        subtitle: "Official Collection",
        title: "MERCH",
        buyNow: "Add to Collection",
        exclusive: "Exclusive Release",
        contactManagement: "Contact Management",
        categories: {
          all: "All Items",
          clothing: "Clothing",
          accessories: "Accessories",
          homeDecor: "Home Decor",
          calendars: "Calendars",
          deluxeBoxes: "Deluxe Boxes"
        }
      },
      checkout: {
        title: "Bespoke Collection",
        empty: "Your collection is empty.",
        browse: "Browse Store",
        emptyDesc: "Browse the Master Collection to add signed items.",
        reviewSelection: "Review Selection",
        verification: "Direct Management Verification",
        remove: "Remove",
        finalize: "Finalize",
        managementAccess: "Management Direct Access",
        contactEmail: "Contact via Email",
        contactWhatsApp: "Contact via WhatsApp",
        portal: "Secured Management Portal",
        instruction: "Once you initiate contact, our management team will review your cart and provide tailored payment instructions via bank wire or secured portal. Hand-signed stock is held for 24 hours only.",
        messageTemplate: "Hello Beatrice Egli Management,\n\nI would like to proceed with the following order:\n\n{{items}}\n\nTotal (incl. fees): €{{total}}\n\nPlease provide payment instructions.",
        subtotal: "Subtotal",
        tax: "Tax/Fees (8%)",
        total: "Total",
        checkout: "Process Transaction",
        email: "Official Email",
        whatsapp: "WhatsApp Line",
        orderInquiry: "Order Inquiry - Official Beatrice Egli Store"
      },
      ai: {
        assistant: "Assistant",
        online: "Online",
        placeholder: "Ask about music, tours...",
        greeting: "Hello! I'm here to help you find music, tour dates, or book a special experience with Beatrice. How can I help?",
        disclaimer: "AI replies may be inaccurate."
      }
    }
  },
  de: {
    translation: {
      common: {
        pure: "PURE",
        energy: "ENERGIE",
        discoverStory: "Geschichte entdecken",
        partners: "Partner:",
        newShow: "ZUSATZSHOW",
        ticket: "Ticket",
        vip: "VIP",
        album: "Album"
      },
      nav: {
        home: "Startseite",
        tour: "Tour",
        music: "Musik",
        merch: "Merch",
        story: "Story",
        checkout: "Kasse",
        socials: "Offizielle Socials",
        menu: "Menü",
        settings: "Einstellungen",
        switchLang: "Auf Englisch wechseln"
      },
      footer: {
        description: "Verbreitet Freude und pure Emotionen in ganz Europa durch modernen Pop-Schlager.",
        explore: "Entdecken",
        connect: "Verbinden",
        rights: "© 2026 EGLI RECORDS. ALLE RECHTE VORBEHALTEN.",
        privacy: "Datenschutz",
        terms: "AGB"
      },
      home: {
        subtitle: "",
        dates: "Tour-Daten",
        about: "Über Beatrice",
        era: "Die neue Ära der Beatrice Egli",
        music: "Musik",
        tour: "Tour",
        upcomingShows: "Kommende Shows",
        viewFullTour: "Ganze Tour ansehen",
        tickets: "Tickets",
        merch: "Merch",
        explore: "Entdecken",
        musicality: "Die Musikalität",
        title: "",
        title_mobile: "",
        description: "Hinter der Bühne steht die Hingabe, Momente der Freude zu schaffen. Von ihren Wurzeln in der Schweiz bis hin zu Rekorden in ganz Europa bringt Beatrice Egli authentische Leidenschaft in jeden Auftritt.",
        awardTitle: "Multi-Platin-Künstlerin",
        awardDesc: "Ausgezeichnet für herausragenden Erfolg und Chartstürmer-Alben im deutschsprachigen Raum.",
        techTitle: "Energie & Charisma",
        techDesc: "Publikum faszinieren mit spektakulären Live-Shows und einer unverwechselbaren Stimme.",
        latestUpdate: "Neuestes Update",
        musicalityTitle: "Beatrice Egli",
        updateText: "Beatrice bringt das \"Volles Risiko\" auf ihrer kommenden Tour auf das nächste Level! Mach dich bereit für eine spektakuläre Show mit ihren neuesten Hits und beliebten Klassikern.",
        readBio: "Ganze Bio lesen",
        musicDesc: "Entdecke den gesamten Katalog von Glücksgefühle bis hin zu den neuesten signierten Master-Aufnahmen.",
        tourDesc: "Erlebe Beatrice live. Offizielle Ticket-Links für alle anstehenden globalen Auftritte.",
        merchDesc: "Offizielles Merchandise. Von limitierten Hoodies bis zu exklusiven Accessoires.",
        merchSubtitle: "Hochwertige Produkte für das ultimative Fan-Erlebnis.",
        visualJourney: "Visuelle Reise",
        stagesOfEmotion: "BÜHNEN DER EMOTION",
        viewAllStory: "Ganze Story ansehen"
      },
      about: {
        producer: "Schlager Superstar",
        title: "MEINE GESCHICHTE",
        since: "SEIT\n1988",
        earlyYearsTitle: "Die frühen Jahre",
        achievementsTitle: "Erfolge",
        visionTitle: "Künstlerische Vision",
        visionQuote: "\"Musik ist pure\nLebensfreude.\"",
        performance: "Auftritt",
        performanceDesc: "Energie, Positivität und moderne Pop-Elemente in das Herz der Schlagermusik bringen.",
        labelTitle: "Die neue Ära: Sony Music & Ariola",
        labelDesc: "Ein entscheidender Moment in Beatrices Karriere war das Jahr 2022, als sie sich dem legendären Label Ariola unter dem Dach von Sony Music anschloss. Diese 'neue Ära' brachte eine frische Perspektive in ihre Musik, wobei sie ihre charakteristische Schlager-Wärme mit zeitgenössischer Pop-Produktion kombinierte, was in dem bahnbrechenden Album 'Balance' gipfelte.",
        philanthropy: "Philanthropie",
        globalImpact: "Globaler Einfluss",
        bio: {
          earlyYears: "Geboren am 21. Juni 1988 in Lachen, Schweiz. Aufgewachsen in einer musikalischen Familie, begann sie schon früh bei lokalen Festen zu singen und besuchte später die Schauspielschule in Hamburg, um ihre schauspielerischen und gesanglichen Fähigkeiten zu verfeinern.",
          achievements: "Ihr Durchbruch gelang ihr 2013 mit dem Sieg in der zehnten Staffel von 'Deutschland sucht den Superstar' (DSDS). Nach ihrem Sieg erreichte ihre Hitsingle 'Mein Herz' Platz eins in Deutschland, der Schweiz und Österreich. Sie hat Millionen von Platten verkauft und renommierte Preise wie den Echo und den Swiss Music Award gewonnen.",
          philanthropyDescription: "Über ihre erfolgreiche Musikkarriere und TV-Moderationen hinaus setzt sie sich leidenschaftlich für Body Positivity, Selbstliebe und Authentizität ein und inspiriert damit Millionen von Fans im gesamten deutschsprachigen Raum."
        }
      },
      news: {
        n1: "Arena Tour 2026: Zusatztermine wegen hoher Nachfrage hinzugefügt",
        n2: "Beatrice Egli Show stellt neue Quotenrekorde auf",
        n3: "Exklusives \"Volles Risiko\" Live-Album angekündigt",
        categories: {
          tour: "Tour",
          television: "Fernsehen",
          music: "Musik"
        }
      },
      vipPackages: {
        v1: {
          name: "Meeting Permit Regular Card",
          description: ["Offizieller Meeting-Zugang", "Separater Einlass", "Digitale Erinnerungskarte", "Standard-Event-Teilnahme"]
        },
        v2: {
          name: "Meeting Permit V.I.P Card",
          description: ["Priorisierter Meeting-Zugang", "Sitzplatz im vorderen Bereich", "Physisches VIP-Laminat", "Limitierte Merchandise-Box"]
        },
        v3: {
          name: "Meeting Permit V.V.I.P Card",
          description: ["Exklusiver Backstage-Zugang", "Ultra-Premium Sitzplatz", "Persönliche Vorstellung", "Luxus-Catering und Lounge-Zugang"]
        },
        v4: {
          name: "Special Guest Card",
          description: ["All-Access Bühnenpass", "Privater Besuch in der Garderobe", "Persönliches Profi-Fotoshooting", "Lebenslange Fanclub-Mitgliedschaft"]
        },
        v5: {
          name: "Einfaches Meet & Greet",
          description: ["Gruppen Meet & Greet Session", "Professionelles Gruppenfoto", "Vorsignierte Autogrammkarte", "Früherer Einlass"]
        },
        v6: {
          name: "VIP Meet & Greet",
          description: ["Einzel Meet & Greet Session", "Videobotschaft von Beatrice", "Individuelles signiertes Sammlerstück", "Premium-Sitzplatz in der ersten Reihe"]
        }
      },
      tour: {
        subtitle: "Volles Risiko Tour",
        title: "TOUR 2026",
        upcoming: "Kommende Shows",
        archive: "Archiv",
        soldOut: "Ausverkauft",
        getTickets: "Tickets holen",
        tickets: "Tickets",
        vip: "VIP & Pakete",
        concluded: "Abschlussevent",
        reserveUpgrade: "Upgrade reservieren",
        viewAll: "Alle Termine anzeigen",
        months: {
          Jan: "Jan", Feb: "Feb", Mar: "Mär", Apr: "Apr", May: "Mai", Jun: "Jun",
          Jul: "Jul", Aug: "Aug", Sep: "Sep", Oct: "Okt", Nov: "Nov", Dec: "Dez"
        }
      },
      discography: {
        subtitle: "Offizieller Store",
        title: "Meisterkollektion",
        edition: "Edition",
        signedEdition: "Offizielle Signierte Ausgabe",
        preOrder: "Jetzt vorbestellen",
        buyNow: "Jetzt kaufen",
        preview: "Vorschau",
        noPreview: "Keine Vorschau",
        tracklist: "Titelliste",
        signedGift: "(Signiertes Album + Geschenk)"
      },
      merchandise: {
        subtitle: "Offizielle Kollektion",
        title: "MERCH",
        buyNow: "Zur Kollektion hinzufügen",
        exclusive: "Exklusive Veröffentlichung",
        contactManagement: "Management kontaktieren",
        categories: {
          all: "Alle Artikel",
          clothing: "Kleidung",
          accessories: "Accessoires",
          homeDecor: "Wohnen & Deko",
          calendars: "Kalender",
          deluxeBoxes: "Deluxe Boxen"
        }
      },
      checkout: {
        title: "Maßgeschneiderte Kollektion",
        empty: "Deine Kollektion ist leer.",
        browse: "Store durchsuchen",
        emptyDesc: "Durchstöbere die Meisterkollektion, um signierte Artikel hinzuzufügen.",
        reviewSelection: "Auswahl prüfen",
        verification: "Direkte Management-Verifizierung",
        remove: "Entfernen",
        finalize: "Abschließen",
        managementAccess: "Direkter Management-Zugang",
        contactEmail: "Per E-Mail kontaktieren",
        contactWhatsApp: "Per WhatsApp kontaktieren",
        portal: "Gesichertes Management-Portal",
        instruction: "Sobald du Kontakt aufnimmst, wird unser Management-Team deinen Warenkorb prüfen und maßgeschneiderte Zahlungsinstruktionen per Banküberweisung oder gesichertem Portal bereitstellen. Handsignierte Artikel werden nur 24 Stunden reserviert.",
        messageTemplate: "Hallo Beatrice Egli Management,\n\nich möchte mit der folgenden Bestellung fortfahren:\n\n{{items}}\n\nGesamt (inkl. Gebühren): €{{total}}\n\nBitte um Zahlungsanweisungen.",
        subtotal: "Zwischensumme",
        tax: "Steuern/Gebühren (8%)",
        total: "Gesamt",
        checkout: "Transaktion bearbeiten",
        email: "Offizielle E-Mail",
        whatsapp: "WhatsApp-Nummer",
        orderInquiry: "Bestellanfrage - Offizieller Beatrice Egli Store"
      },
      ai: {
        assistant: "Assistent",
        online: "Online",
        placeholder: "Frage nach Musik, Touren...",
        greeting: "Hallo! Ich bin hier, um dir zu helfen, Musik, Tourdaten zu finden oder ein besonderes Erlebnis mit Beatrice zu buchen. Wie kann ich helfen?",
        disclaimer: "KI-Antworten können ungenau sein."
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    }
  });

export default i18n;
