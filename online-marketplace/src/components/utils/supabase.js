
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vbnhhatbukxquekoxdpa.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZibmhoYXRidWt4cXVla294ZHBhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMxMjc2MTksImV4cCI6MTk5ODcwMzYxOX0.eeCWyECMs0gCWeN6H0F6Lr1tGdg0BvjWY4VsGItrrWc'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;