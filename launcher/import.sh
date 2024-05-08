#!/bin/bash

cd "$(dirname "$0")"
cd ..

rm -rf target
mkdir target
cd target

echo "========================================"
echo "Import container-examples-suite"
echo "========================================"
git clone https://github.com/mhus/container-examples-suite.git
rm -rf ../mhus.de/docs/container-examples-suite
mkdir -p ../mhus.de/docs/container-examples-suite
cp -r container-examples-suite/docs/* ../mhus.de/docs/container-examples-suite/
