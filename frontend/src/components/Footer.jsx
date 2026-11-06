
function Footer() {
  return (
    <footer className="bg-charcoal text-journal py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between gap-8">

          <div>
            <h2 className="font-heading text-2xl font-bold">
              The Martha Journal.
            </h2>

            <p className="text-sm text-beige mt-3 max-w-sm">
              A space for stories, thoughts, experiences and everything in between.
            </p>
          </div>

          <div className="flex gap-6 text-sm">
            <a href="/" className="hover:text-brown transition">Home</a>
            <a href="/journal" className="hover:text-brown transition">Journal</a>
            <a href="/about" className="hover:text-brown transition">About</a>
          </div>

        </div>

        <div className="border-t border-taupe mt-10 pt-6 text-center text-sm text-beige">
          © {new Date().getFullYear()} The Martha Journal. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;
