#!/usr/bin/env sh

set -euv

ARCH="x64"

# windows should always use 32-bits
if [[ `wmic os get osarchitecture 2> /dev/null` ]]; then
    ARCH="ia32"
fi

echo "Using $ARCH architecture to compile native node_modules"
./node_modules/.bin/electron-rebuild -f --arch "$ARCH"
