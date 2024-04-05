#!/bin/bash
# WIP! Haven't tested this script yet.

# ! Add debug logs to make sure it works

# This script is for automating pulling down a Snyk PR
# and updating pnpm-lock.yaml since Snyk bot dosen't quite support that yet.

# It pulls down the branch, updates lock file, pushes the file, deletes the branch

echo "hello world"

snyk_branch=$( git branch -r --sort=-authordate | grep "snyk" | head -1 | cut -c 10-)
read -rp "Press enter to continue..."

echo "$snyk_branch" "SNYK"
read -rp "Press enter to continue..."

git switch "$snyk_branch"
read -rp "Press enter to continue..."

pnpm install
read -rp "Press enter to continue..."

git commit -am "chore: pnpm install"
read -rp "Press enter to continue..."

git push
read -rp "Press enter to continue..."

git checkout main
read -rp "Press enter to continue..."

# git branch -d "$snyk_branch"

echo "All done :)"
