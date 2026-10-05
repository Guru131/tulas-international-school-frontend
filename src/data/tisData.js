// src/data/tisData.js
// All repeated/structured content lives here to keep components clean.

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "Boarding", href: "#boarding" },
  { label: "Sports", href: "#sports" },
  { label: "Beyond", href: "#beyond" },
  { label: "Campus Life", href: "#campus" },
  { label: "Admissions", href: "#admissions" },
  { label: "Contact", href: "#contact" },
];

export const highlights = [
  {
    id: "campus",
    number: 22,
    suffix: " Acres",
    label: "Pollution-Free Campus",
    description: "Spread across 22 acres in the pristine foothills of the Himalayas, Dehradun.",
    icon: "Leaf",
  },
  {
    id: "sports",
    number: 16,
    suffix: "+",
    label: "Olympic Sports",
    description: "From archery to swimming — sport is not a hobby here, it is a foundation.",
    icon: "Trophy",
  },
  {
    id: "medical",
    number: 24,
    suffix: "x7",
    label: "Medical Assistance",
    description: "Round-the-clock medical care ensuring every student is safe and healthy.",
    icon: "Heart",
  },
  {
    id: "ratio",
    number: 6,
    suffix: ":1",
    label: "Student–Teacher Ratio",
    description: "Personalised attention so every student gets to grow at their own pace.",
    icon: "Users",
  },
];

export const academicCards = [
  {
    id: "excellence",
    icon: "GraduationCap",
    title: "Academic Excellence",
    description:
      "CBSE-affiliated curriculum from Class IV to XII, designed to nurture critical thinking, analytical ability, and a love for learning.",
  },
  {
    id: "holistic",
    icon: "Sparkles",
    title: "Holistic Learning",
    description:
      "Beyond textbooks — arts, music, drama, sports, and leadership opportunities shape well-rounded individuals ready for life.",
  },
  {
    id: "innovation",
    icon: "Lightbulb",
    title: "Innovation & Creativity",
    description:
      "Modern labs, makerspaces, and project-based learning encourage students to question, create, and solve real-world problems.",
  },
  {
    id: "global",
    icon: "Globe",
    title: "Global Leadership",
    description:
      "Developing confident, empathetic leaders who can engage meaningfully in a diverse, rapidly changing world.",
  },
];

export const boardingFeatures = [
  {
    id: "community",
    title: "Vibrant Community",
    description:
      "Students from across India and beyond live, learn, and grow together forming bonds that last a lifetime.",
  },
  {
    id: "safety",
    title: "Safety & Care",
    description:
      "24x7 supervised boarding with dedicated house parents, medical support, and a safe, nurturing environment.",
  },
  {
    id: "personal",
    title: "Personal Development",
    description:
      "Evening activities, mentoring sessions, and structured independent time help students discover who they are.",
  },
  {
    id: "meals",
    title: "Nutritious Living",
    description:
      "Carefully planned nutritious meals, clean accommodation, and wellness programmes support holistic health.",
  },
];

export const sports = [
  { id: "archery", name: "Archery", category: "Olympic", image: "https://images.unsplash.com/photo-1579298245158-33e8f568f7d3?w=500&q=80", facility: "10m & 30m Standard Range" },
  { id: "swimming", name: "Swimming", category: "Aquatics", image: "https://images.unsplash.com/photo-1560090995-01632a28895b?w=500&q=80", facility: "All-Weather Half Olympic Pool" },
  { id: "football", name: "Football", category: "Outdoor", image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=500&q=80", facility: "FIFA-Regulation Natural Turf Field" },
  { id: "basketball", name: "Basketball", category: "Courts", image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500&q=80", facility: "Floodlit Synthetic Hard Courts" },
  { id: "cricket", name: "Cricket", category: "Outdoor", image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=500&q=80", facility: "Full-Size Oval with Practice Nets" },
  { id: "tennis", name: "Lawn Tennis", category: "Courts", image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=500&q=80", facility: "DecoTurf Championship Courts" },
  { id: "badminton", name: "Badminton", category: "Indoor", image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=500&q=80", facility: "Indoor Wooden Flooring Complex" },
  { id: "hockey", name: "Hockey", category: "Outdoor", image: "https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?w=500&q=80", facility: "Dedicated Turf Field" },
  { id: "volleyball", name: "Volleyball", category: "Courts", image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=500&q=80", facility: "Outdoor Sand & Hard Courts" },
  { id: "taekwondo", name: "Taekwondo", category: "Martial Arts", image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=500&q=80", facility: "Certified Dojang with Mats" },
  { id: "cycling", name: "Cycling", category: "Outdoor", image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=500&q=80", facility: "Himalayan Foothill Trail Track" },
  { id: "squash", name: "Squash", category: "Indoor", image: "https://images.unsplash.com/photo-1558365849-6ebd8b0454b2?w=500&q=80", facility: "Glass-Back International Court" },
  { id: "tabletennis", name: "Table Tennis", category: "Indoor", image: "https://images.unsplash.com/photo-1534158914592-062992fbe900?w=500&q=80", facility: "Stag Tournament Grade Arena" },
  { id: "horseriding", name: "Horse Riding", category: "Equestrian", image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&q=80", facility: "Private Equestrian Riding Paddock" },
  { id: "billiards", name: "Billiards", category: "Indoor", image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=500&q=80", facility: "Riley Professional Slate Tables" },
  { id: "yoga", name: "Yoga & Meditation", category: "Wellness", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&q=80", facility: "Tranquil Open-Air Pavilion" },
];

export const beyondAcademicsItems = [
  {
    id: "arts",
    title: "Visual Arts",
    description: "Painting, sculpture, and digital arts let students express their inner world and develop aesthetic sensibility.",
    icon: "Palette",
    color: "#e76f51",
  },
  {
    id: "music",
    title: "Music",
    description: "From Indian classical to contemporary music — students learn instruments, vocals, and music theory in dedicated studios.",
    icon: "Music",
    color: "#2a9d8f",
  },
  {
    id: "drama",
    title: "Drama & Theatre",
    description: "Stage productions, improv, and storytelling build confidence, empathy, and powerful communication skills.",
    icon: "Theater",
    color: "#e9c46a",
  },
  {
    id: "leadership",
    title: "Leadership",
    description: "Student councils, house leadership, and social initiatives cultivate responsibility, initiative, and vision.",
    icon: "Star",
    color: "#264653",
  },
];

export const testimonials = [
  {
    id: 1,
    quote:
      "We feel supported in what we do and nudged further to do more. At Tulas, we believe in bringing out the best in every student — whether it is academics, music, art, or drama.",
    name: "TIS Student",
    role: "Current Student",
  },
  {
    id: 2,
    quote:
      "Tulas helped me thrive and become the best version of myself. When you choose a school that chooses you, it becomes more than just a place to learn — it becomes a place to belong.",
    name: "TIS Alumni",
    role: "Former Student",
  },
  {
    id: 3,
    quote:
      "The boarding environment at TIS gave my child independence, discipline, and lifelong friendships. The faculty genuinely cares about every child's journey.",
    name: "TIS Parent",
    role: "Parent of Student",
  },
];

export const contactInfo = {
  address: "Tulas International School, Dhoolkot, P.O – Selaqui, Chakrata Road, Dehradun – 248011, Uttarakhand",
  admissionsPhone: "+91-9837983791",
  officePhone: "0135-2699444 / 0135-2699666",
  email: "info@tis.edu.in",
  mapsUrl: "https://maps.app.goo.gl/maBF8syXueQkw31E6",
  admissionsUrl: "https://admission.tis.edu.in",
  social: {
    facebook: "https://www.facebook.com/tulasinternationalschool/",
    instagram: "https://www.instagram.com/tulasinternationalschool/",
    youtube: "https://www.youtube.com/channel/UC-eRtybnv3GvfvcWxQq93zw",
    twitter: "https://twitter.com/tulas_intschool",
    linkedin: "https://www.linkedin.com/school/tulas-international-school/",
  },
};
