#!/bin/bash

echo "===== APPLICATION START ====="

cd /home/ubuntu/backend

pm2 stop backend || true
pm2 delete backend || true

pm2 start npm --name backend -- start
pm2 save