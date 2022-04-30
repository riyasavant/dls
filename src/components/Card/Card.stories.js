import Card from "./Card";

export default {
    title: 'Card'
};

export const BasicCard = () => {
    return (
        <div style={{width: '50%', display: 'flex', flexDirection: 'row'}}>
            <Card data={
                {title: 'Netherlands', desc: 'A country in northwestern Europe, is known for a flat landscape of canals, tulip fields, windmills and cycling routes', img: 'https://www.expatica.com/app/uploads/sites/3/2014/05/permanent-residence-netherlands.jpg'}
            }/>
            <Card data={{title: 'India', desc: ' It is the seventh-largest country by area, the second-most populous country, and the most populous democracy in the world.', img: 'https://cdn.mos.cms.futurecdn.net/3FnczamRyWU6MvRMEXWaGD.jpg'}}/>
        </div>
    )
}