#!/bin/bash

echo "📦 Installing Node.js dependencies for AI Trading Genie Backend..."

# Check if Node.js and npm are installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js (v18 or v20)."
    exit 1
fi

if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm."
    exit 1
fi

# Install dependencies
npm install

# Check if installation succeeded
if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully."
else
    echo "❌ Failed to install dependencies."
    exit 1
fi

# Optional: Run build to generate dist/
echo "🏗️ Building the app..."
npm run build

# Optional: Run TypeORM migrations
echo "📂 Running DB migrations..."
npm run typeorm:migration:run

echo "✅ All done. Ready to start the backend!"
