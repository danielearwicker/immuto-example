import * as React from "react";
import * as ReactDOM from "react-dom";
import { snapshot, Store } from "immuto";
import * as I from "immuto";
import { bindToStore } from "immuto-react";
import { Shop } from "./models/shop";
import { ShopEditor } from "./components/ShopEditor";
import { actions } from "./exampleData";



import { Reducer, Cursor, amend } from "immuto";



const store = Shop.reduce.store();

for (const action of actions) {
    store.dispatch(action);
}

const StoreShopEditor = bindToStore(store, shop => <ShopEditor shop={shop} />);

ReactDOM.render(
    <StoreShopEditor />,
    document.querySelector("#root"));


/*

type Action = typeof Shop.reduce.actionType;

const log: Action[] = [];

const store: Store<Shop, Action> = {
    dispatch(action: Action) {
        log.push(action);
        return realStore.dispatch(action);
    },
    getState() {
        return realStore.getState();
    },
    subscribe(func) {
        return realStore.subscribe(func);
    }
}

store.subscribe(() => {
    console.log(JSON.stringify(log, null, 4));
});

*/

function makeCursor<T, S, A>(typeDef: T, reducer: Reducer<S, A>): Cursor<S, A> & T {
    function dispatch(action: A): Cursor<S, A> {
        return undefined! as Cursor<S, A>;
    }

    const cursor = amend(typeDef, dispatch);

    return amend(cursor, {
        state: undefined! as S,
        exists: true
    });
}


class C {
    i = 5;
    static s = "hi";
}

interface ClassC {

    new (): {
        i: number;
    }

    s: string;
}

type FClass = new () => string;

console.log(C.s);
console.log(new C().i);

const c2: ClassC = C;

console.log(c2.s);
console.log(new c2().i);


type F = new (num: number, str: string) => { num: number, str: string };

interface Person {
    readonly firstName: string;
    readonly lastName: string;
}

function Person(firstName: string, lastName: string): Person {
    return Object.freeze({ firstName, lastName });
}

