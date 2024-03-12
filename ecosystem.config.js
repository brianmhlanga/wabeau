module.exports = {
    apps: [
      {
        name: 'Wabeau Competitions',
        port: '3013',
        exec_mode: 'cluster',
        instances: '1',
        script: './.output/server/index.mjs' 
      }
    ]
  }