

interface testeProps {
    text: string,
    children: React.ReactNode
}
async function Teste(): Promise<any> {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon', {
            method: 'GET',
        });
        console.log(response);
    } catch (err) {
        console.log(err);
    }
}

export default Teste;
