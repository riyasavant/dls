import Table from "./Table";

export default {
    title: 'Table'
};

export const BasicTable = () => {
    return (
        <div style={{width: '50%'}}>
            <Table
                headers={['Username', 'Email']}
                body={[
                    ['wizard', 'wizard@gmail.com'],
                    ['shahbaaz', 'shahabaaz@gmail.com']
                ]}
            />
        </div>
    )
}