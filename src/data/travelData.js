const upcomingTrips = [
  {
    id: 1,
    destination: "Meghalaya (The Abode of Clouds)",
    state: "Meghalaya",
    status: "Planning",
    expectedMonth: "August 2026",
    reason:
      "Lush double-decker living root bridges, walking among clouds in Cherrapunji, and swimming in the crystal-clear waters of Umngot River.",
    travelType: "Friends",
    dreamMoment:
      "Standing on the edge of Nohkalikai Falls while heavy mist rolls in and reveals the blue plunge pool below.",
    checklist: [
      { task: "Research local Khasi homestays in Mawlynnong", completed: true },
      { task: "Book flight to Guwahati and rental cab", completed: true },
      {
        task: "Buy heavy-duty trekking shoes and rain poncho",
        completed: false,
      },
      { task: "Plan the Mawryngkhang bamboo trek route", completed: false },
    ],
    progress: 50,
    image:
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    destination: "Kerala Backwaters & Munnar Tea Hills",
    state: "Kerala",
    status: "Dreaming",
    expectedMonth: "November 2026",
    reason:
      "Slow travel on a traditional kettuvallam (houseboat) in Alleppey, and breathing in the eucalyptus-scented air of Munnar tea plantations.",
    travelType: "Family",
    dreamMoment:
      "Waking up on a houseboat surrounded by coconut palms, with a hot cup of local tea and local breakfast served on a banana leaf.",
    checklist: [
      {
        task: "Find an eco-friendly local houseboat operator",
        completed: false,
      },
      { task: "Shortlist spice farm tours near Thekkady", completed: false },
      { task: "Book Ayurvedic wellness massage session", completed: false },
    ],
    progress: 15,
    image:
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    destination: "Himachal To Kashmir Roadtrip",
    state: "Jammu & Kashmir",
    status: "Planning",
    expectedMonth: "September 2026",
    reason:
      "A grand trans-Himalayan road adventure from Manali to Srinagar via Leh, passing through some of the highest motorable passes in the world.",
    travelType: "Solo",
    dreamMoment:
      "Riding a classic cruiser bike along the Pangong Lake border road, with the deep blue water reflecting stark mountains.",
    checklist: [
      {
        task: "Acquire Inner Line Permits for Ladakh regions",
        completed: false,
      },
      {
        task: "Perform full service of the motorcycle and spare gear",
        completed: true,
      },
      {
        task: "Prepare a compact emergency medical kit with altitude pills",
        completed: true,
      },
      { task: "Shortlist cozy homestays in Turtuk", completed: false },
    ],
    progress: 40,
    image:
      "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    destination: "Spiritual Uttarakhand & Valley of Flowers",
    state: "Uttarakhand",
    status: "Booked",
    expectedMonth: "July 2026",
    reason:
      "Trekking through the biosphere reserve Valley of Flowers when it's in full bloom, and experiencing Rishikesh evening chants.",
    travelType: "Solo",
    dreamMoment:
      "Walking through a narrow mountain path surrounded by millions of wild alpine flowers of every color imaginable.",
    checklist: [
      { task: "Book train tickets to Haridwar", completed: true },
      { task: "Secure Valley of Flowers forest entry pass", completed: true },
      { task: "Register for Char Dham biometric card", completed: true },
      { task: "Book guesthouse in Govindghat", completed: true },
    ],
    progress: 100,
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    destination: "Monuments & Heritage of Karnataka",
    state: "Karnataka",
    status: "Dreaming",
    expectedMonth: "January 2027",
    reason:
      "Exploring the ruins of the Vijayanagara Empire in Hampi, staring at the grand Mysore Palace, and trekking the Western Ghats of Coorg.",
    travelType: "Solo",
    dreamMoment:
      "Watching the sunrise from behind the boulder-strewn hills of Hampi, with the ancient Virupaksha temple silhouetted in gold.",
    checklist: [
      {
        task: "Map out historical sites in Hampi and Badami",
        completed: false,
      },
      { task: "Find a local architectural guide in Hampi", completed: false },
    ],
    progress: 10,
    image:
      "https://images.unsplash.com/photo-1600100397608-f010e42fa023?auto=format&fit=crop&q=80&w=800",
  },
];
const GALLERY_IMAGES = [
  {
    src: "https://res.cloudinary.com/dv6boe8ig/image/upload/w_800,dpr_auto,q_85,f_auto/v1771916168/IMG_E9633_2.JPG_rtx2lt.jpg",
    caption: "Gulmarg",
    tripId: "kashmir-2026-trip",
  },
  {
    src: "https://res.cloudinary.com/dv6boe8ig/image/upload/w_800,dpr_auto,q_85,f_auto/v1772695861/WhatsApp_Image_2026-03-05_at_1.00.31_PM_rr8nav.jpg",
    caption: "Moment",
    tripId: "kashmir-2026-trip",
  },
  {
    src: "https://res.cloudinary.com/dv6boe8ig/image/upload/w_800,dpr_auto,q_85,f_auto/v1772534922/IMG_20260113_133457005_HDR_ep8qmb.jpg",
    caption: "Dal Lake",
    tripId: "kashmir-2026-trip",
  },
  {
    src: "https://res.cloudinary.com/dv6boe8ig/image/upload/w_800,dpr_auto,q_85,f_auto/v1778645817/20260409_165854_gxsoiz.jpg",
    caption: "Snowfall",
    tripId: "jibhi-2026-trip",
  },
  {
    src: "https://res.cloudinary.com/dv6boe8ig/image/upload/w_800,dpr_auto,q_85,f_auto/v1772533836/IMG_20260112_133206681_HDR_PCT_2_a1wbzn.jpg",
    caption: "Sonamarg",
    tripId: "kashmir-2026-trip",
  },
  {
    src: "https://res.cloudinary.com/dv6boe8ig/image/upload/w_800,dpr_auto,q_85,f_auto/v1772695563/WhatsApp_Image_2026-03-05_at_12.55.42_PM_eu5gne.jpg",
    caption: "Sonamarg",
    tripId: "kashmir-2026-trip",
  },
  {
    src: "https://res.cloudinary.com/dv6boe8ig/image/upload/w_800,dpr_auto,q_85,f_auto/v1772713133/df_yvnjmk.jpg",
    caption: "Jamshedpur",
    tripId: null,
  },
  {
    src: "https://res.cloudinary.com/dv6boe8ig/image/upload/w_800,dpr_auto,q_85,f_auto/v1778645947/IMG_20260408_174545347_HDR_gkxmbl.jpg",
    caption: "Jibhi",
    tripId: "jibhi-2026-trip",
  },
  {
    src: "https://res.cloudinary.com/dv6boe8ig/image/upload/w_800,dpr_auto,q_85,f_auto/v1772696034/WhatsApp_Image_2026-03-05_at_1.03.27_PM_rmfumt.jpg",
    caption: "Pahalgam",
    tripId: "kashmir-2026-trip",
  },
  {
    src: "https://res.cloudinary.com/dv6boe8ig/image/upload/w_800,dpr_auto,q_85,f_auto/v1772696265/WhatsApp_Image_2026-03-05_at_1.04.23_PM_lc3tpp.jpg",
    caption: "Rajgir",
    tripId: "rajgir-2026-trip",
  },
  {
    src: "https://res.cloudinary.com/dv6boe8ig/image/upload/w_800,dpr_auto,q_85,f_auto/v1772696322/WhatsApp_Image_2026-03-05_at_1.07.33_PM_revtpq.jpg",
    caption: "Solo",
    tripId: null,
  },
  {
    src: "https://res.cloudinary.com/dv6boe8ig/image/upload/w_800,dpr_auto,q_85,f_auto/v1767075158/nani4_sskpv6.jpg",
    caption: "Naini Lake",
    tripId: "nainital-2023",
  },
  {
    src: "https://res.cloudinary.com/dv6boe8ig/image/upload/w_800,dpr_auto,q_85,f_auto/v1778645803/20260409_142822_stipjb.jpg",
    caption: "Jalori Pass",
    tripId: "jibhi-2026-trip",
  },
  {
    src: "https://res.cloudinary.com/dv6boe8ig/image/upload/w_800,dpr_auto,q_85,f_auto/v1772713066/WhatsApp_Image_2026-03-05_at_5.44.30_PM_nvxw1h.jpg",
    caption: "Mukhteshwar",
    tripId: "nainital-2023",
  },
  {
    src: "https://res.cloudinary.com/dv6boe8ig/image/upload/w_800,dpr_auto,q_85,f_auto/v1772713133/WhatsApp_Image_2026-03-05_at_5.44.33_PM_mcshsr.jpg",
    caption: "Jabalpur",
    tripId: null,
  },
  {
    src: "https://res.cloudinary.com/dv6boe8ig/image/upload/w_800,dpr_auto,q_85,f_auto/v1772713066/WhatsApp_Image_2026-03-05_at_5.44.32_PM_i4skq1.jpg",
    caption: "Lucknow",
    tripId: null,
  },
  {
    src: "https://res.cloudinary.com/dv6boe8ig/image/upload/w_800,dpr_auto,q_85,f_auto/v1772713133/df_yvnjmk.jpg",
    caption: "Jamshedpur",
    tripId: null,
  },
  {
    src: "https://res.cloudinary.com/dv6boe8ig/image/upload/w_800,dpr_auto,q_85,f_auto/v1778645826/20260409_132947_vf9dpw.jpg",
    caption: "Love",
    tripId: "jibhi-2026-trip",
  },
];

const getGalleryCategory = (tripId) => {
  if (!tripId) return "Solo";
  if (tripId.includes("kashmir")) return "Kashmir";
  if (tripId.includes("jibhi")) return "Jibhi";
  if (tripId.includes("rajgir")) return "Rajgir";
  if (tripId.includes("nainital")) return "Nainital";
  return "Travel";
};

const memories = GALLERY_IMAGES.map((image, index) => ({
  id: index + 1,
  image: image.src,
  caption: image.caption,
  location: image.caption,
  date: image.tripId ? "Trip Memory" : "Personal",
  category: getGalleryCategory(image.tripId),
  mood: image.tripId ? "Travel" : "Solo",
  tripId: image.tripId,
}));
export { memories, upcomingTrips };

