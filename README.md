# MathworldVR

WebVR math platform made with A-Frame, Three.js, React, Redux.

Currently, it's possible to run the project as Node app (`node server`) and also run it as a static site (`npm run build:static`).
That's because we wanted to ship very quickly for Virtuleap's hackathon - client-side only MVP, hosted on shared server.

### Build for production (static site)

```
webpack -p 
copy new build/bundle.js to FTP
```
