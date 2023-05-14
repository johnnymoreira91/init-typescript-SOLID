const os = require('os')

const numCpu = os.cpus().length

let enviroment = 'dev'
let sourceFile = null
let port = 3001

if (process.env.NODE_ENV === 'dev') {
  sourceFile = 'src/index.ts'
  port = 3001
} else {
  sourceFile = 'dist/index.js'
  port = Number(process.env.PORT) ?? 3001
}

module.exports = {
  apps: [
    {
      name: "back-init-typescript",
      script: sourceFile,
      instances: numCpu - 1,
      exec_mode: "cluster",
      watch: true,
      max_memory_restart: '1024M',
      env: {
        NODE_ENV: enviroment,
        PORT: port,
      },
    },
  ],
};
