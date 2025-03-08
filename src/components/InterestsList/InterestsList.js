import styles from "./InterestsList.module.css";

export default function InterestsList() {
  const interests = [
    { id: 6, name: "Skateboarding", icon: "" },
    { id: 7, name: "Yoga", icon: "" },
    { id: 8, name: "Qualidade de software", icon: "" },
    { id: 9, name: "Testes de software", icon: "" },
    { id: 10, name: "Automação de testes", icon: "" },
    { id: 11, name: "Certificações", icon: "" },
    { id: 12, name: "Desenvolvimento de software", icon: "" },
    { id: 13, name: "Desenvolvimento de jogos", icon: "" },
    { id: 14, name: "Desenvolvimento web", icon: "" },
    { id: 15, name: "Desenvolvimento de aplicativos", icon: "" },
    { id: 16, name: "Jogos retro/2D", icon: "" },
    { id: 17, name: "Pixel Art + Pixel animation", icon: "" },
    { id: 18, name: "Ilustração", icon: "" },
    { id: 19, name: "Motion Design + 2D vetorial animations", icon: "" },
    { id: 20, name: "Cybersecurity", icon: "" },
    { id: 21, name: "Network", icon: "" },
    { id: 22, name: "Ethical Hacking", icon: "" },
    { id: 23, name: "Automações", icon: "" },
    { id: 24, name: "Scripting", icon: "" },
    { id: 25, name: "Otimização de Processos", icon: "" },
    { id: 26, name: "AI", icon: "" },
    { id: 27, name: "Edição de Vídeo", icon: "" },
    { id: 28, name: "Música", icon: "" },
    { id: 29, name: "Psicologia", icon: "" },
    { id: 30, name: "Filosofia", icon: "" },
    { id: 31, name: "Permacultura", icon: "" },
    { id: 32, name: "Leitura", icon: "" },
    { id: 33, name: "Escrita", icon: "" },
    { id: 34, name: "Finanças", icon: "" },
    { id: 35, name: "Criptomoedas", icon: "" },
    { id: 36, name: "Marketing Digital", icon: "" },
    { id: 37, name: "Blockchain", icon: "" },
    { id: 38, name: "Computação Quântica", icon: "" },
    { id: 39, name: "Física Quântica", icon: "" },
    { id: 40, name: "Espiritualidade", icon: "" },
    { id: 41, name: "Astronomia", icon: "" },
    { id: 42, name: "Astrofísica", icon: "" },
    { id: 43, name: "Cosmologia", icon: "" },
    { id: 44, name: "Biologia", icon: "" },
    { id: 45, name: "Nutrição", icon: "" },
  ];

  return (
    <div className={styles.container}>
      {interests.map((interest) => (
        <div key={interest.id}>
          {/* <span className={styles.interestIcon}>{interest.icon}</span> */}
          <span className={styles.interestName}>{interest.name}</span>
        </div>
      ))}
    </div>
  );
}
