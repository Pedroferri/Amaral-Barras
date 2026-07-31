import Header from "./components/Header";
import Hero from "./components/Hero";
import Diferenciais from "./components/Diferenciais";
import Catalogo from "./components/Catalogo";
import ComoFunciona from "./components/ComoFunciona";
import Depoimentos from "./components/Depoimentos";
import Sobre from "./components/Sobre";
import Pedido from "./components/Pedido";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Diferenciais />
        <Catalogo />
        <ComoFunciona />
        <Depoimentos />
        <Sobre />
        <Pedido />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
