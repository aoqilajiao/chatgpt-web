const { spawn } = require('child_process');

spawn('pnpm', ['dev'], { stdio: 'inherit' });
