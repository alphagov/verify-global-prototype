#!/usr/bin/env bash

set -eu

CF_API="api.cloud.service.gov.uk"
CF_ORG="govuk-verify"
CF_SPACE="notification"

if [ -z "${CF_USER:-}" ]; then
  # For running locally
  echo "CF_USER env var is unset so assume we're running locally" >&2
else
  # CloudFoundry will cache credentials in ~/.cf/config.json by default.
  # Set CF_HOME in a temp dir so that jobs do not share or overwrite each others' credentials.
  export CF_HOME="$(mktemp -d)"
  mkdir -p "$CF_HOME"

  # Make sure credentials have been set
  CF_PASS="${CF_PASS:?CF_PASS environment variable needs to be set}"

  # Remove working directory and auth token on forced exit
  trap 'rm -r $CF_HOME' EXIT
  trap 'cf logout' EXIT

  echo "Authenticating to CloudFoundry at '$CF_API' ($CF_ORG/$CF_SPACE) as '$CF_USER'" >&2
  cf api "$CF_API"
  cf auth "$CF_USER" "$CF_PASS"
  cf target -o "$CF_ORG" -s "$CF_SPACE"
fi

cd verify-global-prototype
cf push

cd ../cf_basic_auth_route_service

cf push verfiy-global-basic-auth --no-start
cf set-env verfiy-global-basic-auth AUTH_USERNAME ${AUTH_USER}
cf set-env verfiy-global-basic-auth AUTH_PASSWORD ${AUTH_PASSWORD}
cf start verfiy-global-basic-auth --no-start

cf create-user-provided-service verfiy-global-basic-auth -r https://verfiy-global-basic-auth.cloudapps.digital
cf bind-route-service cloudapps.digital my-basic-auth-service --hostname verfiy-global



