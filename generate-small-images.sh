#!/bin/bash

# Script to generate 20px wide versions of all images
# Navigate to the imgs directory
cd "src/assets/imgs"

echo "🖼️  Generating small versions of images..."
echo "📂 Working in: $(pwd)"
echo ""

# Counter for processed files
count=0

# Process all image files
for file in *.jpg *.jpeg *.png *.JPG *.JPEG *.PNG; do
    # Check if file exists and is not already a small version
    if [[ -f "$file" && "$file" != *"-small."* ]]; then
        # Extract filename without extension
        filename="${file%.*}"
        # Extract file extension
        extension="${file##*.}"
        
        # Create the small version filename
        small_file="${filename}-small.${extension}"
        
        echo "📸 Processing: $file -> $small_file"
        
        # Generate small version using ffmpeg
        ffmpeg -i "$file" -vf scale=20:-1 "$small_file" -y -loglevel error
        
        if [[ $? -eq 0 ]]; then
            # Get file sizes for comparison
            original_size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null || echo "unknown")
            small_size=$(stat -f%z "$small_file" 2>/dev/null || stat -c%s "$small_file" 2>/dev/null || echo "unknown")
            
            echo "✅ Created: $small_file"
            if [[ "$original_size" != "unknown" && "$small_size" != "unknown" ]]; then
                reduction=$(( (original_size - small_size) * 100 / original_size ))
                echo "   📊 Size: $(numfmt --to=iec $original_size) -> $(numfmt --to=iec $small_size) (${reduction}% reduction)"
            fi
            ((count++))
        else
            echo "❌ Failed to process: $file"
        fi
        echo ""
    fi
done

echo "🎉 Completed! Processed $count images."
echo "💡 Small images are ready for use in your React components."