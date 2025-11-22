export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 p-6 text-center mt-20">
      <p>© {new Date().getFullYear()} Bankai Software Solutions</p>
      <p className="mt-2 text-sm">Made with ❤️ using Next.js & TailwindCSS</p>
    </footer>
  );
}
