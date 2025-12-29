import React from "react";

type Place = {
  id: string;
  title: string;
  subtitle?: string;
  img: string;
  mapUrl: string;
};

const places: Place[] = [
  {
    id: "tokyo-disneyland",
    title: "Tokyo Disneyland",
    img: "/images/disney.png",
    mapUrl: "https://www.google.com/maps/place/Tokyo+Disneyland/",
  },
  {
    id: "tokyo-disneysea",
    title: "Tokyo DisneySea",
    img: "/images/416.gif",
    mapUrl: "https://www.google.com/maps/place/Tokyo+DisneySea/",
  },
  {
    id: "omori-apa-hotel",
    title: "Omori APA Hotel",
    img: "/images/apa.png",
    mapUrl: "https://www.google.com/maps/place/APA+Hotel+Omori+Ekimae/",
  },
  {
    id: "omori-mall-ito",
    title: "Omori Mall",
    subtitle: "Ito-Yokado",
    img: "/images/ito.png",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=%E3%82%A4%E3%83%88%E3%83%BC%E3%83%A8%E3%83%BC%E3%82%AB%E3%83%89%E3%83%BC+%E5%A4%A7%E6%A3%AE%E5%BA%97",
  },
  {
    id: "kameido-station",
    title: "Kameido Station",
    subtitle: "Minoru's station",
    img: "/images/kameido.png",
    mapUrl: "https://www.google.com/maps/place/Kameido+Station/",
  },
  {
    id: "shibuya-crossing",
    title: "Shibuya Crossing",
    img: "/images/shibuya.png",
    mapUrl: "https://www.google.com/maps/place/Shibuya+Crossing/",
  },
  {
    id: "harajuku",
    title: "Harajuku Area",
    subtitle: "Takeshita Street",
    img: "/images/harajuku.png",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=%E5%8E%9F%E5%AE%BF",
  },
  {
    id: "sunshine-city",
    title: "Sunshine City",
    subtitle: "Ikebukuro",
    img: "/images/sunshine.png",
    mapUrl: "https://www.google.com/maps/place/Sunshine+City/",
  },
  {
    id: "tsukiji",
    title: "Tsukiji Outer Market",
    img: "/images/410.gif",
    mapUrl: "https://www.google.com/maps/place/Tsukiji+Outer+Market/",
  },
  {
    id: "ueno",
    title: "Ueno Park",
    img: "/images/411.gif",
    mapUrl: "https://www.google.com/maps/place/Ueno+Park/",
  },
  {
    id: "skytree",
    title: "Tokyo Skytree",
    subtitle: "Kirby Cafe + Shopping",
    img: "/images/418.gif",
    mapUrl: "https://www.google.com/maps/place/Tokyo+Skytree/",
  },
  {
    id: "akihabara",
    title: "Akihabara Station",
    img: "/images/421.gif",
    mapUrl: "https://www.google.com/maps/place/Akihabara+Station/",
  },
];

export default function Maps() {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.headerRow}>
          <div style={styles.back}>← Diary</div>
          <div style={styles.headerTitle}>Trip Places</div>
          <div style={styles.headerSpacer} />
        </div>
        <p style={styles.p}>Tap a place to open it in Google Maps.</p>
      </header>

      <div style={styles.list}>
        {places.map((place) => (
          <a
            key={place.id}
            href={place.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.card}
          >
            <img
              src={place.img}
              alt={place.title}
              style={styles.img}
              loading="lazy"
            />

            <div style={styles.textWrap}>
              <div style={styles.titleRow}>
                <div style={styles.title}>{place.title}</div>
                <div style={styles.chev}>›</div>
              </div>

              {place.subtitle && (
                <div style={styles.subtitle}>{place.subtitle}</div>
              )}

              <div style={styles.linkHint}>Open in Google Maps</div>
            </div>
          </a>
        ))}
      </div>

      <div style={styles.footerSpace} />
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    padding: "16px",
    maxWidth: 520,
    margin: "0 auto",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  header: { paddingTop: 8, paddingBottom: 12 },
  headerRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  back: {
    padding: "8px 10px",
    borderRadius: 999,
    textDecoration: "none",
    color: "inherit",
    background: "rgba(0,0,0,0.06)",
    fontSize: 13,
    fontWeight: 600,
  },
  headerTitle: { fontSize: 18, fontWeight: 800 },
  headerSpacer: { width: 60 },
  p: { margin: "10px 0 0", fontSize: 14, opacity: 0.75 },
  list: { display: "flex", flexDirection: "column", gap: 12 },
  card: {
    display: "flex",
    gap: 12,
    padding: 12,
    borderRadius: 16,
    background: "rgba(0,0,0,0.04)",
    cursor: "pointer",
    textDecoration: "none",
    color: "inherit",
  },
  img: {
    width: 92,
    height: 92,
    borderRadius: 14,
    objectFit: "cover",
    flexShrink: 0,
  },
  textWrap: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  titleRow: {
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
    fontWeight: 700,
  },
  chev: { fontSize: 22, opacity: 0.55 },
  subtitle: {
    marginTop: 6,
    fontSize: 13,
    opacity: 0.8,
  },
  linkHint: {
    marginTop: 8,
    fontSize: 12,
    opacity: 0.7,
  },
  footerSpace: { height: 24 },
};
