import * as React from "react";
import * as ReactDOM from "react-dom";
import { snapshot, Store } from "immuto";
import * as I from "immuto";
import { bindToStore } from "immuto-react";
import { Shop } from "./models/shop";
import { ShopEditor } from "./components/ShopEditor";
import { loadExample } from "./exampleData";

const store = Shop.reduce.store();

loadExample(snapshot(store));

const StoreShopEditor = bindToStore(store, shop => <ShopEditor shop={shop} />);

ReactDOM.render(
    <StoreShopEditor />,
    document.querySelector("#root"));

/*

How to wrap store in action logging (import {amend} from "immuto"):

const store2 = amend(store, {
    dispatch(action: Action) {
        console.log(action);
        return store.dispatch(action);
    }
});

How to log every new state of the store:

store.subscribe(() => {
    console.log(JSON.stringify(log, null, 4));
});

*/