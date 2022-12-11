#!/usr/bin/env bash

set -e

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:Skullage/pw_comp_backend.git master

cd -