#!/bin/bash
set -e
npm install --workspaces
npm run push --workspace=lib/db
