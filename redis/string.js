const client =require('./client.js')

async function init() {
        const get_res=await client.get('Drashy');
        console.log(get_res)
}
init();