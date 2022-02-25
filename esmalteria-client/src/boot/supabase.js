/* eslint-disable */
import { createClient } from '@supabase/supabase-js'
import useAuthUser from 'src/composables/UseAuthUser'

const supabaseUrl = 'https://ykrpifinwniilqgoylnq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlrcnBpZmlud25paWxxZ295bG5xIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDU3OTA5MjYsImV4cCI6MTk2MTM2NjkyNn0.yuSM7cv3XbiA_q5chc6SccM0Gjd8uinXBuB4ZRElt6k'
const supabase = createClient(supabaseUrl, supabaseKey)

supabase.auth.onAuthStateChange((event, session) => {
    const { user } = useAuthUser()

    use.value = session?.user || null
})

export default function useSupabase () {
    return { supabase }
}

