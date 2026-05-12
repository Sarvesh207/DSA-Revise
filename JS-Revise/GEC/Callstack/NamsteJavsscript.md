# Execution Context / Callstack

## What is Execution Context ?

Execution context is environment where js code is get executed and its keeps track of variable , function , Scope, this.

## What are the two Phases of execution context?

Execution context has two phases: Memory Creation Phase where variables are initialized and functions are stored, and Execution Phase where code runs line by line.”

## What happens in memory creation phase ?

In memory creation phase Javascript allocate memory for variables as undefiend and for functions its store whole body.

## What is Call Stack?

Call Stack is a LIFO data structure that manages execution contexts in JavaScript.
Call Stack is a data structure (stack) used by JavaScript to manage execution contexts.

How it works:
When program starts → Global Execution Context pushed
When a function is called → New Execution Context pushed
When function finishes → popped from stack

LIFO (Last In First Out)

## What happens when functions are nested?

When functions are nested, each function call creates a new execution context which is pushed onto the call stack. They execute in LIFO order.

```
function a() {
    console.log("A");
    b();
    console.log("A end");
}

function b() {
    console.log("B");
}
a();
```

1. Global Execution Created and Pushed to Call Stack
2. A() execute brand new execution context created and pushed to callstack
   Console "A"
3. B() Execute another execution created and pushed to call stack

callStack -> [GEC A() B()]

Console "B"

4. B executed end B context popped from call stack

5. A Execution end its also popped from call stack

6. GEC also get popped

7. Callstack is empty
