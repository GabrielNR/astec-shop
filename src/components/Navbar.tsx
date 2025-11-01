import Link from "next/link";
import Image from "next/image"; 

export function Navbar() {
  return (
    // Removi 'bg-white' para que a Navbar use o background do body.
    // Adicionei um padding vertical maior e borda inferior para separação.
    <nav className="shadow-md py-4 px-6 flex justify-between items-center bg-white border-b border-gray-100"> 
      <Link href="/" className="flex items-center space-x-2">
        {/* Usando a imagem completa do seu logo, que tem o texto e o carrinho */}
        <Image 
          src="/logo.png" // **CONFIRA SE ESTE CAMINHO ESTÁ CORRETO NO SEU PROJETO!**
          alt="Meu Blog - astec shop store"
          width={70} // Ajuste a largura conforme necessário
          height={40} // Ajuste a altura conforme necessário
          // priority // Adicione se o logo for um elemento crítico na tela
        />
        {/* Removi o <h1> e <span> separados pois o logo já contém o texto "astec shop store" */}
        {/* Se você quiser apenas um ícone e o texto separado, nos avise. */}
      </Link>
      
      <div className="space-x-6 font-semibold text-lg">
        {/* Aplicando as classes de cor do Tailwind */}
        <Link href="/" className="text-gray-700 hover:text-primary transition duration-150">Home</Link>
        <Link href="/about" className="text-gray-700 hover:text-primary transition duration-150">Sobre</Link>
      </div>
    </nav>
  );
}