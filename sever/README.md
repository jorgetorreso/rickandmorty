# solid-node-backend
Projeto muito muito simples, feito para estudo de programação com conceitos do SOLID na construção de API Rest feito com nodejs, typescript.

## Sobre SOLID
O SOLID é um conjunto de cinco princípios de design de software que foram introduzidos por Robert C. Martin e se tornaram fundamentais para o desenvolvimento de código de qualidade. Cada letra no acrônimo SOLID representa um princípio específico, e esses princípios são destinados a melhorar a legibilidade, manutenção e extensibilidade do código. 

### Princípio da Responsabilidade Única (SRP - Single Responsibility Principle):
- Este princípio afirma que uma classe deve ter uma única razão para mudar. Em outras palavras, uma classe deve ter uma responsabilidade bem definida e não deve ser sobrecarregada com múltiplas responsabilidades. Isso torna o código mais legível, facilita a manutenção e reduz o risco de efeitos colaterais.
- O SRP promove a coesão, que é a ideia de que todas as funcionalidades relacionadas devem estar contidas em uma única unidade, como uma classe.

### Princípio do Aberto/Fechado (OCP - Open/Closed Principle):
- Este princípio estabelece que as entidades de software (classes, módulos, funções, etc.) devem estar abertas para extensão, mas fechadas para modificação. Em outras palavras, você deve ser capaz de estender o comportamento de uma entidade sem precisar alterar seu código-fonte.
- Isso é alcançado por meio da herança, interfaces, ou métodos de extensão, permitindo que novos recursos sejam adicionados sem afetar o código existente.

### Princípio da Substituição de Liskov (LSP - Liskov Substitution Principle):
- O LSP define que objetos de subclasse devem poder ser usados no lugar de objetos da classe base sem afetar o comportamento esperado do programa.
- Isso garante que a herança seja usada de forma consistente e que as subclasses respeitem a interface (métodos e propriedades) definida pela classe base.

### Princípio da Segregação de Interface (ISP - Interface Segregation Principle):
- O ISP afirma que uma classe não deve ser forçada a implementar interfaces que contenham métodos que não são relevantes para ela. Em vez disso, as interfaces devem ser específicas para os contextos em que são usadas.
- Isso evita que as classes sejam sobrecarregadas com métodos desnecessários e promove a criação de interfaces mais coesas.

### Princípio da Inversão de Dependência (DIP - Dependency Inversion Principle):
- O DIP sugere que os módulos de alto nível não devem depender diretamente dos módulos de baixo nível. Ambos devem depender de abstrações. Além disso, detalhes devem depender de abstrações, e não o contrário.
- Isso promove o desacoplamento entre módulos e permite que você injete dependências, em vez de criar dependências diretamente no código. Isso facilita a substituição de implementações e testes unitários.

## Tecnologias usadas
- Javascript
- Typescript
- Node.js
- npm (gerenciador de pacotes do Node.js)
- Prisma ORM (para mapear objetos ao paradigma do banco de dados relacional)
- @prisma/client (client para executar comandos do prisma localmente no projeto via terminal)
- Postgres
- docker
- docker-compose

## Passo a passo
**Aviso:** Para poder testar a aplicação é necessário você ter conhecimento em: prisma ORM, container, docker, postgres, comandos de terminal.

### Clonando e configurando o projeto
**1º passo: clone o repositório para sua máquina com github.**
```bash
git clone https://github.com/Marlinsk/solid-node-backend.git
```

**2º passo: entre na pasta do projeto.**
```bash
cd solid-node-backend
```

**3º passo: antes de usar o docker-compose up, crie um arquivo .env fora da pasta src e insira a conexão do banco de dados.**
```bash
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA"
```
**Link da documentação de referência:** https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/connect-your-database-typescript-postgresql

**4º passo: instalar as dependências**
```bash
npm install
```

### Subindo o banco de dados Postgresql com Docker
**1º passo: rode o comando abaixo para rodar o docker-compose e subir a imagem.**
```bash
docker-compose up
```

**2º passo: execute este comando para listar os containers e ver se estão rodando e em que porta.**
```bash
docker ps
```

Após seguir estes passos o banco de dados já está criado e agora você pode rodar a aplicação utilizando o seguinte comando.
```bash
npm run start:dev
```

Agora é só testar e se divertir. 

```
solid-node-backend-main
├─ .docker
├─ .gitignore
├─ docker-compose.yml
├─ package-lock.json
├─ package.json
├─ prisma
│  ├─ migrations
│  │  ├─ 0_init
│  │  │  └─ migration.sql
│  │  └─ migration_lock.toml
│  └─ schema.prisma
├─ README.md
├─ src
│  ├─ app.ts
│  ├─ database
│  │  └─ prisma.ts
│  ├─ entities
│  │  ├─ Character.ts
│  │  └─ User.ts
│  ├─ handles
│  │  └─ errors
│  │     └─ handleError.ts
│  ├─ modules
│  │  ├─ create
│  │  │  ├─ create-post-controller.ts
│  │  │  ├─ create-post-usecase.ts
│  │  │  ├─ create-user-controller.ts
│  │  │  ├─ create-user-usecase.ts
│  │  │  ├─ ICreatePostDTO.ts
│  │  │  ├─ ICreateUserDTO.ts
│  │  │  └─ index.ts
│  │  ├─ delete
│  │  │  ├─ delete-post-controller.ts
│  │  │  ├─ delete-post-usecase.ts
│  │  │  └─ index.ts
│  │  ├─ edit
│  │  │  ├─ edit-post-controller.ts
│  │  │  ├─ edit-post-usecase.ts
│  │  │  ├─ index.ts
│  │  │  └─ IUpdatePostDTO.ts
│  │  └─ read
│  │     └─ find-all
│  │        ├─ find-all-posts-controller.ts
│  │        ├─ find-all-posts-usecase.ts
│  │        └─ index.ts
│  ├─ repositories
│  │  ├─ implementations
│  │  │  └─ PrismaRepository.ts
│  │  ├─ IPostRepository.ts
│  │  └─ IUserRepository.ts
│  ├─ routes.ts
│  └─ server.ts
└─ tsconfig.json

