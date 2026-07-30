interface OgCardProps {
  eyebrow: string
  title: string
  body: string
  localeLabel: string
  featureLines: string[]
}

export function OgCard({
  eyebrow,
  title,
  body,
  localeLabel,
  featureLines,
}: OgCardProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background:
          "radial-gradient(120% 120% at 0% 0%, #efeaff 0%, #fbfbff 52%, #f7f7ff 100%)",
        color: "#0f1724",
        padding: "44px",
        fontFamily:
          '"Segoe UI", "Avenir Next", "SF Pro Text", "Helvetica Neue", sans-serif',
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "22px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              padding: "8px 14px",
              borderRadius: "9999px",
              background: "rgba(106, 76, 255, 0.12)",
              color: "#5a3bff",
              fontSize: "20px",
              fontWeight: 700,
              letterSpacing: "0.02em",
            }}
          >
            {eyebrow}
          </div>

          <div
            style={{
              fontSize: "64px",
              lineHeight: 1.04,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              maxWidth: "700px",
            }}
          >
            {title}
          </div>

          <div
            style={{
              fontSize: "28px",
              lineHeight: 1.34,
              color: "#4b5563",
              maxWidth: "760px",
            }}
          >
            {body}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            padding: "7px 12px",
            borderRadius: "9999px",
            border: "1px solid rgba(15, 23, 36, 0.12)",
            fontSize: "18px",
            fontWeight: 600,
            color: "#4b5563",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
          }}
        >
          {localeLabel}
        </div>
      </div>

      <div
        style={{
          width: "390px",
          marginLeft: "32px",
          borderRadius: "28px",
          border: "1px solid rgba(15, 23, 36, 0.12)",
          background: "rgba(255, 255, 255, 0.92)",
          boxShadow: "0 26px 50px rgba(90, 59, 255, 0.16)",
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
        }}
      >
        <div
          style={{
            fontSize: "20px",
            fontWeight: 700,
            color: "#5a3bff",
          }}
        >
          Example data
        </div>

        {featureLines.slice(0, 4).map((line) => (
          <div
            key={line}
            style={{
              display: "flex",
              alignItems: "center",
              borderRadius: "14px",
              border: "1px solid rgba(15, 23, 36, 0.08)",
              background: "#ffffff",
              padding: "12px 14px",
              fontSize: "20px",
              lineHeight: 1.25,
              color: "#0f1724",
            }}
          >
            {line}
          </div>
        ))}
      </div>
    </div>
  )
}
