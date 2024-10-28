#!/bin/sh

if [ $# -lt 1 ]; then
    echo "Usage: $0 <app folder name>"
    exit 1
fi

echo "delete docs"
rm -rf docs
echo "build project ng-linkedsignal-demo starts"
ng build --project=ng-linkedsignal-demo --output-path docs
cp ./docs/browser/index.html  ./docs/browser/404.html
cp ./docs/browser/*  ./docs
rm -rf ./docs/browser
echo 'build project finishes'