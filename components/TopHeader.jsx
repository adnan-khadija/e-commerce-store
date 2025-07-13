export default function TopHeader() {
  return (
    <div className="w-full bg-black text-white text-sm py-2 px-4 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span>📧 contact@example.com</span>
          <span>📞 +212 6 12 34 56 78</span>
        </div>
        <div className="italic">Bienvenue dans notre boutique en ligne !</div>
      </div>
    </div>
  );
}
