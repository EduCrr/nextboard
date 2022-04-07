import styles from "./styles.module.scss";
import Head from "next/head";
import { FiCalendar, FiClock, FiEdit, FiPlus, FiTrash } from "react-icons/fi";
import { SupportButton } from "../../components/SupportButton";
const Board = () => {
  return (
    <>
      <Head>
        <title>Board</title>
      </Head>
      <main className={styles.container}>
        <form>
          <input placeholder="Digite tarefa" type="text" />
          <button type="submit">
            <FiPlus size={25} color="#17181f" />
          </button>
        </form>
        <h1>Voce tem 2 tarefas</h1>
        <section>
          <article className={styles.taskList}>
            <p>Aprender aasa</p>
            <div className={styles.actions}>
              <div>
                <div>
                  <FiCalendar size={20} color="#ffb800" />
                  <time>20 de abril</time>
                </div>
                <button>
                  <FiEdit size={20} color="#fff" />
                </button>
              </div>
              <button>
                <FiTrash size={20} color="#ff3636" />
                <span>Excluir</span>
              </button>
            </div>
          </article>
        </section>
      </main>
      <div className={styles.vipContainer}>
        <h3>Obrigado por apoiar esse projeto!</h3>
        <div>
          <FiClock size={28} color="white" />
          <time>Ultima doaçao há 3 dias</time>
        </div>
      </div>

      <SupportButton />
    </>
  );
};

export default Board;
