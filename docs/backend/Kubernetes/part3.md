---
title: Kubernetes-03-组件
categories:
- backend
tags:
- k8s
author: causes
---

## Pod 控制器

k8s 一般通过 pod 控制器来管理 pod。通过 pod 控制器创建出的 pod 删除后会重新创建，只有删除 pod 控制器才可以删除 pod。

pod 控制器有多种：

- ReplicaSet：控制副本数量，支持扩容缩容、版本升级。
- Deployment：控制 ReplicaSet 来控制 Pod，支持滚动升级、版本回退。
- Horizontal Pod Autoscaler：根据集群负载自动调整 pod 数量，实现削峰填谷。
- DaemonSet：在集群中的指定 Node 上运行且仅运行一个副本，一般用于守护进程。
- Job：完成任务就退出。
- Cronjob：周期性运行，不需要持续运行。
- StatefulSet：管理有状态应用。

### ReplicaSet

简称 RS，保证指定数量的 pod 运行，会持续监听 pod 的运行状态，一旦发生故障就会重启或者重建。支持扩缩容和镜像版本的升降级。

```yaml
# 版本号
apiVersion: apps/v1
# 类型
kind: ReplicaSet
# 元数据
metadata:
  # 名称
  name: rs
  # 所属的命名空间
  namespace: default
  # 指定标签
  labels:
    controller: rs
# 详情描述
spec:
  # 指定副本数量
  replicas: 3
  # 选择器，通过选择器指定该控制器应该管理哪些 pod
  selector:
    # 匹配标签
    matchLabels:
      app: nginx-pod
    # 可以指定匹配规则，例如 app in [nginx-pod]
    matchExpressions:
      - key: app
        operator: In
        values:
          - nginx-pod
  # 当副本数量不足时，按照一下模板创建 pod 副本
  template:
    metadata:
      labels:
        app: nginx-pod
    spec:
      containers:
        - name: nginx
          image: nginx:1.17.1
          ports:
            - containerPort: 80
```

无论是更改升级镜像、扩缩容、更改标签等等操作，都可以更改 yml。

### Deployment

Deployment 会管理 ReplicaSet，进而管理 Pod。它比 ReplicaSet 更强大，支持发布的停止、继续，支持滚动升级和滚动回退版本。

```yml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: deploy
  namespace: default
  labels:
    controller: rs
spec:
  replicas: 3
  # 保留历史版本的数量
  revisionHistoryLimit: 3
  # 暂停部署，默认为 false
  paused: false
  # 部署的超时时间，默认是 600（s）
  progressDeadlineSeconds: 600
  # 策略
  strategy:
    # RollingUpdate：滚动更新（杀死一部分 pod，然后启动一部分，直到更新完成，更新过程中存在两个版本的 pod）、Recreate：重建更新（全部杀死所有的 pod 然后重建）
    type: RollingUpdate
    rollingUpdate:
      # 最大可以额外存在的副本数，可以为百分比、整数
      maxSurge: 30%
      # 最大不可用状态的 pod 最大值，可以为百分比、整数
      maxUnavailable: 30%
  selector:
    matchLabels:
      app: nginx-pod
    matchExpressions:
      - key: app
        operator: In
        values:
          - nginx-pod
  template:
    metadata:
      labels:
        app: nginx-pod
    spec:
      containers:
        - name: nginx
          image: nginx:1.17.1
          ports:
            - containerPort: 80
```

版本升级相关功能 `kubectl rollout [选项] deploy [deploy]`，支持选项：

- `status`: 显示当前升级状态。
- `history`: 查看升级历史记录。
- `pause`: 暂停版本升级。
- `resume`: 继续暂停的版本升级。
- `restart`: 重启版本升级。
- `undo`: 回退到上一版本。
- `--to-revision`: 回退到指定版本。

通过停止、继续这种更新操作可以实现金丝雀发布。金丝雀发布，也就是上一部分新版本，观察这新版本是否按照预计的方式运行，没问题则继续新版本发布，否则立刻回滚。

