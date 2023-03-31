const SERVICE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im11Z3ByYWR0a29ibWxob21zd3JwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3OTk1ODA3NSwiZXhwIjoxOTk1NTM0MDc1fQ.4Op4E75jFvprxBO2MQrWbR4cMtOcG_BiEp503dolDj0';
import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
const supabaseClient = createClient(
  'https://mugpradtkobmlhomswrp.supabase.co',
  SERVICE_KEY
);

@Injectable({
  providedIn: 'root',
})
export class SupabaseClientService {
  supabase = supabaseClient;
  constructor() {}
}
