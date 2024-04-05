#!/bin/bash

# This script is for automating pulling down a Snyk PR
# and updating pnpm-lock.yaml since Snyk bot dosen't quite support that yet.

# It pulls down the branch, updates lock file, pushes the file, deletes the branch

echo "hello world"

# Grab the latest Snyk branch from a list of remotes.
snyk_branch=$( git branch -r --sort=-authordate | grep "snyk" | head -1 | cut -c 10-)

echo "$snyk_branch"

git switch "$snyk_branch"

pnpm install

git commit -am "chore: pnpm install"

git push

git checkout main

git branch -d "$snyk_branch"

echo "All done :)"
