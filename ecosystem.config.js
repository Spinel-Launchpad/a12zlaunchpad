module.exports = {
  apps: [
    {
      name: "spinel-launchpad-terminus",
      script: "npm",
      args: "run start",
      instances: 1,
      exec_mode: "cluster",
      autorestart: true,
      max_memory_restart: "500M",
      env: {
        PORT: 9000,
        NODE_ENV: "production",
      },
    },
  ],
};
