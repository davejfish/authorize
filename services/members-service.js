const SUPABASE_URL = 'https://nwxkvnsiwauieanvbiri.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNzAwMzQzNCwiZXhwIjoxOTUyNTc5NDM0fQ.8XIsU0FANdaNeQnT-DojpTL-GTlTPZ4CYZDEetpFpWc';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getUser() {
    // *** return supabase user
    return await client.auth.session() && client.auth.session().user;
    
}

export async function signUp(email, password) {
    // *** implement supabase sign up
    const response = await client.auth.signUp({ email, password });
    return response;
}

export async function signIn(email, password) {
    // *** implement supabase sign in
    const response = await client.auth.signIn({ email, password });
    return response;
}

export async function signOut() {
    // *** implement supabase sign out
    await client.auth.signOut();
}
