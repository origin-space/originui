#!/bin/bash

# --------------------------------------------------------------------- #
# Author: Neeraj Dalal <https://x.com/nrjdalal_com>                     #
# Description: Build demo components for testing registry-items locally #
# --------------------------------------------------------------------- #

# remove out directory if it exists
rm -rf out

# check if the app is running on port 3000 else start the app temporarily
if ! lsof -i:3000 -t >/dev/null; then
  pnpm run dev &
fi

# clone shadcn-tailwind-v4 project to out directory without .git directory
pnpx gitpick@latest nrjdalal/awesome-templates/tree/main/next.js-apps/next.js-shadcn-taliwind-v4 out

# replace globals.css with originui globals.css
cp app/globals.css out/src/app/globals.css

# create pages for each component in app directory
for file in $(find registry/default/components -name '*.tsx' | sort -V); do
  # remove extension from file to get filename
  filename=$(basename -- "$file" .tsx)

  # add component from registry-item to out directory
  pnpx shadcn@latest add "http://localhost:3000/r/${filename}.json" -o -c "./out"

  # create directory for component
  mkdir -p "out/src/app/${filename}"

  # create page.tsx file for component
  cat >"out/src/app/${filename}/page.tsx" <<EOF
import Component from "@/components/${filename}";
export default Component;
EOF
done

# close the app
kill $(lsof -t -i:3000)
