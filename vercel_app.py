import os
import sys
from streamlit.web.cli import main

if __name__ == "__main__":
    # This forces Streamlit to run in a way Vercel can handle
    sys.argv = [
        "streamlit",
        "run",
        "tarot_v.py", # This points to your actual code
        "--server.port", "8080",
        "--server.address", "0.0.0.0",
    ]
    sys.exit(main())
