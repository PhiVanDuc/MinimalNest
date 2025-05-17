import ErrorClient from "./error-client";

export default function Error({ message }) {
    return (
        <ErrorClient message={message} />
    )
}
