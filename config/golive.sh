#! /bin/bash

#load the CONFIG var from ".env"
export $(egrep -v '^#' .env | xargs)

# if CONFIG is not set, exit
if [ -z "$CONFIG" ]; then
  echo "CONFIG is not set. Exiting."
  exit 1
fi

echo "CONFIG is set to '$CONFIG'."

# if CONFIG is 'jasper'
if [ "$CONFIG" = "jasper" ]; then
  echo "CONFIG is 'jasper'."
  git push
elif [ "$CONFIG" = "mariko" ]; then
  echo "CONFIG is 'mariko'."
  # git push
else
  echo "Invalid CONFIG. Exiting."
  exit 1
fi