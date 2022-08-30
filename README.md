# @ovdal/intercom

Custom plugin developed for integration Intercom to a capasitor app

## Install

```bash
npm install @ovdal/intercom
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`registerUserWithUserId(...)`](#registeruserwithuserid)
* [`registerUndefinedUser()`](#registerundefineduser)
* [`logout()`](#logout)
* [`updateUser(...)`](#updateuser)
* [`presentMessenger()`](#presentmessenger)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => any
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>any</code>

--------------------


### registerUserWithUserId(...)

```typescript
registerUserWithUserId(options: { userId: string; }) => any
```

| Param         | Type                             |
| ------------- | -------------------------------- |
| **`options`** | <code>{ userId: string; }</code> |

**Returns:** <code>any</code>

--------------------


### registerUndefinedUser()

```typescript
registerUndefinedUser() => any
```

**Returns:** <code>any</code>

--------------------


### logout()

```typescript
logout() => any
```

**Returns:** <code>any</code>

--------------------


### updateUser(...)

```typescript
updateUser(options: { name: string; user_id?: string; }) => any
```

| Param         | Type                                             |
| ------------- | ------------------------------------------------ |
| **`options`** | <code>{ name: string; user_id?: string; }</code> |

**Returns:** <code>any</code>

--------------------


### presentMessenger()

```typescript
presentMessenger() => any
```

**Returns:** <code>any</code>

--------------------

</docgen-api>
