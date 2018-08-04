module.exports = {
  apps : [{
    name      : 'BLog',
    script    : 'bin/www',
    env: {
      PORT:3001,
      NODE_ENV: 'development'
    },
    env_production : {
      PORT:8080,
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'root',
      host : '67.216.209.107',
      port: '28328',
      ref  : 'origin/master',
      repo : 'git@github.com:JuunJunn/reBlog.git',
      path : '/data/www/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
