export const Footer = () => (
  <footer className="relative py-10 border-t border-border/50">
    <div className="container mx-auto px-4 text-center">
      <p className="font-mono text-sm text-muted-foreground">
        © {new Date().getFullYear()} <span className="text-gradient font-semibold">Lalit Verma</span> · Crafted with passion for education & AI.
      </p>
    </div>
  </footer>
);
