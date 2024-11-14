import { get, post } from 'aws-amplify/api';

const Service = () => {
    const testApi = async () => {
        try {
            const restOperation = get({
                apiName: 'v1',
                path: '/v1'
            });
            const response = await restOperation.response;
            return response;
        } catch (e: any) {
            console.log('GET call failed: ', JSON.parse(e.response.body));
        }
    }

    return {
        testApi
    }
}

export default Service;