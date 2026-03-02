export interface Photo {
  id: string;
  url: string;
  category: 'Weddings' | 'Portraits' | 'Commercial' | 'Editorial' | 'Graduations' | 'Matric Dances' | 'Christmas' | 'Real Estate' | 'Street' | 'Events';
  title: string;
  description?: string;
}

export const PORTFOLIO_DATA: Photo[] = [
  // Graduation images (g1-g33)
  {
    id: 'g1',
    url: '/graduation/g1.png',
    category: 'Graduations',
    title: 'Graduation Excellence I',
  },
  {
    id: 'g2',
    url: '/graduation/g2.jpg',
    category: 'Graduations',
    title: 'Graduation Excellence II',
  },
  {
    id: 'g3',
    url: '/graduation/g3.jpg',
    category: 'Graduations',
    title: 'Graduation Excellence III',
  },
  {
    id: 'g4',
    url: '/graduation/g4.png',
    category: 'Graduations',
    title: 'Graduation Excellence IV',
  },
  {
    id: 'g5',
    url: '/graduation/g5.png',
    category: 'Graduations',
    title: 'Graduation Excellence V',
  },
  {
    id: 'g6',
    url: '/graduation/g6.png',
    category: 'Graduations',
    title: 'Graduation Excellence VI',
  },
  {
    id: 'g7',
    url: '/graduation/g7.png',
    category: 'Graduations',
    title: 'Graduation Excellence VII',
  },
  {
    id: 'g8',
    url: '/graduation/g8.png',
    category: 'Graduations',
    title: 'Graduation Excellence VIII',
  },
  {
    id: 'g9',
    url: '/graduation/g9.png',
    category: 'Graduations',
    title: 'Graduation Excellence IX',
  },
  {
    id: 'g10',
    url: '/graduation/g10.png',
    category: 'Graduations',
    title: 'Graduation Excellence X',
  },
  {
    id: 'g11',
    url: '/graduation/g11.png',
    category: 'Graduations',
    title: 'Graduation Excellence XI',
  },
  {
    id: 'g12',
    url: '/graduation/g12.png',
    category: 'Graduations',
    title: 'Graduation Excellence XII',
  },
  {
    id: 'g13',
    url: '/graduation/g13.jpg',
    category: 'Graduations',
    title: 'Graduation Excellence XIII',
  },
  {
    id: 'g14',
    url: '/graduation/g14.jpg',
    category: 'Graduations',
    title: 'Graduation Excellence XIV',
  },
  {
    id: 'g15',
    url: '/graduation/g15.jpg',
    category: 'Graduations',
    title: 'Graduation Excellence XV',
  },
  {
    id: 'g16',
    url: '/graduation/g16.jpg',
    category: 'Graduations',
    title: 'Graduation Excellence XVI',
  },
  {
    id: 'g17',
    url: '/graduation/g17.jpg',
    category: 'Graduations',
    title: 'Graduation Excellence XVII',
  },
  {
    id: 'g18',
    url: '/graduation/g18.jpg',
    category: 'Graduations',
    title: 'Graduation Excellence XVIII',
  },
  {
    id: 'g19',
    url: '/graduation/g19.jpg',
    category: 'Graduations',
    title: 'Graduation Excellence XIX',
  },
  {
    id: 'g20',
    url: '/graduation/g20.jpg',
    category: 'Graduations',
    title: 'Graduation Excellence XX',
  },
  {
    id: 'g21',
    url: '/graduation/g21.jpg',
    category: 'Graduations',
    title: 'Graduation Excellence XXI',
  },
  {
    id: 'g22',
    url: '/graduation/g22.jpg',
    category: 'Graduations',
    title: 'Graduation Excellence XXII',
  },
  {
    id: 'g23',
    url: '/graduation/g23.jpg',
    category: 'Graduations',
    title: 'Graduation Excellence XXIII',
  },
  {
    id: 'g24',
    url: '/graduation/g24.jpg',
    category: 'Graduations',
    title: 'Graduation Excellence XXIV',
  },
  {
    id: 'g25',
    url: '/graduation/g25.jpg',
    category: 'Graduations',
    title: 'Graduation Excellence XXV',
  },
  {
    id: 'g26',
    url: '/graduation/g26.jpg',
    category: 'Graduations',
    title: 'Graduation Excellence XXVI',
  },
  {
    id: 'g27',
    url: '/graduation/g27.jpg',
    category: 'Graduations',
    title: 'Graduation Excellence XXVII',
  },
  {
    id: 'g28',
    url: '/graduation/g28.jpg',
    category: 'Graduations',
    title: 'Graduation Excellence XXVIII',
  },
  {
    id: 'g29',
    url: '/graduation/g29.jpg',
    category: 'Graduations',
    title: 'Graduation Excellence XXIX',
  },
  {
    id: 'g30',
    url: '/graduation/g30.jpg',
    category: 'Graduations',
    title: 'Graduation Excellence XXX',
  },
  {
    id: 'g31',
    url: '/graduation/g31.jpg',
    category: 'Graduations',
    title: 'Graduation Excellence XXXI',
  },
  {
    id: 'g32',
    url: '/graduation/g32.jpg',
    category: 'Graduations',
    title: 'Graduation Excellence XXXII',
  },
  {
    id: 'g33',
    url: '/graduation/g33.jpg',
    category: 'Graduations',
    title: 'Graduation Excellence XXXIII',
  },

  // Lobola/Wedding images (t1-t20)
  {
    id: 't1',
    url: '/lobola/t1.jpg',
    category: 'Weddings',
    title: 'Traditional Lobola Ceremony I',
    description: 'Beautiful moments from a traditional lobola celebration.'
  },
  {
    id: 't2',
    url: '/lobola/t2.jpg',
    category: 'Weddings',
    title: 'Traditional Lobola Ceremony II',
    description: 'Capturing the essence of cultural traditions.'
  },
  {
    id: 't3',
    url: '/lobola/t3.jpg',
    category: 'Weddings',
    title: 'Traditional Lobola Ceremony III',
    description: 'Family and union celebrated through photography.'
  },
  {
    id: 't4',
    url: '/lobola/t4.jpg',
    category: 'Weddings',
    title: 'Traditional Lobola Ceremony IV',
  },
  {
    id: 't5',
    url: '/lobola/t5.jpg',
    category: 'Weddings',
    title: 'Traditional Lobola Ceremony V',
  },
  {
    id: 't6',
    url: '/lobola/t6.jpg',
    category: 'Weddings',
    title: 'Traditional Lobola Ceremony VI',
  },
  {
    id: 't7',
    url: '/lobola/t7.jpg',
    category: 'Weddings',
    title: 'Traditional Lobola Ceremony VII',
  },
  {
    id: 't8',
    url: '/lobola/t8.jpg',
    category: 'Weddings',
    title: 'Traditional Lobola Ceremony VIII',
  },
  {
    id: 't9',
    url: '/lobola/t9.jpg',
    category: 'Weddings',
    title: 'Traditional Lobola Ceremony IX',
  },
  {
    id: 't10',
    url: '/lobola/t10.jpg',
    category: 'Weddings',
    title: 'Traditional Lobola Ceremony X',
  },
  {
    id: 't11',
    url: '/lobola/t11.jpg',
    category: 'Weddings',
    title: 'Traditional Lobola Ceremony XI',
  },
  {
    id: 't12',
    url: '/lobola/t12.jpg',
    category: 'Weddings',
    title: 'Traditional Lobola Ceremony XII',
  },
  {
    id: 't13',
    url: '/lobola/t13.jpg',
    category: 'Weddings',
    title: 'Traditional Lobola Ceremony XIII',
  },
  {
    id: 't14',
    url: '/lobola/t14.jpg',
    category: 'Weddings',
    title: 'Traditional Lobola Ceremony XIV',
  },
  {
    id: 't15',
    url: '/lobola/t15.jpg',
    category: 'Weddings',
    title: 'Traditional Lobola Ceremony XV',
  },
  {
    id: 't16',
    url: '/lobola/t16.jpg',
    category: 'Weddings',
    title: 'Traditional Lobola Ceremony XVI',
  },
  {
    id: 't17',
    url: '/lobola/t17.jpg',
    category: 'Weddings',
    title: 'Traditional Lobola Ceremony XVII',
  },
  {
    id: 't18',
    url: '/lobola/t18.jpg',
    category: 'Weddings',
    title: 'Traditional Lobola Ceremony XVIII',
  },
  {
    id: 't19',
    url: '/lobola/t19.jpg',
    category: 'Weddings',
    title: 'Traditional Lobola Ceremony XIX',
  },
  {
    id: 't20',
    url: '/lobola/t20.jpg',
    category: 'Weddings',
    title: 'Traditional Lobola Ceremony XX',
  },

  // Christmas images (c1-c6)
  {
    id: 'c1',
    url: '/christmas/c1.jpg',
    category: 'Christmas',
    title: 'Festive Spirit I',
    description: 'Magical Christmas moments captured in warm, festive light.'
  },
  {
    id: 'c2',
    url: '/christmas/c2.jpg',
    category: 'Christmas',
    title: 'Festive Spirit II',
    description: 'Holiday celebrations and seasonal joy.'
  },
  {
    id: 'c3',
    url: '/christmas/c3.jpg',
    category: 'Christmas',
    title: 'Festive Spirit III',
  },
  {
    id: 'c4',
    url: '/christmas/c4.jpg',
    category: 'Christmas',
    title: 'Festive Spirit IV',
  },
  {
    id: 'c5',
    url: '/christmas/c5.jpg',
    category: 'Christmas',
    title: 'Festive Spirit V',
  },
  {
    id: 'c6',
    url: '/christmas/c6.jpg',
    category: 'Christmas',
    title: 'Festive Spirit VI',
  },

  // Street Photoshoot images (st1-st12)
  {
    id: 'st1',
    url: '/Street Photoshoot/st1.jpg',
    category: 'Street',
    title: 'Urban Chronicles I',
    description: 'Candid moments from the city streets.'
  },
  {
    id: 'st2',
    url: '/Street Photoshoot/st2.jpg',
    category: 'Street',
    title: 'Urban Chronicles II',
    description: 'Authentic city life captured in motion.'
  },
  {
    id: 'st3',
    url: '/Street Photoshoot/st3.jpg',
    category: 'Street',
    title: 'Urban Chronicles III',
    description: 'Street photography at its finest.'
  },
  {
    id: 'st4',
    url: '/Street Photoshoot/st4.jpg',
    category: 'Street',
    title: 'Urban Chronicles IV',
    description: 'The rhythm of the city through my lens.'
  },
  {
    id: 'st5',
    url: '/Street Photoshoot/st5.jpg',
    category: 'Street',
    title: 'Urban Chronicles V',
  },
  {
    id: 'st6',
    url: '/Street Photoshoot/st6.jpg',
    category: 'Street',
    title: 'Urban Chronicles VI',
  },
  {
    id: 'st7',
    url: '/Street Photoshoot/st7.jpg',
    category: 'Street',
    title: 'Urban Chronicles VII',
  },
  {
    id: 'st8',
    url: '/Street Photoshoot/st8.jpg',
    category: 'Street',
    title: 'Urban Chronicles VIII',
  },
  {
    id: 'st9',
    url: '/Street Photoshoot/st9.jpg',
    category: 'Street',
    title: 'Urban Chronicles IX',
  },
  {
    id: 'st10',
    url: '/Street Photoshoot/st10.jpg',
    category: 'Street',
    title: 'Urban Chronicles X',
  },
  {
    id: 'st11',
    url: '/Street Photoshoot/st11.jpg',
    category: 'Street',
    title: 'Urban Chronicles XI',
  },
  {
    id: 'st12',
    url: '/Street Photoshoot/st12.jpg',
    category: 'Street',
    title: 'Urban Chronicles XII',
  },

  // Real Estate images (re1-re15)
  {
    id: 're1',
    url: '/real estate/re1.jpg',
    category: 'Real Estate',
    title: 'Modern Living I',
    description: 'Stunning architectural design meets contemporary comfort.'
  },
  {
    id: 're2',
    url: '/real estate/re2.jpg',
    category: 'Real Estate',
    title: 'Modern Living II',
    description: 'Elegant spaces designed for modern lifestyles.'
  },
  {
    id: 're3',
    url: '/real estate/re3.jpg',
    category: 'Real Estate',
    title: 'Modern Living III',
    description: 'Where luxury meets functionality.'
  },
  {
    id: 're4',
    url: '/real estate/re4.jpg',
    category: 'Real Estate',
    title: 'Modern Living IV',
    description: 'Exceptional properties with breathtaking views.'
  },
  {
    id: 're5',
    url: '/real estate/re5.jpg',
    category: 'Real Estate',
    title: 'Modern Living V',
    description: 'Architectural excellence in every detail.'
  },
  {
    id: 're6',
    url: '/real estate/re6.jpg',
    category: 'Real Estate',
    title: 'Modern Living VI',
  },
  {
    id: 're7',
    url: '/real estate/re7.jpg',
    category: 'Real Estate',
    title: 'Modern Living VII',
  },
  {
    id: 're8',
    url: '/real estate/re8.jpg',
    category: 'Real Estate',
    title: 'Modern Living VIII',
  },
  {
    id: 're9',
    url: '/real estate/re9.jpg',
    category: 'Real Estate',
    title: 'Modern Living IX',
  },
  {
    id: 're10',
    url: '/real estate/re10.jpg',
    category: 'Real Estate',
    title: 'Modern Living X',
  },
  {
    id: 're11',
    url: '/real estate/re11.jpg',
    category: 'Real Estate',
    title: 'Modern Living XI',
  },
  {
    id: 're12',
    url: '/real estate/re12.jpg',
    category: 'Real Estate',
    title: 'Modern Living XII',
  },
  {
    id: 're13',
    url: '/real estate/re13.jpg',
    category: 'Real Estate',
    title: 'Modern Living XIII',
  },
  {
    id: 're14',
    url: '/real estate/re14.jpg',
    category: 'Real Estate',
    title: 'Modern Living XIV',
  },
  {
    id: 're15',
    url: '/real estate/re15.jpg',
    category: 'Real Estate',
    title: 'Modern Living XV',
  },

  // Original wedding and editorial images
  {
    id: '1',
    url: 'https://picsum.photos/seed/wedding1/1200/1600',
    category: 'Weddings',
    title: 'Ethereal Union',
    description: 'A sunset ceremony in the heart of Tuscany.'
  },
  {
    id: '4',
    url: 'https://picsum.photos/seed/edit1/1200/1600',
    category: 'Editorial',
    title: 'Vogue Noir',
    description: 'High-fashion editorial for Autumn collection.'
  },
];

export const SERVICES_DATA = [
  {
    title: 'Matric Dances',
    description: 'A milestone moment captured with the glamor and sophistication it deserves. High-fashion portraits that celebrate your journey.',
    image: '/1.png'
  },
  {
    title: 'Graduations',
    description: 'Celebrating academic achievement with professional, high-end photography that captures the pride and joy of your graduation day.',
    image: '/graduation/g1.png'
  },
  {
    title: 'Weddings',
    description: 'Capturing the essence of your union with a cinematic and editorial approach. We focus on the quiet moments and the grand gestures alike, including traditional ceremonies like lobola.',
    image: '/2.png'
  },
  {
    title: 'Editorial & Creative Direction',
    description: 'From concept to execution, we provide full creative direction for fashion houses and creative individuals seeking a unique edge.',
    image: '/3.png'
  }
];

export const ADDITIONAL_SERVICES = [
  {
    title: 'Christmas Photoshoot',
    description: 'Festive and magical holiday sessions that capture the warmth and joy of the season. Perfect for families, couples, and holiday cards.',
    image: '/christmas/c1.jpg'
  },
  {
    title: 'Real Estate Photography',
    description: 'Showcase properties with stunning architectural photography that highlights every detail and creates lasting impressions for buyers.',
    image: '/real estate/re1.jpg' // Updated to use first real estate photo
  },
  {
    title: 'Street Photography',
    description: 'Candid urban moments and authentic city life captured with an artistic eye. Raw, real, and beautifully composed.',
    image: '/Street Photoshoot/st1.jpg'
  },
  {
    title: 'Event Photography',
    description: 'Comprehensive coverage for corporate events, parties, and special occasions. Every moment documented with precision and style.',
    image: '/christmas/c4.jpg'
  }
];