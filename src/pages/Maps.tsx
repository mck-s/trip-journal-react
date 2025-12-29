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
    img: "https://images.unsplash.com/photo-1567203366142-93d450d7ffe8?w=200&h=200&fit=crop",
    mapUrl: "https://www.google.com/maps/place/Tokyo+Disneyland/",
  },
  {
    id: "tokyo-disneysea",
    title: "Tokyo DisneySea",
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=200&h=200&fit=crop",
    mapUrl: "https://www.google.com/maps/place/Tokyo+DisneySea/",
  },
  {
    id: "omori-apa-hotel",
    title: "Omori APA Hotel",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=200&h=200&fit=crop",
    mapUrl: "https://www.google.com/maps/place/APA+Hotel+Omori+Ekimae/",
  },
  {
    id: "omori-mall-ito",
    title: "Omori Mall",
    subtitle: "Ito-Yokado",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=200&h=200&fit=crop",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=%E3%82%A4%E3%83%88%E3%83%BC%E3%83%A8%E3%83%BC%E3%82%AB%E3%83%89%E3%83%BC+%E5%A4%A7%E6%A3%AE%E5%BA%97",
  },
  {
    id: "kameido-station",
    title: "Kameido Station",
    subtitle: "Minoru's station",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&h=200&fit=crop",
    mapUrl: "https://www.google.com/maps/place/Kameido+Station/",
  },
  {
    id: "shibuya-crossing",
    title: "Shibuya Crossing",
    img: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=200&h=200&fit=crop",
    mapUrl: "https://www.google.com/maps/place/Shibuya+Crossing/",
  },
  {
    id: "harajuku",
    title: "Harajuku Area",
    subtitle: "Takeshita Street",
    img: "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=200&h=200&fit=crop",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=%E5%8E%9F%E5%AE%BF",
  },
  {
    id: "sunshine-city",
    title: "Sunshine City",
    subtitle: "Ikebukuro",
    img: "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=200&h=200&fit=crop",
    mapUrl: "https://www.google.com/maps/place/Sunshine+City/",
  },
  {
    id: "tsukiji",
    title: "Tsukiji Outer Market",
    img: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=200&h=200&fit=crop",
    mapUrl: "https://www.google.com/maps/place/Tsukiji+Outer+Market/",
  },
  {
    id: "ueno",
    title: "Ueno Park",
    img: "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=200&h=200&fit=crop",
    mapUrl: "https://www.google.com/maps/place/Ueno+Park/",
  },
  {
    id: "skytree",
    title: "Tokyo Skytree",
    subtitle: "Kirby Cafe + Shopping",
    img: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=200&h=200&fit=crop",
    mapUrl: "https://www.google.com/maps/place/Tokyo+Skytree/",
  },
  {
    id: "akihabara",
    title: "Akihabara Station",
    img: "https://images.unsplash.com/photo-1590559899731-a382839e5549?w=200&h=200&fit=crop",
    mapUrl: "https://www.google.com/maps/place/Akihabara+Station/",
  },
];

export default function Maps() {
  const handleMapClick = (mapUrl: string) => {
    // Open in new tab for seamless experience
    window.open(mapUrl, "_blank", "noopener,noreferrer");
  };

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
          <div
            key={place.id}
            style={styles.card}
            role="button"
            tabIndex={0}
            onClick={() => handleMapClick(place.mapUrl)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleMapClick(place.mapUrl);
              }
            }}
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
          </div>
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
    cursor: "pointer",
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
    transition: "background 0.2s ease",
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
