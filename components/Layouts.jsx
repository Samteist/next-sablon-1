import Menu from "./Menu";

function Layout({ children }) {
  return (
    <div>
      <Menu />
      <main>{children}</main>
      <footer>Sam@</footer>
    </div>
  );
}

export default Layout;
