---
pubDatetime: 2024-03-16T00:00:00Z
title: Validator para validar RUT en NestJS
slug: validator-para-validar-rut-en-nestjs
tag: nestjs
---

```ts title="rut.validator.ts"
import {
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from "class-validator";

@ValidatorConstraint({ name: "RutValidator", async: false })
class RutValidator implements ValidatorConstraintInterface {
  validate(value: string): boolean {
    if (!value || !value.match(/^[0-9]+[-]{1}[0-9kK]{1}$/)) {
      return false;
    }

    return true;
  }
  defaultMessage(): string {
    return `$property must be a valid RUT (e.g. 12345678-9)`;
  }
}
export function IsRut(validationOptions?: ValidationOptions) {
  return (object: unknown, propertyName: string) => {
    registerDecorator({
      name: "isRut",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: RutValidator,
    });
  };
}
```

Modo de uso:

```ts title="test.controller.ts"
import { IsRut } from "./rut.validator";
import { Controller, Get, Header, Query } from "@nestjs/common";
import { Validate } from "class-validator";

export class TestRequestDto {
  @IsRut()
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

`curl http://localhost:8080/test-rut?rut=invalid_rut`

```json
{
  "message": "rut must be a valid RUT (e.g. 12345678-9)",
  "error": "Bad Request",
  "statusCode": 400
}
```
