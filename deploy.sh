#!/usr/bin/env sh

git pull origin master
git add -A
git commit -m 'feat: update'
git push -u origin master
