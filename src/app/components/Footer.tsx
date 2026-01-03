// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="py-10 text-center text-gray-400">
      <div className="max-w-4xl mx-auto px-6">
        © {new Date().getFullYear()} Your Name — Built with ❤️
      </div>
    </footer>
  );
}
