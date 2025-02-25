#!/bin/bash

base_url="https://v0.dev/chat/api/open?url=https://originui.com/r/comp-"

for i in $(seq 1 529); do
  if [ $i -lt 10 ]; then
    url="${base_url}0${i}.json"
  else
    url="${base_url}${i}.json"
  fi
  echo "Opening $url"
  open "$url"
  sleep 15
done
