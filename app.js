
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'lhihjyjyuphtfbsluqdr'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxoaWhqeWp5dXBodGZic2x1cWRyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDk3NTEzNCwiZXhwIjoyMDkwNTUxMTM0fQ.VcQOOSf5tb-hl6VomJWdHKfEHk5uezK9fypfzyF2iME'
const supabase = createClient(supabaseUrl, supabaseKey)

async function salvarPaciente(event) {
    event.preventDefault();
    const { data, error } = await supabase
        .from('pacientes')
        .insert([
            { 
              nome: document.getElementById('nome').value, 
              celular: document.getElementById('celular').value, 
              email: document.getElementById('email').value 
            }
        ])
    if (error) alert("Erro ao cadastrar!");
    else alert("Paciente cadastrado com sucesso!");
}