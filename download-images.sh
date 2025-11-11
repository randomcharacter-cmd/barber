#!/bin/bash

# Image Download and Optimization Script for Ali Baba Barbershop Website
# Run this script on your local machine to download and optimize all images

echo "Creating images directory..."
mkdir -p images

echo "Downloading hero background image..."
curl -L "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1920&q=85" -o images/hero-bg.jpg

echo "Downloading about section image..."
curl -L "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=85" -o images/about.jpg

echo "Downloading gallery images..."
curl -L "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400&q=85" -o images/gallery-1.jpg
curl -L "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&q=85" -o images/gallery-2.jpg
curl -L "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&q=85" -o images/gallery-3.jpg
curl -L "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400&q=85" -o images/gallery-4.jpg
curl -L "https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=400&q=85" -o images/gallery-5.jpg
curl -L "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=400&q=85" -o images/gallery-6.jpg

echo ""
echo "Download complete! Images saved to ./images/"
echo ""
echo "For additional optimization, you can run:"
echo "  - jpegoptim --max=85 --strip-all images/*.jpg"
echo "  - or use online tools like TinyJPG, Squoosh, etc."
echo ""
echo "Total sizes:"
du -sh images/
ls -lh images/
