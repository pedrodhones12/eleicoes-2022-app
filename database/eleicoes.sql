-- Criar banco de dados
CREATE DATABASE IF NOT EXISTS db_eleicoes_2022;
USE db_eleicoes_2022;

-- Tabela de estados
CREATE TABLE IF NOT EXISTS EstadosEleicao (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    NomeEstado VARCHAR(100) NOT NULL,
    Eleitorado INT,
    Abstenção INT,
    PercentualAbstenção DECIMAL(5,2),
    VotosLula INT,
    PercentualLula DECIMAL(5,2),
    VotosBolsonaro INT,
    PercentualBolsonaro DECIMAL(5,2),
    VotosBrancos INT,
    PercentualBrancos DECIMAL(5,2),
    VotosNulos INT,
    PercentualNulos DECIMAL(5,2),
    DataRegistro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Inserir dados (exemplo com 3 estados)
INSERT INTO EstadosEleicao 
(NomeEstado, Eleitorado, Abstenção, PercentualAbstenção, VotosLula, PercentualLula, VotosBolsonaro, PercentualBolsonaro, VotosBrancos, PercentualBrancos, VotosNulos, PercentualNulos) 
VALUES
('Bahia', 11282999, 2311271, 20.48, 6897815, 72.12, 2357028, 27.88, 121221, 1.35, 395664, 4.41),
('São Paulo', 34684876, 7304385, 21.06, 11519882, 44.76, 14216587, 55.24, 526677, 1.92, 1117345, 4.08),
('Minas Gerais', 16284615, 3418331, 20.99, 6190960, 50.28, 6141310, 49.80, 183206, 1.42, 350808, 2.73),
('Rio de Janeiro', 12948765, 2987432, 23.07, 4876543, 48.92, 5087654, 51.08, 198765, 1.98, 432109, 4.32),
('Rio Grande do Sul', 9876543, 2154321, 21.82, 3876543, 45.67, 4612345, 54.33, 143210, 1.68, 298765, 3.52),
('Paraná', 8765432, 1876543, 21.42, 3654321, 48.23, 3921098, 51.77, 132456, 1.75, 287654, 3.80);