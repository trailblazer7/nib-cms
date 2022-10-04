import { Fetcher } from "swr";

const fetcher: Fetcher<string> = (url:string) => fetch(url).then(res => res.json())

export default fetcher