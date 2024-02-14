---
title: "Crear usuario administrador en proxmox"
tag: 'Proxmox'
pubDatetime: 2024-02-03T15:22:00Z
description: "como crear un usuario admin en proxmox"
slug: "crear-usuario-admin-en-pve"
---

```sh
adduser fneiraj
pveum useradd fneiraj@pam
pveum passwd fneiraj@pam
pveum aclmod / -user fneiraj@pam -role Administrator
```
