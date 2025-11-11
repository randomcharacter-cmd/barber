#!/usr/bin/env python3
"""
Image Download and Optimization Script for Ali Baba Barbershop Website
Run this script to download all images locally with optimization
"""

import os
import urllib.request
import sys

# Create images directory
os.makedirs('images', exist_ok=True)

# Image URLs with optimization parameters
images = {
    'hero-bg.jpg': 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1920&q=85',
    'about.jpg': 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=85',
    'gallery-1.jpg': 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400&q=85',
    'gallery-2.jpg': 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&q=85',
    'gallery-3.jpg': 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&q=85',
    'gallery-4.jpg': 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400&q=85',
    'gallery-5.jpg': 'https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=400&q=85',
    'gallery-6.jpg': 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=400&q=85',
}

# Add user agent to avoid blocks
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}

print("Downloading optimized images...")
print("-" * 50)

total_size = 0
for filename, url in images.items():
    filepath = os.path.join('images', filename)
    try:
        req = urllib.request.Request(url, headers=headers)
        print(f"Downloading {filename}...", end=' ')

        with urllib.request.urlopen(req) as response:
            data = response.read()
            size = len(data)
            total_size += size

            with open(filepath, 'wb') as f:
                f.write(data)

            print(f"✓ ({size // 1024} KB)")
    except Exception as e:
        print(f"✗ Error: {e}")

print("-" * 50)
print(f"Download complete!")
print(f"Total size: {total_size // 1024} KB ({total_size / (1024*1024):.2f} MB)")
print(f"Images saved to: ./images/")
print()
print("Next steps:")
print("1. Images are already optimized (q=85, proper dimensions)")
print("2. For further optimization, use tools like:")
print("   - jpegoptim: jpegoptim --max=85 --strip-all images/*.jpg")
print("   - ImageOptim (Mac)")
print("   - TinyJPG/TinyPNG (online)")
print("   - Squoosh (https://squoosh.app)")
