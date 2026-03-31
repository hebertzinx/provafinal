
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'CHAVE_SERA_CONFIGURADA_NA_VERCEL'
const supabaseKey = ''
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