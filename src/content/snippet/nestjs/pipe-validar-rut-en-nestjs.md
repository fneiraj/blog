---
pubDatetime: 2024-03-16T00:00:00Z
title: Pipe para validar RUT en NestJS
slug: pipe-para-validar-rut-en-nestjs
tag: nestjs
description: Pipe para validar RUT en NestJS
---

```ts title="rut.pipe.ts"
import { BadRequestException, PipeTransform } from "@nestjs/common";

export class isRutValid implements PipeTransform {
  async transform(value: any) {
    if (!value) {
      throw new BadRequestException("RUT is required");
    }

    if (!value.match(/^[0-9]+[-]{1}[0-9kK]{1}$/)) {
      throw new BadRequestException(
        "RUT have invalid format, must be 12345678-9",
      );
    }

    return value;
  }
}
```

Modo de uso:

```ts title="test.controller.ts"
import { Controller, Get, Header, Query } from "@nestjs/common";
import { isRutValid } from "./rut.pipe";

@Controller()
export class TestController {
  @Get("test-rut")
  @Header("content-type", "application/json")
  testRut(
    @Query("rut", isRutValid)
    rut: string,
  ): any {
    return rut;
  }
}
```

resultado:

curl http://localhost:8080/test-rut?rut=invalid_rut

```json
{
  "message": "RUT have invalid format, must be 12345678-9",
  "error": "Bad Request",
  "statusCode": 400
}
```
