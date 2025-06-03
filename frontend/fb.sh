#!/bin/bash
git add .
git commit -m "el sam"
git push origin main
echo "Starting tasks..."
npm run build
firebase deploy