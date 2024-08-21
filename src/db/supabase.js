// import {createClient} from "@supabase/supabase-js";

// export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey);

// export default supabase;

// src/db/supabase.js
const { createClient } = require('@supabase/supabase-js');
const supabaseUrl = process.env.VITE_SUPABASE_URL; // Update according to your environment
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY; // Update according to your environment
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = { supabase };

