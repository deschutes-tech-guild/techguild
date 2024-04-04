#!/bin/bash
# WIP! Haven't tested this script yet.

# This script is for automating pulling down a Snyk PR
# and updating pnpm-lock.yaml since Snyk bot dosen't quite support that yet.

# It pulls down the branch, updates lock file, pushes the file, deletes the branch

echo "hello world"

snyk_branch=$( git fetch | grep "^snyk")

echo "$snyk_branch"

git switch "$snyk_branch"

pnpm install

git commit -am "chore: pnpm install"

git push

git checkout main

git branch -d "$snyk_branch"

echo "All done :)"
