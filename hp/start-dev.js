const { spawn } = require('child_process');
const path = require('path');

const hp = path.join(__dirname);

const proc = spawn('npm', ['run', 'dev'], {
  cwd: hp,
  stdio: 'inherit',
  shell: true,
});

proc.on('error', (err) => console.error(err));
