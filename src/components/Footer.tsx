export function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>
          © {new Date().getFullYear()} Abhishek Chaturvedi. Crafted with care.
        </div>
        <div>Software Developer · AI Engineer</div>
      </div>
    </footer>
  );
}
