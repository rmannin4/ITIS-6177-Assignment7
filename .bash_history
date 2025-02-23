npm install express swagger-jsdoc swagger-ui-express cors body-parser
node -v
curl -fsSL https://rpm.nodesource.com/setup_18.x | bash -
yum install -y nodejs
node -v
npm -v
npm install express swagger-jsdoc swagger-ui-express cors body-parser
node server.js
apt update && apt upgrade -y
apt install -y curl git unzip
yum update -y
mkdir -p /root/swagger-api && cd /root/swagger-api
cd
npm install express swagger-jsdoc swagger-ui-express cors body-parser
firewall-cmd --zone=public --permanent --add-port=3000/tcp
firewall-cmd --reload
yum install -y firewalld
systemctl enable firewalld
systemctl start firewalld
systemctl status firewalld
firewall-cmd --zone=public --permanent --add-port=3000/tcp
firewall-cmd --reload
firewall-cmd --list-ports
vi server.js
npm install -g pm2
pm2 start server.js
pm2 save
pm2 list
curl http://138.197.46.234:3000/prices
curl -X GET http://157.245.221.245:3000/prices
curl -X GET http://157.245.221.245:3000/prices/food/1
ps aux | grep node
node server.js
sudo netstat -tulnp | grep :3000
sudo lsof -i :3000
sudo ss -ltnp | grep :3000
sudo kill -9 59886
node server.js
sudo ss -ltnp | grep :3000
sudo kill -9 59939
ps aux | grep node
sudo kill -9 452
sudo kill -9 59985
sudo kill -9 59997
node server.js
sudo systemctl list-units --type=service | grep node
sudo ss -ltnp | grep :3000
sudo kill -9 60012
sudo ss -ltnp | grep :3000
sudo systemctl list-units --type=service | grep node
sudo pkill -9 node
sudo ss -ltnp | grep :3000
ps aux | grep node
sudo kill -9 452 60068 60084
sudo ss -ltnp | grep :3000
jobs
kill $(jobs -p)
sudo pkill -9 node
sudo ss -ltnp | grep :3000
sudo reboot
