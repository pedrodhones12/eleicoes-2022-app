CREATE TABLE EstadosEleicao (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    NomeEstado VARCHAR(100),
    Eleitorado INT,
    Abstencao INT,
    PercentualAbstencao DECIMAL(5,2),

    VotosLula INT,
    PercentualLula DECIMAL(5,2),

    VotosBolsonaro INT,
    PercentualBolsonaro DECIMAL(5,2),

    VotosBrancos INT,
    PercentualBrancos DECIMAL(5,2),

    VotosNulos INT,
    PercentualNulos DECIMAL(5,2)
);