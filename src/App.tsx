import { useEffect, useState } from "react";
import "./styles.css";

type TripEntry = {
  date: string;
  title: string;
  images: string[];
  description: string;
};

const tripEntries: TripEntry[] = [
  {
    date: "4/6",
    title: "🛬 Arrived at Haneda Airport",
    images: [
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80"
    ],
    description:
      "It was a long 11-hour flight, but we had our soft organic blankies and plenty of snacks to keep us cozy. (Mom should’ve gone with the beef and veggies instead of the pasta!) McK picked us up from the airport and took us for ramen—which may have been a bit heavy for our jet-lagged tummies—but we got a good night’s sleep in our snug little APA hotel rooms."
  },
  {
    date: "4/7",
    title: "🚶‍♀️ Exploring Omori",
    images: [
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80"
    ],
    description:
      "We took it easy today, exploring the area and getting to know the local treasures. We found the best chicken nuggets and fries… at a sushi restaurant (go figure!) and discovered that Japanese sea lions kind of look like cigars!"
  },
  {
    date: "4/8",
    title: "🌞 Sunshine City, Ikebukuro",
    images: [
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80"
    ],
    description:
      "We had our first battle with the Japanese train system—and it left us scarred. Thankfully, with help from kind tourists (and a lot of determination), we found our way back. Who knew train stations could have so many exits?! We squeezed in some shopping and visited the rooftop aquarium at Sunshine City."
  },
  {
    date: "4/9",
    title: "🐠 More Aquariums & Omori",
    images: [
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80"
    ],
    description:
      "Still shaken from yesterday’s train chaos, we decided to stay local and explore more of Omori. We visited a cute neighborhood aquarium full of fabulous fish. For dinner, we grabbed McK’s favorite beef bowls—and Reesie tried raw egg for the first time. Mom was horrified."
  },
  {
    date: "4/10",
    title: "🍣 Tsukiji Food Market",
    images: [
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80"
    ],
    description:
      "Reesie’s dream come true—Tsukiji’s streets were packed with delicious Japanese street food and seafood, including fluffy egg omelets on a stick. Her priciest treat? A $50 wagyu steak skewer. We had a “memorable” tearful visit to a sugar-free café, then cheered up at the magical Art Aquarium and bought lots of cute fishy souvenirs. For dinner, we tried Japanese McDonald’s. Reesie wasn’t a fan of the Samurai Burger."
  },
  {
    date: "4/11",
    title: "🌧️ Rainy Ueno & Sushi Night",
    images: [
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80"
    ],
    description:
      "We spent a peaceful rainy morning strolling through Ueno Park, visiting shrines and temples. Later, we had a traditional meal at a teahouse. In the evening, we met McK for sushi and beer. Reesie sampled McK’s favorites but stuck with the classics—salmon and tuna. (Why does Japan put mayo on everything?)"
  },
  {
    date: "4/12",
    title: "🗻 Yamanashi Day 1",
    images: [
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80"
    ],
    description:
      "We embarked on a long bus ride to Yamanashi, where McK used to live. Mt. Fuji peeked out during the ride, then quickly disappeared into the clouds. We tried the region’s famous hoto noodles—challenging to eat without splashing everyone! McK loved revisiting her favorite shops, and we loaded up on adorable gifts, including mini yukata for the boys. That night, we dressed in yukata for an extravagant sukiyaki dinner served in our room, followed by a private onsen just for us."
  },
  {
    date: "4/13",
    title: "🌧️ Yamanashi Day 2",
    images: [
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80"
    ],
    description:
      "It was a cold, rainy day. We started with a visit to the Kimono Museum and enjoyed some traditional tea sweets. Unfortunately, McK wasn’t feeling well, so we cut the day short. The bus back was confusing and late, but thankfully we made it back safely."
  },
  {
    date: "4/14",
    title: "🏰 Off to Disney",
    images: [
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80"
    ],
    description:
      "We finally got the trains right on the first try! After a cute ride on the Mickey-themed monorail, we arrived at the Tokyo Disneyland Hotel—right in front of the park! The rooms were absolutely adorable. Dinner was just convenience store food, but we knew the real treats would start tomorrow. The highlight? The Beauty and the Beast ride (though the song did get stuck in our heads…)."
  },
  {
    date: "4/15",
    title: "🎢 Tokyo Disneyland",
    images: [
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80"
    ],
    description:
      "We entered the park early and had a chaotic safari ride, followed by a calming Donald Duck drink. The wind was so strong it blew McK’s Marie ears right off! Thanks to Mom’s priority passes and Reesie’s stellar navigation, we rode tons of attractions. We had a fancy buffet lunch at the Miracosta, then a not-so-fancy dinner at Cinderella’s Crystal Palace. We ended the day with caramel popcorn and some late-night rides after messing up our tickets more than once (oops!). Mom fell in love with the hotel’s pajamas, and we all slept soundly."
  },
  {
    date: "4/16",
    title: "🌊 Tokyo DisneySea",
    images: [
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80"
    ],
    description:
      "We kicked off the day with breakfast and headed straight to DisneySea. The rides were wild—Peter Pan’s ride wiped us all out. We recovered with Coke and some Frozen-themed yo-hoo bread. We snacked like royalty: chicken/fry boxes, turkey leg, milk tea churro, curry chicken, and more. But the grand finale was dinner at Rapunzel’s Snuggly Duckling—burgers, fries, dessert, and Rapunzel’s magical tea. We ended the night with a ride through her lantern-lit world before heading home."
  },
  {
    date: "4/17",
    title: "🛍️ Harajuku Shopping",
    images: [
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80"
    ],
    description:
      "Still exhausted from Disney, we shuffled around Harajuku. Reesie found her dream Louis Vuitton purse. We also squeezed in a shrine visit, but the takoyaki (octopus balls) weren’t a hit. For dinner, we played it safe with KFC."
  },
  {
    date: "4/18",
    title: "🗼 Skytree & Kirby Café",
    images: [
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80"
    ],
    description:
      "We climbed Tokyo Skytree and treated ourselves to some matcha. For dinner, we finally got to try McK’s beloved Kirby Café. The presentation was adorable… but let’s just say the flavor didn’t quite match the cuteness."
  },
  {
    date: "4/19",
    title: "🎤 Okonomiyaki & Karaoke",
    images: [
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80"
    ],
    description:
      "A train cancellation derailed our original plans, so we stayed close to the hotel, shopping for mascara and mom’s mysterious ear things. For dinner, we tried McK’s favorite okonomiyaki—savory cabbage pancakes with mayo and Japanese BBQ sauce. We capped off the night with unforgettable karaoke duets—from Usher to Disturbed’s “Down with the Sickness.” Mom was (half) joking about how she ruined Reesie’s singing career."
  },
  {
    date: "4/20",
    title: "🍜 Ramen & Recharge",
    images: [
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80"
    ],
    description:
      "Reesie woke up to a scary text—which turned out to be nothing, thankfully. McK was busy prepping for her apartment move, but we still met up for dinner—another delicious bowl of ramen—and some last-minute shopping. Mom was thrilled to finally find her favorite leaf-shaped chocolates."
  },
  {
    date: "4/21",
    title: "🎮 Akihabara Adventures",
    images: [
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80"
    ],
    description:
      "We explored Akihabara’s electric town, geeking out over vintage toy shops and anime merch. For our last dinner with McK, we returned to our favorite sushi place and savored every bite."
  },
  {
    date: "4/22",
    title: "👋 Sayonara, Japan!",
    images: [
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80"
    ],
    description:
      "After a whirlwind two weeks, it was time to say goodbye. But not without having some friendly family banter at customs (LOL). Thank you, Japan, for the memories of a lifetime."
  }
];

const DiaryEntry = ({ entry, index }: { entry: TripEntry; index: number }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % entry.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [entry.images.length]);

  const isEven = index % 2 === 0;

  return (
    <div
      id={`entry-${entry.date.replace("/", "")}`}
      className={`entry ${isEven ? "even" : "odd"}`}
    >
      <div className="entry-content">
        <img
          src={entry.images[currentImgIndex]}
          alt={entry.title}
          className={`entry-img ${imageLoaded ? "fade-in" : ""}`}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="entry-text">
          <h2>
            {entry.date} - {entry.title}{" "}
          </h2>
          <p>{entry.description}</p>
        </div>
      </div>
    </div>
  );
};

export default function JapanTripDiary() {
  // Preload the background image for the banner
  useEffect(() => {
    const preloadImage = new Image();
    preloadImage.src =
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80";
  }, []);

  return (
    <div className="diary-layout">
      <nav className="side-menu">
        <ul>
          {tripEntries.map((entry) => (
            <li key={entry.date}>
              <a href={`#entry-${entry.date.replace("/", "")}`}>
                {entry.date} — {entry.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <main className="diary-wrapper">
        <div className="banner">Our Japan Trip (4/6 - 4/22, 2025)</div>
        <div className="entries">
          {tripEntries.map((entry, index) => (
            <DiaryEntry key={entry.date} entry={entry} index={index} />
          ))}
        </div>
      </main>
    </div>
  );
}
