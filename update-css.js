const fs = require('fs');
let css = fs.readFileSync('artifacts/wedding-invite/src/index.css', 'utf-8');

// Prepend imports
css = `@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');\n` + css;

// Replace fonts
css = css.replace(/--app-font-sans:.+?;/, "--app-font-sans: 'Cormorant Garamond', Georgia, serif;");
css = css.replace(/--app-font-serif:.+?;/, "--app-font-serif: 'Playfair Display', Georgia, serif;");

// Colors
const colors = {
  background: '44 87% 94%',
  foreground: '349 60% 26%',
  border: '44 54% 54%',
  card: '44 87% 94%',
  'card-foreground': '349 60% 26%',
  'card-border': '44 54% 54%',
  primary: '349 60% 26%',
  'primary-foreground': '44 87% 94%',
  secondary: '44 54% 54%',
  'secondary-foreground': '349 60% 26%',
  muted: '44 30% 85%',
  'muted-foreground': '349 40% 40%',
  accent: '44 54% 54%',
  'accent-foreground': '349 60% 26%',
  destructive: '0 84% 60%',
  'destructive-foreground': '0 0% 100%',
  input: '44 54% 54%',
  ring: '44 54% 54%',
  'chart-1': '349 60% 26%',
  'chart-2': '44 54% 54%',
  'chart-3': '12 76% 61%',
  'chart-4': '173 58% 39%',
  'chart-5': '43 74% 66%'
};

Object.keys(colors).forEach(k => {
  css = css.replace(new RegExp(`--${k}: red; /\\*replace with H S L \\*/`, 'g'), `--${k}: ${colors[k]};`);
  css = css.replace(new RegExp(`--sidebar-${k}: red; /\\*replace with H S L \\*/`, 'g'), `--sidebar-${k}: ${colors[k]};`);
  css = css.replace(new RegExp(`--popover-${k}: red; /\\*replace with H S L \\*/`, 'g'), `--popover-${k}: ${colors[k]};`);
});

// Any remaining reds
css = css.replace(/red; \/\*replace with H S L \*\//g, '44 54% 54%;');

fs.writeFileSync('artifacts/wedding-invite/src/index.css', css);
