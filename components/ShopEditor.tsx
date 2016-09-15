import * as React from "react";
import { bindToCursor } from "immuto-react";
import { Shop } from "../models/shop";
import { ShelfEditor } from "./ShelfEditor";
import { getIds, getNextId } from "../util";

export interface ShopEditorProps { }

const ShopShelfEditor = bindToCursor(ShelfEditor, Shop.shelves);

export function ShopEditor(
    props: ShopEditorProps,
    shop: Shop.Cursor
) {
    const {name, shelves, selectedShelf} = shop.state;

    const addShelf = () => shop(Shop.shelves.add(getNextId(shelves)));
    const removeShelf = (id: number) => shop(Shop.shelves.remove(id));

    return (
        <div className="shop">
            <div className="shop-header">
                <input type="text"
                    value={name}
                    placeholder="Shop name"
                    onChange={e => shop(Shop.setName(e.currentTarget.value))} />
                <button onClick={addShelf}>Add a shelf</button>
            </div>
            <div className="shop-shelves>">
                {
                    getIds(shelves).map(shelf =>
                        <div className="shop-shelf>"
                            key={shelf}
                            onClick={ () => shop(Shop.selectShelf(shelf)) }>
                            <ShopShelfEditor
                                cursor={shop}
                                path={shelf}
                                enableEditing={shelf === selectedShelf}
                                remove={() => removeShelf(shelf)}/>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

