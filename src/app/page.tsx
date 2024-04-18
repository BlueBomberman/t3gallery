import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/a8a307cf-9433-4056-81a4-850f594bad82-9tm8io.jpg",
  "https://utfs.io/f/f55fe43b-002a-4b82-8c29-5af443a352fd-glrdur.jpg",
  "https://utfs.io/f/7bf0acb1-798e-4a4c-9b64-8623660ec91a-454x2n.jpg",
  "https://utfs.io/f/d89248e5-b708-4e58-afc1-7e55db1f7f01-v0o5p.jpg"
]

const mockImages = mockUrls.map((url, index) => ({ id: index + 1, url }))

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map(image => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt={`${image.id}`} />
          </div>
        ))}
      </div>
      Hello (gallery in progress)
    </main>
  );
}
