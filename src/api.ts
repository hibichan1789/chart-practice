//api.ts
export async function fetchData<T>(apiUrl:string):Promise<T>{
    const response = await fetch(apiUrl);
    if(!response.ok){
        throw new Error("取得に失敗しました");
    }
    const fetchedData:T = await response.json();
    return fetchedData;
}