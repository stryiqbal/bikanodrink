export interface Product {
  id: string; name: string; subName: string; price: string; description: string;
  folderPath: string; themeColor: string; gradient: string; features: string[];
  palette: { accent: string; surface: string; section: string; border: string; soft: string; footer: string; footerAccent: string };
  stats: { label: string; val: string }[];
  section1: { title: string; subtitle: string }; section2: { title: string; subtitle: string };
  section3: { title: string; subtitle: string }; section4: { title: string; subtitle: string };
  detailsSection: { title: string; description: string; imageAlt: string };
  freshnessSection: { title: string; description: string };
  buyNowSection: { price: string; unit: string; processingParams: string[]; deliveryPromise: string; returnPolicy: string };
}

export const products: Product[] = [
  {
    id: 'badam', name: 'Badam', subName: 'A little nutty. A lot lovely.', price: 'Explore the flavour',
    description: 'A creamy almond drink made for the good parts of your day.', folderPath: '/images/Badam', themeColor: '#bd7948', palette: { accent: '#a96536', surface: '#f7f0e7', section: '#ead9c8', border: '#d9bea7', soft: '#f8e5d5', footer: '#2a211b', footerAccent: '#d29b70' },
    gradient: 'linear-gradient(140deg,#d29a65 0%,#79452d 100%)', features: ['Almond goodness', 'Creamy, comforting taste', 'Made for everyday moments'],
    stats: [{ label: 'Mood', val: 'Cozy' }, { label: 'Taste', val: 'Creamy' }, { label: 'Moment', val: 'Anytime' }],
    section1: { title: 'Almond, made lovely.', subtitle: 'A little nutty. A lot lovely.' },
    section2: { title: 'Almond goodness, made delightful.', subtitle: 'A mellow almond flavour and a smooth, creamy sip for your everyday moments.' },
    section3: { title: 'Creamy comfort, anytime.', subtitle: 'A familiar, comforting taste that makes any little pause feel special.' },
    section4: { title: 'Goodness worth slowing down for.', subtitle: '' },
    detailsSection: { title: 'A familiar favourite, reimagined.', description: 'Nutty, mellow and wonderfully smooth. Bikanodrink Badam brings the familiar comfort of almond flavour into a ready-to-enjoy drink. Keep one close for the moments that call for something a little more special.', imageAlt: 'Bikanodrink Badam drink with almonds and creamy milk' },
    freshnessSection: { title: 'A fresh take on a classic.', description: 'Thoughtful flavour, inviting texture and a bottle that fits right into your day. Enjoy it chilled for the full creamy, nutty experience.' },
    buyNowSection: { price: 'Find your favourite', unit: 'Bikanodrink Badam', processingParams: ['Almond inspired', 'Creamy taste', 'Best enjoyed chilled'], deliveryPromise: 'Discover Bikanodrink at a retailer near you.', returnPolicy: 'Have a question? Get in touch with our team.' }
  },
  {
    id: 'chocolate', name: 'Chocolate', subName: 'Your happy place, in a sip.', price: 'Explore the flavour',
    description: 'Deep, velvety chocolate for a delicious little reset.', folderPath: '/images/Chocolate', themeColor: '#80513f', palette: { accent: '#7d4938', surface: '#f5ebe6', section: '#e8d5cc', border: '#d3b4a7', soft: '#f4e1da', footer: '#261916', footerAccent: '#c58b77' },
    gradient: 'linear-gradient(140deg,#9a684f 0%,#3b241e 100%)', features: ['Chocolatey indulgence', 'Rich and velvety', 'A treat for any time'],
    stats: [{ label: 'Mood', val: 'Happy' }, { label: 'Taste', val: 'Velvety' }, { label: 'Moment', val: 'Anytime' }],
    section1: { title: 'A little cocoa magic.', subtitle: 'Your happy place, in a sip.' },
    section2: { title: 'A richer kind of chocolate.', subtitle: 'Deep cocoa notes meet a smooth, velvety sip for your next delicious pause.' },
    section3: { title: 'A little joy in every sip.', subtitle: 'A comforting chocolate treat for breaks big or small. Enjoy it chilled.' },
    section4: { title: 'Let the good sip happen.', subtitle: '' },
    detailsSection: { title: 'The chocolate kind of wonderful.', description: 'Deep, comforting chocolate flavour meets a smooth, satisfying sip. Bikanodrink Chocolate is here for movie nights, mid-day breaks and every little moment that deserves a treat.', imageAlt: 'Bikanodrink Chocolate drink with cocoa and creamy milk' },
    freshnessSection: { title: 'A treat, ready when you are.', description: 'Keep it chilled, crack it open and take a moment for yourself. A familiar chocolate favourite with a Bikanodrink twist.' },
    buyNowSection: { price: 'Find your favourite', unit: 'Bikanodrink Chocolate', processingParams: ['Chocolate flavour', 'Smooth and rich', 'Best enjoyed chilled'], deliveryPromise: 'Discover Bikanodrink at a retailer near you.', returnPolicy: 'Have a question? Get in touch with our team.' }
  },
  {
    id: 'coffee', name: 'Coffee', subName: 'Good mornings start here.', price: 'Explore the flavour',
    description: 'A bold, smooth coffee companion for wherever the day takes you.', folderPath: '/images/Coffee', themeColor: '#906141', palette: { accent: '#84572f', surface: '#f5eee3', section: '#e8d7c1', border: '#d3bea0', soft: '#f5e7d3', footer: '#241c15', footerAccent: '#d0a36c' },
    gradient: 'linear-gradient(140deg,#b07a4f 0%,#40291e 100%)', features: ['Coffee comfort', 'Bold, smooth flavour', 'Your day, your pace'],
    stats: [{ label: 'Mood', val: 'Bright' }, { label: 'Taste', val: 'Bold' }, { label: 'Moment', val: 'Anytime' }],
    section1: { title: 'Find your coffee moment.', subtitle: 'Good mornings start here.' },
    section2: { title: 'A bold coffee moment.', subtitle: 'A roasted coffee flavour and smooth finish, ready for wherever the day takes you.' },
    section3: { title: 'A smooth lift for your day.', subtitle: 'Make room for a satisfying coffee-inspired pause, from morning to afternoon.' },
    section4: { title: 'A little lift in every moment.', subtitle: '' },
    detailsSection: { title: 'Your everyday coffee ritual.', description: 'Big coffee mood, ready-to-enjoy ease. Bikanodrink Coffee brings a familiar roasted flavour and a smooth finish wherever your day is headed. Simply chill, sip and get back to what you love.', imageAlt: 'Bikanodrink Coffee drink with coffee beans' },
    freshnessSection: { title: 'Ready when the day is.', description: 'A handy companion for busy mornings and well-earned breaks. Keep it chilled and make your next coffee moment a Bikanodrink moment.' },
    buyNowSection: { price: 'Find your favourite', unit: 'Bikanodrink Coffee', processingParams: ['Coffee flavour', 'Bold and smooth', 'Best enjoyed chilled'], deliveryPromise: 'Discover Bikanodrink at a retailer near you.', returnPolicy: 'Have a question? Get in touch with our team.' }
  },
  {
    id: 'thandai', name: 'Thandai', subName: 'A celebration in every sip.', price: 'Explore the flavour',
    description: 'A festive, fragrant favourite made for sharing good times.', folderPath: '/images/Thandai', themeColor: '#d1a64d', palette: { accent: '#9b791e', surface: '#f7f2dd', section: '#ece1b5', border: '#d9ca8a', soft: '#f8efc9', footer: '#242014', footerAccent: '#dfc56f' },
    gradient: 'linear-gradient(140deg,#e1c275 0%,#86652c 100%)', features: ['Festive favourite', 'Fragrant, joyful flavour', 'Made for sharing'],
    stats: [{ label: 'Mood', val: 'Festive' }, { label: 'Taste', val: 'Fragrant' }, { label: 'Moment', val: 'Together' }],
    section1: { title: 'A sip of celebration.', subtitle: 'A celebration in every sip.' },
    section2: { title: 'A taste of tradition.', subtitle: 'Fragrant spices and a festive flavour come together in this much-loved classic.' },
    section3: { title: 'A celebration, chilled.', subtitle: 'A refreshing twist on a beloved favourite, made for sharing good moments.' },
    section4: { title: 'A tradition with a fresh twist.', subtitle: '' },
    detailsSection: { title: 'A taste of togetherness.', description: 'Inspired by a much-loved Indian classic, Bikanodrink Thandai is a joyful, fragrant sip for festive tables and everyday celebrations alike. Bring it out, pour it chilled and share a little happiness.', imageAlt: 'Bikanodrink Thandai drink with festive spices and nuts' },
    freshnessSection: { title: 'Make every day a little festive.', description: 'A refreshing way to bring people together. Serve chilled and share the feeling of a celebration, whenever you need one.' },
    buyNowSection: { price: 'Find your favourite', unit: 'Bikanodrink Thandai', processingParams: ['Festive flavour', 'Fragrant and smooth', 'Best enjoyed chilled'], deliveryPromise: 'Discover Bikanodrink at a retailer near you.', returnPolicy: 'Have a question? Get in touch with our team.' }
  }
];
