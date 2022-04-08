import Loader from "./Loader";

export default {
    title: 'Loader'
};

export const Small = () => {
    return (
        <Loader size="small" />
    )
}

export const Large = () => {
    return (
        <Loader size="large" />
    )
}