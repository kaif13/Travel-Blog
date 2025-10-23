// src/data/mockData.js
// We keep all the static data here to keep our components clean.

import NainitalCover from "../assets/Nainitaal-Bg.jpg";
import Boating from "../assets/Boating.jpg";
import KTV from "../assets/KTNV.mp4";
import KTV1 from "../assets/KTNV1.mp4";
import KTN from "../assets/KTN.jpg";
import KTN1 from "../assets/KTN2.jpg";
import KTN2 from "../assets/KTN3.jpg";
import Nani1 from "../assets/Nani-LakeV-1.mp4";
import Nani2 from "../assets/Nani-LakeV-2.mp4";
import Lake1 from "../assets/nani1.jpg";
import Lake2 from "../assets/nani2.jpg";
import Lake3 from "../assets/nani3.jpg";
import Lake4 from "../assets/nani4.jpg";
import Lake5 from "../assets/nani5.jpg";
// import Nainitaal from "../assets/Nainitaal.mp4";
import Snow1 from "../assets/snow1.jpg";
import Snow2 from "../assets/snow2.jpg";
import Snow3 from "../assets/gandola.mp4";
import Khurpataal from "../assets/Khurpataal.jpg";
import Cave1 from "../assets/Cave3.jpg";
import Cave2 from "../assets/Cave1.jpg";
import Cave3 from "../assets/Cave2.mp4";
import Trek1 from "../assets/Trek1.mp4";
import Trek2 from "../assets/Trek2.jpg";
import Trek3 from "../assets/Trek3.jpg";
import Trek4 from "../assets/Trek4.jpg";
import Trek5 from "../assets/Trek5.jpg";
import Trek6 from "../assets/Trek6.jpg";
import Trek7 from "../assets/Trek7.mp4";
import lover1 from "../assets/lover1.jpg";
import lover2 from "../assets/lover2.jpg";
import lover3 from "../assets/lover3.mp4";
import bhim1 from "../assets/bhim1.jpg";
import bhim2 from "../assets/bhim2.jpg";
import bhim3 from "../assets/bhim3.jpg";

export const MOCK_TRIPS = [
  {
    id: "nainital-2023",
    title: "The Serene Lakes of Nainital",
    date: "May 2025",
    location: "Uttarakhand, India",
    quote: "In the lap of the mountains, every breath tells a story.",
    coverImage: NainitalCover,
    details: [
      { type: "day", day: 1, title: "Arrival & a Calm Evening at Naini Lake" },
      {
        type: "memory",
        time: "08:00 AM",
        description:
          "After a 9-hour train journey from Lucknow, we arrived in Kathgodam and rented a scooty there.",
        videos: [KTV, KTV1],
        images: [KTN, KTN1, KTN2],
      },
      {
        type: "memory",
        time: "11:00 AM",
        description:
          "Reached Nainital after a long drive from Kathgodam. Checked into a Ashok Hotel.",
        // videos: [Nainitaal],
      },
      {
        type: "memory",
        time: "01:00 PM",
        description:
          "Enjoyed a boat ride on Naini Lake. The water was so calm, it felt like time stood still.",
        images: [Boating, Lake1, Lake2, Lake3, Lake4, Lake5],
        videos: [Nani1, Nani2],
      },
      {
        type: "memory",
        time: "02:00 PM",
        description:
          "Reaching Snow View Point via a gondola ride was wonderful.The calm and beautiful atmosphere was captivating, making it feel like time had completely stopped.",
        images: [Snow1, Snow2],
        videos: [Snow3],
      },
      {
        type: "quote",
        text: "The cool breeze and the towering peaks... this isn't just a trip, it's the essence of life.",
      },
      {
        type: "day",
        day: 2,
        title:
          "We explored Khurpatal, Lovers Point, Suicide Point, Cave Garden, trekked Naina Peak, and spent the night in Bhimtal.",
      },
      {
        type: "memory",
        time: "09:00 AM",
        description:
          "We went to see Khurpatal, a quiet lake village surrounded by green trees. It's a peaceful place to relax and enjoy nature.",
        images: [Khurpataal],
      },
      {
        type: "memory",
        time: "10:00 PM",
        description:
          "We went to see Lovers Point, known for its beautiful valley views, and then the dramatic Suicide Point, which offers breathtaking sights from its steep cliffs. Both spots are popular for their stunning natural grandeur.",
        images: [lover1, lover2],
        videos: [lover3],
      },
      {
        type: "memory",
        time: "11:00 AM",
        description:
          "We went to see Cave Garden, a unique place with several interconnected natural caves that you can explore. It's an interesting spot for a different kind of natural beauty.",
        images: [Cave1, Cave2],
        videos: [Cave3],
      },
      {
        type: "memory",
        time: "01:00 PM",
        description:
          "Then, before we started our trek to Naina Peak, we ate some Maggie noodles, and then began our climb.",
        // images: [
        //   "https://placehold.co/400x300/0E7490/FFFFFF?text=Tiffin+Top+View",
        //   "https://placehold.co/400x300/059669/FFFFFF?text=Group+Selfie",
        //   "https://placehold.co/400x300/BE123C/FFFFFF?text=My+Solo+Shot",
        // ],
      },
      {
        type: "memory",
        time: "03:00 PM",
        description:
          "After trekking for two hours, we reached the top, but had to wait for an hour for the weather to clear. However, it didn't clear up, so we started our descent.",
        images: [Trek2, Trek3, Trek4, Trek5, Trek6],
        videos: [Trek1, Trek7],
      },
      {
        type: "memory",
        time: "05:00 PM",
        description:
          "Then, we came back down, had some tea, and left for Bhimtal.",
        // images: [
        //   "https://placehold.co/400x300/0E7490/FFFFFF?text=Tiffin+Top+View",
        //   "https://placehold.co/400x300/059669/FFFFFF?text=Group+Selfie",
        //   "https://placehold.co/400x300/BE123C/FFFFFF?text=My+Solo+Shot",
        // ],
      },
      {
        type: "quote",
        text: "The mountains don’t just stand tall — they teach you how to rise, no matter how heavy the storm.",
      },
      {
        type: "day",
        day: 3,
        title:
          "On Day 3, we saw the Bhalu Gaad waterfall in Mukteshwar, then we saw Naukuchiatal. After that, we left for Kathgodam station.",
      },
      {
        type: "memory",
        time: "09:00 AM",
        description:
          "Going from Bhimtal to Mukteshwar, we enjoyed the truly beautiful views throughout the drive.",
        images: [bhim1, bhim2, bhim3],
      },
      {
        type: "memory",
        time: "11:30 AM",
        description:
          "After driving our scooty for 2.5 hours, we reached Bhalu Gaad waterfall.",
        images: [
          "https://placehold.co/400x300/0E7490/FFFFFF?text=Tiffin+Top+View",
          "https://placehold.co/400x300/059669/FFFFFF?text=Group+Selfie",
          "https://placehold.co/400x300/BE123C/FFFFFF?text=My+Solo+Shot",
        ],
      },
      {
        type: "memory",
        time: "01:00 AM",
        description:
          "After enjoying our time at Bhalu Gaad waterfall, we left for Naukuchiatal.",
        images: [
          "https://placehold.co/400x300/0E7490/FFFFFF?text=Tiffin+Top+View",
          "https://placehold.co/400x300/059669/FFFFFF?text=Group+Selfie",
          "https://placehold.co/400x300/BE123C/FFFFFF?text=My+Solo+Shot",
        ],
      },
      {
        type: "memory",
        time: "03:00 AM",
        description:
          "After driving for 2 hours, we reached Naukuchiatal and spent an hour there.",
        images: [
          "https://placehold.co/400x300/0E7490/FFFFFF?text=Tiffin+Top+View",
          "https://placehold.co/400x300/059669/FFFFFF?text=Group+Selfie",
          "https://placehold.co/400x300/BE123C/FFFFFF?text=My+Solo+Shot",
        ],
      },
      {
        type: "memory",
        time: "05:00 AM",
        description: "Then we came back to Bhimtal and ate Maggie",
        images: [
          "https://placehold.co/400x300/0E7490/FFFFFF?text=Tiffin+Top+View",
          "https://placehold.co/400x300/059669/FFFFFF?text=Group+Selfie",
          "https://placehold.co/400x300/BE123C/FFFFFF?text=My+Solo+Shot",
        ],
      },
      {
        type: "memory",
        time: "06:00 AM",
        description:
          "And finally, after spending an hour at Bhimtal Lake, we left for Kathgodam station, enjoying a beautiful sunset view.",
        images: [
          "https://placehold.co/400x300/0E7490/FFFFFF?text=Tiffin+Top+View",
          "https://placehold.co/400x300/059669/FFFFFF?text=Group+Selfie",
          "https://placehold.co/400x300/BE123C/FFFFFF?text=My+Solo+Shot",
        ],
      },
      {
        type: "quote",
        text: "Beneath the endless sky and over the winding roads… I found peace in every breath of the journey.",
      },
    ],
    status: "completed",
  },
  {
    id: "upcoming-adventure",
    title: "Next Adventure: The Peaks Await",
    date: "Coming Soon",
    location: "Destination Unknown",
    quote: "The best stories are found between the pages of a passport.",
    coverImage: "https://placehold.co/600x400/475569/FFFFFF?text=Upcoming",
    details: [],
    status: "upcoming",
  },
  {
    id: "upcoming-adventure",
    title: "Next Adventure: The Peaks Await",
    date: "Coming Soon",
    location: "Destination Unknown",
    quote: "The best stories are found between the pages of a passport.",
    coverImage: "https://placehold.co/600x400/475569/FFFFFF?text=Upcoming",
    details: [],
    status: "upcoming",
  },
];

export const GALLERY_IMAGES = [
  {
    src: "https://placehold.co/400x400/0891B2/FFFFFF?text=Me+at+the+lake",
    caption: "Nainital Lake, Oct 2023",
  },
  {
    src: "https://placehold.co/400x400/7C3AED/FFFFFF?text=Friends+Forever",
    caption: "Friends at Tiffin Top",
  },
  {
    src: "https://placehold.co/400x400/065F46/FFFFFF?text=Mountain+Pose",
    caption: "Solo Trip Moment",
  },
  {
    src: "https://placehold.co/400x400/BE123C/FFFFFF?text=Foodie+Time",
    caption: "Trying Local Food",
  },
  {
    src: "https://placehold.co/400x400/1D4ED8/FFFFFF?text=Funny+Faces",
    caption: "Goofing around",
  },
  {
    src: "https://placehold.co/400x400/EA580C/FFFFFF?text=Sunset+View",
    caption: "That magical sunset",
  },
  {
    src: "https://placehold.co/400x400/4A044E/FFFFFF?text=Night+Vibes",
    caption: "City lights at night",
  },
  {
    src: "https://placehold.co/400x400/5B21B6/FFFFFF?text=Group+Huddle",
    caption: "The whole squad!",
  },
];

export const PROFILE_IMAGE_URL =
  "https://placehold.co/200x200/1E293B/FFFFFF?text=MK";
