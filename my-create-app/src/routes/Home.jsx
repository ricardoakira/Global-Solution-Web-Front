import "../css/Home.scss"
import Cabecalho from "../components/Cabecalho";
import Rodape from "../components/Rodape";
import Hospital from "../img/hospital.png"
import Ficha from "../img/ficha.png"
import Fila from "../img/fila.png"
import Termometro from "../img/termometro.png"

export default function Home() {
    document.title = "Home";
    
    if (sessionStorage.getItem("token-usuario")){
    return (
      <>
        <div className="geral">
            <div className="header-1">
              <Cabecalho/>
            </div>

            <div className="container">
              <header>
                <img src={Hospital} alt="hospital" />
              </header>
              <nav>
                <h1>O que é a solução? </h1>
                  <p> Plataforma Integrada: A MediConnect simplifica o acesso aos cuidados de saúde por meio de uma plataforma integrada.
                    Agendamento Eficiente: Prioriza o agendamento de consultas médicas de forma simples e eficiente.
                    Fichas Médicas Pré-preenchidas: Oferece fichas médicas pré-preenchidas para otimizar o atendimento </p>
                <h1>O que ela fará?</h1>
                  <p>Simplificação do Acesso: Facilitará o acesso aos cuidados médicos, tornando-o mais intuitivo e acessível.
                    Experiência do Paciente Aprimorada: Melhorará a experiência do paciente, desde o agendamento até o atendimento.
                    Eficiência para Profissionais de Saúde: Proporcionará eficiência no gerenciamento de informações para profissionais médicos. </p>
                <h1>Como funcionará? </h1>
                  Agendamento Simplificado: Os usuários agendarão consultas de maneira fácil, eliminando burocracias.
                  <p>Fichas Médicas Pré-preenchidas: Os pacientes preencherão informações antecipadamente, agilizando o atendimento.
                    Integração com Profissionais de Saúde: Integrará-se aos sistemas de saúde existentes para facilitar a colaboração.
                    Experiência Humana: Baseada no arquétipo do "Cuidador", priorizará suporte emocional, empatia e uma abordagem centrada no paciente.
                    Inovação Contínua: Compromisso com a inovação constante para uma experiência de saúde mais humanizada e acessível. </p>
              </nav>

              <h1 className="marca"> MediConnect </h1>
              <h2>MediConnect simplifica consultas com agendamento fácil, fichas médicas rápidas e enfoque humano. Inovação constante para uma saúde acessível e centrada no paciente. </h2>
              <button>Mais informações</button>
            </div>

            <div className="vantagens">
              <h1> Vantagens </h1>
            </div>
            <div className="cards">
                    <div className="card">
                        <h2> 01 </h2>
                        <img src={Ficha} alt="ficha" />
                        <p> Armazena as fichas médicas dos pacientes. </p>
                        <button> Saiba mais </button>
                    </div>

                    <div className="card">
                        <h2> 02 </h2>
                        <img src={Fila} alt="fila" />
                        <p> Menores filas de espera como consequência do nosso projeto </p>
                        <button> Saiba mais </button>
                    </div>

                    <div className="card">
                        <h2> 03</h2>
                        <img src={Termometro} alt="termometro" />
                        <p> Também temos um dispositivo que mede instantaneamente a temperatura do paciente utilizndo um ESP32 e um sensor de temperatura. </p>
                        <button> Saiba mais </button>
                    </div>
                </div>


                <footer>
                  <Rodape/>
                </footer>
              </div>
      </>
    )}
  } 