---
title: "Como extender el objeto Request de Express"
tag: "TypeScript"
pubDatetime: 2024-03-10T00:00:00Z
description: "Como extender el objeto Request de Express para añadir propiedades extras"
slug: "como-extender-request-express"
---

```ts title="src/@types/express/index.d.ts"
import { Request } from "express";

declare global {
  namespace Express {
    export interface Request {
      user: {
        id: string;
        email: string;
      };
    }
  }
}
```
