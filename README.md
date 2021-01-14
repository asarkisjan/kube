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
### 3. Map localhost:8080 endpoint to backend service 
```
kubectl port-forward service/kube-app-server 8080:8080
```
### 4. Visit client service via NodePort
```
minikube service kube-app-client
```
### 5. Cleaning up
```
kubectl delete -k .\deployments\
```