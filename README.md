# Kube Template App

## Steps to run the application
<br />

### 1. Start minikube cluster
```
minikube start
```
### 2. Apply all kubernetes deployments
```
kubectl apply -k .\deployments\
```
### 3. Visit client service via NodePort
```
minikube service kube-app-client
```
### 4. Cleaning up
```
kubectl delete -k .\deployments\
```