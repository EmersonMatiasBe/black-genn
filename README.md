# Instalçao
1. Clone o repositório
```bash
  git clone 
```
2. Instale as dependências:
```bash
  npm install
```
3. Inicie o servidor
```bash
  npm run dev
```
# Alteração de Imagens

Todas as imagens utilizadas no projeto devem ser armazenadas dentro da pasta `public` para garantir a acessibilidade e o correto funcionamento no ambiente de produção.

### Regras de Utilização

1. **Caminho das Imagens**:
   - O caminho para as imagens deve ser referenciado de forma relativa à pasta `public`.
   - Exemplo de uso em um atributo `src`:
     ```html
     <img src="newImage.png" alt="Descrição da imagem" />
     ```

2. **Uso em Arquivos de Tradução**:
   - Caso as imagens sejam utilizadas dentro dos arquivos de tradução, o caminho também deve ser relativo à pasta `public`.
   - Exemplo de uso:
     ```typescript
     export default {
       home: {
         bannerImage: "newImage.png",
         description: "Texto da seção"
       }
     };
     ```

### Boas Práticas
- Sempre inclua o atributo `alt` nas imagens para melhorar a acessibilidade.
- Certifique-se de que as imagens são otimizadas para web, reduzindo o tamanho do arquivo sem perder a qualidade.
- Prefira formatos modernos como **WebP** sempre que possível.

# Alteração de Textos da Página

Todos os textos exibidos na página estão organizados nos arquivos de internacionalização dentro da pasta `i18n/`:

```bash
 i18n/
 ├── en.tsx
 ├── pt.tsx
```

Os textos são separados por seções, como:
- **home**: Contém os textos exibidos na seção inicial da página.
- **team**: Contém os textos exibidos na seção da equipe.

### Regras para Alterações
1. **Alteração de Textos Existentes**:
   - Ao modificar um texto, a alteração deve ser feita **em ambos os arquivos** (`en.tsx` e `pt.tsx`).
   - Caso o texto seja alterado em apenas um arquivo, ocorrerá um erro, pois os dois arquivos devem conter exatamente os mesmos campos e estrutura.

2. **Adição de Novos Campos**:
   - Ao adicionar um novo campo, ele **deve ser incluído nos dois arquivos** com a mesma chave.
   - Certifique-se de fornecer traduções adequadas para ambos os idiomas.

### Exemplo de Estrutura Correta
```typescript
// en.tsx
export default {
  home: {
    title: "Welcome",
    description: "This is the home page."
  },
  team: {
    title: "Our Team",
    description: "Meet our amazing team."
  }
};

// pt.tsx
export default {
  home: {
    title: "Bem-vindo",
    description: "Esta é a página inicial."
  },
  team: {
    title: "Nossa Equipe",
    description: "Conheça nossa equipe incrível."
  }
};
```


# Processo de Build

Após realizar as alterações nos textos:

1. **Subir as Alterações para o GitHub**:
   - Confirme que todas as alterações foram testadas.
   - Faça o commit e o push das mudanças para o repositório remoto.

   ```bash
   git add .
   git commit -m "Atualização de textos"
   git push origin main
   ```

2. **Rodar o Build**:
   - Execute o comando de build para gerar a versão pronta do projeto:

   ```bash
   npm run build
   ```

   - Após o comando, um diretório chamado `out` será gerado na raiz do projeto. Este diretório contém todos os arquivos necessários para o deploy.

3. **Deploy**:
   - Utilize o conteúdo do diretório `out` para realizar o deploy no servidor ou serviço desejado (e.g., Vercel, Netlify, ou servidor próprio).

