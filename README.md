# TS - SOLID

## This is it

This is a initial server with typescript using SOLID
  - typescript
  - jest
  - babel
  - eslint

## How to start?

  i'm using yarn, but you can use npm run

  - yarn install / npm install
  - yarn build - to create on ./dist the compiled version
  - yarn prod - to execute pm2 with production 
  - yar dev - to execute as a development

## Go up with kubernets
 Install minikube 
 - kubectl apply -f sw-deployment.yaml
 - eval $(minikube docker-env)
 - docker build -t server-node .
 - kubectl apply -f sw-service.yaml
 - minikube service sw-service --url
 - kubectl apply -f envs.yaml
 - kubectl apply -f sw-deployment.yaml

