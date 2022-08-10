##To set up Project##

```
yarn init -y
yarn add express nexus apollo-server-express graphql
yarn add -D typescript @types/node ts-node nodemon

```

##Postgres##


```
sudo apt update
sudo apt install postgresql postgresql-contrib
psql --version
```

`sudo service postgresql start`

`yarn add prisma --dev`

```
yarn prisma init prisma 


[Postgress Reference](https://harshityadav95.medium.com/postgresql-in-windows-subsystem-for-linux-wsl-6dc751ac1ff3)