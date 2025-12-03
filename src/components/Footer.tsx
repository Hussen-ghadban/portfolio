
const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gradient-to-r dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 text-slate-900 dark:text-white py-8 text-center mt-auto">
      <div className="container mx-auto px-6">
        <p className="text-sm md:text-base font-medium">
          &copy; {new Date().getFullYear()} Hussein Ghadban. | Built with passion in Beirut, Lebanon 🇱🇧
        </p>
      </div>
    </footer>
  );
};

export default Footer;