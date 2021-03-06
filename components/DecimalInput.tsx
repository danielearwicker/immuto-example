import * as React from "react";
import { Property, replace } from "immuto";

export interface DecimalInputProps {
    binding: Property<number>;
    decimalPlaces: number;
    placeholder?: string;
}

export interface DecimalInputState {
    valueAsString?: string;
}

function roundDecimalPlaces(value: number, places: number) {
    const factor = Math.pow(10, places);
    return Math.round(value * factor) / factor;
}

export class DecimalInput
    extends React.Component<DecimalInputProps, DecimalInputState> {

    constructor() {
        super();
        this.state = {};
    }

    valueChanged(value: string) {
        this.setState({valueAsString: value});

        const parsed = parseFloat(value);
        if (!isNaN(parsed)) {
            this.props.binding(replace(
                roundDecimalPlaces(parsed, this.props.decimalPlaces)
            ));
        }
    }

    componentWillReceiveProps(props: DecimalInputProps) {
        if (this.state.valueAsString !== undefined) {
            const parsed = parseFloat(this.state.valueAsString);

            if (roundDecimalPlaces(parsed, props.decimalPlaces) !==
                roundDecimalPlaces(props.binding.state, props.decimalPlaces)) {

                this.setState({});
            }
        }
    }

    render() {

        const valueAsString = this.state.valueAsString !== undefined
            ? this.state.valueAsString
            : "" + this.props.binding.state;

        return (
            <input
                type="text"
                value={valueAsString}
                placeholder={this.props.placeholder}
                onChange={e => this.valueChanged(e.currentTarget.value)}
                />
        );
    }
}
