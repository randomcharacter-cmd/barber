# Ali Baba Barbería - Professional Barbershop Website

A modern, bilingual (Spanish/English) website for Ali Baba Barbershop in Medellín, Colombia.

## Features

### Performance & Optimization
- **Fast Loading**: Optimized for slow connections and old hardware
- **Lazy Loading**: Images load only when needed
- **Minimal Dependencies**: Vanilla JavaScript for maximum performance
- **Mobile-First Design**: Responsive across all devices
- **Efficient CSS**: Minimal, optimized stylesheets

### Bilingual Support
- Spanish and English languages
- Instant language switching
- LocalStorage saves user preference
- All content translated including footer

### Modern Design
- Professional barbershop aesthetic
- Smooth animations and transitions
- Dark, sophisticated color scheme with gold accents
- High-quality images from real barbershops
- Mobile-responsive navigation

### Sections
1. **Hero** - Eye-catching introduction with call-to-action
2. **Services** - Six professional barbershop services with pricing
3. **About** - Business story and key metrics
4. **Gallery** - Showcase of work and shop interior
5. **Contact** - Address, phone, hours, email, and map

### Technical Details
- Pure HTML5, CSS3, and Vanilla JavaScript
- No framework dependencies (faster loading)
- Semantic HTML for SEO
- Accessible design
- Print-friendly styles
- Reduced motion support for accessibility

## Business Information

**Address**: Cl. 58 #63-89, Laureles, Medellín, Antioquia, Colombia
**Phone**: +57 304 567 8912
**Email**: info@alibababarberia.co
**Hours**:
- Monday-Friday: 9:00 AM - 8:00 PM
- Saturday: 9:00 AM - 7:00 PM
- Sunday: 10:00 AM - 4:00 PM

## Services & Pricing

- Classic Haircut: $35.000 COP
- Premium Shave: $40.000 COP
- Beard Grooming: $30.000 COP
- Complete Combo: $85.000 COP
- Kids Haircut: $25.000 COP
- Special Designs: $45.000 COP

## Footer

Footer includes clickable link to lotuslabs.one with text that changes based on selected language:
- Spanish: "Hecho con amor por lotuslabs.one"
- English: "Made with love by lotuslabs.one"

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## File Structure

```
barber/
├── index.html            # Main HTML structure
├── styles.css            # All styling and responsive design
├── script.js             # Language switching and interactions
├── download-images.sh    # Bash script to download images
├── download-images.py    # Python script to download images
├── images/               # Local images directory (create by running download script)
│   ├── hero-bg.jpg      # Hero background (1920x1080)
│   ├── about.jpg        # About section (600x800)
│   └── gallery-*.jpg    # Gallery images (400x400)
└── README.md             # This file
```

## Setup Instructions

### Download and Optimize Images

**IMPORTANT**: The website references local images that need to be downloaded. Choose one of the following methods:

#### Option 1: Using Bash Script (Mac/Linux)
```bash
chmod +x download-images.sh
./download-images.sh
```

#### Option 2: Using Python Script (Cross-platform)
```bash
python3 download-images.py
```

#### Option 3: Manual Download
If the scripts don't work in your environment, download images manually:

1. Create an `images` directory
2. Download each image from Unsplash:
   - **hero-bg.jpg**: [Download](https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1920&q=85)
   - **about.jpg**: [Download](https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=85)
   - **gallery-1.jpg**: [Download](https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400&q=85)
   - **gallery-2.jpg**: [Download](https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&q=85)
   - **gallery-3.jpg**: [Download](https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&q=85)
   - **gallery-4.jpg**: [Download](https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400&q=85)
   - **gallery-5.jpg**: [Download](https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=400&q=85)
   - **gallery-6.jpg**: [Download](https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=400&q=85)

### Further Optimization (Optional)

For even better performance, optimize images further using:

**Command-line tools:**
```bash
# Using jpegoptim
jpegoptim --max=85 --strip-all images/*.jpg

# Using ImageMagick
mogrify -quality 85 -strip images/*.jpg
```

**GUI tools:**
- **ImageOptim** (Mac) - https://imageoptim.com/
- **Squoosh** (Web) - https://squoosh.app/
- **TinyJPG** (Web) - https://tinyjpg.com/

**Expected sizes after optimization:**
- hero-bg.jpg: ~150-250 KB
- about.jpg: ~40-70 KB
- gallery-*.jpg: ~25-50 KB each
- **Total**: ~400-600 KB for all images

## How to Use

1. **Download images** using one of the methods above
2. Open `index.html` in any modern web browser
3. Click the flag icons (🇪🇸 🇺🇸) to switch between Spanish and English
4. Navigate using the menu or scroll through sections
5. On mobile, tap the hamburger menu to access navigation

## Credits

Website created with love by [lotuslabs.one](https://lotuslabs.one)
