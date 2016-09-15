import * as React from "react";
import * as ReactDOM from "react-dom";
import { snapshot, Store } from "immuto";
import * as I from "immuto";
import { bindToStore } from "immuto-react";
import { Shop } from "./models/shop";
import { ShopEditor } from "./components/ShopEditor";
import { actions } from "./exampleData";

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
