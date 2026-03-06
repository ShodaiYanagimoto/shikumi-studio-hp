import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "しくみスタジオ | AI・DXで中小企業の変革を支援";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #fafafa 0%, #f0f0f0 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <div
            style={{
              fontSize: "72px",
              fontWeight: 700,
              color: "#333333",
              letterSpacing: "-1px",
            }}
          >
            しくみスタジオ
          </div>
          <div
            style={{
              fontSize: "28px",
              color: "#666666",
              letterSpacing: "2px",
            }}
          >
            Shikumi Studio
          </div>
          <div
            style={{
              marginTop: "16px",
              fontSize: "24px",
              color: "#999999",
            }}
          >
            AI・DXで中小企業の変革を支援
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            display: "flex",
            gap: "24px",
            fontSize: "16px",
            color: "#999999",
          }}
        >
          <span>講演・セミナー</span>
          <span>|</span>
          <span>顧問・アドバイザリー</span>
          <span>|</span>
          <span>AI・DXコンサルティング</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
