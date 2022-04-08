import Alert from './Alert';

export default {
    title: 'Alert'
};

export const Warning = () => {
    return <Alert type="warning" text="Warning Alert" isStatic={true}/>
}

export const Success = () => {
    return <Alert type="success" text="Success Alert" isStatic={true} />
}

export const Failure = () => {
    return <Alert type="failure" text="Failure Alert" isStatic={true}/>
}

export const Dismiss = () => {
    return (
        <>
            <Alert type="warning" text="This alert will get dismissed in 2 seconds" isStatic={false} dismiss={2}/>
            <Alert type="failure" text="This alert will get dismissed in 4 seconds" isStatic={false} dismiss={4}/>
            <Alert type="success" text="This alert will get dismissed in 6 seconds" isStatic={false} dismiss={6}/>
        </>
    )
}