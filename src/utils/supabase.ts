import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL!;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function saveUserConfig(userId: string, notionDatabaseId: string, notionToken: string) {
    console.log('Attempting to save user config:', { userId, notionDatabaseId });
    
    // Get the current user to ensure we have the correct user ID
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    
    if (userError || !user) {
      console.error('Error getting user:', userError);
      throw new Error('User not authenticated');
    }

    // Use the authenticated user's ID
    const { data, error } = await supabase.from('user_configs').insert([
      {
        user_id: user.id,  // Use the authenticated user's ID
        notion_database_id: notionDatabaseId,
        notion_token: notionToken,
      }
    ]).select();
  
    if (error) {
      console.error('Error saving config:', error);
      throw error;
    }

    console.log('Successfully saved user config:', data);
    return data;
  }
  
  export async function fetchUserConfig(userId: string) {
    console.log('Fetching user config for:', userId);
    
    // Get the current user to ensure we have the correct user ID
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    
    if (userError || !user) {
      console.error('Error getting user:', userError);
      throw new Error('User not authenticated');
    }

    const { data, error } = await supabase
      .from('user_configs')
      .select('*')
      .eq('user_id', user.id)  // Use the authenticated user's ID
      .single();
  
    if (error) {
      console.error('Error fetching config:', error);
      throw error;
    }

    console.log('Successfully fetched user config:', data);
    return data;
  }
  