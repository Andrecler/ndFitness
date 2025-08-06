
    function validarCPF(cpf) {
        
        // 1. Remove caracteres não numéricos (pontos, traços, etc.)
        const cpfLimpo = String(cpf).replace(/[^\d]/g, '');
        var valido = true;

        // 2. Verifica se o CPF tem 11 dígitos
        if (cpfLimpo.length !== 11) {
            valido = false;
        }

        // 3. Verifica se todos os dígitos são iguais (ex: 111.111.111-11), o que é inválido
        if (/^(\d)\1{10}$/.test(cpfLimpo)) {
            console.log(cpfLimpo);
            valido = false;
        }

        // --- Cálculo do 1º Dígito Verificador ---
        let soma = 0;
        for (let i = 0; i < 9; i++) {
            soma += parseInt(cpfLimpo.charAt(i)) * (10 - i);
        }
        
        let resto = 11 - (soma % 11);
        let primeiroDigitoVerificador = (resto === 10 || resto === 11) ? 0 : resto;

        // 4. Verifica se o 1º dígito verificador está correto
        if (primeiroDigitoVerificador !== parseInt(cpfLimpo.charAt(9))) {
        valido = false;
        }

        // --- Cálculo do 2º Dígito Verificador ---
        soma = 0; // Zera a soma para o próximo cálculo
        for (let i = 0; i < 10; i++) {
            soma += parseInt(cpfLimpo.charAt(i)) * (11 - i);
        }

        resto = 11 - (soma % 11);
        let segundoDigitoVerificador = (resto === 10 || resto === 11) ? 0 : resto;
        
        // 5. Verifica se o 2º dígito verificador está correto
        if (segundoDigitoVerificador !== parseInt(cpfLimpo.charAt(10))) {
        valido = false;
        }

        if(!valido && cpfLimpo.length > 1){
            Swal.fire({ icon: 'error', title: 'Erro de Validação', text: 'CPF inválido!', confirmButtonColor: '#8B5CF6' });
            return; 
        }
    }
