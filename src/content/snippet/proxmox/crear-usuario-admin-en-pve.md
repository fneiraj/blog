---
title: "Crear usuario administrador en proxmox"
tag: "Proxmox"
pubDatetime: 2024-02-03T15:22:00Z
description: "como crear un usuario admin en proxmox"
slug: "crear-usuario-admin-en-pve"
---

```sh
adduser newuser
pveum useradd newuser@pam
pveum passwd newuser@pam
pveum aclmod / -user newuser@pam -role Administrator
```

Reemplazar '**_newuser_**' por el nombre de usuario, esto permitira al usuario ingresar al panel de administración web de proxmox.
