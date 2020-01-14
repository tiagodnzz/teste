import request from './request';


//so coloquei um exemplo ja pra tentar chamar la no all plants
const getPlants = () => request.get('$sun=high&water=rarely&pets=false'); 
const getPlant= (id) => request.get(`/plant?id={id}`)
export 
{
    getPlants,
    getPlant,
};