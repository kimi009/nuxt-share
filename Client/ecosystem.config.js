module.exports = {
  apps: [
    {
      name: 'Nuxt-Share',
      script: './server/index.js',
      time: true,
      args: 'one two',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development'
      },
      env_prod: {
        NODE_ENV: 'production'
      }
    }
  ],
  deploy: {
    dev: {
      user: 'root',
      host: '203.195.150.105',
      ref: 'origin/master',
      repo: 'git@github.com:kimi009/nuxt-share.git',
      path: '/web/nuxt-share/Client',
      'post-deploy':
        'npm install && npm run build && pm2 reload ecosystem.config.js --only Nuxt-Share --env prod'
    }
  }
}
