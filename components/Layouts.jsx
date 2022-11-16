import Menu from "./Menu";

function Layout({ children }) {
  return (
    <div>
      <Menu style={{ flexDirection: "column", margin: 10 }} />
      <main>{children}</main>
      <footer>undesigned musa</footer>
    </div>
  );
}

export default Layout;
