import React from "react";

type Place = {
  id: string;
  title: string;
  subtitle?: string;
  img: string;
  mapUrl?: string;
  query?: string;
};

const places: Place[] = [
  {
    id: "tokyo-disneyland",
    title: "Tokyo Disneyland",
    subtitle: "",
    img: "/images/disney.png",
    mapUrl:
      "https://www.google.com/maps/place/Tokyo+Disneyland/@35.6329007,139.8778194,17z/data=!3m1!4b1!4m6!3m5!1s0x60187d03114737b3:0xe4d93636d509d3cb!8m2!3d35.6328964!4d139.8803943!16zL20vMDQ0ejFu?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: "tokyo-disneysea",
    title: "Tokyo DisneySea",
    subtitle: "",
    img: "/images/416.gif",
    query: "Tokyo DisneySea",
  },
  {
    id: "omori-apa-hotel",
    title: "Omori APA Hotel",
    subtitle: "",
    img: "/images/apa.png",
    mapUrl:
      "https://www.google.com/maps/place/APA+Hotel+Omori+EkIMAE/@35.5894103,139.7296136,17z/data=!3m1!4b1!4m9!3m8!1s0x601861d0cff8930f:0xad7e339e8096150d!5m2!4m1!1i2!8m2!3d35.5894103!4d139.7296136!16s%2Fg%2F11fmfy4nny?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: "omori-mall-ito",
    title: "Omori Mall",
    subtitle: "",
    img: "/images/ito.png",
    query: "イトーヨーカドー 大森店",
  },
  {
    id: "kameido-station",
    title: "Kameido Station",
    subtitle: "Minoru's station",
    img: "/images/kameido.png",
    mapUrl:
      "https://www.google.com/maps/place/Kameido+Station/@35.6973268,139.8239909,17z/data=!3m1!4b1!4m6!3m5!1s0x601888c4f237ec91:0x33949174fb66cb0e!8m2!3d35.6973225!4d139.8265658!16s%2Fm%2F03nqjkw?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: "shibuya-station",
    title: "Shibuya Station",
    subtitle: "Big crossing area",
    img: "/images/shibuya.png",
    mapUrl:
      "https://www.google.co.jp/maps/place/%E5%8C%BA%E6%B8%8B%E8%B0%B7%E4%BA%A4%E5%B7%AE%E7%82%B9/@35.659482,139.6979847,17z/data=!3m2!4b1!5s0x60188b57f546295f:0x486cece41a7b21b0!4m6!3m5!1s0x60188bcaeb0cd12b:0x20e563a2e0aec969!8m2!3d35.659482!4d139.7005596!16s%2Fg%2F11shy4scrj?hl=ja&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: "sunshine-city",
    title: "Sunshine City",
    subtitle: "Ikebukuro",
    img: "/images/sunshine.png",
    query: "Sunshine City Ikebukuro",
  },
  {
    id: "tsukiji",
    title: "Tsukiji Outer Market",
    subtitle: "Street food + snacks",
    img: "/images/410.gif",
    query: "Tsukiji Outer Market",
  },
  {
    id: "ueno",
    title: "Ueno Park",
    subtitle: "Temples + teahouse",
    img: "/images/411.gif",
    query: "Ueno Park",
  },
  {
    id: "skytree",
    title: "Skytree",
    subtitle: "Kirby Cafe + Shopping",
    img: "/images/418.gif",
    query: "Tokyo Skytree",
  },
  {
    id: "akihabara",
    title: "Akihabara",
    subtitle: "Anime + retro shops",
    img: "/images/421.gif",
    mapUrl:
      "https://www.google.com/maps/place/Akihabara+Station/@35.6979481,139.7695397,17z/data=!3m1!4b1!4m6!3m5!1s0x60188ea7f90616ab:0x8d405f2c427203d5!8m2!3d35.6979438!4d139.7744106!16s%2Fg%2F11vklkb1rd?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
  },
];

function googleMapsUrl(place: Place): string {
  if (place.mapUrl) return place.mapUrl;
  const q = place.query ?? place.title;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    q
  )}`;
}

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
        {places.map((place) => {
          const url = googleMapsUrl(place);
          return (
            <a
              key={place.id}
              href={url}
              target="_blank"
              rel="noreferrer"
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
          );
        })}
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
    whiteSpace: "nowrap",
  },
  headerTitle: { fontSize: 18, fontWeight: 800, lineHeight: 1.2 },
  headerSpacer: { width: 60 },
  p: { margin: "10px 0 0", fontSize: 14, opacity: 0.75 },
  list: { display: "flex", flexDirection: "column", gap: 12 },
  card: {
    display: "flex",
    gap: 12,
    padding: 12,
    borderRadius: 16,
    textDecoration: "none",
    color: "inherit",
    background: "rgba(0,0,0,0.04)",
  },
  img: {
    width: 92,
    height: 92,
    borderRadius: 14,
    objectFit: "cover",
    flexShrink: 0,
    background: "rgba(0,0,0,0.06)",
  },
  textWrap: {
    minWidth: 0,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  titleRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 1.2,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  chev: { fontSize: 22, opacity: 0.55, lineHeight: 1 },
  subtitle: {
    marginTop: 6,
    fontSize: 13,
    opacity: 0.8,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  linkHint: { marginTop: 8, fontSize: 12, opacity: 0.7 },
  footerSpace: { height: 24 },
};
