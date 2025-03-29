import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabase';

export function useAuth() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  const signInWithEmail = async (email: string) => {
    await supabase.auth.signInWithOtp({ email });
  };

  const logout = async () => {
    await supabase.auth.signOut();
  };

  return { user, signInWithEmail, logout };
}
