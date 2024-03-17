---
pubDatetime: 2024-03-16T00:00:00Z
title: Validator para validar RUT en NestJS
slug: validator-para-validar-rut-en-nestjs
tag: nestjs
---

```ts title="rut.validator.ts"
import { BadRequestException } from "@nestjs/common";
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";

@ValidatorConstraint({ name: "IsRutValid", async: true })
export class isRutValid implements ValidatorConstraintInterface {
  async validate(value: string) {
    if (!value) {
      throw new BadRequestException("RUT is required");
    }

    if (!value.match(/^[0-9]+[-]{1}[0-9kK]{1}$/)) {
      throw new BadRequestException(
        "RUT have invalid format, must be 12345678-9",
      );
    }

    return true;
  }
}
```

Modo de uso:

```ts title="test.controller.ts"
import { isRutValid } from "./rut.validator";
import { Controller, Get, Header, Query } from "@nestjs/common";
import { Validate } from "class-validator";

export class TestRequestDto {
  @Validate(isRutValid)
  clientCode: string;
}

@Controller()
export class TestController {
  @Get("test-rut")
  @Header("content-type", "application/json")
  testRut(
    @Query()
    rut: TestRequestDto,
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
