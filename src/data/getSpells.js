import requester from "./requester";

const GetSpells = async () => {
    
    const spells = await requester('get', 'spells/', null, (response) => {
        return response.data;
    });

    return spells.data;
}

export default GetSpells;