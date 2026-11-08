import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://pvrapztnbmindtzvssmz.supabase.co/rest/v1/';
const SUPABASE_KEY = 'sb_publishable_WdM0d2Z1PTZ70e6apD9epQ_TBNjffEm';

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);
