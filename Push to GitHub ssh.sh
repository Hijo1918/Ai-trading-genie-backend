#!/bin/bash

# Usage: ./push-to-github-ssh.sh <your-github-username> <your-repo-name>
# Example: ./push-to-github-ssh.sh Hijo1918 ai-trading-genie-backend

set -e

if [ -z "$1" ] || [ -z "$2" ]; then
  echo "Usage: $0 <your-github-username> <your-repo-name>"
  exit 1
fi

USERNAME="$1"
REPONAME="$2"

echo "Initializing git repository..."
git init

echo "Adding all files..."
git add .

echo "Committing files..."
git commit -m "Initial commit: NestJS backend for AI Trading Genie"

echo "Setting main branch..."
git branch -M main

echo "Adding remote origin with SSH..."
git remote add origin git@github.com:$USERNAME/$REPONAME.git

echo "Pushing to GitHub via SSH..."
git push -u origin main

echo "Done! Your code is now on git@github.com:$USERNAME/$REPONAME.git"
