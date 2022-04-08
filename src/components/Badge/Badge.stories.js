import Badge from "./Badge";

export default {
    title: 'Badge'
};

export const Warning = () => {
    return <Badge type="warning" text="Warning"/>
}

export const Success = () => {
    return <Badge type="success" text="Success"/>
}

export const Failure = () => {
    return <Badge type="failure" text="Failed"/>
}