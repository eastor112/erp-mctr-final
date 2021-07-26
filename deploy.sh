#!/usr/bin/env sh

# Antes de desplegar
# 1.-Descomentar la ruta base
# 2.-Descomentar la dirección del backend en el .Eenv

set -e

yarn build 

git add dist -f

git commit -m 'desplegando con nuevos cambios...'

git subtree push --prefix dist origin gh-pages