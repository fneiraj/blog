---
title: "Comparar objetos sin toString() mediante assertEquals"
description: "Como comparar los valores de objetos mediante el API de reflexión de Java"
tag: "Java"
pubDatetime: 2024-02-03T15:22:00Z
slug: "assertequals-objectos-sin-tostring"
---

```java
private void assertFieldsWithReflection(final Object expected, final Object actual)
throws InvocationTargetException, IllegalAccessException {
  assertEquals(expected.getClass(), actual.getClass());

  final List<java.lang.reflect.Method> getterMethods = getGetterMethods(actual.getClass());
  for (final java.lang.reflect.Method getter : getterMethods) {
  if (getter.getReturnType().isAssignableFrom(List.class)) {
    assertListWithReflection(getter, expected, actual);
    return;
  }

  final Object expectedValue = getter.invoke(expected);
  final Object actualValue = getter.invoke(actual);

  if (ClassUtils.isPrimitiveOrWrapper(getter.getReturnType())
      || getter.getReturnType().isAssignableFrom(String.class)
      || getter.getReturnType().isAssignableFrom(Enum.class)) {
    assertEquals(expectedValue, actualValue);
  } else {
    if(expectedValue == null && actualValue == null){
      return;
    }

    assertFieldsWithReflection(expectedValue, actualValue);
  }
  }
}

private void assertListWithReflection(
final java.lang.reflect.Method getter, final Object expectedValue, final Object actualValue)
throws InvocationTargetException, IllegalAccessException {
  List<Object> expectedCollection = (List<Object>) getter.invoke(expectedValue);
  List<Object> actualCollection = (List<Object>) getter.invoke(actualValue);

  assertEquals(expectedCollection.size(), actualCollection.size());

  for (int i = 0; i < expectedCollection.size(); i++) {
  assertFieldsWithReflection(expectedCollection.get(i), actualCollection.get(i));
  }
}

private List<java.lang.reflect.Method> getGetterMethods(final Class<?> clazz) {
  return Arrays.stream(clazz.getMethods())
    .filter(method -> method.getName().startsWith("get"))
    .filter(method -> !method.getName().equals("getClass"))
    .filter(method -> !Modifier.isStatic(method.getModifiers()))
    .filter(method -> !method.getDeclaringClass().getPackage().getName().startsWith("java.security"))
    .collect(Collectors.toList());
}

```
