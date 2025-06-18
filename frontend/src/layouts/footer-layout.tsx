function footer() {
  const newDate = new Date();
  const year = newDate.getFullYear();

  return (
    <footer className="bg-black text-gray-300 py-6">
        <div className="container mx-auto text-center px-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} Vaishnav Yejju. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="https://github.com/VaishnavYejju" target="_blank" className="hover:underline">GitHub</a>
            <a href="https://www.linkedin.com/in/vaishnav-yejju" target="_blank" className="hover:underline">LinkedIn</a>
            <a href="/privacy" className="hover:underline">Privacy Policy</a>
          </div>
        </div>
      </footer>
  );
}

export default footer;
