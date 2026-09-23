import Button from "@/components/Button/Button"
import Tag from "@/components/Tag/Tag"

export default function Home() {
  return (
    <main>
      <h1>Portfolio</h1>
      <Button href="/about">Aboutを見る</Button>
      <Button variant="outline">アドレスをコピー</Button>
      <Tag>Next.js</Tag>
      <Tag>TypeScript</Tag>
    </main>
  );
}
