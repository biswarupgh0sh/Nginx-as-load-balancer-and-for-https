# Configuring Nginx as load balancer and to use https
So there is a simple index.html file.
And i am using nodejs to serve that file in / directory.


## Usage
#### At first clone the repo

```bash
git clone https://github.com/biswarupgh0sh/Nginx-as-load-balancer-and-for-https.git
```
#### Then start nginx using, if not installed then use
```bash
sudo apt install nginx -y
```
#### check status 
```bash
sudo systemctl status nginx
```
#### if not on
```bash
sudo systemctl start nginx
``` 
#### then execute this to copy the configuration file to its location(only for ubuntu)
```bash
mv nginx.conf /etc/nginx/nginx.conf
```
#### Then come to folder where repo is cloned and run
```bash
docker compose up -d
```
Happy 2025