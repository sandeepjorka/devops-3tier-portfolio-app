#!/bin/bash
set -e

echo "===== APPLICATION START STARTED ====="

cd /home/ubuntu/backend

pm2 restart backend || pm2 start server.js --name backend

echo "===== APPLICATION START COMPLETED ====="