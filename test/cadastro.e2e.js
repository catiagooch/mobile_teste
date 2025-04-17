describe('Cadastro de Usuário - EBACSHOP', () => {
    it('Deve realizar o cadastro com sucesso', async () => {
      await driver.pause(3000)
  
      const btnCriarConta = await $('~criar-conta')
      await btnCriarConta.click()
  
      await $('~input-nome').setValue('Catia Velasco')
      await $('~input-email').setValue('catia@teste.com')
      await $('~input-senha').setValue('123456')
      await $('~input-confirmar-senha').setValue('123456')
  
      await $('~botao-cadastrar').click()
  
      const mensagemSucesso = await $('~mensagem-sucesso')
      expect(await mensagemSucesso.getText()).toContain('Cadastro realizado')
    })
  })
  