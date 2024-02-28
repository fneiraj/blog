---
title: "Como disminuir tamaño disco manualmente en proxmox"
tag: "Proxmox"
pubDatetime: 2024-02-28T00:00:00Z
description: "Como disminuir manualmente el tamaño de un disco en proxmox"
slug: "disminuir-tamaño-disco-en-proxmox"
---

```sh
lvm lvreduce -L -32g pve/vm-103-disk-0
qm rescan
```

Reemplazar '**_32g_**' por los GB a reducir, y '**_vm-103-disk-0_**' por el nombre del disco.
