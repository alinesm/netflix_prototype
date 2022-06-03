import {Errorstyled} from "./form-error.styled";

export default function FormError(props: any) {
    const {message, ...restProps} = props

    return (
        <Errorstyled {...restProps}>
            {message}
        </Errorstyled>
    )
}