import { ImageResponse } from '@vercel/og';
import { baseURL } from '../resources';

// Use Edge runtime
export const runtime = 'edge';

// Preload font dynamically to avoid bundling heavy assets
const fontUrl = new URL(`${import.meta.url}/fonts/Inter-Regular.woff`);
let fontDataPromise: Promise<ArrayBuffer>;

function loadFont() {
  if (!fontDataPromise) {
    fontDataPromise = fetch(fontUrl).then(res => res.arrayBuffer());
  }
  return fontDataPromise;
}

export async function GET(request: Request) {
  const fontData = await loadFont();

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#ffffff',
          fontFamily: 'Inter',
        }}
      >
        <h1 style={{ fontSize: 60 }}>My Magic Portfolio</h1>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: fontData,
          style: 'normal',
        },
      ],
    }
  );
}
