
export const metadata = {
  title: "Prime Picks India",
  description: "Amazon-style cross selling site",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{fontFamily:"Arial, sans-serif", margin:0, background:"#f5f5f5"}}>
        {children}
      </body>
    </html>
  );
}
