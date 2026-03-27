interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer = ({ onNavigate }: FooterProps) => (
  <footer className="dawn-footer">
    <div className="dawn-footer__grid">
      <div>
        <p className="dawn-footer__logo">ThreadCycle</p>
        <p className="dawn-footer__tagline">Curated vintage. Conscious fashion.</p>
      </div>
      <div>
        <p className="dawn-footer__heading">Quick Links</p>
        <ul className="dawn-footer__links">
          {[{ label: "Shop", page: "shop" }, { label: "About", page: "about" }, { label: "FAQ", page: "faq" }, { label: "Contact", page: "home" }].map(item => (
            <li key={item.label}>
              <button onClick={() => onNavigate(item.page)}>{item.label}</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="dawn-footer__heading">Stay in the loop</p>
        <div className="dawn-footer__subscribe">
          <input className="dawn-input" placeholder="Your email" type="email" />
          <button className="dawn-btn">Subscribe</button>
        </div>
      </div>
    </div>
    <div className="dawn-footer__bottom">
      <span>© 2026 ThreadCycle. All rights reserved.</span>
      <span>Made with 💚</span>
    </div>
  </footer>
);

export default Footer;
