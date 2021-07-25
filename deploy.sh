#!/usr/bin/env sh

# Modificar el vite.configjs

# export default defineConfig({
#   base: '/erp-mctr-final/',
#   plugins: [reactRefresh()]
# })
set -e

yarn build 

git add dist -f

git commit -m 'desplegando con nuevos cambios...'

git subtree push --prefix dist origin gh-pages