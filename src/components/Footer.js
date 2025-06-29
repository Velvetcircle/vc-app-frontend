export default function Footer() {
  return (
    <footer className="bg-purple-950 text-purple-100 text-center py-4 mt-12">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Velvet Circle. All rights reserved.
      </p>
      <p className="text-xs mt-1">
        Built on trust, respect, and meaningful connection.
      </p>
    </footer>
  );
}
