#!/bin/bash

set -e

echo "REACT_APP__API_URL=${REACT_APP__API_URL}" > .env

cat .env

exec "$@"
