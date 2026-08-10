import { ImageResponse } from "next/og";

export const alt =
  "Michael Ezenwugo frontend developer portfolio";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType =
  "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",

          background:
            "linear-gradient(135deg, #050308 0%, #0c0614 55%, #17092b 100%)",

          color: "#f7f5fb",

          fontFamily:
            "Arial, sans-serif",

          padding: "72px",
        }}
      >
        {/* Purple atmosphere */}
        <div
          style={{
            position: "absolute",
            width: "500px",
            height: "500px",
            borderRadius: "999px",
            right: "-100px",
            top: "-170px",

            background:
              "rgba(139, 92, 246, 0.20)",
          }}
        />

        {/* Cyan energy */}
        <div
          style={{
            position: "absolute",
            width: "220px",
            height: "220px",
            borderRadius: "999px",
            right: "180px",
            bottom: "-100px",

            background:
              "rgba(114, 231, 255, 0.10)",
          }}
        />

        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent:
              "space-between",
            position: "relative",
          }}
        >
          {/* Text */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "760px",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: "19px",
                letterSpacing: "4px",
                textTransform:
                  "uppercase",
                color: "#b49aff",
                marginBottom: "34px",
              }}
            >
              Frontend · Data · AI
            </div>

            <div
              style={{
                display: "flex",
                flexDirection:
                  "column",
                fontSize: "78px",
                lineHeight: 0.9,
                letterSpacing: "-5px",
                fontWeight: 700,
              }}
            >
              <span>
                Michael
              </span>

              <span
                style={{
                  color: "#b49aff",
                }}
              >
                Ezenwugo.
              </span>
            </div>

            <div
              style={{
                display: "flex",
                marginTop: "38px",
                fontSize: "26px",
                lineHeight: 1.35,
                color: "#b8afc4",
              }}
            >
              Frontend developer
              building toward AI,
              machine learning and
              data science.
            </div>
          </div>

          {/* ME identity mark */}
          <div
            style={{
              width: "230px",
              height: "230px",

              display: "flex",

              alignItems: "center",

              justifyContent:
                "center",

              borderRadius: "56px",

              border:
                "2px solid rgba(180,154,255,0.30)",

              background:
                "rgba(139,92,246,0.08)",

              fontSize: "82px",

              letterSpacing: "-8px",

              fontWeight: 700,

              color: "#cfc1ff",
            }}
          >
            ME
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}