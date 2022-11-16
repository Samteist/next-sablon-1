import Link from "next/link";

function Menu() {
  return (
    <nav>
      <Link href="/about">Hakkımda</Link>
      <Link href="/Contact">İletisim</Link>
      <Link href="/">Anasayfa</Link>
    </nav>
  );
}

export default Menu;
