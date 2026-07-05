import Logo from "../Common/Logo";

export default function Navbar() {
  return (
    <nav className="h-16 border-b bg-white flex items-center justify-between px-8">
      <Logo />

      <div className="font-semibold">
        Welcome
      </div>
    </nav>
  );
}