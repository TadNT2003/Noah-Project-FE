FROM node:23-alpine AS base

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

# Install git on dev enviroment
RUN apk add --no-cache git

# Install bash for running cmd in CI actions
RUN apk add --no-cache bash

# Dev Enviroment:
    # Alpine version 23 linux distro: ✅
    # Node: ✅
    # Git: ✅
    # Bash: ✅