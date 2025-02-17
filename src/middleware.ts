import { NextRequest } from "next/server";
import { getSupabaseReqResClient } from "./supabase-utils/reqResClient";


export async function middleware(request: NextRequest){
    const { response} = getSupabaseReqResClient({request});
    return response.value;
}
