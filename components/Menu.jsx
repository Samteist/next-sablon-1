import Link from "next/link";

function Menu() {
  return (
    <nav>
      <Link href="/">Anasayfa</Link>
      <Link href="/about">Hakkımda</Link>
      <Link href="/Contact">İletisim</Link>
    </nav>
  );
}

export default Menu;
