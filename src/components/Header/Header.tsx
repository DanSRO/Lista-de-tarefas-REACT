import React from "react";
import styles from './style.module.scss';
import { StatsCard } from "../StatsCard/StatsCard";

export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div>
                    <h1>Lista de Tarefas</h1>
                    <span>Bem-vindo, Daniel Dantas</span>
                </div>
                <div>
                    <StatsCard title="Total de tarefas" value={5}/>
                    <StatsCard title="Tarefas pendentes" value={4}/>
                    <StatsCard title="Tarefas concluídas" value={1}/>
                </div>
            </div>
        </header>
    )    
}