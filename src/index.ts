import app from '@infra/server'

if (process.env.NODE_ENV === 'dev') {
  Connect(3001, 'dev')
} else if (process.env.NODE_ENV === 'prod') {
  Connect(8080, 'prod')
} else {
  Connect(3001, 'NO_AMBIENT_DEFINED')
}

function Connect (port: number, stage: string) {
  app.listen(port, () => {
    console.log(`Running on ${stage} process`)
  })
}

// import app from '@infra/server'
// import Logger from '@infra/services/logger'
// import cluster from 'cluster'
// import os from 'os'
// const numCPUs = os.cpus().length

// if (cluster.isPrimary) {
//   for (let i = 0; i < numCPUs; i++) {
//     console.log(`Fork ${i}`)
//     cluster.fork()
//   }

//   cluster.on('exit', (worker, code, signal) => {
//     console.log(`Worker ${worker.process.pid} died with code: ${code} and signal: ${signal}`)
//     console.log('Starting a new worker')
//     cluster.fork()
//   })
// } else {
//   if (process.env.NODE_ENV === 'dev') {
//     Connect(3001, 'dev')
//   } else if (process.env.NODE_ENV === 'prod') {
//     Connect(8080, 'prod')
//   } else {
//     Connect(3001, 'NO_AMBIENT_DEFINED')
//   }
// }

// function Connect (port: number, stage: string) {
//   app.listen(port, () => {
//     Logger.info(` 🤓 Running on ${stage} process`)
//     // console.log(`Running on ${stage} process`)
//   })
// }
