//utils.ts

export function getMonthFromId(id:string){
    const result = /^btn-[a-z]{3}/.test(id);
    if(!result){
        throw new Error("idが不適切です");
    }
    return id.split("-")[1];
}