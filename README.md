# Kube Template App

## Steps to run the application
<br />

### 1. Start minikube cluster
```
minikube start --vm=true
```
### 2. Enable ingress
```
minikube addons enable ingress
```
### 3. Apply all kubernetes deployments
```
kubectl apply -k .\deployments\
```
### 4. Cleaning up
```
kubectl delete -k .\deployments\
minikube stop
mniikube delete
```