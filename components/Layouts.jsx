function Layout({ children }) {
  return (
    <div>
      <Menu />
      <main>{children}</main>
      <footer>undesigned musa</footer>
    </div>
  );
}

export default Layout;
