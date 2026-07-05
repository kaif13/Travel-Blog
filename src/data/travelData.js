const statesData = [
  {
    id: "JK",
    name: "Jammu & Kashmir",
    status: "upcoming",
    region: "North",
    capital: "Srinagar / Jammu",
    citiesVisited: [],
    shortDescription: "A slice of heaven on earth with snow-capped mountains and tranquil lakes."
  },
  {
    id: "HP",
    name: "Himachal Pradesh",
    status: "visited",
    region: "North",
    capital: "Shimla",
    citiesVisited: ["Manali", "Kasol", "Shimla", "Dharamshala"],
    tripDate: "January 2026",
    travelType: "Friends",
    mood: "Adventurous & Freezing",
    bestFood: "Siddu with hot ghee and local Trout Fish",
    bestMemory: "Watching the first snowfall of the season at Solang Valley with my college group.",
    shortDescription: "The majestic Himalayas, roaring rivers, and endless cups of steaming ginger tea at wooden dhabas.",
    fullStoryId: 1
  },
  {
    id: "PB",
    name: "Punjab",
    status: "dreaming",
    region: "North",
    capital: "Chandigarh",
    citiesVisited: [],
    shortDescription: "Lush green mustard fields, heavy brass glasses of lassi, and the golden peace of Amritsar."
  },
  {
    id: "UK",
    name: "Uttarakhand",
    status: "upcoming",
    region: "North",
    capital: "Dehradun",
    citiesVisited: [],
    shortDescription: "Seeking deep spirituality and adrenaline rushes along the holy Ganges."
  },
  {
    id: "HR",
    name: "Haryana",
    status: "dreaming",
    region: "North",
    capital: "Chandigarh",
    citiesVisited: [],
    shortDescription: "A land of ancient battlefields, rich agrarian culture, and robust hospitality."
  },
  {
    id: "RJ",
    name: "Rajasthan",
    status: "visited",
    region: "West",
    capital: "Jaipur",
    citiesVisited: ["Jaipur", "Udaipur", "Jaisalmer"],
    tripDate: "November 2025",
    travelType: "Family",
    mood: "Royal & Warm",
    bestFood: "Dal Baati Churma and Lal Maans",
    bestMemory: "Sleeping under the starlit sky on the sand dunes of Jaisalmer after a camel safari.",
    shortDescription: "A vibrant canvas of golden deserts, majestic forts, and timeless folk music.",
    fullStoryId: 2
  },
  {
    id: "UP",
    name: "Uttar Pradesh",
    status: "visited",
    region: "Central",
    capital: "Lucknow",
    citiesVisited: ["Varanasi", "Agra", "Lucknow"],
    tripDate: "March 2026",
    travelType: "Friends",
    mood: "Spiritual & Emotional",
    bestFood: "Malaiyo in Varanasi and Tunday Kababi in Lucknow",
    bestMemory: "Experiencing the evening Ganga Aarti in Varanasi while sitting silently on a wooden boat.",
    shortDescription: "The spiritual heartland where history whispers along the ghats and architecture tells tales of eternal love.",
    fullStoryId: 3
  },
  {
    id: "BR",
    name: "Bihar",
    status: "dreaming",
    region: "East",
    capital: "Patna",
    citiesVisited: [],
    shortDescription: "The cradle of Buddhism, home of Nalanda and the rich taste of Litti Chokha."
  },
  {
    id: "SK",
    name: "Sikkim",
    status: "dreaming",
    region: "Northeast",
    capital: "Gangtok",
    citiesVisited: [],
    shortDescription: "Prstine glacial lakes, Buddhist monasteries, and the giant shadow of Mt. Kanchenjunga."
  },
  {
    id: "WB",
    name: "West Bengal",
    status: "dreaming",
    region: "East",
    capital: "Kolkata",
    citiesVisited: [],
    shortDescription: "Rich heritage of literature, yellow taxis, and sweet baked rosogollas by the Hooghly."
  },
  {
    id: "OR",
    name: "Odisha",
    status: "dreaming",
    region: "East",
    capital: "Bhubaneswar",
    citiesVisited: [],
    shortDescription: "Ancient temple architecture, serene beaches, and the migratory birds of Chilika Lake."
  },
  {
    id: "JH",
    name: "Jharkhand",
    status: "dreaming",
    region: "East",
    capital: "Ranchi",
    citiesVisited: [],
    shortDescription: "Thick forests, majestic waterfalls, and tribal heritage hidden in nature."
  },
  {
    id: "CG",
    name: "Chhattisgarh",
    status: "dreaming",
    region: "Central",
    capital: "Raipur",
    citiesVisited: [],
    shortDescription: "The Niagara of India at Chitrakote Falls and deep green tribal landscapes."
  },
  {
    id: "MP",
    name: "Madhya Pradesh",
    status: "dreaming",
    region: "Central",
    capital: "Bhopal",
    citiesVisited: [],
    shortDescription: "The heart of India, filled with tiger reserves, Khajuraho temples, and marble rocks."
  },
  {
    id: "GJ",
    name: "Gujarat",
    status: "dreaming",
    region: "West",
    capital: "Gandhinagar",
    citiesVisited: [],
    shortDescription: "The white salt desert of Rann of Kutch, Asiatic lions, and delicious Dhoklas."
  },
  {
    id: "MH",
    name: "Maharashtra",
    status: "visited",
    region: "West",
    capital: "Mumbai",
    citiesVisited: ["Mumbai", "Pune", "Mahabaleshwar", "Lonavala"],
    tripDate: "September 2025",
    travelType: "Solo",
    mood: "Fast-paced & Reflective",
    bestFood: "Vada Pav at CST Station & Misal Pav in Pune",
    bestMemory: "Sitting at Marine Drive at 2:00 AM under a light drizzle, listening to the waves crash.",
    shortDescription: "From the non-stop hustle of Mumbai to the lush Western Ghats wrapped in monsoon clouds.",
    fullStoryId: 4
  },
  {
    id: "GA",
    name: "Goa",
    status: "visited",
    region: "West",
    capital: "Panaji",
    citiesVisited: ["Panaji", "Anjuna", "Palolem", "Arambol"],
    tripDate: "December 2025",
    travelType: "Friends",
    mood: "Euphoric & Laid-back",
    bestFood: "Bebinca dessert and Prawn Balchao",
    bestMemory: "Renting scooters, riding through coconut-lined roads of South Goa, and catching a golden sunset.",
    shortDescription: "The land of sun, sand, sea breezes, Portuguese heritage, and midnight music.",
    fullStoryId: 5
  },
  {
    id: "KA",
    name: "Karnataka",
    status: "upcoming",
    region: "South",
    capital: "Bengaluru",
    citiesVisited: [],
    shortDescription: "Steeped in tech, ancient ruins of Hampi, and the misty coffee hills of Coorg."
  },
  {
    id: "KL",
    name: "Kerala",
    status: "upcoming",
    region: "South",
    capital: "Thiruvananthapuram",
    citiesVisited: [],
    shortDescription: "Cruising along the tranquil backwaters on a houseboat in God's Own Country."
  },
  {
    id: "TN",
    name: "Tamil Nadu",
    status: "dreaming",
    region: "South",
    capital: "Chennai",
    citiesVisited: [],
    shortDescription: "Magnificent towering gopurams, hot filter coffee, and the southern tip of Kanyakumari."
  },
  {
    id: "AP",
    name: "Andhra Pradesh",
    status: "dreaming",
    region: "South",
    capital: "Amaravati",
    citiesVisited: [],
    shortDescription: "Spicy coastal curries, ancient Buddhist sites, and the hills of Tirupati."
  },
  {
    id: "TG",
    name: "Telangana",
    status: "dreaming",
    region: "South",
    capital: "Hyderabad",
    citiesVisited: [],
    shortDescription: "The aroma of Hyderabadi Biryani, Charminar, and the regal history of Nizams."
  },
  {
    id: "AS",
    name: "Assam",
    status: "dreaming",
    region: "Northeast",
    capital: "Dispur",
    citiesVisited: [],
    shortDescription: "Rolling green tea estates, the Brahmaputra river, and one-horned rhinos of Kaziranga."
  },
  {
    id: "AR",
    name: "Arunachal Pradesh",
    status: "dreaming",
    region: "Northeast",
    capital: "Itanagar",
    citiesVisited: [],
    shortDescription: "The land of the rising sun, majestic Tawang Monastery, and mist-covered valleys."
  },
  {
    id: "ML",
    name: "Meghalaya",
    status: "upcoming",
    region: "Northeast",
    capital: "Shillong",
    citiesVisited: [],
    shortDescription: "Visiting the wettest place on earth, pristine root bridges, and clear glass rivers."
  },
  {
    id: "MN",
    name: "Manipur",
    status: "dreaming",
    region: "Northeast",
    capital: "Imphal",
    citiesVisited: [],
    shortDescription: "Floating islands of Loktak Lake, delicate classical dances, and green hills."
  },
  {
    id: "MZ",
    name: "Mizoram",
    status: "dreaming",
    region: "Northeast",
    capital: "Aizawl",
    citiesVisited: [],
    shortDescription: "Blue mountains, steep hills, rich tribal festivals, and endless bamboo forests."
  },
  {
    id: "NL",
    name: "Nagaland",
    status: "dreaming",
    region: "Northeast",
    capital: "Kohima",
    citiesVisited: [],
    shortDescription: "The vibrant Hornbill Festival, fierce warrior heritage, and untouched pristine valleys."
  },
  {
    id: "TR",
    name: "Tripura",
    status: "dreaming",
    region: "Northeast",
    capital: "Agartala",
    citiesVisited: [],
    shortDescription: "The beautiful water palace Neermahal and ancient rock carvings of Unakoti."
  }
];
const travelStories = [
  {
    id: 1,
    state: "Himachal Pradesh",
    city: "Manali & Kasol",
    status: "visited",
    date: "January 2026",
    travelType: "Friends",
    mood: "Adventurous & Freezing",
    bestFood: "Siddu with hot ghee and local Trout Fish",
    bestMemory: "Watching the first snowfall of the season at Solang Valley with my college group.",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=800",
    shortDescription: "A winter wonderland escape filled with freezing midnight treks, woodfire pizzas, and deep snowballs fights.",
    whyIwent: "Growing up in a flat, warm city, I had never seen snow in my life. Seeing snow fell into my absolute bucket list of things to do before I turn 30. When a friend randomly texted 'Manali chalega next week?', I booked my tickets in 5 minutes without thinking twice.",
    firstFeeling: "Stepping out of the semi-sleeper bus at 6:00 AM, the cold hit me like a physical wall. But when I looked up and saw the first giant snow-capped peak glowing in the early morning gold, my jaw dropped. It felt unreal, like standing inside a living postcard.",
    placesVisited: ["Old Manali", "Solang Valley", "Atal Tunnel", "Kasol", "Chalal Village"],
    funnyMistake: "I bought cheap local gloves from a roadside vendor thinking they would be waterproof. The moment we had a snowball fight, they got soaked, and my fingers felt like they were going to freeze and fall off! Lesson: never skimp on waterproof gear.",
    lessonLearnt: "The mountains teach you humility. When you stand in front of giant peaks that have been there for millions of years, your daily worries suddenly feel wonderfully small.",
    gallery: [
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=800"
    ],
    visitAgain: true
  },
  {
    id: 2,
    state: "Rajasthan",
    city: "Jaipur & Jaisalmer",
    status: "visited",
    date: "November 2025",
    travelType: "Family",
    mood: "Royal & Warm",
    bestFood: "Dal Baati Churma and Lal Maans",
    bestMemory: "Sleeping under the starlit sky on the sand dunes of Jaisalmer after a camel safari.",
    image: "https://images.unsplash.com/photo-1477587458883-471a5ed94245?auto=format&fit=crop&q=80&w=800",
    shortDescription: "A magical family journey through pink corridors, golden desert dunes, and royal fortresses.",
    whyIwent: "My parents had always wanted to see the grand palaces of Rajasthan. With my upcoming marriage dreams, I wanted to take a slow, memorable road trip with my mom and dad, dedicating uninterrupted time to them.",
    firstFeeling: "Jaipur felt like an explosion of colors! Pink walls, bright blue pottery, and amber-colored stone. It was bustling but deeply rooted in hospitality. The people greet you with 'Padharo Mhare Des' which instantly warms your heart.",
    placesVisited: ["Amer Fort", "Hawa Mahal", "Udaipur Lake Palace", "Jaisalmer Desert", "Mehrangarh Fort"],
    funnyMistake: "My dad tried to bargain in Hindi with a local camel herder, only to realize the herder spoke better English and Rajasthan dialect than both of us combined!",
    lessonLearnt: "Travel with family is slower, but it holds a different kind of magic. Watching my mother's eyes light up during the folk dance was worth every single mile.",
    gallery: [
      "https://images.unsplash.com/photo-1477587458883-471a5ed94245?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800"
    ],
    visitAgain: true
  },
  {
    id: 3,
    state: "Uttar Pradesh",
    city: "Varanasi & Lucknow",
    status: "visited",
    date: "March 2026",
    travelType: "Friends",
    mood: "Spiritual & Emotional",
    bestFood: "Malaiyo in Varanasi and Tunday Kababi in Lucknow",
    bestMemory: "Experiencing the evening Ganga Aarti in Varanasi while sitting silently on a wooden boat.",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0db?auto=format&fit=crop&q=80&w=800",
    shortDescription: "Varanasi felt alive from sunrise to midnight. The spiritual energy here is overwhelming and deeply transformative.",
    whyIwent: "I had reached a point in my life where I felt overwhelmed by career choices and future plans. I wanted to visit Varanasi\u2014not for leisure, but to witness the circle of life and death, and find some inner quietude.",
    firstFeeling: "Absolute chaos, ringing bells, smoke, and chanting. Initially, it was sensory overload. But as I sat on the Assi Ghat watching the river flow, the chaos suddenly faded into a deep, comforting silence.",
    placesVisited: ["Kashi Vishwanath Temple", "Dashashwamedh Ghat", "Sarnath", "Hazratganj Lucknow", "Bara Imambara"],
    funnyMistake: "We got lost in the labyrinth of Varanasi's alleys for 3 hours, turning in circles, only to end up at the exact same lassi shop three times! We ended up drinking 3 kulhads of lassi instead of fighting.",
    lessonLearnt: "Life is transient. Varanasi teaches you that nothing is permanent, and holding onto anxieties is meaningless. Just flow like the Ganga.",
    gallery: [
      "https://images.unsplash.com/photo-1561361513-2d000a50f0db?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1627894142165-446a5720afba?auto=format&fit=crop&q=80&w=800"
    ],
    visitAgain: true
  },
  {
    id: 4,
    state: "Maharashtra",
    city: "Mumbai & Pune",
    status: "visited",
    date: "September 2025",
    travelType: "Solo",
    mood: "Fast-paced & Reflective",
    bestFood: "Vada Pav at CST Station & Misal Pav in Pune",
    bestMemory: "Sitting at Marine Drive at 2:00 AM under a light drizzle, listening to the waves crash.",
    image: "https://images.unsplash.com/photo-1562979314-bee7453e911c?auto=format&fit=crop&q=80&w=800",
    shortDescription: "A monsoon-soaked exploration of the dream city Mumbai and the historical forts of Pune.",
    whyIwent: "I wanted to test my independence by taking a completely solo trip during the peak of Maharashtra's gorgeous monsoons. I wanted to get lost in a city where nobody knew my name.",
    firstFeeling: "Mumbai was intimidating. Fast locals, heavy rain, and people rushing everywhere. But when I boarded a local train, a stranger helped me squeeze in and shared his umbrella. I realized the city has a massive, compassionate heart.",
    placesVisited: ["Gateway of India", "Marine Drive", "Colaba Causeway", "Sinhagad Fort Pune", "Lonavala Lake"],
    funnyMistake: "I wore heavy canvas shoes on a trek to Sinhagad Fort during a heavy downpour. They turned into two giant mud-balls, and I had to walk half the trek barefoot!",
    lessonLearnt: "Solo travel forces you to make decisions and trust your instincts. It is the ultimate crash-course in self-reliance and self-growth.",
    gallery: [
      "https://images.unsplash.com/photo-1562979314-bee7453e911c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=800"
    ],
    visitAgain: true
  },
  {
    id: 5,
    state: "Goa",
    city: "Panaji & Palolem",
    status: "visited",
    date: "December 2025",
    travelType: "Friends",
    mood: "Euphoric & Laid-back",
    bestFood: "Bebinca dessert and Prawn Balchao",
    bestMemory: "Renting scooters, riding through coconut-lined roads of South Goa, and catching a golden sunset.",
    image: "https://images.unsplash.com/photo-1512789672496-e30402e8b002?auto=format&fit=crop&q=80&w=800",
    shortDescription: "Sun-drenched beaches, gorgeous Portuguese villas, and the unforgettable joy of riding scooters with lifelong friends.",
    whyIwent: "Every Indian group of friends has a 'dil chahta hai' Goa plan that gets cancelled. We fought, threatened each other, and finally made it happen in December! It was our grand reunion before we all stepped into married life.",
    firstFeeling: "As soon as we crossed the border and saw the palm trees waving, all our work stress vaporized. The air felt warm, salty, and incredibly relaxed. The 'Susegad' vibe is real.",
    placesVisited: ["Fontainhas Latin Quarter", "Palolem Beach", "Chapora Fort", "Dudhsagar Falls", "Anjuna Flea Market"],
    funnyMistake: "We tried to recreate a famous movie pose on top of Chapora Fort, but a gust of wind blew away my favorite cap straight into the bushes below! We spent 30 minutes climbing down to retrieve it.",
    lessonLearnt: "No matter how busy life gets or how far apart we move, some friendships never age. Sitting around a bonfire laughing at old school jokes is the best therapy.",
    gallery: [
      "https://images.unsplash.com/photo-1512789672496-e30402e8b002?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800"
    ],
    visitAgain: true
  }
];
const upcomingTrips = [
  {
    id: 1,
    destination: "Meghalaya (The Abode of Clouds)",
    state: "Meghalaya",
    status: "Planning",
    expectedMonth: "August 2026",
    reason: "Lush double-decker living root bridges, walking among clouds in Cherrapunji, and swimming in the crystal-clear waters of Umngot River.",
    travelType: "Friends",
    dreamMoment: "Standing on the edge of Nohkalikai Falls while heavy mist rolls in and reveals the blue plunge pool below.",
    checklist: [
      { task: "Research local Khasi homestays in Mawlynnong", completed: true },
      { task: "Book flight to Guwahati and rental cab", completed: true },
      { task: "Buy heavy-duty trekking shoes and rain poncho", completed: false },
      { task: "Plan the Mawryngkhang bamboo trek route", completed: false }
    ],
    progress: 50,
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    destination: "Kerala Backwaters & Munnar Tea Hills",
    state: "Kerala",
    status: "Dreaming",
    expectedMonth: "November 2026",
    reason: "Slow travel on a traditional kettuvallam (houseboat) in Alleppey, and breathing in the eucalyptus-scented air of Munnar tea plantations.",
    travelType: "Family",
    dreamMoment: "Waking up on a houseboat surrounded by coconut palms, with a hot cup of local tea and local breakfast served on a banana leaf.",
    checklist: [
      { task: "Find an eco-friendly local houseboat operator", completed: false },
      { task: "Shortlist spice farm tours near Thekkady", completed: false },
      { task: "Book Ayurvedic wellness massage session", completed: false }
    ],
    progress: 15,
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    destination: "Himachal To Kashmir Roadtrip",
    state: "Jammu & Kashmir",
    status: "Planning",
    expectedMonth: "September 2026",
    reason: "A grand trans-Himalayan road adventure from Manali to Srinagar via Leh, passing through some of the highest motorable passes in the world.",
    travelType: "Solo",
    dreamMoment: "Riding a classic cruiser bike along the Pangong Lake border road, with the deep blue water reflecting stark mountains.",
    checklist: [
      { task: "Acquire Inner Line Permits for Ladakh regions", completed: false },
      { task: "Perform full service of the motorcycle and spare gear", completed: true },
      { task: "Prepare a compact emergency medical kit with altitude pills", completed: true },
      { task: "Shortlist cozy homestays in Turtuk", completed: false }
    ],
    progress: 40,
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    destination: "Spiritual Uttarakhand & Valley of Flowers",
    state: "Uttarakhand",
    status: "Booked",
    expectedMonth: "July 2026",
    reason: "Trekking through the biosphere reserve Valley of Flowers when it's in full bloom, and experiencing Rishikesh evening chants.",
    travelType: "Solo",
    dreamMoment: "Walking through a narrow mountain path surrounded by millions of wild alpine flowers of every color imaginable.",
    checklist: [
      { task: "Book train tickets to Haridwar", completed: true },
      { task: "Secure Valley of Flowers forest entry pass", completed: true },
      { task: "Register for Char Dham biometric card", completed: true },
      { task: "Book guesthouse in Govindghat", completed: true }
    ],
    progress: 100,
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    destination: "Monuments & Heritage of Karnataka",
    state: "Karnataka",
    status: "Dreaming",
    expectedMonth: "January 2027",
    reason: "Exploring the ruins of the Vijayanagara Empire in Hampi, staring at the grand Mysore Palace, and trekking the Western Ghats of Coorg.",
    travelType: "Solo",
    dreamMoment: "Watching the sunrise from behind the boulder-strewn hills of Hampi, with the ancient Virupaksha temple silhouetted in gold.",
    checklist: [
      { task: "Map out historical sites in Hampi and Badami", completed: false },
      { task: "Find a local architectural guide in Hampi", completed: false }
    ],
    progress: 10,
    image: "https://images.unsplash.com/photo-1600100397608-f010e42fa023?auto=format&fit=crop&q=80&w=800"
  }
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
export {
  GALLERY_IMAGES,
  memories,
  statesData,
  travelStories,
  upcomingTrips
};
