import * as React from "react";
import { Property } from "immuto";

export interface TextInputProps {
    property: Property<string>;
    placeholder: string;
}

export function TextInput(
    { property, placeholder }: TextInputProps
) {
    return <input
        type="text"
        value={property.state}
        placeholder={placeholder}
        onChange={e => property(e.currentTarget.value)}
        />;
}
