#!/bin/bash

# -------------------------------------------------------------------- #
# Author: Neeraj Dalal <https://x.com/nrjdalal_com>                    #
# Description: Open demo components for testing registry-items locally #
# -------------------------------------------------------------------- #

# check if out directory exists
if [ ! -d "out" ]; then
  echo "out directory does not exist, run pnpm run test:build first"
  exit 1
fi

# switch to out directory
cd out

# check if any app is running on port 4000, if so kill it
if lsof -i:4000 -t >/dev/null; then
  kill $(lsof -t -i:4000)
fi

# start the app on port 4000
pnpm run dev -p 4000 &

# open all components in browser
for file in $(find ../registry/default/components -name '*.tsx' | sort -V); do
  # wait 5 seconds to open next component
  sleep 5
  # remove extension from file to get component name
  filename=$(basename -- "$file" .tsx)
  # open component in browser
  open "http://localhost:4000/${filename}"
done

# after done opening all components, close the app
kill $(lsof -t -i:4000)
