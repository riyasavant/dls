import Spinner from "./Spinner";

export default {
    title: 'Spinner'
};

export const Slow = () => {
    return (
        <Spinner speed={'slow'} />
    )
}

export const Fast = () => {
    return (
        <Spinner speed={'fast'} />
    )
}