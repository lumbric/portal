# Bind address of the server
#HOST = "127.0.0.1"
#PORT = 3000

# Extended log output, but slower
DEBUG = False
AUTO_RESTART = DEBUG

# Required to encrypt or sign sessions, cookies, tokens, etc.
#SECRET = "!!!<<<CHANGEME>>>!!!"

# Connection to the database
#POSTGRES_URL = "postgresql+asyncpg://user:pass@host/dbname"

# URL to the keycloak realm, as reachable by the API service. This is not
# necessarily its publicly reachable URL, keycloak advertises that iself.
#KEYCLOAK_URL = "http://localhost:1234/auth/realms/obs/"

# Auth client credentials
#KEYCLOAK_CLIENT_ID = "portal"
#KEYCLOAK_CLIENT_SECRET = "00000000-0000-0000-0000-000000000000"

# Whether the API should run the worker loop, or a dedicated worker is used
#DEDICATED_WORKER = True

# The root of the frontend. Needed for redirecting after login, and for CORS.
# Set to None if frontend is served by the API.
FRONTEND_URL = None
FRONTEND_HTTPS = True

# Where to find the compiled frontend assets (must include index.html), or None
# to disable serving the frontend.
FRONTEND_DIR = "../frontend/build/"

# Can be an object or a JSON string
FRONTEND_CONFIG = {
    "imprintUrl": "https://example.com/imprint",
    "privacyPolicyUrl": "https://example.com/privacy",
    "mapHome": {"zoom": 6, "longitude": 10.2, "latitude": 51.3},
    "banner": {"text": "This is a test installation.", "style": "warning"},
}

# If the API should serve generated tiles, this is the path where the tiles are
# built. This is an experimental option and probably very inefficient, a proper
# tileserver should be prefered. Set to None to disable.
TILES_FILE = None

# Path overrides:
# API_ROOT_DIR = "??" # default: api/ inside repository
# DATA_DIR = "??" # default: $API_ROOT_DIR/..
# PROCESSING_DIR = "??" # default: DATA_DIR/processing
# PROCESSING_OUTPUT_DIR = "??"  # default: DATA_DIR/processing-output
# TRACKS_DIR = "??" # default: DATA_DIR/tracks
# OBS_FACE_CACHE_DIR = "??" # default: DATA_DIR/obs-face-cache

# Additional allowed origins for CORS headers. The FRONTEND_URL is included by
# default. Python list, or whitespace separated string.
ADDITIONAL_CORS_ORIGINS = None

# vim: set ft=python :
