export interface NavItem {
  id: string;
  label: string;
}

// Single source of truth for section ids/labels — used by the nav bar and
// mobile drawer so they can't drift out of sync with the page sections.
export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

// Height of the fixed AppBar - used as scroll-margin-top offset on sections.
export const NAV_HEIGHT = 64;
