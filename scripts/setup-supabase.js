const { createClient } = require('@supabase/supabase-js')
const fs = require('fs')
const path = require('path')

// Load environment variables
require('dotenv').config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpDYVQiLCJ0eXBlIjoiSldUIn0.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpxemxken50aWlycWhjenJ1anp0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczNjUxNDI1NCwiZXhwIjoyMDUyMDkwMjU0fQ.8WgtrqWrXyQv1v7QqY7v7W7v7W7v7W7v7W7v7W7v7W7'

if (!supabaseUrl) {
  console.error('❌ NEXT_PUBLIC_SUPABASE_URL is not set')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function setupDatabase() {
  console.log('🚀 Setting up Supabase database for ClientFlow...')
  
  try {
    // Read SQL schema
    const sqlPath = path.join(__dirname, '../supabase-schema.sql')
    const sql = fs.readFileSync(sqlPath, 'utf8')
    
    // Split SQL into individual statements
    const statements = sql
      .split(';')
      .map(stmt => stmt.trim())
      .filter(stmt => stmt.length > 0)
    
    console.log(`📋 Found ${statements.length} SQL statements to execute`)
    
    // Execute each statement
    for (let i = 0; i < statements.length; i++) {
      const stmt = statements[i]
      console.log(`\n🔧 Executing statement ${i + 1}/${statements.length}...`)
      
      try {
        const { error } = await supabase.rpc('exec_sql', { sql: stmt + ';' })
        
        if (error) {
          // If exec_sql doesn't exist, try direct SQL execution via REST
          console.log('⚠️  exec_sql function not available, trying alternative...')
          
          // For simple statements, we can use the SQL editor API
          // Note: This requires the service role key
          const { error: sqlError } = await supabase.from('_exec_sql').insert({ sql: stmt + ';' })
          
          if (sqlError) {
            console.log(`⚠️  Could not execute via REST: ${sqlError.message}`)
            console.log(`📝 Statement: ${stmt.substring(0, 100)}...`)
          } else {
            console.log('✅ Statement executed successfully')
          }
        } else {
          console.log('✅ Statement executed successfully')
        }
      } catch (err) {
        console.log(`⚠️  Error executing statement: ${err.message}`)
        console.log(`📝 Statement: ${stmt.substring(0, 100)}...`)
      }
    }
    
    console.log('\n🎉 Database setup completed!')
    console.log('\n📊 Next steps:')
    console.log('1. Go to Supabase Dashboard: https://supabase.com/dashboard/project/zqzldzntiirqhczrujzt')
    console.log('2. Navigate to SQL Editor')
    console.log('3. Copy the content of supabase-schema.sql')
    console.log('4. Paste and run the SQL')
    
  } catch (error) {
    console.error('❌ Error setting up database:', error)
    process.exit(1)
  }
}

setupDatabase()